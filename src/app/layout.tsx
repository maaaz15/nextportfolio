import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Bricolage_Grotesque, Gloock } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: "variable",
});
const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
    weight: "variable",
});
const gloock = Gloock({
    subsets: ["latin"],
    variable: "--font-gloock",
    weight: "400",
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
        <html
            lang="en"
            className={`${inter.variable} ${bricolage.variable} ${gloock.variable}`}
        >
            <body>
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
