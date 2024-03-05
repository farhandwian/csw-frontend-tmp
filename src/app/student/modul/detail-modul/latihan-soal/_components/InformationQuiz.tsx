import React from "react";
import Divider from "@mui/material/Divider";
import GlobalStyles from "@/app/Globals.module.css";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import {
  Question,
  Quiz,
} from "@/app/student/modul/detail-modul/latihan-soal/page";

interface InformationQuiz {
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
}: InformationQuiz) => {
  const handleTandaiPertanyaan = () => {
    onClickTandaiPertanyaan();
  };

  return (
    <>
      {/* awal section informasi kuis */}
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
              <HelpIcon className="ml-2 pb-1"></HelpIcon>
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

      {/* akhir section informasi kuis */}
    </>
  );
};

export default InformationQuiz;
