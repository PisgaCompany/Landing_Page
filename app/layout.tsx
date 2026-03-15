import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'פסגה - מאגר מדריכי ומטמיעי מערכות מידע',
  description: 'מאגר מדריכי ומטמיעי מערכות מידע לפרויקטים ארגוניים - פתרון ממוקד לחברות מיקור חוץ וארגונים',
  generator: 'v0.app',
  icons: {
    icon: '/pisga-icon.png',
    apple: '/pisga-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
