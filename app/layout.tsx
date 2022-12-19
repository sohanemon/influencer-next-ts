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
      <body>
        <ThemeProvider>
          <div className={`max-w-[1137px] mx-auto ${inter.className}`}>
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
