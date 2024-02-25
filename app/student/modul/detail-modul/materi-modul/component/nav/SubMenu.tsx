import React, { useState } from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SidebarLink = ({ item }: { item: any }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

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
        <Link
          href={item.path}
          className={`text-blackhover:bg-gray-100 flex w-[100%] max-w-[100%] cursor-pointer items-center justify-between ${
            subnav ? "mb-0" : "mb-3"
          } mt-3`}
          onClick={item.subNav && showSubnav}
        >
          <div className="flex w-[100%] max-w-[100%] items-center rounded-r-lg">
            <div className="w-[17%] rounded-2xl">
              <h1 className="ml-4">1</h1>
            </div>
            <div className="ml-1 w-[75%] max-w-[100%] p-[2px]">
              {item.title}
            </div>
            <div className="">
              {item.subNav &&
                (subnav ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />)}
            </div>
          </div>
        </Link>

        {/* sub menu */}
        {subnav && (
          <div
            className="rounded-2xl shadow-inner"
            style={{
              backgroundImage: `linear-gradient(to right, #31B9ED 17%, #F7F7F7 17%)`,
            }}
          >
            {item.subNav.map((subItem: any, index: any) => (
              <Link
                className="mb-1 flex max-w-[100%] cursor-pointer items-center rounded-2xl text-black"
                href={subItem.path}
                key={index}
              >
                <div className="w-[17%] rounded-2xl">
                  <h1 className="ml-2">{subItem.subBab}</h1>
                </div>
                <div className="ml-2 w-[80%] max-w-[100%] px-[1px]">
                  {subItem.title}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarLink;
