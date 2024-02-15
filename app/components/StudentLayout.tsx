// Import necessary modules
import React, { ReactNode } from "react";
import Sidebar from "./nav/SideTopbarStudentDashboad";
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
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <div className="bg-pl-BackgroundUserDashboard mt-[65px]">
        {/* <Breadcrumbs widthReduction={"54px"} /> */}
        {menuPage === "modul" && <Breadcrumbs widthReduction={"54px"} />}
        <Container
          fixed
          className="mt-[30px] bg-pl-BackgroundUserDashboard pr-[10px] ml-5"
        >
          {children}
        </Container>
      </div>
    </Box>
  );
};

export default StudentLayout;
