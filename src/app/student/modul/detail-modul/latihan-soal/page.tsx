"use client";
import GlobalStyles from "@/app/Globals.module.css";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import InformationQuiz from "@/app/student/modul/detail-modul/latihan-soal/_components/InformationQuiz";
import ModalSubmitModul from "@/app/student/modul/detail-modul/latihan-soal/_components/ModalSubmitModul";
import ModulFAB from "@/app/student/modul/detail-modul/latihan-soal/_components/ModulFAB";
import QuestionNavigation from "@/app/student/modul/detail-modul/latihan-soal/_components/QuestionNavigation";
import QuestionSection from "@/app/student/modul/detail-modul/latihan-soal/_components/QuestionSection";
import useTimer from "@/app/student/modul/detail-modul/latihan-soal/_hooks/useTimer";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Option {
  id: string;
  letter: string;
  text: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
  rightAnswer?: string;
  isMark?: boolean;
  status?: string; //belum-dijawab,sudah-dijawab,ditandai
  noSoal: number;
  userAnswer?: string;
}

export interface Quiz {
  id: string;
  topic: string;
  modul: string;
  totalQuestions: number;
  totalTime: number;
  questions: Question[];
}

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
      rightAnswer: "b",
      noSoal: 5,
      status: "belum-dijawab",
    },
  ],
};

const Page = () => {
  const [alignment, setAlignment] = useState("modul_home");
  const [activeQuestion, setActiveQuestion] = useState(0); // this will be the index that used to move through question array
  const [result, setResult] = useState(quiz);
  const [isMark, setIsMark] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [unAnsweredQuestions, setisUnAnsweredQuestions] = useState(
    quiz.questions.length,
  );

  const serverTime = 60000; // Contoh waktu dalam milidetik (10 menit)

  const submitQuiz = () => {};

  const onTimerEnd = () => {
    submitQuiz();
    console.log("quiz berhasi di submit");
  };

  const { formattedTime } = useTimer({
    time: serverTime,
    onTimerEnd,
  });

  const { questions } = quiz;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const checkunAnsweredQuestions = () => {
    let i = 0;
    questions.forEach((question) => {
      if (question.status === "belum-dijawab") {
        i++;
      }
    });

    setisUnAnsweredQuestions(i);
  };

  const onClickNext = () => {
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const onOptionSelected = (option, index) => {
    const updateResult = { ...result };
    // Mengganti userAnswer pada pertanyaan yang sedang aktif
    updateResult.questions[activeQuestion].userAnswer = option.letter;

    updateResult.questions[activeQuestion].status = "sudah-dijawab";
    // Memperbarui state menggunakan setResult
    setResult(updateResult);
  };

  const onClickTandaiPertanyaan = () => {
    const updateResult = { ...result };
    // Mengganti userAnswer pada pertanyaan yang sedang aktif
    setIsMark(!isMark);
    updateResult.questions[activeQuestion].isMark = !isMark;
    // Memperbarui state menggunakan setResult
    setResult(updateResult);
  };

  const onClickNavigation = (noSoal: number, index: number) => {
    setActiveQuestion(index);
  };

  const onClickSubmit = () => {
    setIsOpenSubmitModal(true);
    checkunAnsweredQuestions();
  };

  const onCloseModalSubmit = () => {
    setIsOpenSubmitModal(false);
  };

  const addLeadingZero = (number: number) =>
    number > 9 ? number : `0${number}`;

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />

      <section className="relative w-[100%] p-4 md:p-5">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-tp-Gunmetal`}
        >
          Latihan Modul Materi 1 Pancasila
        </h1>

        <div className="flex">
          <div className="w-[80%]">
            <InformationQuiz
              {...{
                addLeadingZero,
                activeQuestion,
                questions,
                result,
                onClickTandaiPertanyaan,
                formattedTime,
              }}
            />
            <QuestionSection
              {...{
                activeQuestion,
                questions,
                result,
                formattedTime,
                onOptionSelected,
                onClickNext,
                onClickPrev,
                onClickSubmit,
              }}
            />
          </div>
          <div className="w-[20%]">
            <QuestionNavigation
              {...{
                result,
                activeQuestion,
                onClickNavigation,
              }}
            />
          </div>
        </div>

        <ModalSubmitModul
          isOpenProp={isOpenSubmitModal}
          formattedTime={formattedTime}
          unAnsweredQuestions={unAnsweredQuestions}
          onClose={onCloseModalSubmit}
        />
      </section>
    </>
  );
};

export default Page;
