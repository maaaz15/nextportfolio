import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "MAAZ ZAMA",
  description: "Personal portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl h-screen mx-auto px-4 flex flex-col justify-between tracking-wide">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
