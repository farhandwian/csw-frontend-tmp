"use client";

import Studentlayout from "@/app/student/components/StudentLayout";
import TableNilai from "@/app/student/modul/detail-modul/nilai/component/TableNilai";
import React, { useState } from "react";
import ModulFAB from "@/app/student/modul/detail-modul/latihan-soal/_components/ModulFAB";

const page = () => {
  const [alignment, setAlignment] = useState("nilai");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Studentlayout isBreadCrumb={true}>
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
