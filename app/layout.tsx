import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Joseph Kitheka",
    default: "Joseph Kitheka",
  },
  description: "welcome to my small circle of tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="py-10 mx-auto max-w-3xl px-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
