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
        className="rounded-lg h-fit"
        style={{
          backgroundImage: `linear-gradient(to right, #127CA6 10%, #F7F7F7 10%)`,
          overflowWrap: "break-word",
        }}
      >
        {/* menu utama */}
        <Link
          href={item.path}
          className={`flex items-center justify-between  h-fit max-w-[100%] text-blackhover:bg-gray-100 cursor-pointer ${
            subnav ? "mb-0" : "mb-3"
          } mt-3`}
          onClick={item.subNav && showSubnav}
        >
          <div
            className="flex items-center rounded-r-lg h-fit max-w-[100%]"
            style={{
              overflowWrap: "break-word",
            }}
          >
            <div className="w-[2rem] rounded-lg ">
              <h1 className="ml-2">1</h1>
            </div>
            <div>{item.title}</div>
          </div>
          <div className="">
            {item.subNav &&
              (subnav ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />)}
          </div>
        </Link>

        {/* sub menu */}
        {subnav && (
          <div
            className="rounded-lg"
            style={{
              backgroundImage: `linear-gradient(to right, #31B9ED 10%, #F7F7F7 10%)`,
            }}
          >
            {item.subNav.map((subItem: any, index: any) => (
              <Link
                className=" text-black flex items-center rounded-lg hover:bg-gray-200 cursor-pointer"
                href={subItem.path}
                key={index}
              >
                <div className="w-[2rem] rounded-lg">
                  <h1 className="ml-2">1.1</h1>
                </div>
                <span className="">{subItem.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarLink;
