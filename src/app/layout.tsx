import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Passions_Conflict,
  Niconne,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const passionsConflict = Passions_Conflict({
  variable: "--font-passions-conflict",
  subsets: ["latin"],
  weight: "400",
});

const niconne = Niconne({
  variable: "--font-niconne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zhagaram Studios",
  description:
    "A creative production house capturing raw elegance and timeless visual narratives.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${passionsConflict.variable} ${niconne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
