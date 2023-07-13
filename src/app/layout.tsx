import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle",
  description: "Play infinite wordle!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white p-5 text-black dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
