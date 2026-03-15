import { Database, Target, Building2, Zap, CheckCircle } from "lucide-react"

const advantages = [
  {
    icon: Database,
    title: "מאגר קיים ומובנה",
    description: "מאגר מתועד של מועמדים שעברו סינון מקצועי והכשרה ייעודית בתחום ההדרכה וההטמעה.",
  },
  {
    icon: Target,
    title: "התאמה ממוקדת לדרישות הפרויקט",
    description: "ההתאמה מתבצעת לפי ניסיון מקצועי, ידע במערכות, אזור גיאוגרפי וזמינות.",
  },
  {
    icon: Building2,
    title: "היכרות עם עבודה בפרויקטים ארגוניים",
    description: "המועמדים במאגר עברו הכשרה כמדריכי ומטמיעי מערכות מידע לקראת השתלבות בפרויקטים ארגוניים.",
  },
  {
    icon: Zap,
    title: "קיצור שלב הגיוס הראשוני",
    description: "שלב הסינון הראשוני כבר בוצע מראש.",
  },
  {
    icon: CheckCircle,
    title: "איכות ללא פשרות - גם שצריך לגייס מהר",
    description: "בחירה מהירה של מועמדים איכותיים מתאימים לפרויקט",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-28 md:py-36">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3rem]">
            התאמה ממוקדת לדרישות התפקיד
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-[12px] bg-white shadow-md hover:shadow-lg hover:border-primary/30 border border-border transition-all duration-300"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
