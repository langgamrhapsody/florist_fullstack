"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Bars3Icon, UserCircleIcon, UserIcon } from "@heroicons/react/20/solid";
import SideNav from "./dropnav";
import Strings from "../../utils/constants/strings";
import SocialMediaComponents from "./socialmedia";
import { splitStringIntoTwo } from "../../utils/helpers/helpers";

type NavbarProps = {
  isLoggedIn: boolean;
};

const Navbar = ({ isLoggedIn }: NavbarProps) => {
  const right_nav: string[] = splitStringIntoTwo(Strings.general.right_nav);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
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

  return (
    <div id="nav" className="fixed z-[100] w-full">
      <div
        id="first"
        className={`relative z-[98] hidden md:flex w-full  justify-between items-center h-[40px] 2xl:h-[60px] border-b border-black bg-transparent px-[2%]   transition-all ease-in-out duration-1000 ${
          isOpen ? "bg-white" : "bg-transparent"
        } `}
      >
        <Bars3Icon onClick={toggleNav} className="w-6 h-6 cursor-pointer" />
        <h1
          className={`hidden md:block font-semibold text-lg transition-all ease-in-out duration-1000 ${
            scrollingDown ? "opacity-100" : "opacity-0"
          }`}
        >
          {Strings.general.title}
        </h1>
        {isLoggedIn ? (
          <UserCircleIcon className="w-6 h-6" />
        ) : (
          <UserIcon className="w-6 h-6" />
        )}
      </div>
      <div
        id="second"
        className={`relative z-[98] w-full h-[60px] md:h-[80px] border-b  px-[5%]  transition-all ease-in-out duration-1000 ${
          isOpen ? "bg-white" : "bg-transparent"
        } ${
          !isOpen && scrollingDown
            ? "max-h-[0] py-0 border-transparent"
            : "max-h-[100px] py-4 border-black "
        } `}
      >
        <div
          className={`md:grid md:grid-cols-4 h-full md:divide-x-2 divide-black place-items-center transition-all ease-in-out duration-500 ${
            !isOpen && scrollingDown ? "opacity-0 hidden" : "opacity-100 "
          }`}
        >
          <div className="hidden md:flex w-full h-full justify-end items-center pr-10">
            <p className=" text-wrap text-center w-[90px] text-[9px] uppercase font-semibold tracking-widest leading-4 font-montserrat">
              {Strings.general.left_nav}
              <br></br> {Strings.general.year}
            </p>
          </div>
          <div className="col-span-2 relative flex w-full h-full justify-center items-center">
            <h1
              onClick={toggleNav}
              className=" font-semibold text-2xl cursor-pointer "
            >
              {Strings.general.title}
            </h1>
          </div>
          <div className="hidden md:block w-full h-full justify-start items-center pl-10">
            <p className=" text-wrap text-center w-[90px] text-[9px] uppercase font-semibold tracking-widest leading-4 font-montserrat">
              {right_nav[0]} <br></br> {right_nav[1]}
              <span className="flex gap-2 justify-center mt-[4px]">
                <SocialMediaComponents style={"w-[10px] h-[10px] text-black"} />
              </span>
            </p>
          </div>
        </div>
        <div
          className={`md:hidden absolute  bottom-[7px] left-1/2 -translate-x-1/2 justify-center items-center transition-all ease-in-out duration-500 overflow-hidden ${
            isOpen ? "opacity-0 bottom-[-1px] w-full" : "opacity-100 w-[40px] "
          }`}
        >
          <div className="w-full bg-black h-[1px]"></div>
        </div>
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 overflow-hidden  z-[97] ${
          isOpen ? "visible no-scrollbar" : "invisible"
        }`}
      >
        <div
          id="dropdown"
          className={`flex flex-col justify-center gap-5 absolute left-0  h-full w-full bg-white z-[110] transition-all ease-in-out duration-500 px-4 py-[60px] md:py-[120px] ${
            isOpen ? "top-0" : "top-[-999px]"
          }`}
        >
          <div>
            <SideNav closeNav={toggleNav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
