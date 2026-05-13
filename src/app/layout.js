

import "./globals.css";
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

export const metadata = {
  title: "SunCart-Summer Essentials",
  description: "Discover the ultimate destination for all your summer needs at SunCart. From trendy swimwear and stylish sunglasses to beach accessories and outdoor gear, we have everything you need to make the most of the sunny season. Shop now and get ready for a summer filled with fun, fashion, and unforgettable memories!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >

      <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>

      <body className="min-h-full flex flex-col">
        {children}
         <ToastContainer />
        </body>
    </html>
  );
}
