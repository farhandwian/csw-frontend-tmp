"use client";
import GlobalStyles from "@/app/Globals.module.css";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import CBT from "@/app/student/_components/CBT/CBT";
import { quizBanyak } from "@/app/student/modul/detail-modul/latihan-soal/dummyData/data";
import React, { useState } from "react";

const quiz = quizBanyak;

const Page = () => {
  const [alignment, setAlignment] = useState("modul_home");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />

      <section className="relative w-[100%] p-4 md:p-5">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-tp-Gunmetal`}
        >
          Latihan Modul Materi 1 Pancasila
        </h1>
        <CBT quiz={quiz} />
      </section>
    </>
  );
};

export default Page;
