import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col">
            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
              מאגר מדריכי ומטמיעי מערכות מידע לפרויקטים ארגוניים
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed">
              פתרון ממוקד לחברות מיקור חוץ וארגונים המחפשים מדריכים ומטמיעי מערכות מידע לפרויקטים ארגוניים.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" className="rounded-full px-8 text-base font-medium h-14" asChild>
                <a href="#contact">
                  צור קשר
                  <ArrowLeft className="me-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-medium h-14 border-border" asChild>
                <a href="#services">
                  קבל מידע נוסף
                  <ChevronLeft className="me-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Logo Image */}
          <div className="relative flex items-center justify-center p-8 bg-secondary/50 rounded-2xl">
            <Image
              src="/images/logo-pisga.png"
              alt="פסגה - הדרכת מערכות מידע בארגונים"
              width={400}
              height={400}
              className="w-full max-w-sm h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
