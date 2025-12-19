import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { KNOWLEDGE_BASE } from '@/lib/knowledge-base'
import { logger } from '@/lib/server-logger'

// Configure runtime for Vercel
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 10 // Max 10 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Clean up expired rate limit entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, RATE_LIMIT_WINDOW)

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    // Create new rate limit window
    const resetTime = now + RATE_LIMIT_WINDOW
    rateLimitMap.set(identifier, { count: 1, resetTime })
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetTime }
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetTime: record.resetTime }
  }

  // Increment count
  record.count++
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count, resetTime: record.resetTime }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  logger.info('CORS preflight request received')
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function POST(request: NextRequest) {
  const requestId = `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  const startTime = Date.now()
  
  logger.info('AI Chat API - Request received', { requestId })
  
  // Get client identifier (IP address or fallback)
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'
  
  // Check rate limit
  const rateLimit = checkRateLimit(ip)
  
  if (!rateLimit.allowed) {
    const retryAfter = Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
    logger.warn('Rate limit exceeded', { 
      requestId, 
      ip, 
      retryAfter: `${retryAfter}s` 
    })
    
    return NextResponse.json(
      { 
        error: 'Rate limit exceeded. Please try again later.',
        retryAfter 
      },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(rateLimit.resetTime),
          'Retry-After': String(retryAfter),
        }
      }
    )
  }
  
  logger.info('Rate limit check passed', { 
    requestId, 
    ip, 
    remaining: rateLimit.remaining 
  })
  
  try {
    const { message } = await request.json()
    logger.info('User message received', { 
      requestId, 
      messagePreview: message?.substring(0, 100),
      messageLength: message?.length 
    })

    if (!message) {
      logger.warn('Validation failed: Empty message', { requestId })
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.GEMINI_API_KEY) {
      logger.error('Configuration error: GEMINI_API_KEY not found', { requestId })
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    logger.info('API key validated', { requestId })
    logger.info('Initializing Gemini model: gemini-2.5-flash-lite', { requestId })

    // Get the generative model (using Gemini 2.5 Flash Lite - cheapest model)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' })

    // Create the prompt with context
    const prompt = `You are an AI assistant that helps people learn about the portfolio owner's professional experience, skills, and achievements.

Use the following information to answer questions:

${KNOWLEDGE_BASE}

User Question: ${message}

IMPORTANT - Response Style Guide:
- Keep answers SHORT and CONCISE (3-5 sentences max for simple questions)
- Be CONVERSATIONAL and FRIENDLY - write like you're chatting with a friend
- Use SIMPLE, SHORT words - avoid flowery language
- NO excessive enthusiasm ("It's clear...", "really impressive!", "extensive experience!")
- Use simple formatting: lists for multiple items, plain text otherwise
- Avoid markdown bold (**) unless absolutely necessary for emphasis
- Just state facts directly without over-explaining
- If listing skills/companies, use simple bullet points with minimal description
- Don't repeat the question in your answer
- Skip filler phrases like "Here's a breakdown" or "In essence"

Examples of good style:
- "They worked at Company A, Company B, and Company C."
- "They have experience with RAG pipelines, agentic workflows, and LangGraph."
- "Their focus is on responsible AI, data governance, and building resilient systems."

IMPORTANT - For Detailed Questions:
- When users ask for specific details, in-depth discussions, or want to explore topics deeply, ALWAYS suggest:
  1. Booking a 1:1 call: "Book a call at https://topmate.io/YOUR_USERNAME"
  2. Email contact: "Email at your.email@example.com"
- Be helpful by giving a brief answer first, then suggesting the call/email for details
- Example: "They have experience with RAG pipelines. For a detailed discussion on implementation, I'd suggest booking a call at topmate.io/YOUR_USERNAME"

If the question is not related to the portfolio owner's profile, politely redirect back to their professional experience.

Response:`

    logger.info('Sending prompt to Gemini', { 
      requestId, 
      promptLength: prompt.length 
    })
    
    // Generate response
    const geminiStartTime = Date.now()
    const result = await model.generateContent(prompt)
    const geminiDuration = Date.now() - geminiStartTime
    
    const response = result.response
    const text = response.text()
    
    logger.info('Gemini response received', { 
      requestId, 
      geminiDuration: `${geminiDuration}ms`,
      responseLength: text.length,
      responsePreview: text.substring(0, 150)
    })

    const totalDuration = Date.now() - startTime
    logger.info('Request completed successfully', { 
      requestId, 
      totalDuration: `${totalDuration}ms`,
      geminiDuration: `${geminiDuration}ms`
    })

    return NextResponse.json(
      { response: text },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'X-Request-Id': requestId,
          'X-Response-Time': `${totalDuration}ms`,
          'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-RateLimit-Reset': String(rateLimit.resetTime),
        },
      }
    )

  } catch (error) {
    const totalDuration = Date.now() - startTime
    logger.error('Error in AI chat', {
      requestId,
      totalDuration: `${totalDuration}ms`,
      errorName: error instanceof Error ? error.name : 'Unknown',
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        requestId, // Include request ID for debugging
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'X-Request-Id': requestId,
        },
      }
    )
  }
}
