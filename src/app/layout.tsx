import type { Metadata } from "next";
import "./globals.css";
import { lefloriareMetaData } from "../app/metadata";
import { montserrat, ovo } from "./fonts";

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
