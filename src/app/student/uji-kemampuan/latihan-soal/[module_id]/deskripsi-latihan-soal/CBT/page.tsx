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
import { TCBTParams } from "@/types/uji-kemampuan";
import { useRouter } from "next/navigation";

// const exercise = exerciseDikit;

const Page = ({ params }: { params: TCBTParams }) => {
  const {
    data,
    isLoading: isLoadingExerciseContent,
    isError: isErrorExerciseContent,
    refetch,
  } = useGetExerciseDetail(params.exercise_uuid);

  console.log(data);
  const router = useRouter();
  const { mutate, status } = useAddExerciseSubmission();

  if (isLoadingExerciseContent) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorExerciseContent) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  const dataExerciseContent = data?.data!;

  if (status === "success") {
    router.replace(
      `/student/uji-kemampuan/posttest/${params.module_id}/daftar-posttest/${params.sub_module_uuid}/deskripsi-posttest/${params.exercise_uuid}/after-test/${dataExerciseContent.topic}`,
    );
    refetch(); // Refetch data whenever the router changes
  }
  return (
    <>
      <section className="relative w-[100%] p-4 md:p-5">
        <CBT
          exercise={dataExerciseContent}
          mutate={mutate}
          status={status}
          router={router}
        />
      </section>
    </>
  );
};

export default Page;
