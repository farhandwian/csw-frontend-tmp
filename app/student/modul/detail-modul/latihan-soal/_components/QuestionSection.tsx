import React from "react";
import GrayButton from "@/app/components/Button/GrayButton";
import BlueButton from "@/app/components/Button/BlueButton";
import GreenButton from "@/app/components/Button/GreenButton";
import {
  Question,
  Quiz,
  Option,
} from "@/app/student/modul/detail-modul/latihan-soal/page";

interface QuestionSectionProps {
  activeQuestion: number;
  questions: Question[];
  result: Quiz;
  formattedTime: string;
  onOptionSelected: (option: Option, index: number) => void;
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickSubmit: () => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  activeQuestion,
  questions,
  result,
  formattedTime,
  onOptionSelected,
  onClickNext,
  onClickPrev,
  onClickSubmit,
}) => {
  const { question, options } = questions[activeQuestion];

  const handleNextClick = () => {
    if (activeQuestion !== questions.length - 1) {
      onClickNext();
    }
  };

  const handlePrevClick = () => {
    if (activeQuestion !== 0) {
      onClickPrev();
    }
  };

  const handleOptionSelected = (option, index) => {
    return () => {
      onOptionSelected(option, index);
    };
  };

  return (
    <div className="bg-white-400 w-[100%] rounded-2xl border-2 p-4">
      <h2 className="mb-2">{question}</h2>
      <div>
        {options.map((option, index) => (
          <div
            onClick={handleOptionSelected(option, index)}
            key={option.id}
            className={`mb-2 flex rounded-lg border-2 ${
              option.letter === result.questions[activeQuestion].userAnswer
                ? "border-green-400"
                : ""
            }`}
          >
            <div
              className={`inline-block rounded-l-sm px-3 ${
                option.letter === result.questions[activeQuestion].userAnswer
                  ? "bg-green-400"
                  : ""
              }`}
            >
              {option.letter}
            </div>
            <div className="h-[25px] w-[2px] bg-pl-GrayDefault"></div>
            <div className="ml-3 inline-block text-left">{option.text}</div>
          </div>
        ))}
      </div>

      {/* awal button section */}
      <div className="mt-3 flex justify-between">
        <div>
          {activeQuestion !== 0 && (
            <GrayButton className="inline" onClick={handlePrevClick}>
              prev
            </GrayButton>
          )}

          {activeQuestion !== questions.length - 1 && (
            <BlueButton className="inline" onClick={handleNextClick}>
              next
            </BlueButton>
          )}
        </div>
        <div>
          <GreenButton onClick={onClickSubmit}>SUBMIT</GreenButton>
        </div>
      </div>
      {/* akhir button section */}
    </div>
  );
};

export default QuestionSection;
