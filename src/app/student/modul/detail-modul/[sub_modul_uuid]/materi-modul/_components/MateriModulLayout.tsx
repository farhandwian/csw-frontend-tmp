"use client";
import { ReactNode, useEffect, useState } from "react";
import SideTopbarMateriModul from "./nav/SideTopBarMateriModul";
import { TMateriModul } from "@/types/modul";
import { AppDispatch } from "@/store";
import { setShowNav, setIsMobile } from "@/store/student/layout/layoutSlice";
import { useDispatch } from "react-redux";
interface MateriModulLayoutProps {
  children?: ReactNode;
  dataMateriModul?: TMateriModul;
  activeSubSubject: number;
  setActiveSubSubject: (indexSubnav: number) => void;
}

const MateriModulLayout = ({
  children,
  dataMateriModul,
  activeSubSubject,
  setActiveSubSubject,
}: MateriModulLayoutProps) => {
  // materi modul layout sidebar state
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const [showNavLocal, setShowNavLocal] = useState(true);
  const [isMobileLocal, setIsMobileLocal] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  dispatch(setShowNav(showNavLocal));

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNavLocal(false);
      setIsMobileLocal(true);
      dispatch(setShowNav(false));
      dispatch(setIsMobile(true));
    } else {
      setShowNavLocal(true);
      setIsMobileLocal(false);
      dispatch(setShowNav(true));
      dispatch(setIsMobile(false));
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobileLocal);
  return (
    <div className="bg-pl-BackgroundUserDashboard p-0 text-base">
      <SideTopbarMateriModul
        sidebar={sidebar}
        showSidebar={showSidebar}
        subnav={subnav}
        showSubnav={showSubnav}
        dataMateriModul={dataMateriModul}
        activeSubSubject={activeSubSubject}
        setActiveSubSubject={setActiveSubSubject}
      />
      <div
        className={`${
          sidebar && !isMobileLocal ? "w-[calc(100%-256px)]" : "w-[100%] "
        } relative max-w-[100%] ${
          sidebar && !isMobileLocal ? "left-64 top-6" : "left-0 top-6"
        } z-10 transition-all`}
      >
        <div className="bg-pl-BackgroundUserDashboard px-10 pb-10 pt-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MateriModulLayout;
