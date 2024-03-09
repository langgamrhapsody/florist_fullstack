import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { lefloriareMetaData } from "@/app/metadata";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = lefloriareMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
