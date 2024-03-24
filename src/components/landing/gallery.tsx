import Strings from "@/utils/constants/strings";
import React from "react";

const Gallery = () => {
  return (
    <div className=" sm:px-8 md:px-10 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 place-items-center justify-between pb-8 px-12 sm:px-10 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-auto aspect-square bg-gray-200 flex justify-center items-center overflow-hidden transition-all ease-in-out duration-500 group hover:scale-95"
          >
            <img
              src={`/assets/img/best_${index < 4 ? index + 1 : 2}.jpg`}
              alt="Flower Bouquet"
              className="transition-all ease-in-out duration-500 object-cover object-center group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 md:gap-5 lg:gap-2 w-full justify-between items-center px-12 sm:px-10">
        <div className="w-max">
          <p className=" sm:text-lg">{Strings.general.gallery}</p>
        </div>
        <div className="flex-grow">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
        <div className="w-max">
          <a
            href="https://www.instagram.com/lefloriare/"
            target="_blank"
            className="sm:text-lg lowercase"
          >
            @{Strings.general.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
