"use client";
import React, { FC } from "react";
import { Tier } from "../svgs";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Modal from "../modals/modal";
import { ModalProvider, useModal } from "@/contexts/modalContext";
import TierInfoModal from "../modals/benefitsModal";
interface Leaderboard {
  heads: string[];
  data: LeaderboardData[];
}

type LeaderboardData = {
  id: number;
  name: string;
  tier: number;
  points: number;
};

const LeaderboardTable: FC<Leaderboard> = ({ data, heads }) => {
  const tiers = [
    {
      id: 1,
      name: "diamond",
      benefits: 20,
    },
    {
      id: 2,
      name: "gold",
      benefits: 10,
    },
    {
      id: 3,
      name: "silver",
      benefits: 5,
    },
  ];
  function getTierClass(tier: number) {
    switch (tier) {
      case 1:
        return "text-blue-300";
      case 2:
        return "text-yellow-500";
      case 3:
        return "text-slate-300";
      default:
        return "text-unranked";
    }
  }
  return (
    <>
      <table className="text-left w-12/12 lg:w-8/12 mx-auto">
        <thead className="w-full">
          <tr className=" grid grid-cols-5">
            {heads.map((item) => {
              return (
                <th
                  key={item}
                  className={`border-y border-slate-300 p-4 ${
                    item === "Member" ? "col-span-2" : "col-span-1"
                  } `}
                >
                  <p className="block  font-montserrat text-sm text-blue-gray-900 leading-none opacity-70 text-center font-semibold">
                    {item}
                  </p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full leaderboard"
          style={{ height: "250px" }}
        >
          {data.map((item, index) => {
            return (
              <tr
                key={item.id}
                className="grid grid-cols-5 w-full border-b-[1px] border-x-slate-300 place-items-center"
              >
                <td className="py-2 p-0 md:p-4 w-full  text-center col-span-1">
                  {index + 1}
                </td>
                <td className="py-2 p-0 md:p-4 w-full md:pl-10  col-span-2">
                  <div className="w-full justify-start flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                      alt="Spotify"
                      className="inline-block relative object-center rounded-full w-8 h-8 sm:w-12 sm:h-12  border border-slate-300 object-contain p-1"
                    />
                    <p className="block antialiased font-mont leading-normal text-sm sm:text-base text-blue-gray-900 ">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td
                  className={`py-2 p-0 md:p-4 w-full  text-center col-span-1 ${getTierClass(
                    item.tier
                  )} `}
                >
                  <div className="w-4 h-4 sm:w-8 sm:h-8 mx-auto">
                    <Tier />
                  </div>
                </td>
                <td className="py-2 p-0 md:p-4 w-full  text-center col-span-1">
                  <p>{item.points}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="grid grid-cols-1">
            <th className="">
              <div className="group relative flex justify-center items-center gap-3 text-center font-montserrat tracking-widest uppercase font-semibold text-sm text-gray-500 p-5 cursor-help ">
                <InformationCircleIcon className="w-5 h-5" />
                <p>Lefloriare VIP Club</p>
                <InformationCircleIcon className="w-5 h-5" />
                <div className="group-hover:opacity-100 opacity-0 bg-primary  shadow-md absolute z-50 top-[-16px] left-1/2 -translate-x-1/2 transition-all ease-in-out duration-500 flex flex-wrap justify-center items-center gap-3 p-2 ">
                  {tiers.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-2 justify-center items-center"
                      >
                        <span
                          className={`mx-auto w-5 h-5 ${getTierClass(
                            item.id
                          )} `}
                        >
                          <Tier />
                        </span>
                        <p className="text-xs normal-case font-ovo transform-none text-nowrap font-normal">
                          Get a {item.benefits}% discount!
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default LeaderboardTable;
