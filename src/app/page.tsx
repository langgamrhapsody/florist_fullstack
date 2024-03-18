import { getJWTSSR } from "@/utils/helpers/ssrHelpers";
import Navbar from "../components/navigations/navbar";
import Strings from "@/utils/constants/strings";
import LottieAnimation from "@/components/lottie/lottie";
import flower from "../components/lottie/Flower.json";
import { formatToIDR } from "@/utils/helpers/helpers";
import Showcase, { IShowcase } from "@/components/products/showcase";

export default function LandingPage() {
  const jwt = getJWTSSR();
  const isLoggedIn = !!jwt ? true : false;

  const showcaseItems: IShowcase[] = [
    {
      id: 1,
      alt: "Sabrina",
      name: "Sabrina",
      price: 500000,
      isSale: false,
    },
    {
      id: 2,
      alt: "Ellie",
      name: "Ellie",
      price: 250000,
      isSale: true,
    },
    {
      id: 3,
      alt: "Karen",
      name: "Karen",
      price: 400000,
      isSale: false,
    },
    {
      id: 4,
      alt: "Ann",
      name: "Ann",
      price: 300000,
      isSale: true,
    },
  ];
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="flex flex-col gap-12  lg:max-w-[1400px]  m-auto">
        {/* ------------ HOME ------------  */}
        <div className=" pt-[60px] md:pt-[40px] 2xl:pt-[60px] flex flex-col-reverse md:flex-row px-16 md:px-10 gap-10 md:gap-0 place-items-center">
          <div className="w-full md:w-1/2 -mb-10">
            <p className=" text-2xl leading-relaxed lg:text-[2.5rem] text-balance px-4 text-center -mb-10">
              {Strings.general.home_st}
              <br></br>
              {Strings.general.home_nd}
              <br></br>
              {Strings.general.home_rd}
            </p>

            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] mx-auto">
              <LottieAnimation animationData={flower} />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/assets/img/home.jpg" alt="home.jpg" className="w-full" />
          </div>
        </div>
        {/* ------------ HOME ------------  */}
        {/* ------------ BEST SELLER ------------  */}
        <div className=" flex flex-col px-16 md:px-10 pt-8 ">
          <div className="flex gap-5 lg:gap-2 w-full items-center sm:px-10">
            <div className="w-8/12 sm:w-10/12">
              <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
            </div>
            <div className="w-4/12 sm:w-2/12  lg:pl-12">
              <p className="text-lg">{Strings.general.best_seller}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:px-10  py-8 ">
            {showcaseItems.map((item) => {
              return (
                <Showcase
                  key={item.id}
                  alt={item.alt}
                  id={item.id}
                  isSale={item.isSale}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
        {/* ------------ BEST SELLER ------------  */}
        {/* ------------ ABOUT ------------  */}
        <div className=" flex flex-col px-2 sm:px-8 md:px-10 sm:py-8 ">
          <div className="  flex flex-col md:flex-row px-16 md:px-10 gap-10 md:gap-0 place-items-center">
            <div className="w-full md:w-1/2">
              <img
                src="/assets/img/about.jpg"
                alt="home.jpg"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2 md:p-14 ">
              <p className=" relative mb-5  w-max  text-2xl leading-relaxed lg:text-[2.5rem] text-balance  before:absolute before:bottom-0 before:lg:left-[50px]  before:left-[25px]  before:w-11/12 before:lg:h-[32px] before:h-[24px] before:bg-primary before:z-[-1] before:opacity-50">
                {Strings.general.who}
              </p>
              <p className="font-montserrat mb-4 font-light tracking-wider text-md opacity-90">
                {Strings.general.who_desc}
              </p>
              <button className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-primary">
                {Strings.general.who_button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
