"use client";
import InformationQuiz from "@/app/student/_components/CBT/InformationQuiz";
import ModalSubmitModul from "@/app/student/_components/CBT/ModalSubmitModul";
import QuestionNavigation from "@/app/student/_components/CBT/QuestionNavigation";
import QuestionSection from "@/app/student/_components/CBT/QuestionSection";
import React, { useState, createContext, useContext, useEffect } from "react";
import useTimer from "@/hooks/useTimer";
import {
  Option,
  Quiz,
} from "@/app/student/_components/CBT/_interface/interface";

interface CBTProps {
  quiz: Quiz;
}

type NavigasiSoalContextType = "besar" | "kecil";

export const TipeUjianContext = createContext<NavigasiSoalContextType>("kecil");

const CBT = ({ quiz }: CBTProps) => {
  const [alignment, setAlignment] = useState("modul_home");
  const [activeQuestion, setActiveQuestion] = useState(0); // this will be the index that used to move through question array
  const [result, setResult] = useState(quiz);
  const [isMark, setIsMark] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [unAnsweredQuestions, setisUnAnsweredQuestions] = useState(
    quiz.questions.length,
  );
  const [navigasiSoalType, setNavigasiSoalType] =
    useState<NavigasiSoalContextType>("kecil");

  useEffect(() => {
    checkNavigasiSoalType();
  });

  const serverTime = 60000; // Contoh waktu dalam milidetik (10 menit)

  const checkNavigasiSoalType = () => {
    if (quiz.totalQuestions > 30) {
      setNavigasiSoalType("besar");
    } else {
      setNavigasiSoalType("kecil");
    }
  };

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

  const onOptionSelected = (option: Option, index: number) => {
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
    <TipeUjianContext.Provider value={navigasiSoalType}>
      <div className="flex">
        <div className="w-[70%]">
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
        <div className="w-[30%]">
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
    </TipeUjianContext.Provider>
  );
};

export default CBT;
