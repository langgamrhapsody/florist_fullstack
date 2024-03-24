"use client";
import React, { FC } from "react";
import Showcase from "../products/showcase";
import { IShowcase } from "@/interfaces/products";
import Strings from "@/utils/constants/strings";

const Products: FC<{ showcaseItems: IShowcase[] }> = ({ showcaseItems }) => {
  return (
    <div
      id={Strings.menu.product}
      className=" flex flex-col px-12 sm:px-16 md:px-10 pt-32 "
    >
      <div className="flex gap-5 lg:gap-2 w-full items-center sm:px-10">
        <div className="w-8/12 sm:w-10/12">
          <div className="w-full h-[1px] bg-black ml-auto transition-all ease-in-out duration-1000 group-hover:w-full"></div>
        </div>
        <div className="w-4/12 sm:w-2/12  lg:pl-12">
          <p className="text-lg">{Strings.general.best_seller}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:px-10  py-8 ">
        {showcaseItems.map((item) => {
          return (
            <Showcase
              key={item.id}
              alt={item.alt}
              id={item.id}
              isSale={item.isSale}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
