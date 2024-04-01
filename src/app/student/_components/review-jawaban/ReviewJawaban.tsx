"use client";

import GlobalStyles from "@/app/Globals.module.css";
import InformationTable from "@/app/student/_components/review-jawaban/InformationTableReviewJawaban";
import BlueButton from "@/components/Button/BlueButton";
import SubmitButton from "@/components/Button/GreenButton";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import {
  Quiz,
  ReviewJawaban,
} from "@/app/student/_components/review-jawaban/ReviewJawabanInterface";
import { Link } from "react-scroll";

interface ReviewJawabanProps {
  quiz: Quiz;
  reviewJawaban: ReviewJawaban;
}

const ReviewJawaban = ({ quiz, reviewJawaban }: ReviewJawabanProps) => {
  function onClickModulHome() {}

  function onClickFinish() {}

  return (
    <section className="relative">
      <div className="mb-3 flex">
        <div className="w-[75%]">
          <InformationTable reviewJawaban={reviewJawaban} />
          {/* awal section soal */}
          {reviewJawaban.quiz.questions.map((question, index) => (
            <div key={index} id={`soal-${question.noSoal}`}>
              <div className="mb-8">
                {/* awal section informasi kuis */}
                <div className="mb-5 inline-flex rounded-2xl border-2 bg-white">
                  <div className="flex p-3">
                    <div className="mr-3">
                      <p
                        className={`${GlobalStyles["normal-xs-gray-typography"]}`}
                      >
                        PERTANYAAN
                      </p>
                      <p
                        className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                      >
                        NOMOR {question.noSoal}
                      </p>
                    </div>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      className="ml-3 h-8"
                      sx={{ borderRightWidth: 3 }}
                    />
                  </div>
                  <div className="flex p-3">
                    <div className="mr-3">
                      <p
                        className={`${GlobalStyles["normal-xs-gray-typography"]}`}
                      >
                        STATUS
                      </p>
                      <p
                        className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                      >
                        {question.status}
                      </p>
                    </div>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      className="ml-3 h-8"
                      sx={{ borderRightWidth: 3 }}
                    />
                  </div>
                  <div className="flex p-3">
                    <div className="mr-3">
                      <p
                        className={`${GlobalStyles["normal-xs-gray-typography"]}`}
                      >
                        MARK
                      </p>
                      <p
                        className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                      >
                        1.00
                      </p>
                    </div>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      className="ml-3 h-8"
                      sx={{ borderRightWidth: 3 }}
                    />
                  </div>

                  <div className="flex p-3">
                    <div className="mr-3">
                      <p
                        className={`${GlobalStyles["normal-xs-gray-typography"]}`}
                      >
                        JAWABAN
                      </p>
                      <p
                        className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                      >
                        {question.userAnswer === question.rightAnswer
                          ? "benar"
                          : "salah"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* akhir section informasi kuis */}

                {/* awal section soal dan jawaban */}
                <div className="w-[100%] rounded-2xl border-2 bg-white p-4">
                  <h2 className="mb-2">{question.question}</h2>
                  <div>
                    {question.options.map((option, index) => (
                      <>
                        {question.userAnswer === question.rightAnswer ? (
                          <>
                            <div
                              key={option.id}
                              className={`mb-2 flex justify-between rounded-lg border-2 ${
                                option.letter === question.userAnswer
                                  ? "border-green-400"
                                  : ""
                              }`}
                            >
                              <div className="flex">
                                <div
                                  className={`inline-block rounded-l-sm px-3  ${
                                    option.letter === question.userAnswer
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
                              {option.letter === question.userAnswer ? (
                                <>
                                  <div className="my-auto block px-3">
                                    jawaban anda benar
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              key={option.id}
                              className={`mb-2 flex justify-between rounded-lg border-2 ${
                                option.letter === question.rightAnswer
                                  ? "border-green-400"
                                  : ""
                              } ${
                                option.letter === question.userAnswer
                                  ? "border-red-400"
                                  : ""
                              }`}
                            >
                              <div className="flex">
                                <div
                                  className={` inline-block rounded-l-sm px-3 ${
                                    option.letter === question.userAnswer
                                      ? "bg-red-400"
                                      : ""
                                  } ${
                                    option.letter === question.rightAnswer
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

                              {option.letter === question.rightAnswer && (
                                <>
                                  <div className="my-auto block px-3">
                                    jawaban yang benar
                                  </div>
                                </>
                              )}
                              {option.letter === question.userAnswer && (
                                <>
                                  <div className="my-auto block px-3">
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
            </div>
          ))}

          {/* akhir section soal */}

          <div className="mt-3 flex justify-between">
            <BlueButton
              className="ml-2 bg-pl-RoyalBlue  text-white"
              onClick={() => onClickModulHome()}
            >
              {" "}
              Modul Home
            </BlueButton>
            <SubmitButton
              className="mx-0 bg-pl-GreenButton text-white"
              onClick={() => onClickFinish()}
            >
              Finish Review
            </SubmitButton>
          </div>
        </div>

        <div className="relative w-[25%]">
          {/* section navigasi soal */}
          <div className="sticky right-4 top-20">
            <div className=" ml-2 mt-3 w-[92%] rounded-md border-2 bg-white">
              {/* header navigasi soal */}
              <div className="flex  p-3 shadow-md">
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
                    Latihan Modul Materi 1 - Pancasila
                  </h3>
                </div>
              </div>

              {/* content navigasi soal */}
              <div className="flex justify-center py-3">
                <div className="grid max-h-[17rem] w-[90%] grid-cols-5 gap-2 overflow-y-scroll pr-2 scrollbar-thin">
                  {quiz.questions.map((question, index) => (
                    <Link
                      to={`soal-${question.noSoal}`}
                      key={index}
                      className={`flex h-[55px] cursor-pointer items-center justify-center rounded-sm border-2 bg-green-200`}
                      offset={-70}
                    >
                      <h1 className="m-auto">{index + 1}</h1>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* akhir navigasi soal */}
        </div>
      </div>
    </section>
  );
};

export default ReviewJawaban;
