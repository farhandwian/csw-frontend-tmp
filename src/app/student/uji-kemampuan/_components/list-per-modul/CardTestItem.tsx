import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import QuizIcon from "@mui/icons-material/Quiz";
import YellowButton from "@/app/student/dashboard/_components/YellowButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CancelIcon from "@mui/icons-material/Cancel";
import { TQuizAllParams, TQuiz } from "@/types/uji-kemampuan";
import { TTestType } from "@/types/index";
import RedButton from "@/app/student/dashboard/_components/RedButton";
import Link from "next/link";
import { convertToReadableDate } from "@/lib/utils/convertToReadableDate";

interface CardTestItemProps {
  sub_module_uuid: string;
  testType: TTestType;
  quiz: TQuiz;
}

const CardTestItem = ({
  sub_module_uuid,
  testType,
  quiz,
}: CardTestItemProps) => {
  const BgColor = () => {
    if (
      testType === "pretest" &&
      quiz.status_pengerjaan === "belum-dikerjakan"
    ) {
      return "bg-[url('/img/dashboard-user/card_recently_pretest.png')]";
    } else if (
      testType === "pretest" &&
      quiz.status_pengerjaan === "sudah-dikerjakan"
    ) {
      return "bg-[#FD6073]";
    } else if (
      testType === "posttest" &&
      quiz.status_pengerjaan === "sudah-dikerjakan"
    ) {
      return "bg-[#FD6073]";
    } else if (
      testType === "posttest" &&
      quiz.status_pengerjaan === "belum-dikerjakan"
    ) {
      return "bg-[url('/img/dashboard-user/card_recently_posttest.png')]";
    }
  };

  const urlRedirect = () => {
    if (testType === "pretest") {
      return `${sub_module_uuid}/deskripsi-pretest/${quiz.uuid}`;
    } else if (testType === "posttest") {
      return `${sub_module_uuid}/deskripsi-posttest/${quiz.uuid}`;
    }

    return "";
  };

  return (
    <>
      <div className="relative px-3">
        {/* carditem pretest user jika sudah beli modul */}
        <div
          className={`min-h-32 w-[100%] rounded-md bg-cover bg-center p-2 ${BgColor()}  text-white`}
        >
          <div className="my-2 flex w-fit items-center justify-center gap-1 text-xs text-neutral-100">
            <div className="flex items-center justify-center">
              <AccessTimeFilledIcon sx={{ color: "white" }} />
              <h3>{quiz.time} menit</h3>
            </div>
            <div className="flex items-center justify-center">
              <WorkspacePremiumIcon sx={{ color: "white" }} />
              <h3>{quiz.max_score} pts</h3>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <QuizIcon sx={{ color: "white" }} />
              <h3>quizziz</h3>
            </div>

            <div className="hidden items-center justify-center md:flex">
              {quiz.status_pengerjaan === "sudah-dikerjakan" && (
                <ChevronRightIcon sx={{ color: "white", fontSize: "20px" }} />
              )}
              <h3>
                {quiz.status_pengerjaan === "sudah-dikerjakan" && (
                  <h3>{quiz.status_pengerjaan}</h3>
                )}
              </h3>
            </div>

            <div className="hidden items-center justify-center md:flex">
              {quiz.status_pengerjaan === "belum-dikerjakan" && (
                <CancelIcon sx={{ size: "20px", color: "white" }} />
              )}
              <h3>
                {quiz.status_pengerjaan === "belum-dikerjakan" &&
                  "1 kali pengerjaan"}
              </h3>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-sm font-bold">{quiz.title}</h1>
            <h3 className="mb-2 text-left text-xs">
              {testType} membahas seputar materi yang akan dipelajari nanti di
              pertemuan {quiz.description}
            </h3>
            {quiz.status_pengerjaan === "belum-dikerjakan" ? (
              <Link href={urlRedirect()}>
                <YellowButton className=" mb-2 mt-3 text-xs md:text-sm">
                  Kerjakan {testType}
                </YellowButton>
              </Link>
            ) : (
              <Link href={urlRedirect()}>
                <RedButton className=" mb-2 mt-3 text-xs md:text-sm">
                  lihat {testType}
                </RedButton>
              </Link>
            )}
          </div>
        </div>

        <div
          className={` absolute right-1 top-2  hidden h-[50px] w-[100%] max-w-[150px] items-center justify-center rounded-md p-1 md:flex ${quiz.status_pengerjaan === "belum-dikerjakan" ? "bg-[#fbe360]" : "bg-[#F48891]"}`}
        >
          <h4
            className={`text-center text-[10px] ${quiz.status_pengerjaan === "belum-dikerjakan" ? "text-black" : "text-white"}`}
          >
            {quiz.status_pengerjaan === "belum-dikerjakan"
              ? `Dibuka pada ${convertToReadableDate(quiz.open)}`
              : "pretest telah ditutup"}
          </h4>
        </div>
      </div>
    </>
  );
};

export default CardTestItem;
