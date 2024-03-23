import { IShowcase } from "@/interfaces/products";
import Strings from "@/utils/constants/strings";
import { formatToIDR } from "@/utils/helpers/helpers";
import React, { FC } from "react";

const Showcase: FC<IShowcase> = ({ alt, id, name, price, isSale }) => {
  return (
    <div className="relative flex flex-col gap-5  lg:w-[250px] backface-invisible  group transition-all ease-in-out duration-500 hover:-mt-3 hover:brightness-105 ">
      <p className="absolute bottom-14 left-[220px] xs:left-[270px] [writing-mode:vertical-lr] tracking-[0.4rem] text-xs group-hover:tracking-[0.6rem]  transition-all ease-in-out duration-500">
        {Strings.general.title}
      </p>

      <div
        className={`absolute ${
          isSale ? "flex" : "hidden"
        } justify-center items-center top-10 left-[-30px] bg-primary rounded-full z-50 w-[65px]  h-[65px] font-montserrat uppercase text-xs text-center tracking-widest`}
      >
        <p>{Strings.general.sale}</p>
      </div>

      <div className=" relative w-[200px] h-[330px] xs:w-[250px] sm:w-[250px]  xs:h-[380px] rounded-t-full rounded-b-none overflow-hidden">
        <img
          src={`/assets/img/best_${id}.jpg`}
          alt={alt}
          className="w-full h-full transition-all ease-in-out duration-500 object-cover object-center group-hover:scale-110"
        />
      </div>
      <div className=" relative flex justify-between items-center before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-black ">
        <p className="tracking-wider ">{name}</p>
        <p className="font-montserrat tracking-widest text-xs  ">
          {formatToIDR(price)}
        </p>
      </div>
    </div>
  );
};

export default Showcase;
