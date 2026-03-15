"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "./social-links"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo-pisga.png"
            alt="פסגה לוגו"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            מה אנחנו עושים
          </a>
          <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            למה לעבוד איתנו
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            מי אנחנו
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            יצירת קשר
          </a>
        </nav>

        {/* Social Icons (right side in RTL = Instagram, Facebook, LinkedIn) */}
        <div className="hidden md:flex items-center gap-4">
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
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-6">
            <a href="#services" className="py-3 text-base font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              מה אנחנו עושים
            </a>
            <a href="#why-us" className="py-3 text-base font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              למה לעבוד איתנו
            </a>
            <a href="#about" className="py-3 text-base font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              מי אנחנו
            </a>
            <a href="#contact" className="py-3 text-base font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
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
