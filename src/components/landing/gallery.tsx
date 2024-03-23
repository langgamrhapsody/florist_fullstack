import Strings from "@/utils/constants/strings";
import React from "react";

const Gallery = () => {
  return (
    <div className="px-2 sm:px-8 md:px-10 sm:pb-8">
      <div className="grid grid-cols-4 xl:grid-cols-6 place-items-center pb-8 sm:px-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-[180px] h-[180px] bg-gray-200 flex justify-center items-center overflow-hidden transition-all ease-in-out duration-500 group hover:scale-95"
          >
            <img
              src={`/assets/img/best_${index < 4 ? index + 1 : 2}.jpg`}
              alt="Flower Bouquet"
              className="transition-all ease-in-out duration-500 object-cover object-center group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 md:gap-5 lg:gap-2 w-full justify-between items-center sm:px-10">
        <div className="w-max">
          <p className="text-lg">{Strings.general.gallery}</p>
        </div>
        <div className="flex-grow">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
        <div className="w-max">
          <a
            href="https://www.instagram.com/lefloriare/"
            target="_blank"
            className="text-lg lowercase"
          >
            @{Strings.general.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
