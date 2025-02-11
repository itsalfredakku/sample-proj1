import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/blocks/Footer";
import Header from "@/blocks/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Sample Web App",
  description: "Built with .Net Core + Next.js + Tailwind CSS + Microsoft SQL Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
