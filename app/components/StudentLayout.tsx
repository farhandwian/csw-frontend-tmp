// Import necessary modules
import React, { ReactNode } from "react";
import Topnav from "./nav/Topnav";

import Sidebar from "./nav/Sidebar";
import { SlArrowRight } from "react-icons/sl";

// Use next/navigation instead of next/router
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "./Breadcrumbs";
import Link from "@mui/material/Link";

import { Box, Container } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

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
