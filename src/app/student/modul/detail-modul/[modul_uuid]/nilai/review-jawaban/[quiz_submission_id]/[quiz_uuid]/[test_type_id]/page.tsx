"use client";

import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import ReviewJawabanComponent from "@/app/student/_components/review-jawaban/ReviewJawaban";
import ModulFAB from "@/app/student/modul/detail-modul/[modul_uuid]/_components/ModulFAB";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizReview } from "@/hooks/quiz/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TReviewJawabanParams } from "@/types/modul";

const Page = ({ params }: { params: TReviewJawabanParams }) => {
  const {
    data,
    isLoading: isLoadingDetailQuiz,
    isError: isErrorDetailQuiz,
  } = useGetQuizReview(
    params.quiz_submission_id,
    params.quiz_uuid,
    params.test_type_id,
  );
  const dataQuizReview = data?.data!;
  const prevButtonText = "Modul Home";
  const prevButtonLink = `/student/modul/detail-modul/${params.modul_uuid}`;
  const finishButtonLink = `/student/modul/detail-modul/${params.modul_uuid}/nilai`;

  console.log(dataQuizReview);

  if (isLoadingDetailQuiz) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorDetailQuiz) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} paramsIndexPosition={[8]} />
      <section className="relative p-4 md:p-5">
        <ModulFAB modulUUID={params.modul_uuid}></ModulFAB>
        <ReviewJawabanComponent
          props={{
            dataQuizReview,
            prevButtonText,
            prevButtonLink,
            finishButtonLink,
          }}
        />
      </section>
    </>
  );
};

export default Page;
