"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SocialLinks } from "./social-links"

const navLinkClass =
  "text-[1.0625rem] font-bold text-[#1f2937] hover:text-[#2b6cb0] transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#2b6cb0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm flex flex-col">
      {/* Top bar: fixed height so mobile menu can stack below */}
      <div className="h-[70px] flex-shrink-0 flex items-center">
        <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6 w-full">
          {/* Spacer - keeps nav centered (right side in RTL) */}
          <div className="flex-1 hidden md:block" />
          <div className="md:hidden flex-1" />

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
            <a href="#services" className={navLinkClass}>
              מה אנחנו עושים
            </a>
            <a href="#why" className={navLinkClass}>
              למה לעבוד איתנו
            </a>
            <a href="#about" className={navLinkClass}>
              מי אנחנו
            </a>
            <a href="#contact" className={navLinkClass}>
              יצירת קשר
            </a>
          </nav>

          {/* Social Icons - left side of header in RTL */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-start">
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -m-1 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - stacks below top bar so all items are visible */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-md animate-in slide-in-from-top-2 duration-200">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            <a href="#services" className="min-h-[48px] flex items-center py-3 text-[1.0625rem] font-semibold text-foreground hover:text-[#2b6cb0] transition-colors -mx-4 px-4 rounded-lg active:bg-muted/50" onClick={() => setMobileMenuOpen(false)}>
              מה אנחנו עושים
            </a>
            <a href="#why" className="min-h-[48px] flex items-center py-3 text-[1.0625rem] font-semibold text-foreground hover:text-[#2b6cb0] transition-colors -mx-4 px-4 rounded-lg active:bg-muted/50" onClick={() => setMobileMenuOpen(false)}>
              למה לעבוד איתנו
            </a>
            <a href="#about" className="min-h-[48px] flex items-center py-3 text-[1.0625rem] font-semibold text-foreground hover:text-[#2b6cb0] transition-colors -mx-4 px-4 rounded-lg active:bg-muted/50" onClick={() => setMobileMenuOpen(false)}>
              מי אנחנו
            </a>
            <a href="#contact" className="min-h-[48px] flex items-center py-3 text-[1.0625rem] font-semibold text-foreground hover:text-[#2b6cb0] transition-colors -mx-4 px-4 rounded-lg active:bg-muted/50" onClick={() => setMobileMenuOpen(false)}>
              יצירת קשר
            </a>
            <div className="mt-2 pt-4 border-t border-border">
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
