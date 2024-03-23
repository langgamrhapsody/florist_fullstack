import React, { FC } from "react";
import Swipers from "../swiper/swiper";
import Strings from "@/utils/constants/strings";

const Reviews: FC<{ data: FloristReview[] }> = ({ data }) => {
  return (
    <div className=" sm:px-8 md:px-10 sm:pt-8">
      <div className="flex gap-3 md:gap-5 lg:gap-2 w-full justify-between items-center px-12 sm:px-10">
        <div className="flex-grow xs:w-4/12 md:w-5/12">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
        <div className="w-max xs:w-4/12 md:w-2/12 text-center">
          <p className="text-lg">{Strings.general.kind_words}</p>
        </div>
        <div className="flex-grow xs:w-4/12 md:w-5/12">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
      </div>
      <div className="py-5">
        <Swipers data={data} />
      </div>
      <div className="flex gap-3 md:gap-5 lg:gap-2 w-full justify-between items-center sm:px-10">
        <div className="w-2/12 ml-auto">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
        <div className="w-max">
          <img
            src="/assets/svg/flower.svg"
            alt="flower"
            className="w-40 h-auto mx-auto"
          />{" "}
        </div>
        <div className="w-2/12 mr-auto">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
