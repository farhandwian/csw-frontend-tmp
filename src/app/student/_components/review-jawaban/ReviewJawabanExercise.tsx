"use client";

import InformationTable from "@/app/student/_components/review-jawaban/InformationTableReviewJawabanExercise";
import Pembahasan from "@/app/student/_components/review-jawaban/Pembahasan";
import BlueButton from "@/components/Button/BlueButton";
import SubmitButton from "@/components/Button/GreenButton";
import { TExerciseReview } from "@/types/exercise";
import Image from "next/image";
import { Link as LinkReactScroll } from "react-scroll";

import Link from "next/link";
import { cleanHtmlContent } from "@/lib/utils/CleanHtmlContent";
import { grey } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

interface ReviewJawabanProps {
  dataExerciseReview: TExerciseReview;
  prevButtonText: string;
  prevButtonURL: string;
  finishButtonURL: string;
}

const ReviewJawaban = ({ props }: { props: ReviewJawabanProps }) => {
  const [isShow, setIsShow] = useState(false);

  function isAnswerCorrect(userAnswer?: number, rightAnswer?: number) {
    if (userAnswer == rightAnswer) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="relative ">
      <div className="mb-3 flex justify-between">
        <div className="w-full md:w-[75%]">
          <InformationTable dataExerciseReview={props.dataExerciseReview} />
          {/* awal section soal */}
          {props.dataExerciseReview.questions.map((question, index) => (
            <div key={index} id={`soal-${question.id}`}>
              <div className="mb-1">
                {/* awal section informasi kuis */}
                <div className="mb-3 inline-flex rounded-2xl border-2 bg-white md:mb-5">
                  <div className="flex p-3">
                    <div className="mr-3">
                      <p className="text-2xs font-semibold text-[#9ca3af] md:text-sm">
                        PERTANYAAN
                      </p>
                      <p className="text-2xs font-semibold leading-normal text-[#64748b] md:text-[.9375rem]">
                        NOMOR {index + 1}
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
                        {question.status}
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
                        {question.mark}
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
                <div className="w-[100%] rounded-2xl border-2 bg-white p-3 text-justify text-2xs md:p-4 md:text-sm">
                  <h2 className="mb-2">
                    <div
                      className="prose"
                      dangerouslySetInnerHTML={{
                        __html: cleanHtmlContent(question.question),
                      }}
                    ></div>
                  </h2>
                  <div className="">
                    {question.options?.map((option, index) => (
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
                                    {/* letter choice */}
                                    <div className="mt-[2px]">
                                      {String.fromCharCode(97 + index)}
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[25px] w-[2px] bg-pl-GrayDefault"></div>
                                <div className="m-auto ml-3 inline-block pr-2 text-justify">
                                  <div
                                    className="prose"
                                    dangerouslySetInnerHTML={{
                                      __html: cleanHtmlContent(option.text),
                                    }}
                                  ></div>
                                </div>
                              </div>
                              {option.id === question.user_answer ? (
                                <>
                                  <div className="my-auto hidden px-3 text-green-400 md:block">
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
                                    {/* letter choice */}
                                    <div className="mt-[2px]">
                                      {String.fromCharCode(97 + index)}
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[25px] w-[2px] bg-pl-GrayDefault"></div>
                                <div className="m-auto ml-3 inline-block pr-2 text-justify">
                                  <div
                                    className="prose"
                                    dangerouslySetInnerHTML={{
                                      __html: cleanHtmlContent(option.text),
                                    }}
                                  ></div>
                                </div>
                              </div>

                              {option.id === question.right_answer && (
                                <>
                                  <div className="my-auto hidden px-3 text-green-400 md:block">
                                    jawaban yang benar
                                  </div>
                                </>
                              )}
                              {option.id === question.user_answer && (
                                <>
                                  <div className="my-auto hidden px-3 text-red-300 md:block">
                                    jawaban anda
                                  </div>
                                </>
                              )}
                            </div>
                          </>
                        )}
                      </>
                    ))}
                  </div>
                </div>
                {/* akhir section soal dan jawaban */}
              </div>
              <Pembahasan
                jawaban={question.right_answer_text}
                pembahasan={question.explanation}
              />
            </div>
          ))}

          {/* akhir section soal */}

          <div className="mt-3 flex justify-between">
            <Link href={props.prevButtonURL}>
              <BlueButton className=" ml-2 bg-pl-RoyalBlue text-white">
                {" "}
                <h1 className="text-2xs md:text-sm">{props.prevButtonText}</h1>
              </BlueButton>
            </Link>

            <Link href={props.finishButtonURL}>
              <SubmitButton className="mx-0 bg-pl-GreenButton text-white">
                <h1 className="text-2xs md:text-sm">Finish Review</h1>
              </SubmitButton>
            </Link>
          </div>
        </div>
        {/* mode desktop */}
        <div className="hidden min-w-[230px] md:relative md:block">
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
                    {props.dataExerciseReview.topic} -{" "}
                    {props.dataExerciseReview.modul}
                  </h3>
                </div>
              </div>

              {/* content navigasi soal */}
              <div className="flex justify-center py-3">
                <div className="grid max-h-[17rem] w-[90%] grid-cols-5 gap-2 overflow-y-scroll pr-2 scrollbar-thin">
                  {props.dataExerciseReview.questions.map((question, index) => (
                    <LinkReactScroll
                      to={`soal-${question.id}`}
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
        {/* mode mobile */}
        <div className="md:hidden">
          <div
            onClick={() => setIsShow(!isShow)}
            className={`fixed right-0 top-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-l-md bg-gray-300 p-1`}
          >
            <div className="relative ml-2">
              <ArrowBackIosIcon sx={{ color: grey[400] }} />
            </div>
          </div>
          <div
            className={`${isShow ? "block" : "hidden"} fixed right-1 top-[105px] z-50`}
          >
            {/* <div
            onClick={() => setIsShow(false)}
            className="cursor-pointer p-3 text-left"
          >
            <CloseIcon />
          </div> */}
            <div className=" w-[92%] rounded-md border-2 bg-white">
              {/* header navigasi soal */}
              <div className="flex p-1 shadow-md">
                <div>
                  <Image
                    width={35}
                    height={35}
                    src="/img/uji-kemampuan/ic_navigation.png"
                    className={`inline-block`}
                    alt="Logo CSW"
                  />
                </div>

                <div className="ml-3 text-xs">
                  <h2>NAVIGASI LATIHAN</h2>
                  <h3 className="text-2xs">
                    {props.dataExerciseReview.topic} -{" "}
                    {props.dataExerciseReview.modul}
                  </h3>
                </div>
              </div>

              {/* content navigasi soal */}
              <div className="flex justify-center py-1">
                <div className="grid max-h-[12rem] w-[90%] grid-cols-5 gap-1 overflow-y-scroll pr-1 scrollbar-thin">
                  {props.dataExerciseReview.questions.map((question, index) => (
                    <LinkReactScroll
                      to={`soal-${question.id}`}
                      key={index}
                      className={`flex h-[40px] cursor-pointer items-center justify-center rounded-sm border-2 ${isAnswerCorrect(question.user_answer, question.right_answer) ? "bg-green-300" : "bg-red-300"}`}
                      offset={-70}
                    >
                      <h1 className="m-auto text-xs">{index + 1}</h1>
                    </LinkReactScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewJawaban;
