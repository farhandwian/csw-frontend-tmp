"use client";
import InformationQuiz from "@/app/student/_components/CBT/InformationQuiz";
import ModalSubmitModul from "@/app/student/_components/CBT/ModalSubmitModul";
import QuestionNavigation from "@/app/student/_components/CBT/QuestionNavigation";
import QuestionSection from "@/app/student/_components/CBT/QuestionSection";
import useTimer from "@/hooks/useTimer";
import { TAddQuizSubmissionPayload, TOption, TQuiz } from "@/types/quiz";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import logger from "@/lib/logger";
import { TransformQuizToPayloadQuizSubmission } from "@/lib/utils/transform";
import { TMetaErrorResponse, TMetaResponseSingle } from "@/types";
import { UseMutateFunction } from "@tanstack/react-query";

interface CBTProps {
  quiz: TQuiz;
  mutate: UseMutateFunction<
    TMetaResponseSingle<string>,
    TMetaErrorResponse,
    TAddQuizSubmissionPayload,
    unknown
  >;
  router: any;
  status: any;
}

type NavigasiSoalContextType = "besar" | "kecil";

export const TipeUjianContext = createContext<NavigasiSoalContextType>("kecil");

const CBT = ({ quiz, mutate, router, status }: CBTProps) => {
  const [activeQuestion, setActiveQuestion] = useState(0); // this will be the index that used to move through question array

  const [result, setResult] = useState(quiz);
  console.log(result);
  const [isMark, setIsMark] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [unAnsweredQuestions, setisUnAnsweredQuestions] = useState(
    quiz.questions.length,
  );
  // belum diimplementasi(di figma nya tedapat perbedaan tampilan untuk soal banyak dan soal sedikit )
  const [navigasiSoalType, setNavigasiSoalType] =
    useState<NavigasiSoalContextType>("kecil");

  useEffect(() => {
    checkNavigasiSoalType();
  });

  const serverTime = quiz.total_time * 600000; // Contoh waktu dalam milidetik (10 menit)

  // belum diimplementasi(di figma nya tedapat perbedaan tampilan untuk soal banyak dan soal sedikit )
  const checkNavigasiSoalType = () => {
    if (quiz.total_questions > 30) {
      setNavigasiSoalType("besar");
    } else {
      setNavigasiSoalType("kecil");
    }
  };

  const onSubmit = () => {
    try {
      const payload: TAddQuizSubmissionPayload =
        TransformQuizToPayloadQuizSubmission(result, 40, timeLeft);

      console.log(payload);
      mutate(payload, {
        onSuccess: () => {
          console.log("tes1");
          // router.replace("/student/modul/detail-modul/after-test");

          toast.success("quiz submission has been added");
        },
        onError: (error) => {
          console.log("tes2");
          logger(payload);
          logger("add quiz submission Error:", error.response?.data.message);
          toast.error(
            error?.response?.data?.message || "Failed to add quiz submission",
          );
        },
      });
    } catch (error) {
      throw new Error("Invalid response");
    }
  };

  const onTimerEnd = () => {
    onSubmit();
  };
  const { formattedTime, timeLeft } = useTimer({
    time: serverTime,
    onTimerEnd,
  });

  const { questions } = quiz;

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

  const onOptionSelected = (option: TOption, index: number) => {
    const updateResult = { ...result };

    if (updateResult.questions[activeQuestion].user_answer === option.id) {
      // Mengganti user_answer pada pertanyaan yang sedang aktif
      updateResult.questions[activeQuestion].user_answer = 0;

      updateResult.questions[activeQuestion].status = "belum-dijawab";
      // Memperbarui state menggunakan setResult
    } else {
      // Mengganti user_answer pada pertanyaan yang sedang aktif
      updateResult.questions[activeQuestion].user_answer = option.id;

      updateResult.questions[activeQuestion].status = "sudah-dijawab";
      // Memperbarui state menggunakan setResult
    }

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

  if (status === "pending") {
    return <Loading>...Loading submit quiz submission</Loading>;
  }

  if (status === "error") {
    return <ErrorComponent>error submit quiz submission</ErrorComponent>;
  }

  return (
    <TipeUjianContext.Provider value={navigasiSoalType}>
      <h1
        className={`my-2 text-xl font-semibold leading-normal text-tp-Gunmetal md:text-2xl`}
      >
        {quiz.topic}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[73%]">
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
              onOptionSelected,
              onClickNext,
              onClickPrev,
              onClickSubmit,
            }}
          />
        </div>
        <div className="md:w-[27%]">
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
        quiz={quiz}
        onClose={onCloseModalSubmit}
        onSubmit={onSubmit}
      />
    </TipeUjianContext.Provider>
  );
};

export default CBT;
