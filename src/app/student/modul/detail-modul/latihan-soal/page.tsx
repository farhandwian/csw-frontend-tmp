"use client";
import GlobalStyles from "@/app/Globals.module.css";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import InformationQuiz from "@/app/student/modul/detail-modul/latihan-soal/_components/InformationQuiz";
import ModalSubmitModul from "@/app/student/modul/detail-modul/latihan-soal/_components/ModalSubmitModul";
import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import QuestionNavigation from "@/app/student/modul/detail-modul/latihan-soal/_components/QuestionNavigation";
import QuestionSection from "@/app/student/modul/detail-modul/latihan-soal/_components/QuestionSection";
import {
  Option,
  Quiz,
} from "@/app/student/modul/detail-modul/latihan-soal/_interface/interface";
import useTimer from "@/app/student/modul/detail-modul/latihan-soal/_hooks/useTimer";

import QuizController from "@/app/student/modul/detail-modul/latihan-soal/_components/QuizController";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  quizDikit,
  quizBanyak,
} from "@/app/student/modul/detail-modul/latihan-soal/dummyData/data";

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
        <QuizController quiz={quiz} />
      </section>
    </>
  );
};

export default Page;
