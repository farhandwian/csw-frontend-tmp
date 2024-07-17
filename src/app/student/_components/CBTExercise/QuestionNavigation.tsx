import React, { useState, useContext } from "react";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import { TQuestion, TExerciseDetail } from "@/types/exercise";
import { TipeUjianContext } from "@/app/student/_components/CBT/CBT";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface QuestionNavigationProps {
  result: TExerciseDetail;
  activeQuestion: number;
  onClickNavigation: (index: number) => void;
}

const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  result,
  activeQuestion,
  onClickNavigation,
}) => {
  const [isShow, setIsShow] = useState(false);
  const tipeUjianContext = useContext(TipeUjianContext);

  const checkColorNavigation = (question: TQuestion, questionIndex: number) => {
    let style: string = "";
    if (questionIndex === activeQuestion) {
      style += `border-green-400 `;
    }

    if (
      question.status === "belum-dijawab" ||
      typeof question.status === "undefined"
    ) {
      style += `bg-white `;
    }

    if (question.status === "sudah-dijawab") {
      style += "bg-green-200 ";
    }

    if (question.status === "ditandai") {
      style += "bg-blue-200";
    }
    return style;
  };

  const checkFlagMark = (question: TQuestion) => {
    let style: string = "";
    if (question.isMark === true) {
      style += "block ";
    } else {
      style += "hidden ";
    }
    return style;
  };

  const onClickNavigationButton = (index: number) => {
    onClickNavigation(index);
  };

  return (
    <>
      <div className="ml-2 hidden w-[92%] rounded-md border-2 bg-white md:block">
        <div className="flex justify-between gap-2 p-3 shadow-md">
          <div>
            <Image
              width={60}
              height={60}
              src="/img/uji-kemampuan/ic_navigation.png"
              className="inline-block"
              alt="Logo CSW"
            />
          </div>

          <div className="">
            <h1 className="font-semibold">NAVIGASI LATIHAN</h1>
            <h1>{result.title}</h1>
          </div>
        </div>

        <div className="flex justify-center overflow-hidden py-3 ">
          <div className="grid max-h-[17rem] w-[90%] grid-cols-5 gap-2 overflow-y-scroll pr-2 scrollbar-thin">
            {result.questions.map((question, index) => (
              <button
                key={index}
                onClick={() => onClickNavigationButton(index)}
                className={`inline-block h-[55px] rounded-sm border-2 ${checkColorNavigation(
                  question,
                  index,
                )}`}
              >
                {index + 1}
                <div className={`${checkFlagMark(question)}`}>
                  <EmojiFlagsIcon className="mr-1 pb-1"></EmojiFlagsIcon>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* mobile mode */}
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
          <div className="ml-2 w-[180px] rounded-md border-2 bg-white md:hidden">
            <div className="flex gap-3 p-1 shadow-md">
              <div className="">
                <Image
                  width={35}
                  height={35}
                  src="/img/uji-kemampuan/ic_navigation.png"
                  className="inline-block"
                  alt="Logo CSW"
                />
              </div>

              <div className="flex items-center justify-center ">
                <h1 className=" text-xs font-semibold">NAVIGASI LATIHAN</h1>
                <h1 className="hidden text-2xs">{result.title}</h1>
              </div>
            </div>

            <div className=" flex justify-center overflow-hidden py-1 ">
              <div className="grid max-h-[17rem] w-[90%] grid-cols-5 gap-2 overflow-y-scroll pr-2 scrollbar-thin">
                {result.questions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => onClickNavigationButton(index)}
                    className={`inline-block h-[40px] rounded-sm border-2 text-2xs ${checkColorNavigation(
                      question,
                      index,
                    )}`}
                  >
                    {index + 1}
                    <div className={`${checkFlagMark(question)}`}>
                      <EmojiFlagsIcon className="" sx={{ fontSize: "15px" }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionNavigation;
