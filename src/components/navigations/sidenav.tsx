"use client";
import Strings from "@/constants/strings";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type sideNav = {
  closeNav: () => void;
};

const SideNav = ({ closeNav }: sideNav) => {
  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center items-center bg-white">
      <div className="flex w-full items-center justify-between">
        <p className="font-bold">{Strings.general.title}</p>
        <button onClick={closeNav}>
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SideNav;
