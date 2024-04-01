import { useState } from "react";
import Divider from "@mui/material/Divider";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Alert } from "flowbite-react";
import GlobalStyles from "@/app/Globals.module.css";
import {
  Question,
  Quiz,
} from "@/app/student/_components/CBT/_interface/interface";

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
      <div className="mb-5 inline-flex rounded-2xl border-2 bg-white">
        <div className="flex p-2">
          <div className="mr-3">
            <p className={`text-sm font-bold text-[#9CA3AF]`}>PERTANYAAN</p>
            <p className={`mt-[6px] text-sm font-bold text-[#64748B]`}>
              NOMOR {addLeadingZero(activeQuestion + 1)}/
              {addLeadingZero(questions.length)}
            </p>
          </div>

          {/* horizontal line */}
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>
        {/* Penambahan informasi status, mark, tandai, dan waktu tersisa */}
        <div className="flex p-2">
          <div className="mr-3">
            <p className={`text-sm font-bold text-[#9CA3AF]`}>STATUS</p>
            <p className={`mt-[6px] text-sm font-bold text-[#64748B]`}>
              {result.questions[activeQuestion].status}
            </p>
          </div>

          {/* horizontal line */}
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>

        <div className="flex p-2">
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
            <p className={`text-sm font-bold text-[#9CA3AF]`}>MARK</p>
            <p className={`mt-[6px] text-sm font-bold text-[#64748B]`}>1.00</p>
          </div>

          {/* horizontal line */}
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>
        <div className="flex p-2">
          <div className="mr-3">
            <p className={`text-sm font-bold text-[#9CA3AF]`}>
              TANDA
              <HelpIcon
                className="ml-2 cursor-pointer pb-1"
                onClick={handleHelpIconClick}
              />
            </p>
            <button onClick={handleTandaiPertanyaan}>
              <p className={`text-sm font-bold text-[#64748B]`}>
                <EmojiFlagsIcon className="mr-1"></EmojiFlagsIcon>
                TANDAI PERTANYAAN
              </p>
            </button>
          </div>
          <div className="h-[90%] w-[3px] bg-[#E5E7EB]"></div>
        </div>
        <div className="flex p-2">
          <div className="mr-3">
            <p className={`text-sm font-bold text-[#9CA3AF]`}>WAKTU TERSISA</p>
            <p className={`mt-1  text-sm font-bold text-[#64748B]`}>
              {formattedTime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationQuiz;
