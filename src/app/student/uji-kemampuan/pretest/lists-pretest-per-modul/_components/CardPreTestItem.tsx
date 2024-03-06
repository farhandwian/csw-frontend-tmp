import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import QuizIcon from "@mui/icons-material/Quiz";
import YellowButton from "@/app/student/dashboard/_components/YellowButton";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import CancelIcon from "@mui/icons-material/Cancel";

const CardPreTestItem = ({ isStillOpen }: { isStillOpen: boolean }) => {
  return (
    <>
      <div className="relative px-3">
        {/* carditem pretest user jika sudah beli modul */}
        <div
          className={`min-h-32 w-[100%] rounded-md bg-cover bg-center p-2 ${
            isStillOpen
              ? "bg-[url('/img/dashboard-user/card_recently_pretest.png')]"
              : "#FD6073"
          }  text-white`}
        >
          <div className="mb-2 flex w-fit items-center justify-center gap-1 text-xs text-neutral-100">
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
          <h3 className="mb-2 text-left text-xs">
            Pada pretest kali ini akan membahas seputar materi yang akan kita
            pelajari nanti di pertemuan, kerjakan dengan...
          </h3>
          <YellowButton className="text-sm">Kerjakan Pretest</YellowButton>
        </div>

        <div className="absolute right-1 top-2 h-[50px] w-[100%] max-w-[150px] rounded-md bg-[#fbe360] p-1">
          <h4 className="text-[10px] text-black">
            Dibuka pada 20 September 2022 Pukul 07:00
          </h4>
        </div>
      </div>
    </>
  );
};

export default CardPreTestItem;
