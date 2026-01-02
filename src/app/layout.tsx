import type { Metadata } from "next";
import { Geist, Inter, Merriweather } from "next/font/google";

import "./globals.css";

import localFont from "next/font/local";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ProgressProvider from "@/providers/ProgressProvider";
import { AbsoluteUrl } from "@/utils/BaseUrl";
import IphoneViewportGuard from "@/components/IphoneViewportGuard";
import { Toaster } from "react-hot-toast";

const satoshi = localFont({
  src: "../app/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // ← required
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // ← required
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // ← required
});

export const metadata: Metadata = {
  title: " Horus Financial Academy",
  description: "",
  metadataBase: new URL(AbsoluteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${merriweather.variable} ${satoshi.variable} ${geist.variable} ${inter.variable} antialiased`}
      >
        <IphoneViewportGuard />
        <ProgressProvider>
          <Toaster position="top-center" containerClassName="mt-4" />
          <Header />
          {children}
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}
