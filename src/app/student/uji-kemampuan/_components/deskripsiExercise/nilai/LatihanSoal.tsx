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

interface PostTestOrPretestArgs {
  exercise_uuid: string;
}

const LatihanSoal = ({ exercise_uuid }: PostTestOrPretestArgs) => {
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
              {[...Array(2)].map((_, index) =>
                index === 0 ? (
                  <LatihanSoalItem
                    key={index}
                    data={dataExerciseHistory.max_score}
                  />
                ) : (
                  <LatihanSoalItem
                    key={index}
                    data={dataExerciseHistory.min_score}
                  />
                ),
              )}
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
