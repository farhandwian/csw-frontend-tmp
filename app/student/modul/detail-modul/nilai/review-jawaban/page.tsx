"use client";

import Studentlayout from "@/app/components/StudentLayout";
import GlobalStyles from "@/app/Globals.module.css";
import InformationTable from "@/app/student/modul/detail-modul/nilai/review-jawaban/component/InformationTableReviewJawaban";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Divider from "@mui/material/Divider";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import SubmitButton from "@/app/components/SubmitButton";
import { ReviewJawaban } from "@/app/student/modul/detail-modul/nilai/review-jawaban/interface/reviewJawabanInterface";
import { Quiz } from "@/app/student/modul/detail-modul/nilai/review-jawaban/interface/reviewJawabanInterface";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import ModulFAB from "@/app/student/modul/component/ModulFAB";

const quiz: Quiz = {
  id: "1",
  topic: "kewarganegaraan",
  modul: "TWK",
  totalQuestions: 5,
  totalTime: 30,
  questions: [
    {
      id: "3",
      question: "Apa yang menjadi pusat dari tata surya kita?",
      options: [
        { id: "3a", letter: "a", text: "Bulan" },
        { id: "3b", letter: "b", text: "Bumi" },
        { id: "3c", letter: "c", text: "Matahari" },
        { id: "3d", letter: "d", text: "Mars" },
        { id: "3e", letter: "e", text: "Venus" },
      ],
      userAnswer: "c",
      rightAnswer: "c",
      noSoal: 1,
      status: "belum-dijawab",
    },
    {
      id: "4",
      question: "Apa nama ibukota Prancis?",
      options: [
        { id: "4a", letter: "a", text: "Berlin" },
        { id: "4b", letter: "b", text: "London" },
        { id: "4c", letter: "c", text: "Madrid" },
        { id: "4d", letter: "d", text: "Paris" },
        { id: "4e", letter: "e", text: "Roma" },
      ],
      userAnswer: "d",
      rightAnswer: "d",
      noSoal: 2,
      status: "belum-dijawab",
    },
    {
      id: "5",
      question: "Siapa penemu bola lampu?",
      options: [
        { id: "5a", letter: "a", text: "Thomas Edison" },
        { id: "5b", letter: "b", text: "Galileo Galilei" },
        { id: "5c", letter: "c", text: "Isaac Newton" },
        { id: "5d", letter: "d", text: "Marie Curie" },
        { id: "5e", letter: "e", text: "Nikola Tesla" },
      ],
      userAnswer: "e",
      rightAnswer: "c",
      noSoal: 3,
      status: "belum-dijawab",
    },
    {
      id: uuidv4(),
      question:
        "Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain atas persetujuan DPR merupakan tugas dan wewenang dari...",
      options: [
        { id: uuidv4(), letter: "a", text: "MPR" },
        { id: uuidv4(), letter: "b", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "c", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "d", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "e", text: "Mahkamah Agung" },
      ],
      userAnswer: "a",
      rightAnswer: "a",
      noSoal: 4,
      status: "belum-dijawab",
    },
    {
      id: uuidv4(),
      question:
        "Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain atas persetujuan DPR merupakan tugas dan wewenang dari...",
      options: [
        { id: uuidv4(), letter: "a", text: "MPR" },
        { id: uuidv4(), letter: "b", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "c", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "d", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "e", text: "Mahkamah Agung" },
      ],
      userAnswer: "b",
      rightAnswer: "b",
      noSoal: 5,
      status: "belum-dijawab",
    },
  ],
};

const reviewJawaban: ReviewJawaban = {
  start: "Jumat, 30 September 2022, 07:00 ",
  status: "selesai",
  finish: "Jumat, 30 September 2022, 07:09",
  formattedTime: "09 Menit 31 Detik",
  totalRightQuestion: 4,
  maxTotalRightQuestion: 5,
  score: 20,
  maxScore: 25,
  attempt: 1,
  quiz: quiz,
};

const page = () => {
  const [alignment, setAlignment] = useState("nilai");

  function onClickModulHome() {}

  function onClickFinish() {}

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Studentlayout>
      <ModulFAB
        alignment={alignment}
        handleChange={(e) => handleChange(e, alignment)}
      ></ModulFAB>
      <section className="relative">
        <div className="flex mb-3">
          <div className="w-[80%]">
            <InformationTable reviewJawaban={reviewJawaban} />
            {/* awal section soal */}
            {reviewJawaban.quiz.questions.map((question, index) => (
              <div key={index} className="mb-8">
                {/* awal section informasi kuis */}
                <div className="inline-flex bg-white border-2 rounded-2xl mb-5">
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
                <div className="w-[100%] bg-white-400 border-2 rounded-2xl p-4">
                  <h2 className="mb-2">{question.question}</h2>
                  <div>
                    {question.options.map((option, index) => (
                      <>
                        {question.userAnswer === question.rightAnswer ? (
                          <>
                            <div
                              key={option.id}
                              className={`flex justify-between border-2 rounded-lg mb-2 ${
                                option.letter === question.userAnswer
                                  ? "border-green-400"
                                  : ""
                              }`}
                            >
                              <div className="flex">
                                <div
                                  className={`inline-block px-3 rounded-l-sm ${
                                    option.letter === question.userAnswer
                                      ? "bg-green-400"
                                      : ""
                                  }`}
                                >
                                  {option.letter}
                                </div>
                                <div className="w-[2px] h-[25px] bg-pl-GrayDefault"></div>
                                <div className="inline-block text-left ml-3">
                                  {option.text}
                                </div>
                              </div>
                              {option.letter === question.userAnswer ? (
                                <>
                                  <div className="block">
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
                              className={`flex justify-between border-2 rounded-lg mb-2 ${
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
                                  className={`inline-block px-3 rounded-l-sm ${
                                    option.letter === question.userAnswer
                                      ? "bg-red-400"
                                      : ""
                                  } ${
                                    option.letter === question.rightAnswer
                                      ? "bg-green-400"
                                      : ""
                                  }`}
                                >
                                  {option.letter}
                                </div>
                                <div className="w-[2px] h-[25px] bg-pl-GrayDefault"></div>
                                <div className="inline-block text-left ml-3">
                                  {option.text}
                                </div>
                              </div>

                              {option.letter === question.rightAnswer && (
                                <>
                                  <div className="block">
                                    jawaban yang benar
                                  </div>
                                </>
                              )}
                              {option.letter === question.userAnswer && (
                                <>
                                  <div className="block">jawaban anda</div>
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
            ))}

            {/* akhir section soal */}

            <div className="flex justify-between mt-3">
              <Button
                className="bg-pl-RoyalBlue ml-2 text-white"
                onClick={() => onClickModulHome()}
                variant="contained"
              >
                <ArrowBackIosIcon style={{ fontSize: 15 }} /> Modul Home
              </Button>
              <SubmitButton
                className="bg-pl-GreenButton text-white"
                onClick={() => onClickFinish()}
                variant="contained"
              >
                Finish Review
              </SubmitButton>
            </div>
          </div>

          <div className="w-[20%]">
            {/* section navigasi soal */}
            <div className="bg-white border-2 rounded-sm ml-2 w-[92%] mt-3">
              <div className="flex p-3 justify-between gap-1">
                <div>
                  <Image
                    width={60}
                    height={60}
                    src="/img/uji-kemampuan/ic_navigation.png"
                    className={`inline-block`}
                    alt="Logo CSW"
                  />
                </div>

                <div className="ml-3">
                  <h1>NAVIGASI LATIHAN</h1>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="w-[90%] grid grid-cols-4 gap-2">
                  {quiz.questions.map((question, index) => (
                    <button
                      key={index}
                      className={`h-[55px] inline-block border-2 rounded-sm bg-green-200`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* akhir navigasi soal */}
          </div>
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
