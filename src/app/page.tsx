import Navbar from "../components/navigations/navbar";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export default function LandingPage() {
  const cookie = cookies().get("isLoggedIn") as RequestCookie;
  const isLoggedIn = cookie.value === "true" ? true : false;
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="bg-slate-500 min-h-screen"></main>
      <div className="min-h-screen bg-green-400">hi</div>
    </>
  );
}
