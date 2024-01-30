
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useContext } from 'react';


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
  let ThemeContext;
  let ThemeProvider;

  // Check if we're on the client side
  if (typeof window !== 'undefined') {
    // Only import these components on the client side
    const themeContextModule = await import('@/context/ThemContext');
    ThemeContext = themeContextModule.ThemeContext;
    ThemeProvider = themeContextModule.ThemeProvider;
  }

  const { theme } = useContext(ThemeContext || {});

  return (
    <ThemeProvider>
      <html lang="en" data-theme={theme} className="p-5 w-screen min-h-screen">
        <body className={inter.className}> 
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}