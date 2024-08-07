"use client";
import CBT from "@/app/student/_components/CBT/CBT";
import { testTypeIDPretest } from "@/app/student/constant";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useAddQuizSubmission, useGetQuizContent } from "@/hooks/quiz/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TCBTQuizParams } from "@/types/uji-kemampuan";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: TCBTQuizParams }) => {
  console.log(params.quiz_uuid);
  const {
    data,
    isLoading: isLoadingQuizContent,
    isError: isErrorQuizContent,
    refetch,
  } = useGetQuizContent(params.quiz_uuid, testTypeIDPretest);

  console.log(data);
  const router = useRouter();
  const { mutate, status } = useAddQuizSubmission();

  if (isLoadingQuizContent) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizContent) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  const dataQuizContent = data?.data!;

  if (status === "success") {
    router.replace(
      `/student/uji-kemampuan/pretest/${params.module_id}/daftar-pretest/${params.sub_module_uuid}/deskripsi-pretest/${params.quiz_uuid}/after-test/${dataQuizContent.topic}`,
    );
    refetch(); // Refetch data whenever the router changes
  }
  return (
    <>
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
