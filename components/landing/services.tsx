import { Check, Users, GraduationCap, FileCheck } from "lucide-react"

const bulletPoints = [
  "עובר סינון קפדני על ידינו.",
  "עובר הכשרה ממוקדת המועברת על-ידי מדריכים בעלי ניסיון רב בפרויקטי הטמעה והדרכה בארגונים פרטיים וממשלתיים.",
  "מתועד לפי ניסיון מקצועי, סוגי מערכות, אזור גיאוגרפי וזמינות.",
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            השירותים שלנו
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            מה אנחנו עושים
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              אנו מאתרים, מכשירים ומנהלים מאגר של מדריכי/מטמיעי מערכות מידע המיועדים לשילוב בפרויקטים ארגוניים.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              המאגר שלנו בנוי מבעלי ניסיון הדרכתי מוכח ומיוצאי צבא עם DNA מקצועי המתאים לעבודה בארגונים גדולים – עמידה מול קהל, עבודה עם מערכות ארגוניות מורכבות, ויכולת כניסה מהירה לפרויקטים.
            </p>

            {/* Visual Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <Users className="h-8 w-8 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground">איתור מועמדים</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <GraduationCap className="h-8 w-8 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground">הכשרה מקצועית</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <FileCheck className="h-8 w-8 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground">ניהול המאגר</span>
              </div>
            </div>
          </div>

          {/* Bullet Points Card */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              כל מועמד במאגר:
            </h3>
            <ul className="space-y-5">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
