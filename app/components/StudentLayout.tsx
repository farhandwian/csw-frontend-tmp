import React, { ReactNode } from "react";
import Topnav from "./nav/Topnav";
import Sidebar from "./nav/Sidebar";

interface StudentLayoutProps {
  children: ReactNode;
  title?: string;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pt-12 ml-0 md:ml-64">
        {" "}
        {/* ml-0 pada mode mobile, ml-64 pada mode desktop */}
        {children}
      </div>
    </div>
  );
};

export default StudentLayout;
