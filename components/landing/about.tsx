import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-[#eef5fb] text-foreground py-28 md:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Team Photos */}
          <div className="relative order-2 lg:order-1">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/60">
                <Image
                  src="/images/nadav.png"
                  alt="נדב - שותף בצוות פסגה"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 240px, 50vw"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/60">
                <Image
                  src="/images/michel.png"
                  alt="מיכאל - שותף בצוות פסגה"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 240px, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-[3rem] leading-tight text-foreground">
              מי אנחנו
            </h2>
            <p className="text-foreground/90 text-lg leading-relaxed">
              הצוות המייסד צבר ניסיון בפרויקטי הטמעה ארגוניים רחבי היקף, הכוללים ניהול פרויקטי הדרכה והטמעה, ליווי עליות לאוויר של מערכות חדשות, הדרכת משתמשי קצה והטמעה של מערכות מידע בסביבה ארגונית בפריסה ארצית.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              פסגה הוקמה מתוך ניסיון זה, במטרה לרכז ולהכשיר מאגר של מדריכים ומטמיעי מערכות מידע, המתאימים להשתלבות בתפקידי הדרכה והטמעה בארגונים.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
