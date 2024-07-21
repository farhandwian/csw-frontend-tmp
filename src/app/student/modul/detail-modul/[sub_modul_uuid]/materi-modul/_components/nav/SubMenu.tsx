import React, { useState } from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { TMateriModul } from "@/types/modul";

interface SidebarLinkProps {
  dataMateriModul?: TMateriModul;
  activeSubSubject: number;
  setActiveSubSubject: (indexSubnav: number) => void;
}

const SidebarLink = ({
  dataMateriModul,
  activeSubSubject,
  setActiveSubSubject,
}: SidebarLinkProps) => {
  const [subnav, setSubnav] = useState(true);

  const showSubnav = () => setSubnav(!subnav);

  const onClickSubnav = (indexSubnav: number) => {
    setActiveSubSubject(indexSubnav);
  };

  return (
    <>
      {/* container menu utama dan sub menu (satu item menu)*/}
      <div
        className="w-[100%] rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(to right, #127CA6 17%, #F7F7F7 17%)`,
        }}
      >
        {/* menu utama */}
        <div
          className={`text-blackhover:bg-gray-100 flex w-[100%] max-w-[100%] cursor-pointer items-center justify-between p-2 ${
            subnav ? "mb-0" : "mb-3"
          } mt-3`}
          onClick={dataMateriModul?.sub_subject && showSubnav}
        >
          <div className="flex w-[100%] max-w-[100%] items-center rounded-r-lg text-sm md:text-base">
            <div className="w-[17%] rounded-2xl text-white">
              <h1 className="ml-2">1</h1>
            </div>
            <div className=" ml-1 w-[75%] max-w-[100%] p-[2px] text-[#64748B]">
              {dataMateriModul?.subject}
            </div>
            <div className="">
              {dataMateriModul?.sub_subject &&
                (subnav ? (
                  <ArrowDropDownIcon sx={{ color: "#CFCEE0" }} />
                ) : (
                  <ArrowDropUpIcon sx={{ color: "#CFCEE0" }} />
                ))}
            </div>
          </div>
        </div>

        <div
          className={`transition-opacity duration-500 ${subnav ? "opacity-100" : "opacity-0"}`}
        >
          {/* sub menu */}
          {subnav && (
            <div
              className="rounded-2xl py-2 pr-1 text-xs shadow-inner md:text-sm"
              style={{
                backgroundImage: `linear-gradient(to right, #31B9ED 17%, #F7F7F7 17%)`,
              }}
            >
              {dataMateriModul?.sub_subject.map((sub_subject, index) => (
                <div
                  onClick={() => onClickSubnav(index)}
                  className="flex max-w-[100%] cursor-pointer items-center rounded-2xl py-1 text-black"
                  key={index}
                >
                  <div className="w-[17%] rounded-2xl text-white">
                    <h1 className="ml-2">1.{index + 1}</h1>
                  </div>
                  <div
                    className={`ml-2 w-[80%] max-w-[100%] px-[1px] ${activeSubSubject === index ? "font-bold text-[#5680bb]" : "text-[#64748B]"}`}
                  >
                    {sub_subject.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarLink;
