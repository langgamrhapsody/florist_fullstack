import { getCookie } from "cookies-next";

export function getJWT() {
  const jwt = getCookie("jwt") as string;
  return jwt;
}

export function formatNumber(n: number): string {
  return n.toString().padStart(2, "0");
}

export function formatToIDR(amount: number): string {
  return (
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount) + " IDR"
  );
}

export function splitStringIntoTwo(inputString: string): string[] {
  const words = inputString.split(" ");
  const midPoint = Math.ceil(words.length / 2);

  const firstHalf = words.slice(0, midPoint).join(" ");
  const secondHalf = words.slice(midPoint).join(" ");

  return [firstHalf, secondHalf];
}
