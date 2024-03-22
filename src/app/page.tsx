import { getJWTSSR } from "@/utils/helpers/ssrHelpers";
import Navbar from "../components/navigations/navbar";
import Strings from "@/utils/constants/strings";
import LottieAnimation from "@/components/lottie/lottie";
import flower from "../components/lottie/Flower.json";
import Showcase, { IShowcase } from "@/components/products/showcase";
import LeaderboardTable from "@/components/leaderboard/table";
import Swipers from "@/components/swiper/swiper";
import { FloristReview } from "@/components/swiper/reviewSwiper";

export default function LandingPage() {
  const jwt = getJWTSSR();
  const isLoggedIn = !!jwt ? true : false;

  const lefloriareReviews: FloristReview[] = [
    {
      author: "Emily Carter",
      rating: "★★★★★",
      title: "A Symphony of Scents and Beauty",
      review:
        "From the moment the Lefloriare delivery arrived, my home was transformed into a sanctuary of fragrance and color. The arrangement was nothing short of divine, each flower fresh and vibrant, exuding a natural elegance that took my breath away. The craftsmanship of Lefloriare's florists is evident in every bloom. It's an indulgence I'd recommend to anyone looking to brighten their day or add a touch of luxury to their living space. Absolutely gorgeous!",
    },
    {
      author: "Michael Thompson",
      rating: "★★★★★",
      title: "Exceptional Service and Stunning Flowers",
      review:
        "Lefloriare Florist has outdone themselves once again! The bouquet I ordered was not only breathtakingly beautiful but also filled the room with an exquisite fragrance that lasted for days. The delivery was prompt, and the flowers were in perfect condition. Their attention to detail and passion for their craft is truly commendable. I highly recommend Lefloriare for any floral needs; they never disappoint!",
    },
    {
      author: "Sophia Loren",
      rating: "★★★★★",
      title: "Elegance Redefined",
      review:
        "Ordering from Lefloriare Florist was a sheer delight. The arrangement I received was elegantly put together, with each flower showcasing vibrant colors and freshness. The bouquet was not just visually stunning but also had a mesmerizing fragrance that lingered beautifully. Lefloriare's commitment to quality and customer satisfaction is evident. I'm thoroughly impressed and will definitely be a returning customer.",
    },
    {
      author: "James Patterson",
      rating: "★★★★★",
      title: "A Floral Masterpiece",
      review:
        "I was looking for something special, and Lefloriare Florist delivered just that—a floral masterpiece. The arrangement was sophisticated, with an incredible selection of flowers that seemed to be chosen with utmost care and consideration. It's clear that Lefloriare takes great pride in their work, delivering not just flowers, but an experience. Their service is unparalleled, and I highly recommend them to anyone wanting to make a lasting impression.",
    },
    {
      author: "Isabella Rossi",
      rating: "★★★★★",
      title: "Fragrance Heaven",
      review:
        "If heaven had a scent, it would be the fragrance of Lefloriare's floral arrangements. Every stem and leaf seemed to be bursting with life, making the bouquet a centerpiece of conversation. The freshness, the gorgeous arrangement, and the delightful scent are all reasons I'll be choosing Lefloriare again. Their professionalism and talent are unmatched. Highly recommend for those who appreciate the finer things in life.",
    },
  ];

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

  const tableHeads = ["#", "Member", "VIP Tier", "Points"];
  const dataTable = [
    { id: 1, name: "@orchidOcean", tier: 1, points: 92 },
    { id: 2, name: "@daisyDomain", tier: 1, points: 89 },
    { id: 3, name: "@bloomNest", tier: 2, points: 80 },
    { id: 4, name: "@gardenGlory", tier: 2, points: 48 },
    { id: 5, name: "@roseReign", tier: 2, points: 39 },
    { id: 6, name: "@petalParade", tier: 2, points: 36 },
    { id: 7, name: "@flowerPower", tier: 2, points: 34 },
    { id: 8, name: "@tulipTribe", tier: 3, points: 31 },
    { id: 9, name: "@blossomBunch", tier: 3, points: 29 },
    { id: 10, name: "@floraFusion", tier: 3, points: 22 },
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
        {/* ------------ ABOUT ------------  */}

        <div className="flex flex-col px-2 sm:px-8 md:px-10 sm:py-8 ">
          <div className=" p-[20px] sm:p-[40px] lg:p-[80px] flex flex-col gap-3 sm:gap-5  bg-secondary">
            <h3 className=" text-3xl md:text-5xl font-light text-center text-balance">
              {Strings.general.join}
            </h3>
            <p className="font-montserrat mb-4 w-10/12ss md:w-8/12 text-center mx-auto font-light tracking-wider text-sm md:text-md opacity-90">
              {Strings.general.benefits}
            </p>
            <LeaderboardTable data={dataTable} heads={tableHeads} />
            <div className="flex justify-center gap-4 w-6/12 mx-auto ">
              <div className="w-full sm:w-1/2">
                <button className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-primary">
                  {Strings.general.join_button}
                </button>
              </div>
              {/* <div className="w-1/2">
                <button className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-t">
                  {Strings.general.benefits_button}
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="px-2 sm:px-8 md:px-10 sm:py-8">
          <div className="flex gap-3 md:gap-5 lg:gap-2 w-full justify-between items-center sm:px-10">
            <div className="w-4/12 md:w-5/12">
              <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
            </div>
            <div className="w-4/12 md:w-2/12 text-center">
              <p className="text-lg">{Strings.general.kind_words}</p>
            </div>
            <div className="w-4/12 md:w-5/12">
              <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
            </div>
          </div>
          <div className="py-5">
            <Swipers data={lefloriareReviews} />
          </div>
        </div>
      </div>
    </>
  );
}
