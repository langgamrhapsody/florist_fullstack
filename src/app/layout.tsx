import type { Metadata } from "next";
import "./globals.css";
import { lefloriareMetaData } from "../app/metadata";
import { Montserrat, Ovo } from "next/font/google";
// import { montserrat, ovo } from "./fonts";

export const ovo = Ovo({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-ovo",
});

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = lefloriareMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ovo.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
