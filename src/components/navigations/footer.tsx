"use client";
import Strings from "@/utils/constants/strings";
import React, { FC, ReactNode, useState } from "react";
import { menu } from "./dropnav";
import { formatNumber } from "@/utils/helpers/helpers";
import SocialMediaComponents from "./socialmedia";
import AuthSwiper from "../swipers/auth/swiper";
import {
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

type Info = {
  id: number;
  text: string;
  icon: InfoIcon;
};

type InfoIcon = "order" | "phone" | "home" | "mail";

const Footer: FC<NavigationProps> = () => {
  const info: Info[] = [
    { id: 1, text: "Direct Order Available The Day Before", icon: "order" },
    { id: 2, text: "Call Us To Order: +62813-3864-8127", icon: "phone" },
    {
      id: 3,
      text: "Stop On By: Jl. Pulau Galang, Denpasar, Bali",
      icon: "home",
    },
    { id: 4, text: "Email Us At: mail@lefloriare.com", icon: "mail" },
  ];

  const infoIcon = (icon: InfoIcon): ReactNode => {
    switch (icon) {
      case "home":
        return <HomeIcon />;
      case "mail":
        return <EnvelopeIcon />;
      case "order":
        return <ShoppingBagIcon />;
      case "phone":
        return <PhoneIcon />;
      default:
        break;
    }
  };
  return (
    <div className="pt-32 md:pt-32 ">
      <div
        id={Strings.menu.contact}
        className="w-full md:border-y border-black   "
      >
        <div className="lg:max-w-[1400px]  m-auto  ">
          <div
            className={` flex flex-col md:grid md:grid-cols-3 h-full  md:divide-x divide-black place-items-center transition-all ease-in-out duration-500 py-10 px-16 md:px-0`}
          >
            <div className="order-last md:order-none flex w-full h-full justify-end items-center md:pr-12  xl:pr-32">
              <div className="w-10/12 md:w-full h-full bg-white py-8 mx-auto">
                <div className="flex-col gap-6 justify-center items-center w-full ml-auto md:w-8/12 ">
                  <p className=" text-wrap text-center   text-[10px] uppercase  tracking-widest leading-4 font-montserrat w-full pb-6">
                    Blooms your day <br></br> since 2024
                  </p>
                  {menu.map((item) => {
                    return (
                      <a
                        href={`#${item.label}`}
                        key={item.id}
                        className={`group block relative w-full h-max py-6 border-b border-black ${
                          item.id === 1 && "border-t"
                        }`}
                      >
                        <h2 className="group group-hover:font-medium group-hover:tracking-[0.1em] text-xl capitalize text-center transition-all ease-in-out duration-300">
                          {item.label}
                        </h2>
                        <div className="group group-hover:font-medium group-hover:tracking-[0.2em] absolute top-[10px] left-0 font-montserrat text-xs tracking-[0.1em] transition-all ease-in-out duration-300">
                          {formatNumber(item.id)}
                        </div>
                      </a>
                    );
                  })}
                  <div className=" flex flex-col w-full h-full justify-center items-center pt-8">
                    <p className=" text-wrap text-center text-[10px] uppercase  tracking-widest leading-4 font-montserrat">
                      Show us some love
                      <span className="flex gap-6 justify-center mt-4 opacity-70">
                        <SocialMediaComponents
                          style={"w-[10px] h-[10px] text-black "}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col w-full h-full justify-between sm:px-10 lg:px-14 gap-6 md:gap-0 md:py-0 py-8  border-b md:border-b-0">
              <h1 className=" font-semibold text-3xl cursor-pointer tracking-widest text-center ">
                {Strings.general.title}
              </h1>
              <AuthSwiper />
              <div>
                <p className="text-center text-xs font-montserrat">
                  <span>
                    <button className="underline">Terms & Condition </button>
                  </span>
                  /
                  <span>
                    <button className="underline"> Privacy Policy</button>
                  </span>
                </p>
              </div>
            </div>
            <div className="order-first md:order-none w-full h-full justify-start items-center md:pl-12 xl:pl-32 border-b md:border-b-0 ">
              <div className="w-10/12 md:w-full h-full bg-white py-8 mx-auto">
                <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col justify-center sm:justify-between gap-10 w-full h-full">
                  {info.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="text-center flex flex-col gap-2 justify-center items-center w-[150px]"
                      >
                        <div className="text-black w-6">
                          {infoIcon(item.icon)}
                        </div>

                        <p className="text-balance uppercase text-[10px]  font-montserrat font-medium tracking-[0.1rem]">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6  flex flex-col justify-center items-center text-center font-montserrat tracking-widest text-xs bg-primary  ">
        <p className="text-balance">
          Copyright © 2024
          <span className=""> Lefloriare</span> | All Rights Reserved
        </p>
        <p>
          Powered By <span className="">ADC Media</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
