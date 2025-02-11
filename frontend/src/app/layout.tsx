import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/blocks/footer";
import Header from "@/blocks/header";

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
        <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main className="min-h-screen w-full flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
