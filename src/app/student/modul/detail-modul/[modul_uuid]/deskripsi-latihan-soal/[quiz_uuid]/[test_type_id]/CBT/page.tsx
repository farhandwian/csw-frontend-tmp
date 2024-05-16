"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import CBT from "@/app/student/_components/CBT/CBT";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useAddQuizSubmission, useGetQuizContent } from "@/hooks/quiz/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TCBTParams } from "@/types/modul";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: TCBTParams }) => {
  const {
    data,
    isLoading: isLoadingQuizContent,
    isError: isErrorQuizContent,
  } = useGetQuizContent(params.quiz_uuid, params.test_type_id);

  const router = useRouter();
  const { mutate, status } = useAddQuizSubmission();

  if (isLoadingQuizContent) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizContent) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  const dataQuizContent = data?.data!;

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
    router.replace(
      `/student/modul/detail-modul/${params.modul_uuid}/deskripsi-latihan-soal/${params.quiz_uuid}/${params.test_type_id}/after-test/${dataQuizContent.topic}`,
    );
  }

  return (
    <>
      {/* <Breadcrumbs widthReduction={"54px"} paramsIndexPosition={[6]} /> */}

      <section className="relative w-[100%] p-4 md:p-5">
        <CBT quiz={dataQuizContent} mutate={mutate} router={router} />
      </section>
    </>
  );
};

export default Page;
