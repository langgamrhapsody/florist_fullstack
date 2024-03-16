import { Montserrat, Ovo } from "next/font/google";

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
