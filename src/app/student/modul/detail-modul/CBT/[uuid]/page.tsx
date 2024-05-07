"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CBT from "@/app/student/_components/CBT/CBT";
import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import {
  quizDikit as quiz,
  quizBanyak,
} from "@/app/student/_components/CBT/dummyData/data";
import React, { useState } from "react";
import { useGetQuizContent, useAddQuizSubmission } from "@/hooks/quiz/hook";
import Loading from "@/components/Loading";
import ErrorComponent from "@/components/Error";
import { errMessageDataFetching } from "@/lib/const";
import { toast } from "sonner";
import {
  TQuizContentResponse,
  typeQuiz,
  TAddQuizSubmissionPayload,
} from "@/types/quiz";
import { errMessagePostData, loadingMessage } from "@/lib/const";
import logger from "@/lib/logger";
import { TransformQuizToPayloadQuizSubmission } from "@/lib/utils/transform";
import { useRouter } from "next/navigation";
// const quiz = quizBanyak;

const Page = ({ params }: { params: { uuid: string } }) => {
  const {
    data,
    isLoading: isLoadingDetailQuiz,
    isError: isErrorDetailQuiz,
  } = useGetQuizContent(params.uuid, "Paket Soal");

  const router = useRouter();
  const { mutate, status } = useAddQuizSubmission();

  if (isLoadingDetailQuiz) {
    return <Loading>...Loading</Loading>;
  }
  if (isErrorDetailQuiz) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  const quiz = data?.data;

  if (status === "pending") {
    return <Loading>...Loading submit quiz submission</Loading>;
  }

  if (status === "error") {
    return <ErrorComponent>error submit quiz submission</ErrorComponent>;
  }

  // if (status === "idle") {
  //   return <ErrorComponent>...idle</ErrorComponent>;
  // }

  if (status === "success") {
    router.replace("/student/modul/detail-modul/after-test");
  }

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} paramsIndexPosition={[4]} />

      <section className="relative w-[100%] p-4 md:p-5">
        <CBT quiz={quiz} mutate={mutate} router={router} />
      </section>
    </>
  );
};

export default Page;
