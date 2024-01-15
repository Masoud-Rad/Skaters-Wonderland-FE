import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skaters Wonderland",
  description:
    "Skaters-Wonderland is a vibrant platform uniting skaters, trainers, and enthusiasts. Explore and share the best skating spots, connect with like-minded individuals, discover local skate businesses, and buy/sell second-hand gear. Join a thriving community passionate about the art of skating.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bumblebee" className="p-5">
      <Header/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
 