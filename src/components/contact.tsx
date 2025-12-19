"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { socialLinks } from "@/data/portfolio-data"
import { useTheme } from "next-themes"
import { Send, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function Contact() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer id="contact" className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'} border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} relative z-10 overflow-hidden`}>
      {/* Animated background elements */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 ${isDark ? 'bg-indigo-500/5' : 'bg-indigo-200/30'} rounded-full blur-[120px] animate-float`}></div>
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-purple-500/5' : 'bg-purple-200/30'} rounded-full blur-[120px] animate-float-delayed`}></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <FadeInSection>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Send className="text-indigo-500 animate-bounce-gentle" size={36} />
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'} hover:scale-105 transition-transform duration-300 cursor-default`}>
                Ready to work together?
              </h2>
              <Sparkles className="text-yellow-500 animate-spin-slow" size={32} />
            </div>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-lg hover:text-indigo-500 transition-colors duration-300`}>
              Let&apos;s connect and discuss how we can build something great together.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="flex items-center justify-center mb-12">
            <a
              href="https://topmate.io/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/50 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Let&apos;s Connect 1:1
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] animate-gradient-slow opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className={`flex justify-center gap-8 mb-12 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative group"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                aria-label={link.label}
              >
                <div className="relative">
                  <link.icon
                    size={24}
                    className={`text-indigo-500 hover:text-indigo-400 transition-all duration-300 ${
                      hoveredLink === index ? 'scale-125 -translate-y-2 rotate-12' : ''
                    }`}
                  />
                  {/* Animated glow on hover */}
                  {hoveredLink === index && (
                    <>
                      <span className="absolute inset-0 bg-indigo-500/30 rounded-full blur-xl animate-ping"></span>
                      <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-md animate-spin-slow"></span>
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className={`relative inline-block ${isDark ? 'text-slate-500' : 'text-slate-400'} text-sm`}>
            <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDark ? 'border-slate-800' : 'border-slate-200'} hover:scale-105 transition-all duration-300 cursor-default`}>
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
          </div>
        </FadeInSection>

        {/* Decorative elements */}
        <div className="absolute bottom-4 left-4 opacity-20">
          <Sparkles className="text-indigo-500 animate-float-icon" size={20} />
        </div>
        <div className="absolute top-4 right-4 opacity-20">
          <Sparkles className="text-purple-500 animate-float-icon" size={20} style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </footer>
  )
}
