import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نمارق نجد للأثاث | أثاث فاخر وتصميم حسب الطلب",
  description:
    "نمارق نجد — أثاث فاخر مصمم بعناية في قلب نجد. تصميم حسب الطلب، غرف نوم، مجالس، ديكورات، وقطع مخصصة تُصنع لتدوم.",
  openGraph: {
    title: "نمارق نجد للأثاث | Namarg Najd Furniture",
    description:
      "Premium custom furniture designed and manufactured in Najd. Bedrooms, majlis, living rooms, décor, and bespoke pieces.",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexArabic.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-espresso font-arabic">
        {children}
      </body>
    </html>
  );
}
