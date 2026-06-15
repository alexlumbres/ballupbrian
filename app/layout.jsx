import "./globals.css";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-inter" });

export const metadata = {
  title: "BallUpBrian — NYC Content, Strategy & Documentary Production",
  description: "Brian Ramos — NYC-based creative. Social strategy, campaign direction, documentary production, videography and content that scales brands across New York.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans text-[17px] leading-relaxed overflow-x-hidden">{children}</body>
    </html>
  );
}
