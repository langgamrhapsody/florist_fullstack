"use client";
import Strings from "@/utils/constants/strings";
import React from "react";

const About = () => {
  return (
    <div
      id={Strings.menu.about}
      className=" flex flex-col px-0 md:px-10 sm:py-8   pt-32 md:pt-32 "
    >
      <div className="  flex flex-col md:flex-row px-12 sm:px-16 md:px-10 gap-10 md:gap-0 place-items-center">
        <div className="w-full md:w-1/2">
          <img src="/assets/img/about.jpg" alt="home.jpg" className="w-full" />
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
  );
};

export default About;
