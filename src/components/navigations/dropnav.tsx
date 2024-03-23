"use client";
import Strings from "../../utils/constants/strings";
import { formatNumber } from "../../utils/helpers/helpers";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SocialMediaComponents from "./socialmedia";

type dropNav = {
  closeNav: () => void;
};

export const menu = [
  {
    id: 1,
    label: Strings.menu.home,
  },
  {
    id: 2,
    label: Strings.menu.about,
  },
  {
    id: 3,
    label: Strings.menu.product,
  },
  {
    id: 4,
    label: Strings.menu.contact,
  },
];

const DropNav = ({ closeNav }: dropNav) => {
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="flex-col gap-6 justify-center items-center w-full mx-auto md:w-8/12 md:pt-8 ">
        <p className=" text-wrap text-center md:hidden  text-xs uppercase font-semibold tracking-widest leading-4 font-montserrat w-full pb-6">
          Blooms your day <br></br> since 2024
        </p>
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              className={`group relative w-full h-max py-8 border-b border-black ${
                item.id === 1 && "border-t"
              }`}
            >
              <h2 className="group group-hover:font-medium group-hover:tracking-[0.1em] text-2xl capitalize text-center transition-all ease-in-out duration-300">
                {item.label}
              </h2>
              <div className="group group-hover:font-medium group-hover:tracking-[0.2em] absolute top-[10px] left-0 font-montserrat text-sm tracking-[0.1em] transition-all ease-in-out duration-300">
                {formatNumber(item.id)}
              </div>
            </div>
          );
        })}
        <div className="md:hidden flex flex-col w-full h-full justify-center items-center pt-8">
          <p className=" text-wrap text-center text-xs uppercase font-semibold tracking-widest leading-4 font-montserrat">
            Show us some love
            <span className="flex gap-6 justify-center mt-4">
              <SocialMediaComponents style={"w-[16px] h-[16px] text-black "} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropNav;
