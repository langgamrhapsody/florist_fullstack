import { getJWTSSR } from "@/utils/helpers/ssrHelpers";
import Navbar from "../components/navigations/navbar";
import Home from "@/components/landing/home";
import Products from "@/components/landing/products";
import { IShowcase } from "@/interfaces/products";
import About from "@/components/landing/about";
import Leaderboards from "@/components/landing/leaderboards";
import Reviews from "@/components/landing/reviews";
import Gallery from "@/components/landing/gallery";
import Footer from "@/components/navigations/footer";

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

  const tableHeads: string[] = ["#", "Member", "VIP Tier", "Points"];
  const dataTable: LeaderboardData[] = [
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
        <Home />
        <Products showcaseItems={showcaseItems} />
        <About />
        <Leaderboards data={dataTable} heads={tableHeads} />
        <Reviews data={lefloriareReviews} />
        <Gallery />
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </>
  );
}
