"use client";

import InformationTable from "@/app/student/_components/review-jawaban/InformationTableReviewJawaban";
import Pembahasan from "@/app/student/_components/review-jawaban/Pembahasan";
import BlueButton from "@/components/Button/BlueButton";
import SubmitButton from "@/components/Button/GreenButton";
import { TQuizReview } from "@/types/quiz";
import Image from "next/image";
import { Link as LinkReactScroll } from "react-scroll";

import Link from "next/link";

interface ReviewJawabanProps {
  dataQuizReview: TQuizReview;
  prevButtonText: string;
  prevButtonLink: string;
  finishButtonLink: string;
}

const ReviewJawaban = ({ props }: { props: ReviewJawabanProps }) => {
  function isAnswerCorrect(userAnswer?: number, rightAnswer?: number) {
    if (userAnswer == rightAnswer) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="relative ">
      <div className="mb-3 flex">
        <div className="w-full md:w-[75%]">
          <InformationTable dataQuizReview={props.dataQuizReview} />
          {/* awal section soal */}
          {props.dataQuizReview.questions.map((question, index) => (
            <div key={index} id={`soal-${question.question_review_item.id}`}>
              <div className="mb-1">
                {/* awal section informasi kuis */}
                <div className="mb-3 inline-flex rounded-2xl border-2 bg-white md:mb-5">
                  <div className="flex p-3">
                    <div className="mr-3">
                      <p className="text-2xs font-semibold text-[#9ca3af] md:text-sm">
                        PERTANYAAN
                      </p>
                      <p className="text-2xs font-semibold leading-normal text-[#64748b] md:text-[.9375rem]">
                        NOMOR {question.question_review_item.no_soal}
                      </p>
                    </div>

                    <div className="ml-2 h-[100%] w-[2px] bg-[#E5E7EB] md:block"></div>
                  </div>
                  <div className="hidden p-3 md:flex">
                    <div className="mr-3">
                      <p className="text-2xs font-semibold text-[#9ca3af] md:text-sm">
                        STATUS
                      </p>
                      <p className="text-2xs font-semibold leading-normal text-[#64748b] md:text-[.9375rem]">
                        {question.question_review_item.status}
                      </p>
                    </div>

                    <div className="ml-2 h-[100%] w-[2px] bg-[#E5E7EB] md:block"></div>
                  </div>
                  <div className="flex p-3">
                    <div className="mr-3">
                      <p className="text-2xs font-semibold text-[#9ca3af] md:text-sm">
                        Point
                      </p>
                      <p className="text-2xs font-semibold leading-normal text-[#64748b] md:text-[.9375rem]">
                        {question.question_review_item.mark}
                      </p>
                    </div>

                    <div className="ml-2 h-[100%] w-[2px] bg-[#E5E7EB] md:block"></div>
                  </div>

                  <div className="flex p-3">
                    <div className="mr-3">
                      <p className="text-2xs font-semibold text-[#9ca3af] md:text-sm">
                        JAWABAN
                      </p>
                      <p className="text-2xs font-semibold leading-normal text-[#64748b] md:text-[.9375rem]">
                        {question.user_answer === question.right_answer
                          ? "benar"
                          : "salah"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* informasi soal */}

                {/* akhir section informasi kuis */}

                {/* awal section soal dan jawaban */}
                <div className="w-[100%] rounded-2xl border-2 bg-white p-3 text-2xs md:p-4 md:text-sm">
                  <h2 className="mb-2">
                    {question.question_review_item.question}
                  </h2>
                  <div className="">
                    {question.question_review_item.options.map(
                      (option, index) => (
                        <>
                          {/* jawabannya benar */}
                          {question.user_answer === question.right_answer ? (
                            <>
                              <div
                                key={option.id}
                                className={`mb-2 flex justify-between rounded-lg border-2  ${
                                  option.id === question.user_answer
                                    ? "border-green-400"
                                    : ""
                                }`}
                              >
                                <div className="flex ">
                                  <div
                                    className={`inline-block rounded-l-sm px-3  ${
                                      option.id === question.user_answer
                                        ? "bg-green-400"
                                        : ""
                                    }`}
                                  >
                                    <div className="mt-[2px]">
                                      {option.letter}
                                    </div>
                                  </div>
                                  <div className="h-[25px] w-[2px] bg-pl-GrayDefault"></div>
                                  <div className="m-auto ml-3 inline-block text-left">
                                    {option.text}
                                  </div>
                                </div>
                                {option.id === question.user_answer ? (
                                  <>
                                    <div className="my-auto hidden px-3 md:block">
                                      jawaban anda benar
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </>
                          ) : (
                            // jawabannya salah
                            <>
                              <div
                                key={option.id}
                                className={`mb-2 flex justify-between rounded-lg border-2 ${
                                  option.id === question.right_answer
                                    ? "border-green-400"
                                    : ""
                                } ${
                                  option.id === question.user_answer
                                    ? "border-red-400"
                                    : ""
                                }`}
                              >
                                <div className="flex">
                                  <div
                                    className={` inline-block rounded-l-sm px-3 ${
                                      option.id === question.user_answer
                                        ? "bg-red-400"
                                        : ""
                                    } ${
                                      option.id === question.right_answer
                                        ? "bg-green-400"
                                        : ""
                                    }`}
                                  >
                                    <div className="mt-[2px]">
                                      {option.letter}
                                    </div>
                                  </div>
                                  <div className="h-[25px] w-[2px] bg-pl-GrayDefault"></div>
                                  <div className="m-auto ml-3 inline-block text-left">
                                    {option.text}
                                  </div>
                                </div>

                                {option.id === question.right_answer && (
                                  <>
                                    <div className="my-auto hidden px-3 md:block">
                                      jawaban yang benar
                                    </div>
                                  </>
                                )}
                                {option.id === question.user_answer && (
                                  <>
                                    <div className="my-auto hidden px-3 md:block">
                                      jawaban anda
                                    </div>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </>
                      ),
                    )}
                  </div>
                </div>
                {/* akhir section soal dan jawaban */}
              </div>
              <Pembahasan
                jawaban={question.right_answer_text}
                pembahasan={question.question_review_item.explanation}
              />
            </div>
          ))}

          {/* akhir section soal */}

          <div className="mt-3 flex justify-between">
            <Link href={props.prevButtonLink}>
              <BlueButton className=" ml-2 bg-pl-RoyalBlue text-white">
                {" "}
                <h1 className="text-2xs md:text-sm">{props.prevButtonText}</h1>
              </BlueButton>
            </Link>

            <Link href={props.finishButtonLink}>
              <SubmitButton className="mx-0 bg-pl-GreenButton text-white">
                <h1 className="text-2xs md:text-sm">Finish Review</h1>
              </SubmitButton>
            </Link>
          </div>
        </div>

        <div className="hidden md:relative md:block ">
          {/* section navigasi soal */}
          <div className="fixed right-4 top-20 md:sticky">
            <div className=" ml-2 mt-3 w-[92%] rounded-md border-2 bg-white">
              {/* header navigasi soal */}
              <div className="flex p-3 shadow-md">
                <div>
                  <Image
                    width={45}
                    height={45}
                    src="/img/uji-kemampuan/ic_navigation.png"
                    className={`inline-block`}
                    alt="Logo CSW"
                  />
                </div>

                <div className="ml-3">
                  <h2>NAVIGASI LATIHAN</h2>
                  <h3 className="text-xs">
                    {props.dataQuizReview.topic} - {props.dataQuizReview.modul}
                  </h3>
                </div>
              </div>

              {/* content navigasi soal */}
              <div className="flex justify-center py-3">
                <div className="grid max-h-[17rem] w-[90%] grid-cols-5 gap-2 overflow-y-scroll pr-2 scrollbar-thin">
                  {props.dataQuizReview.questions.map((question, index) => (
                    <LinkReactScroll
                      to={`soal-${question.question_review_item.id}`}
                      key={index}
                      className={`flex h-[55px] cursor-pointer items-center justify-center rounded-sm border-2 ${isAnswerCorrect(question.user_answer, question.right_answer) ? "bg-green-300" : "bg-red-300"}`}
                      offset={-70}
                    >
                      <h1 className="m-auto">{index + 1}</h1>
                    </LinkReactScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* akhir navigasi soal */}
        </div>
        {/* kotak merah untuk mode mobile */}
        {/* <div className="fixed right-0 top-[130px] z-[999999999]">
          <div className="h-7 w-7 bg-red-300"></div>
        </div> */}
      </div>
    </section>
  );
};

export default ReviewJawaban;
