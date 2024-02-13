import SearchIcon from "@mui/icons-material/Search";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SidebarMateriModul = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      {/* TOPBAR */}
      <div className="flex items-center justify-between bg-white h-12 shadow-md">
        {/* hamburger button */}
        <div className="ml-4 mr-3 cursor-pointer" onClick={showSidebar}>
          {sidebar ? (
            <AiIcons.AiOutlineClose color={"black"} />
          ) : (
            <FaIcons.FaBars color={"black"} />
          )}
        </div>
        {/* Breadcrumbs */}
        <Breadcrumbs
          fontSize="10px"
          bgColor="#DCDCDC"
          isShadow={false}
          padding="5px"
        />
        <h2 className="mx-auto">Pengertian Pancasila</h2>
        <SearchIcon className="mr-4" />
      </div>
      {/* END TOPBAR */}
      {/* SIDEBAR */}
      <nav
        className={`bg-white w-64 h-screen fixed top-12 transition-all z-10 shadow-lg ${
          sidebar ? "left-0" : "-left-full"
        }`}
        style={{ overflowWrap: "break-word" }}
      >
        <div className="p-3">
          <div className="w-full max-w-[100%] mt-5">
            {SidebarData.map((item: any, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </div>
        </div>
      </nav>
      {/* END SIDEBAR */}
    </>
  );
};

export default SidebarMateriModul;
