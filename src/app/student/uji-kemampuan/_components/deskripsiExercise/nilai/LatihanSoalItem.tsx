import { TExerciseHistoryDetailModule } from "@/types/exercise";
import React, { useState } from "react";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface LatihanSoalItemProps {
  data: TExerciseHistoryDetailModule;
}

const LatihanSoalItem = ({ data }: LatihanSoalItemProps) => {
  const [subnav, setSubnav] = useState(true);
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
                className="min-h-[3rem] max-w-[4rem] "
              />
              <div>
                <h1 className="font-semibold">Nilai Tertinggimu</h1>
                <h3>Total Nilai</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex">
                <h1 className="p-0 text-[#FFA056]">{data.score_per_module}</h1>
                <h1 className="text-[#FF2985]">/{data.max_score_per_module}</h1>
              </div>
              <div>{subnav ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</div>
            </div>
          </div>
        </div>
        {subnav && (
          <div className="rounded-b-2xl bg-[#E3E7FA]">
            {/* Mark / total soal yang benar */}
            <div className="px-3 py-2">
              <h1 className="font-semibold leading-normal">
                Mark / total soal yang benar
              </h1>
              <div className="mb-1 flex max-w-[100%] items-center text-black">
                <h1>Total</h1>
                <div className="w-full border-t border-dotted border-gray-400"></div>
                <h1>
                  {data.exercise_history_detail.reduce(
                    (acc, item) => acc + item.total_question_per_sub_module,
                    0,
                  )}
                  /
                  {data.exercise_history_detail.reduce(
                    (acc, item) => acc + item.max_total_question_per_sub_module,
                    0,
                  )}
                </h1>
              </div>
              {data.exercise_history_detail.map((subItem, index) => (
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatihanSoalItem;
