"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Right Content (appears first in RTL) */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              צור קשר
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
              יצירת קשר לחברות מיקור חוץ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              נשמח לשמוע מכם ולספק מידע נוסף על המאגר והשירותים שלנו. מלאו את הטופס ונחזור אליכם בהקדם.
            </p>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="font-semibold text-foreground mb-2">פרטי יצירת קשר לחברות מיקור החוץ:</p>
              <p className="text-muted-foreground text-sm">
                לשאלות ומידע נוסף, אנא מלאו את טופס הפנייה או צרו קשר ישירות.
              </p>
            </div>
          </div>

          {/* Left Form (appears second in RTL) */}
          <div>
            <form className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    שם
                  </Label>
                  <Input
                    id="name"
                    placeholder="השם שלך"
                    className="h-12 bg-background border-border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    חברה
                  </Label>
                  <Input
                    id="company"
                    placeholder="שם החברה"
                    className="h-12 bg-background border-border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    אימייל
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@company.com"
                    className="h-12 bg-background border-border rounded-lg"
                    dir="ltr"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    טלפון
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="050-000-0000"
                    className="h-12 bg-background border-border rounded-lg"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  הודעה
                </Label>
                <Textarea
                  id="message"
                  placeholder="ספרו לנו על הצרכים שלכם..."
                  className="min-h-[140px] bg-background border-border rounded-lg resize-none"
                />
              </div>

              <Button type="submit" className="w-full rounded-full h-14 text-base font-medium" size="lg">
                שלח פנייה
                <ArrowLeft className="me-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
