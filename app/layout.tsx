import './globals.css'

export const metadata = {
  title: "פסגה - פתרונות הדרכה והטמעה לארגונים מובילים",
  description: "מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים",
  openGraph: {
    title: "פסגה - פתרונות הדרכה והטמעה לארגונים מובילים",
    description: "מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "פסגה - פתרונות הדרכה והטמעה לארגונים מובילים",
    description: "מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים",
  },
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
