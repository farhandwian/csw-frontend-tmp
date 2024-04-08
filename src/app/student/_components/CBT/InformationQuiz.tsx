import {
  Question,
  Quiz,
} from "@/app/student/_components/CBT/_interface/interface";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Alert } from "flowbite-react";
import { useState } from "react";

interface InformationQuizProps {
  addLeadingZero: (number: number) => number | string;
  activeQuestion: number;
  questions: Question[];
  result: Quiz;
  onClickTandaiPertanyaan: () => void;
  formattedTime: string;
}

const InformationQuiz = ({
  addLeadingZero,
  activeQuestion,
  questions,
  result,
  onClickTandaiPertanyaan,
  formattedTime,
}: InformationQuizProps) => {
  const handleTandaiPertanyaan = () => {
    onClickTandaiPertanyaan();
  };

  const [isTandaClicked, setIsTandaClicked] = useState(false);

  const handleHelpIconClick = () => {
    setIsTandaClicked(true);
  };

  return (
    <>
      <div className="mb-5 flex w-[100%] justify-evenly rounded-2xl border-2 bg-white">
        <div className="flex py-2 pr-2 ">
          <div className="mr-3">
            <p className={`text-2xs font-bold text-[#9CA3AF] md:text-sm`}>
              PERTANYAAN
            </p>
            <p
              className={`mt-[6px] whitespace-nowrap text-2xs font-bold text-[#64748B] md:text-sm`}
            >
              NOMOR {addLeadingZero(activeQuestion + 1)}/
              {addLeadingZero(questions.length)}
            </p>
          </div>

          {/* vertical line */}
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>
        {/* Penambahan informasi status, mark, tandai, dan waktu tersisa */}
        <div className="hidden  w-fit py-2 pr-2 md:flex">
          <div className="mr-3">
            <p className={`text-2xs font-bold text-[#9CA3AF] md:text-sm`}>
              STATUS
            </p>
            <p
              className={`mt-[6px] whitespace-nowrap text-2xs font-bold text-[#64748B] md:text-sm`}
            >
              {result.questions[activeQuestion].status}
            </p>
          </div>

          {/* vertical line */}
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>

        <div className="hidden py-2 pr-2 md:flex">
          <div className="mr-3">
            <p className={`text-2xs font-bold text-[#9CA3AF] md:text-sm`}>
              MARK
            </p>
            <p
              className={`mt-[6px] whitespace-nowrap text-2xs font-bold text-[#64748B] md:text-sm`}
            >
              1.00
            </p>
          </div>

          {/* vertical line */}
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>
        <div className="flex py-2 pr-2">
          {isTandaClicked && (
            <Alert
              className="absolute h-[6.25rem] w-[20rem] bg-white text-xs shadow-md"
              color="gray"
              onDismiss={() => setIsTandaClicked(false)}
            >
              Jika Anda ragu - ragu dalam menjawab soal, Anda dapat memberikan
              tanda “Flag” pada navigasi latihan soal dengan cara mengklik pada
              “TANDAI PERTANYAAN”
            </Alert>
          )}
          <div className="mr-3">
            <p className={`text-2xs font-bold text-[#9CA3AF] md:text-sm`}>
              TANDA
              <HelpIcon
                className="ml-2 cursor-pointer pb-1"
                onClick={handleHelpIconClick}
              />
            </p>
            <div className="cursor-pointer" onClick={handleTandaiPertanyaan}>
              <div
                className={`flex text-2xs font-bold text-[#64748B] md:text-sm`}
              >
                <EmojiFlagsIcon className="mr-1"></EmojiFlagsIcon>
                <h1 className="mt-1 whitespace-nowrap text-xs">
                  TANDAI PERTANYAAN
                </h1>
              </div>
            </div>
          </div>
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>
        <div className="hidden py-2 pr-2 md:flex">
          <div className="">
            <p
              className={`whitespace-nowrap text-2xs font-bold text-[#9CA3AF] md:text-sm`}
            >
              WAKTU TERSISA
            </p>
            <p className={`mt-1  text-2xs font-bold text-[#64748B] md:text-sm`}>
              {formattedTime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationQuiz;
