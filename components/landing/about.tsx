export function About() {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-primary-foreground/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-primary-foreground/50 text-sm">תמונת הצוות</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
              אודותינו
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              מי אנחנו
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              פסגה הוקמה על בסיס ניסיון מצטבר בעולמות ההדרכה והטמעת מערכות מידע בארגונים.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              הצוות המייסד צבר ניסיון בפרויקטי הטמעה ארגוניים רחבי היקף, הכוללים הדרכת משתמשי קצה, ליווי עליות לאוויר של מערכות חדשות, והטמעה של מערכות מידע בסביבה ארגונית בפריסה ארצית.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed">
              במסגרת פעילות זו נצבר ניסיון בעבודה מול משתמשים, צוותי פרויקט וארגונים גדולים, לצד היכרות עם האתגרים הכרוכים באיתור ובהכשרת מדריכים ומטמיעי מערכות לפרויקטים.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              פסגה הוקמה מתוך ניסיון זה, במטרה לרכז ולהכשיר מאגר של מדריכים ומטמיעי מערכות מידע, המתאימים להשתלבות בפרויקטי הדרכה והטמעה בארגונים, בשיתוף פעולה עם חברות מיקור חוץ.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
