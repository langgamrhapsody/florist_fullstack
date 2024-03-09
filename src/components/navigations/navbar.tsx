"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SideNav from "./sidenav";
import Strings from "@/constants/strings";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isOpen]);

  const closeNav = () => {
    setIsOpen(false);
    return;
  };

  return (
    <>
      <div
        id="nav"
        className={`w-full h-[90px] border-b  px-[5%] py-4 fixed z-[95] transition-all ease-in-out duration-300 ${
          scrolling ? "border-opacity-100 " : "bg-transparent border-opacity-0"
        }`}
      >
        <div className="flex w-full h-full justify-between items-center ">
          <Link href="/" className="w-max cursor-pointer flex justify-center">
            <h1 className="font-semibold text-2xl">{Strings.general.title}</h1>
          </Link>
          <div className="account relative flex gap-3 lg:hidden  ">
            <button
              className="flex flex-col h-12 w-12 rounded justify-center items-center group lg:hidden "
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bars3Icon className=" w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 overflow-hidden lg:hidden z-[97] ${
          isOpen ? "visible no-scrollbar" : "invisible"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`relative w-full h-full overflow-hidden before:absolute before:bg-black before:w-full before:h-full before:transition-all before:ease-in-out before:duration-500 z-[98] before:bg-opacity-60  ${
            isOpen
              ? " before:visible before:opacity-100"
              : "before:invisible before:opacity-0 "
          }`}
        ></div>
        <div
          className={`flex flex-col gap-5 absolute top-0  h-full w-full sm:w-1/2 md:w-[35%] bg-white z-[110] transition-all ease-in-out duration-500 pt-6 px-4 ${
            isOpen ? "right-0" : "right-[-999px]"
          }`}
        >
          <div>
            <SideNav closeNav={closeNav} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
