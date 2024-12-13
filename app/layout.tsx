import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const recoleta = localFont({
  src: "../public/fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Tanishka Deep",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recoleta.variable}`}>
        {children}
      </body>
    </html>
  );
}
