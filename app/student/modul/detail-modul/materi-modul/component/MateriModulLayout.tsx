"use client";
import React, { ReactNode, useState } from "react";
import SideTopbarMateriModul from "./nav/SideTopBarMateriModul";

interface MateriModulLayoutProps {
  children?: ReactNode;
}

const MateriModulLayout = ({ children }: MateriModulLayoutProps) => {
  const [sidebar, setSidebar] = useState(false);

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
      />
      <div
        className={`${
          sidebar ? "w-[calc(100%-256px)]" : "w-[100%] "
        } max-w-[100%] relative ${
          sidebar ? "left-64 top-12" : "left-0 top-12"
        } z-10 transition-all`}
      >
        <div className="px-10 pt-5 pb-10 bg-pl-BackgroundUserDashboard">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MateriModulLayout;
