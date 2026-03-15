import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Team Photos */}
          <div className="relative order-2 lg:order-1">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-primary-foreground/10">
                <Image
                  src="/images/nadav.png"
                  alt="נדב - שותף בצוות פסגה"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 240px, 50vw"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-primary-foreground/10">
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              מי אנחנו
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              הצוות המייסד צבר ניסיון בפרויקטי הטמעה ארגוניים רחבי היקף, הכוללים ניהול פרויקטי הדרכה והטמעה, ליווי עליות לאוויר של מערכות חדשות, הדרכת משתמשי קצה והטמעה של מערכות מידע בסביבה ארגונית בפריסה ארצית.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              פסגה הוקמה מתוך ניסיון זה, במטרה לרכז ולהכשיר מאגר של מדריכים ומטמיעי מערכות מידע, המתאימים להשתלבות בתפקידי הדרכה והטמעה בארגונים.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
