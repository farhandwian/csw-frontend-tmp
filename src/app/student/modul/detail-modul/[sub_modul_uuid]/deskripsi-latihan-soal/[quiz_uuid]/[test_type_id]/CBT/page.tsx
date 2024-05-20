"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CBT from "@/app/student/_components/CBT/CBT";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useAddQuizSubmission, useGetQuizContent } from "@/hooks/quiz/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TCBTParams } from "@/types/modul";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = ({ params }: { params: TCBTParams }) => {
  const {
    data,
    isLoading: isLoadingQuizContent,
    isError: isErrorQuizContent,
    refetch,
  } = useGetQuizContent(params.quiz_uuid, params.test_type_id);

  const router = useRouter();
  const { mutate, status } = useAddQuizSubmission();

  // useEffect(() => {
  //   if (router) {
  //     refetch(); // Refetch data whenever the router changes
  //   }
  // }, [router, refetch]);

  if (isLoadingQuizContent) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizContent) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  const dataQuizContent = data?.data!;

  // if (status === "idle") {
  //   return <ErrorComponent>...idle</ErrorComponent>;
  // }

  if (status === "success") {
    // router.replace(
    //   `/student/modul/detail-modul/${params.sub_modul_uuid}/deskripsi-latihan-soal/${params.quiz_uuid}/${params.test_type_id}/after-test/${dataQuizContent.topic}`,
    // );
    router.replace(
      `/student/modul/detail-modul/${params.sub_modul_uuid}/deskripsi-latihan-soal/${params.quiz_uuid}/${params.test_type_id}/after-test/${dataQuizContent.topic}`,
    );

    refetch(); // Refetch data whenever the router changes
  }

  return (
    <>
      {/* <Breadcrumbs widthReduction={"54px"} paramsIndexPosition={[6]} /> */}

      <section className="relative w-[100%] p-4 md:p-5">
        <CBT
          quiz={dataQuizContent}
          mutate={mutate}
          status={status}
          router={router}
        />
      </section>
    </>
  );
};

export default Page;
