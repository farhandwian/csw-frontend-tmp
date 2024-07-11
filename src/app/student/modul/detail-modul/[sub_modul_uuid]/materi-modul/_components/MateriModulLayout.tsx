"use client";
import { ReactNode, useState } from "react";
import SideTopbarMateriModul from "./nav/SideTopBarMateriModul";
import { TMateriModul } from "@/types/modul";
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
          sidebar ? "w-[calc(100%-256px)]" : "w-[100%] "
        } relative max-w-[100%] ${
          sidebar ? "left-64 top-6" : "left-0 top-6"
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
