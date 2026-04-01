import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IZHUB Cleaning Service | Professional Cleaning in Tidworth",
    template: "%s | IZHUB Cleaning Service",
  },
  description:
    "Reliable domestic, commercial & military cleaning across Tidworth, Bulford, Larkhill, Amesbury, and the Salisbury Plain. Get your free quote today.",
  keywords: [
    "cleaning service Tidworth",
    "domestic cleaning",
    "end of tenancy cleaning",
    "commercial cleaning",
    "military cleaning",
    "march-out cleaning",
    "Salisbury Plain",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "IZHUB Cleaning Service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
