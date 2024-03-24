"use client";
import "swiper/css";
import "swiper/css/pagination";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LoginForm from "@/components/auth/login";
import { Swiper as SwiperType } from "swiper/types";
import RegisterForm from "@/components/auth/register";

const AuthSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const tab = ["register", "login"];

  return (
    <div className="w-full relative">
      <div className="md:absolute md:top-[-60px] md:left-1/2 md:-translate-x-1/2 flex px-3 py-2 rounded-lg gap-4 w-max mx-auto justify-center bg-secondary mb-3 ">
        {tab.map((item, index) => {
          return (
            <button
              key={index}
              disabled={activeIndex === index}
              className={`${
                index === 0
                  ? "swiper-button-prev auth-swiper-button-prev"
                  : "swiper-button-next auth-swiper-button-next"
              } ${
                activeIndex === index
                  ? "bg-primary"
                  : ".auth-swipper-button-disabled bg-transparent"
              } w-[80px] font-montserrat font-semibold text-[10px] uppercase tracking-widest transition-all ease-in-out duration-500 rounded-md py-1 `}
            >
              {item}
            </button>
          );
        })}
      </div>
      <Swiper
        className="my-auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".auth-swiper-button-next",
          prevEl: ".auth-swiper-button-prev",
          disabledClass: ".auth-swipper-button-disabled",
        }}
        slidesPerView={1}
        allowTouchMove={true}
        autoplay={false}
        longSwipesRatio={0.02}
        followFinger={false}
        watchSlidesProgress={true}
        parallax={true}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <RegisterForm />
        </SwiperSlide>
        <SwiperSlide>
          <LoginForm />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthSwiper;
