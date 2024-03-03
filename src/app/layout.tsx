import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor"

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Tenzin Tsering Shrestha",
  description: "Personal portfolio website for Tenzin Tsering Shrestha, a UI UX Designer",
  keywords: "UI, UX, Designer, Design, Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}
      <AnimatedCursor
      innerSize={8}
      outerSize={48}
      color='000, 000, 000'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      trailingSpeed={20}
      clickables={['a']}
      
      
    /></body>
    </html>
  );
}
