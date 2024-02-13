"use client";
import React, { ReactNode } from "react";
import SidebarMateriModul from "./nav/SidebarMateriModul";
import { ChildCare } from "@mui/icons-material";

interface materiModulLayoutProps {
  children?: ReactNode;
}

const materiModulLayout = ({ children }: materiModulLayoutProps) => {
  return (
    <div className="bg-pl-BackgroundUserDashboard p-0 text-base">
      <SidebarMateriModul />
      {children}
    </div>
  );
};

export default materiModulLayout;
