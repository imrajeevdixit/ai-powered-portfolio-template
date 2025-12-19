/**
 * Layout Template
 * 
 * Copy this file to: src/app/layout.tsx
 * Replace placeholder values with your information.
 */

import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

// =============================================================================
// UPDATE THESE VALUES WITH YOUR INFORMATION
// =============================================================================
export const metadata = {
  title: '[Your Name] - [Your Title]',
  description: 'Portfolio of [Your Name], [brief description of expertise].',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
