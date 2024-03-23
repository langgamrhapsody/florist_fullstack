"use client";
import Strings from "@/utils/constants/strings";
import React from "react";
import LottieAnimation from "../lottie/lottie";
import flower from "../lottie/Flower.json";

const Home = () => {
  return (
    <div className=" pt-[60px] md:pt-[40px] 2xl:pt-[60px] flex flex-col-reverse md:flex-row px-12 sm:px-16 md:px-10 gap-10 md:gap-0 place-items-center">
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
  );
};

export default Home;
