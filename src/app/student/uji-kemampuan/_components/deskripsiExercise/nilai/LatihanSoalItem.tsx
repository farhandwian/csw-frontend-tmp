import { TExerciseHistoryDetailModule } from "@/types/exercise";
import React, { useState } from "react";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Link from "next/link";

interface LatihanSoalItemProps {
  exercise_uuid: string;
  module_id: number;
  isMax: number;
  key: number;
  data: TExerciseHistoryDetailModule;
  user_attempt: number;
}

const LatihanSoalItem = ({
  exercise_uuid,
  module_id,
  isMax,
  key,
  data,
  user_attempt,
}: LatihanSoalItemProps) => {
  const [subnav, setSubnav] = useState(false); // Default set to false to hide initially
  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="mb-2 w-[100%] px-3">
      <div className="rounded-2xl bg-white">
        {/* sub menu */}
        <div
          className="cursor-pointer rounded-2xl bg-white p-2"
          onClick={showSubnav}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3 rounded-t-2xl">
              <Image
                src={"/img/uji-kemampuan/ic_nilai-latihan-soal.png"}
                width={538}
                height={638}
                alt="img-banner"
                className="min-h-[3rem] max-w-[4rem]"
              />
              <div>
                <h1 className="font-semibold">
                  {isMax ? "Nilai Tertinggimu" : "Nilai Terendahmu"}
                </h1>
                <h3>Total Nilai</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex">
                <h1 className="p-0 text-[#FFA056]">{data.score_per_module}</h1>
                <h1 className="text-[#FF2985]">/{data.max_score_per_module}</h1>
              </div>
              <div>{subnav ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
            </div>
          </div>
        </div>
        <div
          className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
            subnav ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="rounded-b-2xl bg-[#E3E7FA]">
            {/* Mark / total soal yang benar */}
            <div className="px-3 py-2">
              <h1 className="font-semibold leading-normal">
                Jawaban benar / Total soal
              </h1>
              <div className="mb-1 flex max-w-[100%] items-center text-black">
                <h1>Total</h1>
                <div className="w-full border-t border-dotted border-gray-400"></div>
                <h1>
                  {data.right_answer_per_module}/
                  {data.total_question_per_module}
                </h1>
              </div>
              {data.exercise_history_detail?.map((subItem, index) => (
                <div
                  className="mb-1 flex max-w-[100%] items-center text-black"
                  key={index}
                >
                  <h1>{subItem.submodule}</h1>
                  <div className="w-full border-t border-dotted border-gray-400"></div>
                  <h1>
                    {subItem.total_right_answer_per_sub_module}/
                    {subItem.total_question_per_sub_module}
                  </h1>
                </div>
              ))}
              {/* bagian nilai */}
              <h1 className="font-semibold leading-normal">
                Nilai / Nilai Maksimal
              </h1>
              <div className="mb-1 flex max-w-[100%] items-center text-black">
                <h1>Total</h1>
                <div className="w-full border-t border-dotted border-gray-400"></div>
                <h1>
                  {data.score_per_module}/{data.max_score_per_module}
                </h1>
              </div>
              {data.exercise_history_detail?.map((subItem, index) => (
                <div
                  className="mb-1 flex max-w-[100%] items-center text-black"
                  key={index}
                >
                  <h1>{subItem.submodule}</h1>
                  <div className="w-full border-t border-dotted border-gray-400"></div>
                  <h1>
                    {subItem.score_per_sub_module}/
                    {subItem.max_score_per_sub_module}
                  </h1>
                </div>
              ))}
              {user_attempt && (
                <Link
                  className="text-blue-500"
                  href={`/student/uji-kemampuan/latihan-soal/${module_id}/deskripsi-latihan-soal/${exercise_uuid}/review-jawaban/${data.uuid}`}
                >
                  Lihat Review Jawaban
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoalItem;
