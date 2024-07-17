"use client";
import InformationExercise from "@/app/student/_components/CBTExercise/InformationExercise";
import ModalSubmitModul from "@/app/student/_components/CBTExercise/ModalSubmitModul";
import QuestionNavigation from "@/app/student/_components/CBTExercise/QuestionNavigation";
import QuestionSection from "@/app/student/_components/CBTExercise/QuestionSection";
import useTimer from "@/hooks/useTimer";
import {
  TAddExerciseSubmissionPayload,
  TChoice,
  TExerciseDetail,
} from "@/types/exercise";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import logger from "@/lib/logger";
import { TransformExerciseToPayloadExerciseSubmission } from "@/lib/utils/transform";
import { TMetaErrorResponse, TMetaResponseSingle } from "@/types";
import { UseMutateFunction } from "@tanstack/react-query";

interface CBTProps {
  exercise: TExerciseDetail;
  mutate: UseMutateFunction<
    TMetaResponseSingle<string>,
    TMetaErrorResponse,
    TAddExerciseSubmissionPayload,
    unknown
  >;
  router: any;
  status: any;
}

type NavigasiSoalContextType = "besar" | "kecil";

export const TipeUjianContext = createContext<NavigasiSoalContextType>("kecil");

const CBT = ({ exercise, mutate, router, status }: CBTProps) => {
  const [activeQuestion, setActiveQuestion] = useState(0); // this will be the index that used to move through question array

  const [result, setResult] = useState(exercise);
  console.log(result);
  const [isMark, setIsMark] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [unAnsweredQuestions, setisUnAnsweredQuestions] = useState(
    exercise.questions.length,
  );

  const serverTime = exercise.time * 600000; // Contoh waktu dalam milidetik (10 menit)

  const onSubmit = () => {
    try {
      const payload: TAddExerciseSubmissionPayload =
        TransformExerciseToPayloadExerciseSubmission(result, timeLeft);

      console.log(payload);
      mutate(payload, {
        onSuccess: () => {
          console.log("tes1");
          // router.replace("/student/modul/detail-modul/after-test");

          toast.success("exercise submission has been added");
        },
        onError: (error) => {
          console.log("tes2");
          logger(payload);
          logger(
            "add exercise submission Error:",
            error.response?.data.message,
          );
          toast.error(
            error?.response?.data?.message ||
              "Failed to add exercise submission",
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

  const { questions } = exercise;

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

  const onOptionSelected = (option: TChoice, index: number) => {
    const updateResult = { ...result };
    console.log(
      updateResult.questions[activeQuestion].user_answer,
      option.uuid,
    );
    if (updateResult.questions[activeQuestion].user_answer === option.uuid) {
      // Mengganti user_answer pada pertanyaan yang sedang aktif
      updateResult.questions[activeQuestion].user_answer = "";

      updateResult.questions[activeQuestion].status = "belum-dijawab";
      // Memperbarui state menggunakan setResult
    } else {
      // Mengganti user_answer pada pertanyaan yang sedang aktif
      updateResult.questions[activeQuestion].user_answer = option.uuid;

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

  const onClickNavigation = (index: number) => {
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
    return <Loading>...Loading submit exercise submission</Loading>;
  }

  if (status === "error") {
    return <ErrorComponent>error submit exercise submission</ErrorComponent>;
  }

  return (
    <>
      <h1
        className={`my-2 text-xl font-semibold leading-normal text-tp-Gunmetal md:text-2xl`}
      >
        {exercise.title}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[73%]">
          <InformationExercise
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
        exercise={exercise}
        onClose={onCloseModalSubmit}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CBT;
