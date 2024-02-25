import React, { ReactNode } from "react";
import Sidebar from "./SideTopbarStudentDashboadOld";
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
      <div className="relative mt-[65px] bg-pl-BackgroundUserDashboard">
        {menuPage === "modul" && <Breadcrumbs widthReduction={"54px"} />}
        <Container
          fixed
          className="ml-5 mt-[30px] bg-pl-BackgroundUserDashboard pr-[10px]"
        >
          {children}
        </Container>
      </div>
    </div>
  );
};

export default StudentLayout;
