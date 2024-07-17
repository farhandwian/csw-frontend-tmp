"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CBT from "@/app/student/_components/CBTExercise/CBT";
// import { exerciseDikit } from "@/app/student/_components/CBT/dummyData/data";
import React, { useState } from "react";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import {
  useAddExerciseSubmission,
  useGetExerciseDetail,
} from "@/hooks/exercise/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TCBTExerciseParams } from "@/types/uji-kemampuan";
import { useRouter } from "next/navigation";

// const exercise = exerciseDikit;

const Page = ({ params }: { params: TCBTExerciseParams }) => {
  const {
    data,
    isLoading: isLoadingExerciseDetail,
    isError: isErrorExerciseDetail,
    refetch,
  } = useGetExerciseDetail(params.exercise_uuid);

  console.log(data);
  const router = useRouter();
  const { mutate, status } = useAddExerciseSubmission();

  if (isLoadingExerciseDetail) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorExerciseDetail) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  const dataExerciseDetail = data?.data!;

  if (status === "success") {
    router.replace(
      `/student/uji-kemampuan/latihan-soal/${params.module_id}/deskripsi-latihan-soal/${params.exercise_uuid}/after-test/${dataExerciseDetail.title}`,
    );
    refetch(); // Refetch data whenever the router changes
  }
  return (
    <>
      <section className="relative w-[100%] p-4 md:p-5">
        <CBT
          exercise={dataExerciseDetail}
          mutate={mutate}
          status={status}
          router={router}
        />
      </section>
    </>
  );
};

export default Page;
