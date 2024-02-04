"use client";

import Studentlayout from "@/app/components/StudentLayout";
import GlobalStyles from "@/app/Globals.module.css";
import TableNilai from "@/app/student/modul/component/TableNilai";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ModulFAB from "@/app/student/modul/component/ModulFAB";

const page = () => {
  const [alignment, setAlignment] = useState("nilai");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Studentlayout>
      <ModulFAB
        alignment={alignment}
        handleChange={(e) => handleChange(e, alignment)}
      ></ModulFAB>
      <section className="relative">
        <TableNilai />
        <h1></h1>
      </section>
    </Studentlayout>
  );
};

export default page;
