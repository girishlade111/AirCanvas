import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirCanvas — Designing from Heart",
  description:
    "Pixel-perfect portfolio and agency landing page. Product design, design systems, and creative exploration.",
  keywords: ["AirCanvas", "portfolio", "design", "product design"],
  authors: [{ name: "AirCanvas" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#F4F6F4] text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
