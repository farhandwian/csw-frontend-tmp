import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import QuizIcon from "@mui/icons-material/Quiz";
import YellowButton from "@/app/student/dashboard/components/YellowButton";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import CancelIcon from "@mui/icons-material/Cancel";

const CardPreTestItem = ({ isStillOpen }) => {
  return (
    <>
      <div className="px-3 relative">
        {/* carditem pretest user jika sudah beli modul */}
        <div
          className={`p-2 bg-cover bg-center rounded-md min-h-32 w-[100%] ${
            isStillOpen
              ? "bg-[url('/img/dashboard-user/card_recently_pretest.png')]"
              : "#FD6073"
          }  text-white`}
        >
          <div className="flex w-fit justify-center items-center text-neutral-100 text-xs mb-2 gap-1">
            <AccessTimeFilledIcon sx={{ color: "white" }} />
            <h3>15 menit</h3>
            <WorkspacePremiumIcon sx={{ color: "white" }} />
            <h3>100 pts</h3>
            <QuizIcon sx={{ color: "white" }} />
            <h3>quizziz</h3>
            <ChevronRightIcon sx={{ color: "white", fontSize: "20px" }} />
            <h3>Dibuka</h3>
            <CancelIcon sx={{ size: "20px", color: "white" }} />
            <h3>1 kali pengerjaan</h3>
          </div>

          <h1 className="text-sm font-bold">Judul Pretest</h1>
          <h3 className="text-xs text-left mb-2">
            Pada pretest kali ini akan membahas seputar materi yang akan kita
            pelajari nanti di pertemuan, kerjakan dengan...
          </h3>
          <YellowButton className="text-sm">Kerjakan Pretest</YellowButton>
        </div>

        <div className="absolute top-2 right-1 p-1 w-[100%] max-w-[150px] h-[50px] bg-[#fbe360] rounded-md">
          <h4 className="text-black text-[10px]">
            Dibuka pada 20 September 2022 Pukul 07:00
          </h4>
        </div>
      </div>
    </>
  );
};

export default CardPreTestItem;
