"use client";
import { ThemeProvider } from "@material-tailwind/react";
import "./globals.css";
import Navbar from "./navbar";
import { Inter } from "@next/font/google";
import Footer from "./footer";

const inter = Inter({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <ThemeProvider>
        <body className='flex flex-col [&>*]:w-full min-h-screen'>
          <div className={`max-w-[1137px] mx-auto ${inter.className} grow`}>
            <Navbar />
            {children}
          </div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
