import React from "react";
import GrayButton from "@/components/Button/GrayButton";
import BlueButton from "@/components/Button/BlueButton";
import GreenButton from "@/components/Button/GreenButton";
import { TQuestion, TExerciseDetail, TChoice } from "@/types/exercise";
import { cleanHtmlContent } from "@/lib/utils/CleanHtmlContent";

interface QuestionSectionProps {
  activeQuestion: number;
  questions: TQuestion[];
  result: TExerciseDetail;
  onOptionSelected: (option: TChoice, index: number) => void;
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickSubmit: () => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  activeQuestion,
  questions,
  result,
  onOptionSelected,
  onClickNext,
  onClickPrev,
  onClickSubmit,
}) => {
  const { content, choices } = questions[activeQuestion];
  console.log(choices);
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

  const handleOptionSelected = (option: TChoice, index: number) => {
    return () => {
      onOptionSelected(option, index);
    };
  };

  return (
    <div className="w-[100%] rounded-2xl border-2 bg-white p-4">
      <h2 className="mb-2 text-justify">
        {/* {activeQuestion + 1}.&nbsp;{question} */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: cleanHtmlContent(content) }}
        ></div>
      </h2>
      <div>
        {choices.map((option, index) => (
          <div
            onClick={handleOptionSelected(option, index)}
            key={option.uuid}
            className={`mb-2 flex justify-between rounded-lg border-2 ${
              option.uuid === result.questions[activeQuestion].user_answer
                ? "border-green-400"
                : ""
            } cursor-pointer`}
          >
            <div
              className={`inline-block rounded-l-sm border-r-2 px-3 ${
                option.uuid === result.questions[activeQuestion].user_answer
                  ? "bg-green-400"
                  : ""
              }`}
            >
              {/* letter choice */}
              <div className="mt-[2px]">{String.fromCharCode(97 + index)}</div>
            </div>
            <div className="m-auto ml-3 inline-block pr-2 text-justify">
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html: cleanHtmlContent(option.content),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* awal button section */}
      <div className="mt-3 flex justify-between">
        <div className="flex gap-1">
          {activeQuestion !== 0 && (
            <GrayButton className="" onClick={handlePrevClick}>
              prev
            </GrayButton>
          )}

          {activeQuestion !== questions.length - 1 && (
            <BlueButton onClick={handleNextClick}>next</BlueButton>
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
