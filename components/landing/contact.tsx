"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdawknbq"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus("submitting")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3rem] mb-6">
              צרו קשר למציאת מדריכים מתאימים
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              נשמח לשמוע מכם ולספק מידע נוסף על המאגר והשירותים שלנו. מלאו את הטופס ונחזור אליכם בהקדם.
            </p>
          </div>

          <div>
            {status === "success" ? (
              <div className="bg-white rounded-[12px] shadow-md border border-border p-8 md:p-10 text-center">
                <p className="text-lg font-medium text-foreground">
                  הפרטים נשלחו בהצלחה. נחזור אליכם בהקדם.
                </p>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="bg-white rounded-[12px] border border-border p-6 md:p-8 space-y-6 shadow-md"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      שם החברה
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="שם החברה"
                      className="h-12 bg-background border-border rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      שם איש קשר <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="השם שלך"
                      className="h-12 bg-background border-border rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      אימייל <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@company.com"
                      className="h-12 bg-background border-border rounded-lg"
                      dir="ltr"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      טלפון
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="050-000-0000"
                      className="h-12 bg-background border-border rounded-lg"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    הודעה <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="ספרו לנו על הצרכים שלכם..."
                    className="min-h-[140px] bg-background border-border rounded-lg resize-none"
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    אירעה שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full h-14 text-base font-medium bg-[#2b6cb0] hover:bg-[#2563eb]"
                  size="lg"
                >
                  {status === "submitting" ? "שולח..." : "שלח פנייה"}
                  <ArrowLeft className="me-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
