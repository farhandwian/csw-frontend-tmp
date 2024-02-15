import SearchIcon from "@mui/icons-material/Search";
import Breadcrumbs from "@/app/student/components/Breadcrumbs";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import SearchModal from "../SearchModal";
import { useState } from "react";

interface SidebarMateriModulProps {
  sidebar: boolean;
  showSidebar: () => void;
  subnav: boolean;
  showSubnav: () => void;
}

const SideTopbarMateriModul = ({
  sidebar,
  showSidebar,
  subnav,
  showSubnav,
}: SidebarMateriModulProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="text-md">
      {/* TOPBAR */}
      <div className="fixed w-[100%] h-12 z-20">
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
          <button onClick={handleOpen}>
            <SearchIcon className="mr-4" />
          </button>
          <SearchModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </div>
      </div>

      {/* END TOPBAR */}
      {/* SIDEBAR */}
      <nav
        className={`overflow-x-hidden text-wrap bg-white w-64 h-screen fixed top-12 transition-all z-10 shadow-lg ${
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
    </div>
  );
};

export default SideTopbarMateriModul;
