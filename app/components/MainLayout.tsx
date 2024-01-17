import React, { ReactNode } from "react";
import Topnav from "./nav/Topnav";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <main>
      <Topnav />
      <div className="container bg-gray-50 overflow-hidden">{children}</div>
    </main>
  );
};

export default MainLayout;
