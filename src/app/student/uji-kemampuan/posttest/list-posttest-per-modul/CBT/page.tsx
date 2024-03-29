"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CBT from "@/app/student/_components/CBT/CBT";
import { quizDikit } from "@/app/student/_components/CBT/dummyData/data";
import React, { useState } from "react";

const quiz = quizDikit;

const Page = () => {
  return (
    <>
      <section className="relative w-[100%] p-4 md:p-5">
        <CBT quiz={quiz} />
      </section>
    </>
  );
};

export default Page;
