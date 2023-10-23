import React, { ReactNode } from "react";
import Topnav from "./nav/Topnav";
import Sidebar from "./nav/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <main>
      <Topnav />
      <div className="container md:pt-[7%]">{children}</div>
    </main>
  );
};

export default MainLayout;
