"use client";

import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import ReviewJawabanComponent from "@/app/student/_components/review-jawaban/ReviewJawaban";
import ModulFAB from "@/app/student/modul/detail-modul/[sub_modul_uuid]/_components/ModulFAB";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizReview } from "@/hooks/quiz/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TReviewJawabanQuizParams } from "@/types/modul";

const Page = ({ params }: { params: TReviewJawabanQuizParams }) => {
  const {
    data,
    isLoading: isLoadingQuizReview,
    isError: isErrorQuizReview,
  } = useGetQuizReview(
    params.quiz_submission_uuid,
    params.quiz_uuid,
    params.test_type_id,
  );

  console.log(params.quiz_submission_uuid);
  const dataQuizReview = data?.data!;
  const prevButtonText = "Modul Home";
  const prevButtonURL = `/student/modul/detail-modul/${params.sub_modul_uuid}`;
  const finishButtonURL = `/student/modul/detail-modul/${params.sub_modul_uuid}/nilai`;

  console.log(dataQuizReview);

  if (isLoadingQuizReview) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizReview) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} paramsIndexPosition={[8]} />
      <section className="relative p-4 md:p-5">
        <ModulFAB modulUUID={params.sub_modul_uuid}></ModulFAB>
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
