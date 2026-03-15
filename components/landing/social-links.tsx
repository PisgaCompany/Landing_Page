import { Instagram, Facebook, Linkedin } from "lucide-react"

const SOCIAL_LINKS = [
  // RTL visual order (right -> left): Instagram, LinkedIn, Facebook
  { href: "https://www.instagram.com/pisga.training/", Icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/nadavcohen8", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/share/1ArBKgcRK9/?mibextid=wwXIfr", Icon: Facebook, label: "Facebook" },
] as const

const iconSize = 22
const iconClass = "h-[22px] w-[22px] transition-colors hover:opacity-80 cursor-pointer"

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon className={iconClass} size={iconSize} />
        </a>
      ))}
    </div>
  )
}

export function SocialLinksFooter({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <Icon className={iconClass} size={iconSize} />
        </a>
      ))}
    </div>
  )
}
