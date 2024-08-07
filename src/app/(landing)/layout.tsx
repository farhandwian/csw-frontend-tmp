"use client";
import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";
interface LandingLayoutProps {
  children?: ReactNode;
}
const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <Navbar />
      <section className="relative top-[3.75rem] bg-[#FAF8FD]">
        {children}
      </section>
    </>
  );
};

export default LandingLayout;
