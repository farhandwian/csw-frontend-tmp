import React from "react";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import {
  Question,
  Quiz,
} from "@/app/student/modul/detail-modul/latihan-soal/page";

interface QuestionNavigationProps {
  result: Quiz;
  activeQuestion: number;
  onClickNavigation: (noSoal: number, index: number) => void;
}

const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  result,
  activeQuestion,
  onClickNavigation,
}) => {
  const checkColorNavigation = (question: Question, index: number) => {
    let style: string = "";
    if (question.noSoal === activeQuestion + 1) {
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

  const checkFlagMark = (question: Question) => {
    let style: string = "";
    if (question.isMark === true) {
      style += "block ";
    } else {
      style += "hidden ";
    }
    return style;
  };

  const onClickNavigationButton = (noSoal: number, index: number) => {
    onClickNavigation(noSoal, index);
  };

  return (
    <div className="ml-2 w-[92%] rounded-sm border-2 bg-white">
      <div className="flex justify-between gap-1 p-3">
        <div>
          <img
            width={60}
            height={60}
            src="/img/uji-kemampuan/ic_navigation.png"
            className="inline-block"
            alt="Logo CSW"
          />
        </div>

        <div className="ml-3">
          <h1>NAVIGASI LATIHAN</h1>
        </div>
      </div>

      <div className="flex justify-center py-1">
        <div className="grid w-[90%] grid-cols-4 gap-2">
          {result.questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onClickNavigationButton(question.noSoal, index)}
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
  );
};

export default QuestionNavigation;
