import { Linkedin } from "lucide-react"

const footerLinks = [
  { label: "מה אנחנו עושים", href: "#services" },
  { label: "למה לעבוד איתנו", href: "#why-us" },
  { label: "מי אנחנו", href: "#about" },
  { label: "יצירת קשר", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo and Description */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">פסגה</span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-8 leading-relaxed">
              מאגר מדריכי ומטמיעי מערכות מידע לפרויקטים ארגוניים. פתרון ממוקד לחברות מיקור חוץ וארגונים.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} פסגה. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
