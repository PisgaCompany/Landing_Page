import { SocialLinksFooter } from "./social-links"

const footerLinks = [
  { label: "מה אנחנו עושים", href: "#services" },
  { label: "למה לעבוד איתנו", href: "#why" },
  { label: "מי אנחנו", href: "#about" },
  { label: "יצירת קשר", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="flex flex-col items-center gap-8">
          <span className="text-3xl font-bold tracking-tight">פסגה</span>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-[24px]">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <SocialLinksFooter />
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} פסגה. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
