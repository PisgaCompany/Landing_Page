import './globals.css';

export const metadata = {
  title: "פסגה - פתרונות הדרכה והטמעה לארגונים מובילים",
  description: "מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים",
  openGraph: {
    title: "פסגה - פתרונות הדרכה והטמעה לארגונים מובילים",
    description: "מאגר מדריכים ומטמיעים מקצועיים לפרויקטים טכנולוגיים",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
