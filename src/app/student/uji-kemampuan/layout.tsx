"use client";
import UjiKemampuanNavigationModul from "@/app/student/uji-kemampuan/_components/UjiKemampuanNavigationModul";
import UjiKemampuanNavigationTest from "@/app/student/uji-kemampuan/_components/UjiKemampuanNavigationTest";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";

import { ReactNode } from "react";

interface UjiKemampuanProps {
  children?: ReactNode;
}

const UjiKemampuanLayout = ({ children }: UjiKemampuanProps) => {
  return (
    <>
      <UjiKemampuanNavigationTest />
      <UjiKemampuanNavigationModul />

      <Breadcrumbs widthReduction={"54px"} fontSize="7px" />
      <div>{children}</div>
    </>
  );
};

export default UjiKemampuanLayout;
