import { Instagram, Facebook, Linkedin } from "lucide-react"

const SOCIAL_LINKS = [
  // RTL visual order (right -> left): Instagram, LinkedIn, Facebook
  { href: "https://www.instagram.com/pisga.training/", Icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/nadavcohen8", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/share/1ArBKgcRK9/?mibextid=wwXIfr", Icon: Facebook, label: "Facebook" },
] as const

const iconSize = 18
const iconClass = "h-[18px] w-[18px] transition-colors cursor-pointer"

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#9ca3af] hover:text-[#2b6cb0] transition-colors"
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
          className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg text-primary-foreground/80 hover:text-[#2b6cb0] transition-colors"
        >
          <Icon className={iconClass} size={iconSize} />
        </a>
      ))}
    </div>
  )
}
