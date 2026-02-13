import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Italia | Fine Italian Dining",
  description: "Experience the authentic taste of Italy at Bella Italia. Our family recipes bring you the true essence of Italian cuisine in an elegant atmosphere.",
  keywords: ["Italian restaurant", "fine dining", "Italian cuisine", "restaurant", "reservations"],
  openGraph: {
    title: "Bella Italia | Fine Italian Dining",
    description: "Experience the authentic taste of Italy",
    type: "website",
    locale: "en_US",
    siteName: "Bella Italia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-[#0d0d0d] text-white antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
