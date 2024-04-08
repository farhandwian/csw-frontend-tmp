"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CBT from "@/app/student/_components/CBT/CBT";
import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import {
  quizDikit,
  quizBanyak,
} from "@/app/student/_components/CBT/dummyData/data";
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
        {/* <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB> */}
        <CBT quiz={quiz} />
      </section>
    </>
  );
};

export default Page;
