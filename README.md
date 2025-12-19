# 🤖 AI-Powered Portfolio Template

> **A modern, AI-enhanced portfolio template built with Next.js 15** featuring an intelligent chatbot, ready-to-deploy resume, and one-click customization via AI prompts.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![AI Powered](https://img.shields.io/badge/AI-Gemini-orange)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## ✨ Key Features

### 🤖 **AI-Powered Chatbot**
- **Intelligent Assistant** - Gemini-powered chatbot that answers questions about your experience, skills, and achievements
- **Smart Rate Limiting** - Built-in protection against API abuse (10 requests/minute)
- **Cost-Optimized** - Uses Gemini 2.5 Flash Lite for cost efficiency
- **Knowledge Base** - Easily customizable AI knowledge base that learns about you

### 📄 **Ready-to-Deploy Resume**
- **Print-Ready** - Professional resume page optimized for PDF export
- **One-Click Download** - Browser print-to-PDF functionality
- **Responsive Design** - Looks great on all devices and when printed
- **Auto-Generated** - Resume content automatically synced from your portfolio data

### ⚡ **AI-Powered Customization**
- **One-Prompt Setup** - Use our AI prompt to customize the entire template in minutes
- **No Manual Editing** - Provide your resume/info, get fully customized code
- **Works with Any AI** - Compatible with Claude, ChatGPT, Cursor AI, and more
- **Complete Automation** - All files updated automatically with your information

### 🎨 **Modern Design**
- **Dark/Light Mode** - Seamless theme switching
- **Smooth Animations** - Beautiful transitions and hover effects
- **Fully Responsive** - Perfect on desktop, tablet, and mobile
- **SEO Optimized** - Meta tags and structured data included

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/ai-powered-portfolio-template.git
cd ai-powered-portfolio-template
npm install
```

### 2. Get Your AI API Key

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 3. Customize with AI (Recommended)

**The fastest way to customize this template is using AI!**

1. Open [scaffold/SETUP.md](scaffold/SETUP.md)
2. Copy the **AI Customization Prompt**
3. Paste it into Claude, ChatGPT, or Cursor AI
4. Provide your resume or fill in the template
5. Get fully customized code for all files
6. Copy-paste the generated code into your files

**That's it!** Your portfolio is ready in minutes, not hours.

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 5. Deploy

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) (recommended) or any Node.js hosting platform.

## 🤖 AI Customization in Detail

### How It Works

1. **Copy the Prompt** - Get the ready-to-use prompt from `scaffold/SETUP.md`
2. **Provide Your Info** - Paste your resume or fill in the template
3. **Get Customized Code** - AI generates complete, ready-to-use code
4. **Copy & Paste** - Replace template files with AI-generated code
5. **Deploy** - Your portfolio is ready!

### What Gets Customized

The AI prompt automatically updates:
- ✅ All personal information (name, email, phone, etc.)
- ✅ Social media links (LinkedIn, GitHub, Twitter, etc.)
- ✅ Work experience and descriptions
- ✅ Skills and technical expertise
- ✅ Leadership philosophy and principles
- ✅ AI chatbot knowledge base
- ✅ Resume page content
- ✅ Contact information and booking links
- ✅ SEO metadata and descriptions

**No manual find-and-replace needed!**

## 📄 Resume Feature

### Print-Ready Resume

Your portfolio includes a fully functional resume page at `/resume`:

- **Professional Layout** - Clean, ATS-friendly design
- **PDF Export** - Use browser's print function (Ctrl/Cmd + P)
- **Auto-Synced** - Content automatically pulled from portfolio data
- **Print Optimized** - Perfect formatting for PDF export
- **Dark/Light Mode** - Toggle theme before printing

### Resume Sections

- Professional Summary
- Work Experience (with company links)
- Technical Skills (organized by category)
- Key Achievements
- Contact Information

All content is automatically generated from your portfolio data - **no duplicate editing required!**

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Google Gemini 2.5 Flash Lite
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** Lucide Icons

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── ai-chat/
│   │       └── route.ts          # 🤖 AI chatbot endpoint
│   ├── resume/
│   │   └── page.tsx              # 📄 Ready-to-deploy resume
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main portfolio page
├── components/
│   ├── ai-workbench-floater.tsx  # 🤖 AI chatbot UI
│   ├── header.tsx                # Navigation
│   ├── hero.tsx                  # Hero section
│   ├── experience.tsx            # Experience timeline
│   ├── skills.tsx                # Skills grid
│   ├── leadership.tsx           # Leadership cards
│   └── contact.tsx               # Contact footer
├── data/
│   └── portfolio-data.ts         # ⭐ Your content (AI-customizable)
└── lib/
    └── knowledge-base.ts         # 🤖 AI knowledge base
```

## 🔧 Configuration

### AI Chatbot Settings

**Rate Limiting** (`src/app/api/ai-chat/route.ts`):
```typescript
const RATE_LIMIT_WINDOW = 60 * 1000  // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10   // 10 requests per minute
```

**AI Model** (cost-optimized):
```typescript
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' })
```

### Customization Options

- **Colors:** Edit `tailwind.config.ts` to change theme colors
- **Content:** All content in `src/data/portfolio-data.ts` and `src/lib/knowledge-base.ts`
- **Styling:** Modify component files in `src/components/`

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Main portfolio page with AI chatbot |
| `/resume` | Print-ready resume page |
| `/api/ai-chat` | AI chatbot API endpoint |

## 🎯 Use Cases

- **Software Engineers** - Showcase your projects and skills
- **Designers** - Display your portfolio and creative work
- **Product Managers** - Highlight your product experience
- **Data Scientists** - Showcase your ML/AI projects
- **Anyone** - Professional online presence with AI assistance

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variable: `GEMINI_API_KEY`
4. Deploy!

### Other Platforms

Works with any Node.js hosting platform:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [Google Gemini](https://ai.google.dev/)
- Icons by [Lucide](https://lucide.dev/)

---

**Made with ❤️ and 🤖 AI**

**⭐ Star this repo if you find it useful!**
