import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import QuizIcon from "@mui/icons-material/Quiz";
import YellowButton from "@/app/student/dashboard/components/YellowButton";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardHistoryPreTestItem = () => {
  return (
    <>
      <div className="relative">
        {/* carditem pretest user jika sudah beli modul */}
        <div
          className={`p-2 bg-cover bg-center rounded-md min-h-28 w-[100%] bg-[#7547FF] text-white`}
        >
          <div className="flex w-fit justify-center items-center text-neutral-100 text-[11px] mb-2 gap-1">
            <AccessTimeFilledIcon sx={{ color: "white" }} fontSize="small" />
            <h3>15 menit</h3>
            <WorkspacePremiumIcon sx={{ color: "white" }} fontSize="small" />

            <h3>100 pts</h3>
            <QuizIcon sx={{ color: "white" }} fontSize="small" />
            <h3>quizziz</h3>
            <FaRegCheckCircle size="20px" color="white" fontSize="small" />
            <h3>Selesai</h3>
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-bold">Judul Pretest</h1>
              <h3 className="text-xs text-left mb-2">
                Kamu telah selesai mengerjakan pretest ini
              </h3>
            </div>
            <div className="">
              <IoIosArrowDroprightCircle />
              <h3 className="text-xs">
                Lihat <br /> Pretest
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHistoryPreTestItem;
