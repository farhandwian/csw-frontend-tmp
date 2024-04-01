"use client";

import {
  quiz2 as quiz,
  reviewJawaban2 as reviewJawaban,
} from "@/app/student/_components/review-jawaban/DummyData";
import ReviewJawabanComponent from "@/app/student/_components/review-jawaban/ReviewJawaban";

const Page = () => {
  function onClickModulHome() {}

  function onClickFinish() {}

  return (
    <>
      <section className="relative p-4 md:p-5">
        <ReviewJawabanComponent quiz={quiz} reviewJawaban={reviewJawaban} />
      </section>
    </>
  );
};

export default Page;
