import type { Metadata } from "next";
import "./globals.css";
import { lefloriareMetaData } from "../app/metadata";
import { montserrat, ovo, worksans } from "./fonts";

export const metadata: Metadata = lefloriareMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ovo.variable} ${montserrat.variable} ${worksans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
