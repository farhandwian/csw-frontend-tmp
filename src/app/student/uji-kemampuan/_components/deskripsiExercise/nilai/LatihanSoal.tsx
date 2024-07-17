"use client";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import { useGetExerciseHistory } from "@/hooks/exercise/hook";
import LatihanSoalItem from "@/app/student/uji-kemampuan/_components/deskripsiExercise/nilai/LatihanSoalItem";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { TExerciseHistoryDetailModule } from "@/types/exercise";

interface LatihanSoalArgs {
  exercise_uuid: string;
  module_id: number;
  user_attempt: number;
}

const LatihanSoal = ({
  exercise_uuid,
  module_id,
  user_attempt,
}: LatihanSoalArgs) => {
  const [subnav, setSubnav] = useState(true);
  const showSubnav = () => setSubnav(!subnav);

  const {
    data,
    isLoading: isLoadingExerciseHistory,
    isError: isErrorExerciseHistory,
  } = useGetExerciseHistory(exercise_uuid);

  const dataExerciseHistory = data?.data;

  if (isLoadingExerciseHistory) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorExerciseHistory) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  return (
    <>
      {dataExerciseHistory ? (
        <>
          {/* table nilai */}
          <div className="flex flex-col items-center justify-center border-b-[2px]">
            {/* header table */}
            <div className="mb-2 flex items-center justify-center gap-3 border-b-2 p-2">
              <h1 className="text-md text-[#267DDD]">NILAI</h1>
              <div className="flex items-center justify-center gap-1">
                <InfoIcon
                  className=""
                  fontSize="small"
                  sx={{ color: "#9CA3AF" }}
                />
                <h3 className="text-xs">
                  Nilai yang muncul adalah nilai tertinggi dan nilai terendah
                </h3>
              </div>
            </div>
            <div className="max-h-[20rem] w-[100%] overflow-y-scroll">
              <LatihanSoalItem
                exercise_uuid={exercise_uuid}
                module_id={module_id}
                key={0}
                isMax={1}
                data={dataExerciseHistory.max_score}
                user_attempt={user_attempt}
              />
              <LatihanSoalItem
                exercise_uuid={exercise_uuid}
                module_id={module_id}
                key={1}
                isMax={0}
                data={dataExerciseHistory.min_score}
                user_attempt={user_attempt}
              />
            </div>
          </div>
          {/* end tabel nilai */}
        </>
      ) : (
        <>
          <div className="border-b-[2px] p-2">
            <h1 className="text-md text-[#267DDD]">NILAI</h1>
          </div>
          <div className="p-3">
            <div className="rounded-md">
              Nilai belum muncul, harap kerjakan latihan soal terlebih dahulu
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LatihanSoal;
