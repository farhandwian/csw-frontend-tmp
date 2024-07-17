"use client";
import ReviewJawabanComponent from "@/app/student/_components/review-jawaban/ReviewJawabanExercise";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetExerciseReview } from "@/hooks/exercise/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TReviewJawabanExerciseParams } from "@/types/uji-kemampuan";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";

const Page = ({ params }: { params: TReviewJawabanExerciseParams }) => {
  const {
    data,
    isLoading: isLoadingExerciseReview,
    isError: isErrorExerciseReview,
  } = useGetExerciseReview(params.exercise_submission_uuid);
  const dataExerciseReview = data?.data!;
  const prevButtonText = "list latihan-soal";
  const prevButtonURL = `/student/uji-kemampuan/latihan-soal/${params.module_id}`;
  const finishButtonURL = `/student/uji-kemampuan/latihan-soal/${params.module_id}/deskripsi-latihan-soal/${params.exercise_uuid}`;

  console.log(dataExerciseReview);

  if (isLoadingExerciseReview) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorExerciseReview) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} fontSize="12px" />
      <section className="relative p-4 md:p-5">
        <ReviewJawabanComponent
          props={{
            dataExerciseReview,
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
