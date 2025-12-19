# 🎯 Portfolio Setup Guide

> **⚡ Fastest Setup Method:** Use the AI prompt below to customize your entire portfolio in minutes!

Follow these steps to customize this portfolio template with your information.

## 🤖 AI-Powered Quick Setup (Recommended)

**The fastest way to customize this template is using an AI assistant.** This method will automatically generate all customized code for you - no manual editing required!

### Why Use AI Customization?

- ⚡ **Saves Hours** - Complete customization in minutes, not hours
- ✅ **Zero Errors** - AI ensures all placeholders are replaced correctly
- 🎯 **Complete** - Updates all files at once, nothing gets missed
- 📄 **Resume Ready** - Automatically generates your resume page content
- 🤖 **AI Knowledge Base** - Creates your chatbot's knowledge base automatically

### 🚀 AI Customization Prompt

**Copy this prompt and use it with Claude, ChatGPT, Cursor AI, or any AI assistant:**

> **Tip:** The more detailed information you provide, the better the results. You can paste your entire resume!

```
I have a portfolio template that needs to be customized with my information. 
Please help me replace all placeholder values across the following files:

Files to update:
1. src/data/portfolio-data.ts - Social links, experience, skills, leadership philosophy
2. src/lib/knowledge-base.ts - AI chatbot knowledge base
3. src/app/layout.tsx - Page title and description
4. src/components/header.tsx - Name (line 64), website URL (line 91), image alt text (line 96)
5. src/components/hero.tsx - Tagline (line 17), badge text (line 179), headline (line 186), description (line 200), CTA link (line 208)
6. src/components/contact.tsx - Booking link (line 46), copyright name (line 97)
7. src/app/resume/page.tsx - Name, title, contact info, summary, achievements
8. src/components/social-links-button.tsx - Social media URLs (lines 48, 54, 60)
9. src/app/api/ai-chat/route.ts - Update example responses and contact info in the prompt

Here is my information:
---
[PASTE YOUR RESUME OR PROVIDE THE FOLLOWING DETAILS]

Name: 
Title/Role: 
Email: 
Phone: 
Website URL: 
LinkedIn URL: 
GitHub URL: 
Twitter/X URL: 
Newsletter URL (if any): 
Booking/Topmate URL: 

Professional Summary (2-3 sentences):

Work Experience:
1. Company: | Role: | Period: | Description:
2. Company: | Role: | Period: | Description:
(add more as needed)

Skills by Category:
- Category 1: skill1, skill2, skill3
- Category 2: skill1, skill2, skill3
(add more categories)

Leadership Principles (3-5 principles with descriptions):
1. Title: | Description:
2. Title: | Description:

Key Achievements (4-5 bullet points):
-
-
-

Tagline for hero section:
Main headline:
Hero description paragraph:
---

Please generate the complete updated code for each file, ready to copy and paste.

**Important:** Make sure to:
1. Replace ALL placeholder values (YOUR_USERNAME, [Your Name], etc.)
2. Use consistent formatting
3. Include all contact information
4. Generate complete, working code for each file
5. Update the AI knowledge base with all provided information
6. Include resume page content (name, title, summary, achievements)
```

---

## 📄 Ready-to-Deploy Resume

This template includes a **fully functional, print-ready resume page** at `/resume`:

### Features:
- ✅ **Auto-Generated** - Resume content automatically synced from your portfolio data
- ✅ **Print-Ready** - Optimized for PDF export (use browser's print function)
- ✅ **Professional Layout** - Clean, ATS-friendly design
- ✅ **No Duplicate Editing** - Update once in `portfolio-data.ts`, resume updates automatically
- ✅ **Dark/Light Mode** - Toggle theme before printing

### How It Works:
1. Update your experience in `src/data/portfolio-data.ts`
2. Update your skills in the same file
3. Your resume page automatically displays all this information
4. Click "Download Resume" → Print to PDF → Done!

**No separate resume file needed!** Everything is synced automatically.

---

## ✅ After Using AI Prompt

Once you've received the AI-generated code:

1. [ ] Copy each file's code from the AI response
2. [ ] Replace the corresponding file in your project
3. [ ] Verify all placeholders are replaced (search for `YOUR_`, `[Your`, etc.)
4. [ ] Add your images (`src/app/icon.png` and `public/images/profile_logo.png`)
5. [ ] Test locally with `npm run dev`
6. [ ] Check AI chatbot works with your information
7. [ ] Test resume page and PDF export
8. [ ] Deploy!

---

## 📋 Manual Setup Checklist (Alternative Method)

- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Create `.env.local` with your Gemini API key
- [ ] Replace placeholder data in all files (use AI prompt above or manual steps below)
- [ ] Add your profile image
- [ ] Test locally with `npm run dev`
- [ ] Deploy to Vercel

---

## 🔧 Manual Setup Instructions

> **Note:** If you prefer manual setup or want to fine-tune specific sections, follow these steps. However, we strongly recommend using the AI prompt above for faster setup.

### 1. Environment Setup

Create `.env.local` in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 2. Update Portfolio Data

Edit `src/data/portfolio-data.ts` and replace:
- [ ] Social links (LinkedIn, GitHub, Email, etc.)
- [ ] Experience data (companies, roles, dates, descriptions)
- [ ] Skills data (organize by category)
- [ ] Leadership philosophy (your principles)

### 3. Update Knowledge Base

Edit `src/lib/knowledge-base.ts` and replace:
- [ ] Your name throughout the document
- [ ] Professional summary
- [ ] Work experience details
- [ ] Technical skills
- [ ] Contact information
- [ ] Booking/Topmate links

### 4. Update Layout Metadata

Edit `src/app/layout.tsx`:
- [ ] Update `title` with your name and title
- [ ] Update `description` with your info

### 5. Update Header Component

Edit `src/components/header.tsx`:
- [ ] Line 64: Replace `Your Name` with your actual name
- [ ] Line 91: Update profile link URL
- [ ] Line 95-96: Update image path and alt text

### 6. Update Hero Component

Edit `src/components/hero.tsx`:
- [ ] Line 17: Update typing animation text (tagline)
- [ ] Line 179: Update badge text
- [ ] Line 186: Update main headline
- [ ] Lines 200-201: Update description paragraph
- [ ] Line 208: Update CTA button link (Topmate/Calendly)

### 7. Update Contact Component

Edit `src/components/contact.tsx`:
- [ ] Line 46: Update booking link
- [ ] Line 97: Update copyright name

### 8. Update Resume Page

Edit `src/app/resume/page.tsx`:
- [ ] Line 48: Update your name
- [ ] Line 50: Update your title
- [ ] Lines 60-145: Update all contact links
- [ ] Lines 154-155: Update professional summary
- [ ] Lines 227-232: Update key achievements

### 9. Update Social Links Button

Edit `src/components/social-links-button.tsx`:
- [ ] Line 48: Update GitHub URL
- [ ] Line 54: Update LinkedIn URL
- [ ] Line 60: Update Twitter/X URL

### 10. Update AI Chat Route

Edit `src/app/api/ai-chat/route.ts`:
- [ ] Lines 157-160: Update example responses with your info
- [ ] Lines 164-167: Update contact info for detailed questions

### 11. Add Your Images

- [ ] Replace `src/app/icon.png` with your favicon/logo (PNG format)
- [ ] Add `public/images/profile_logo.png` for header profile image

### 12. Test Locally

```bash
npm run dev
```

Check:
- [ ] All pages load correctly
- [ ] Theme toggle works
- [ ] AI chatbot responds with your information
- [ ] Resume page displays correctly
- [ ] PDF export works (try printing)
- [ ] Mobile responsive

### 13. Deploy

1. Push to GitHub
2. Connect to Vercel
3. Add `GEMINI_API_KEY` environment variable
4. Deploy!

---

## 📁 Files to Modify Summary

| File | What to Change |
|------|----------------|
| `.env.local` | Gemini API key |
| `src/data/portfolio-data.ts` | All personal data |
| `src/lib/knowledge-base.ts` | AI knowledge base |
| `src/app/layout.tsx` | Page title & description |
| `src/components/header.tsx` | Name, links, profile image |
| `src/components/hero.tsx` | Headline, description, CTA |
| `src/components/contact.tsx` | Booking link, copyright |
| `src/app/resume/page.tsx` | All resume content |
| `src/components/social-links-button.tsx` | Social media URLs |
| `src/app/api/ai-chat/route.ts` | AI prompt examples |
| `src/app/icon.png` | Your favicon |
| `public/images/` | Your profile image |

---

## 🔍 Placeholder Values to Search & Replace

Use your IDE's find & replace to quickly update these:

| Placeholder | Replace With |
|-------------|--------------|
| `[Your Name]` | Your actual name |
| `Your Name` | Your actual name |
| `YOUR_USERNAME` | Your social media username |
| `your.email@example.com` | Your email address |
| `+1-234-567-8900` | Your phone number |
| `yourwebsite.com` | Your website URL |
| `topmate.io/YOUR_USERNAME` | Your booking page URL |
| `your-newsletter.beehiiv.com` | Your newsletter URL |

---

## ❓ Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all environment variables are set
3. Verify file paths are correct
4. Check that all placeholder text has been replaced
5. Make sure images exist at the specified paths

---

**Happy customizing! 🚀**
