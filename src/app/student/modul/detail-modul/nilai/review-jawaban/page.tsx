"use client";

import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import {
  quiz2,
  reviewJawaban,
} from "@/app/student/_components/review-jawaban/DummyData";
import ReviewJawabanComponent from "@/app/student/_components/review-jawaban/ReviewJawaban";
import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import React, { useState } from "react";

const Page = () => {
  const [alignment, setAlignment] = useState("nilai");

  function onClickModulHome() {}

  function onClickFinish() {}

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
        <ModulFAB></ModulFAB>
        <ReviewJawabanComponent quiz={quiz2} reviewJawaban={reviewJawaban} />
      </section>
    </>
  );
};

export default Page;
