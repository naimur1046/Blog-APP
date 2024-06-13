import React from "react";
import samplePostImage from "../../assets/PhotoforHome/laptop.jpg";
import JohnMurari from "../../assets/PhotoforHome/JohanaMurari.png";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={samplePostImage}
        alt="title"
        className="w-full object-cover  object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="flex flex-col p-5">
        <h2 className="font-bold italic text-dark-soft text-xl md:text-base lg:text-[28px]">
          Future for work
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-lg">
          {" "}
          Majority of people works for job this is the fact
        </p>
        <div className="flex justify-between flex-nowrap itms-center mt-6 ">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={JohnMurari}
              alt="Post Profile"
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="flex flex-col ">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2 ">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="italic text-gray-500 text-xs md:text-sm ">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-gray-500 italic text-sm md:text-base">
            2 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
