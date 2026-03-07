import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'פסגה - מאגר מדריכי ומטמיעי מערכות מידע',
  description: 'מאגר מדריכי ומטמיעי מערכות מידע לפרויקטים ארגוניים - פתרון ממוקד לחברות מיקור חוץ וארגונים',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
