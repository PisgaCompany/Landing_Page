import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9fbfd] pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col text-center lg:text-start">
            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl md:text-6xl text-balance leading-[1.1]">
              פתרונות הדרכה והטמעה לארגונים מובילים
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed">
              מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים
            </p>
            <div className="flex justify-center lg:justify-start mt-10">
              <Button size="lg" className="rounded-full px-8 text-base font-medium h-14 bg-[#2b6cb0] hover:bg-[#2563eb]" asChild>
                <a href="#contact">
                  צרו קשר למציאת מדריכים מתאימים
                  <ArrowLeft className="me-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Logo Image */}
          <div className="relative flex items-center justify-center p-8 bg-white rounded-2xl border border-border shadow-sm">
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
