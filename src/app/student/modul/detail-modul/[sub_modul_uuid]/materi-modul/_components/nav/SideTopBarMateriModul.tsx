import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import SearchModal from "../SearchModal";
import SubMenu from "./SubMenu";
import { useAppSelector } from "@/store";
import { TMateriModul } from "@/types/modul";

interface SidebarMateriModulProps {
  sidebar: boolean;
  showSidebar: () => void;
  subnav: boolean;
  showSubnav: () => void;
  dataMateriModul?: TMateriModul;
  activeSubSubject: number;
  setActiveSubSubject: (indexSubnav: number) => void;
}

const SideTopbarMateriModul = ({
  sidebar,
  showSidebar,
  subnav,
  showSubnav,
  dataMateriModul,
  activeSubSubject,
  setActiveSubSubject,
}: SidebarMateriModulProps) => {
  const isShowNavDashboard = useAppSelector(
    (state) => state.studentLayout.showNav,
  );
  const isMobile = useAppSelector((state) => state.studentLayout.isMobile);
  console.log(isMobile);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sidebarPosition = () => {
    console.log(isShowNavDashboard, sidebar);
    if (!isShowNavDashboard && sidebar) {
      return "left-0";
    } else if (isShowNavDashboard && sidebar) {
      return "left-56";
    } else if (isShowNavDashboard && !sidebar) {
      return "-left-full";
    } else if (!isShowNavDashboard && !sidebar) {
      return "-left-full";
    }
  };

  return (
    <div className="text-md">
      {/* TOPBAR */}
      <div
        className={`fixed z-20 h-8 ${isShowNavDashboard && !isMobile ? "w-[calc(100%-14rem)]" : "w-[100%]"} ${
          isShowNavDashboard && "right-0"
        } transition-all duration-[400ms]`}
      >
        <div className="flex h-8 w-[100%] items-center justify-between bg-white shadow-md">
          {/* hamburger button */}
          <div className="ml-4 mr-3 cursor-pointer" onClick={showSidebar}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </div>
          {/* Breadcrumbs */}
          <Breadcrumbs bgColor="#DCDCDC" isShadow={false} padding="5px" />
          <h2 className="mx-auto hidden md:block">
            {dataMateriModul?.sub_subject[activeSubSubject].name}
          </h2>
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
      {isMobile ? (
        <div
          className={`fixed left-0 top-6 z-30 h-full w-52 transform bg-white text-white transition-transform ${
            sidebar ? "translate-x-0" : "-translate-x-full"
          } md:relative md:w-64 md:translate-x-0`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2>Sidebar</h2>
              <button onClick={showSidebar}>
                <CloseIcon />
              </button>
            </div>
            <div className="mt-5 w-full max-w-[100%]">
              <SubMenu
                dataMateriModul={dataMateriModul}
                activeSubSubject={activeSubSubject}
                setActiveSubSubject={setActiveSubSubject}
              />
            </div>
          </div>
        </div>
      ) : (
        <nav
          className={`fixed top-24 z-10 h-screen w-64 overflow-x-hidden text-wrap border-r-2 bg-white shadow-lg transition-all ${sidebarPosition()}`}
          style={{ overflowWrap: "break-word" }}
        >
          <div className="p-3">
            <div className="mt-5 w-full max-w-[100%]">
              <SubMenu
                dataMateriModul={dataMateriModul}
                activeSubSubject={activeSubSubject}
                setActiveSubSubject={setActiveSubSubject}
              />
            </div>
          </div>
        </nav>
      )}

      {/* Overlay for mobile */}
      {isMobile && sidebar && (
        <div
          className="fixed inset-0 z-20 bg-[#121212] opacity-50 md:hidden"
          onClick={showSidebar}
        ></div>
      )}

      {/* END SIDEBAR */}
    </div>
  );
};

export default SideTopbarMateriModul;
