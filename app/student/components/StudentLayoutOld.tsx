import React, { ReactNode } from "react";
import Sidebar from "./SideTopbarStudentDashboad";
import Breadcrumbs from "./Breadcrumbs";
import { Box, Container } from "@mui/material";

interface StudentLayoutProps {
  children: ReactNode;
  menuPage?: string;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({
  children,
  menuPage,
}) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="relative bg-pl-BackgroundUserDashboard mt-[65px]">
        {menuPage === "modul" && <Breadcrumbs widthReduction={"54px"} />}
        <Container
          fixed
          className="mt-[30px] bg-pl-BackgroundUserDashboard pr-[10px] ml-5"
        >
          {children}
        </Container>
      </div>
    </div>
  );
};

export default StudentLayout;
