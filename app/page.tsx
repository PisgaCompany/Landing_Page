import Head from "next/head"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { WhyUs } from "@/components/landing/why-us"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll"
import { ScrollToTop } from "@/components/landing/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Head>
        <title>פסגה - פתרונות הדרכה והטמעה לארגונים מובילים</title>
        <meta name="description" content="מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים" />
        <meta property="og:title" content="פסגה - פתרונות הדרכה והטמעה לארגונים מובילים" />
        <meta property="og:description" content="מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים" />
      </Head>
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WhyUs />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  )
}
