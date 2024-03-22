"use client";
import "swiper/css";
import "swiper/css/pagination";

import React, { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import ReviewSwiper, { FloristReview } from "./reviewSwiper";

const Swipers: FC<{ data: FloristReview[] }> = ({ data }) => {
  const datas = data;

  const middleIndex = Math.floor((datas.length - 1) / 2);
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      slidesPerView={1}
      loop={true}
      allowTouchMove={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      longSwipesRatio={0.02}
      followFinger={false}
      grabCursor={true}
      watchSlidesProgress={true}
      parallax={true}
      modules={[Pagination]}
      initialSlide={middleIndex}
    >
      {datas.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <ReviewSwiper
              author={item.author}
              rating={item.rating}
              review={item.review}
              title={item.title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Swipers;
