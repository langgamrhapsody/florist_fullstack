import { getJWTSSR } from "@/utils/helpers/ssrHelpers";
import Navbar from "../components/navigations/navbar";
import Strings from "@/utils/constants/strings";

export default function LandingPage() {
  const jwt = getJWTSSR();
  const isLoggedIn = !!jwt ? true : false;

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className=" pt-10 2xl:pt-[60px] grid grid-cols-2 px-10 lg:max-w-[1280px] m-auto place-items-center">
        <div className="">
          <p className="text-[40px] text-balance px-4 text-center">
            {Strings.general.home_st}
            <br></br>
            {Strings.general.home_nd}
            <br></br>
            {Strings.general.home_rd}
          </p>
        </div>
        <img src="/assets/img/home.jpg" alt="home.jpg" className="w-full" />
      </div>
    </>
  );
}
