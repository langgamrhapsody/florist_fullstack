import React, { FC } from "react";
import LeaderboardTable from "../leaderboard/table";
import Strings from "@/utils/constants/strings";

const Leaderboards: FC<{ heads: string[]; data: LeaderboardData[] }> = ({
  data,
  heads,
}) => {
  return (
    <div className="flex flex-col px-2 sm:px-8 md:px-10 sm:py-8 ">
      <div className=" p-[20px] sm:p-[40px] lg:p-[80px] flex flex-col gap-3 sm:gap-5  bg-secondary">
        <h3 className=" text-3xl md:text-5xl font-light text-center text-balance">
          {Strings.general.join}
        </h3>
        <p className="font-montserrat mb-4 w-10/12ss md:w-8/12 text-center mx-auto font-light tracking-wider text-sm md:text-md opacity-90">
          {Strings.general.benefits}
        </p>
        <LeaderboardTable data={data} heads={heads} />
        <div className="flex justify-center gap-4 w-6/12 mx-auto ">
          <div className="w-full sm:w-1/2">
            <button className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-primary">
              {Strings.general.join_button}
            </button>
          </div>
          {/* <div className="w-1/2">
                <button className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-t">
                  {Strings.general.benefits_button}
                </button>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
