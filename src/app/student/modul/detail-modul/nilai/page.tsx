"use client";

import ModulFAB from "@/app/student/modul/detail-modul/latihan-soal/_components/ModulFAB";
import TableNilai from "@/app/student/modul/detail-modul/nilai/_components/TableNilai";
import React, { useState } from "react";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";

const Page = () => {
  const [alignment, setAlignment] = useState("nilai");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />

      <section className="relative p-4 md:p-5">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <TableNilai />
        <h1></h1>
      </section>
    </>
  );
};

export default Page;
