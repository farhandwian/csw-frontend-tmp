import { useState } from "react";
import Divider from "@mui/material/Divider";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Alert } from "flowbite-react";
import GlobalStyles from "@/app/Globals.module.css";
import {
  Question,
  Quiz,
} from "@/app/student/modul/detail-modul/latihan-soal/_interface/interface";

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
        <div className="flex p-3">
          <div className="mr-3">
            <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
              PERTANYAAN
            </p>
            <p className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}>
              NOMOR {addLeadingZero(activeQuestion + 1)}/
              {addLeadingZero(questions.length)}
            </p>
          </div>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="h-8"
            sx={{ borderRightWidth: 3 }}
          />
        </div>
        {/* Penambahan informasi status, mark, tandai, dan waktu tersisa */}
        <div className="flex p-3">
          <div className="mr-3">
            <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
              STATUS
            </p>
            <p className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}>
              {result.questions[activeQuestion].status}
            </p>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="ml-3 h-8"
            sx={{ borderRightWidth: 3 }}
          />
        </div>
        <div className="flex p-3">
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
            <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
              MARK
            </p>
            <p className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}>
              1.00
            </p>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="ml-3 h-8"
            sx={{ borderRightWidth: 3 }}
          />
        </div>
        <div className="flex p-3">
          <div className="mr-3">
            <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
              TANDA
              <HelpIcon
                className="ml-2 cursor-pointer pb-1"
                onClick={handleHelpIconClick}
              />
            </p>
            <button onClick={handleTandaiPertanyaan}>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                <EmojiFlagsIcon className="mr-1 pb-1"></EmojiFlagsIcon>
                TANDAI PERTANYAAN
              </p>
            </button>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="ml-3 h-8"
            sx={{ borderRightWidth: 3 }}
          />
        </div>
        <div className="flex p-3">
          <div className="mr-3">
            <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
              WAKTU TERSISA
            </p>
            <p className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}>
              {formattedTime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationQuiz;
