import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import "animate.css";

import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SunCart - Summer Essentials",
  description:
    "Discover the ultimate destination for all your summer needs at SunCart. From trendy swimwear and stylish sunglasses to beach accessories and outdoor gear, we have everything you need to make the most of the sunny season. Shop now and get ready for a summer filled with fun, fashion, and unforgettable memories!",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="flex min-h-full flex-col">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}