"use client";
import ReviewJawabanComponent from "@/app/student/_components/review-jawaban/ReviewJawaban";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizReview } from "@/hooks/quiz/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TReviewJawabanQuizParams } from "@/types/uji-kemampuan";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";

const Page = ({ params }: { params: TReviewJawabanQuizParams }) => {
  const {
    data,
    isLoading: isLoadingQuizReview,
    isError: isErrorQuizReview,
  } = useGetQuizReview(params.quiz_submission_uuid, params.quiz_uuid, 2);
  const dataQuizReview = data?.data!;
  const prevButtonText = "list pretest";
  const prevButtonURL = `/student/uji-kemampuan/pretest/${params.module_id}/daftar-pretest/${params.sub_module_uuid}`;
  const finishButtonURL = `/student/uji-kemampuan/pretest/${params.module_id}/daftar-pretest/${params.sub_module_uuid}/deskripsi-pretest/${params.quiz_uuid}`;

  console.log(dataQuizReview);

  if (isLoadingQuizReview) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizReview) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} fontSize="12px" />
      <section className="relative p-4 md:p-5">
        <ReviewJawabanComponent
          props={{
            dataQuizReview,
            prevButtonText,
            prevButtonURL,
            finishButtonURL,
          }}
        />
      </section>
    </>
  );
};

export default Page;
