"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SocialLinks } from "./social-links"

const navLinkClass =
  "text-[1.0625rem] font-bold text-[#1f2937] hover:text-[#2b6cb0] transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#2b6cb0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full h-[70px] bg-white shadow-sm flex items-center">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6 relative">
        {/* Spacer - keeps nav centered (right side in RTL) */}
        <div className="flex-1 hidden md:block" />
        <div className="md:hidden flex-1" />

        {/* Desktop Navigation - centered */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
          <a href="#services" className={navLinkClass}>
            מה אנחנו עושים
          </a>
          <a href="#why-us" className={navLinkClass}>
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
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-md">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-6">
            <a href="#services" className="py-3 text-[1.0625rem] font-bold text-foreground hover:text-[#2b6cb0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              מה אנחנו עושים
            </a>
            <a href="#why-us" className="py-3 text-[1.0625rem] font-bold text-foreground hover:text-[#2b6cb0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              למה לעבוד איתנו
            </a>
            <a href="#about" className="py-3 text-[1.0625rem] font-bold text-foreground hover:text-[#2b6cb0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              מי אנחנו
            </a>
            <a href="#contact" className="py-3 text-[1.0625rem] font-bold text-foreground hover:text-[#2b6cb0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              יצירת קשר
            </a>
            <div className="mt-4 pt-4 border-t border-border">
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
