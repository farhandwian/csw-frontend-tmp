import React from "react";
import Sidebar from "../components/nav/Sidebar_test";
import NavbarStudent from "../components/nav/NavbarStudent";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div>
        <NavbarStudent />
      </div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
