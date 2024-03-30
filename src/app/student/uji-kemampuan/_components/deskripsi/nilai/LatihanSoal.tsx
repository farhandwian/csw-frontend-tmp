import React, { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import {
  TypeNilai,
  DataNilai,
} from "@/app/student/uji-kemampuan/_components/deskripsi/Deskripsi";

import { LatihanSoalNilaiData } from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/LatihanSoalData";

interface PostTestOrPretestArgs {
  dataNilai?: DataNilai[];
  typeNilai: TypeNilai;
}
const LatihanSoal = ({ dataNilai, typeNilai }: PostTestOrPretestArgs) => {
  const [subnav, setSubnav] = useState(true);

  const showSubnav = () => setSubnav(!subnav);

  // Array kosong untuk menyimpan hasil looping
  const elements = [];

  // Looping sebanyak 5 kali

  return (
    <>
      {dataNilai ? (
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
                  Nilai yang muncul adalah nilai tertinggi, nilai terendah, dan
                  3 nilai dari pengerjaan terakhir.
                </h3>
              </div>
            </div>
            <div className="max-h-[20rem] w-[100%] overflow-y-scroll">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="mb-2 w-[100%] px-3">
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
                            <h1 className="p-0 text-[#FFA056]">500</h1>
                            <h1 className="text-[#FF2985]">/550</h1>
                          </div>
                          <div className="">
                            {subnav ? (
                              <ArrowDropDownIcon />
                            ) : (
                              <ArrowDropUpIcon />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {subnav && (
                      <div className=" rounded-b-2xl bg-[#E3E7FA] ">
                        {/* Mark / total soal yang benar */}
                        <div className="px-3 py-2">
                          <h1 className="font-semibold leading-normal">
                            Mark / total soal yang benar
                          </h1>
                          <div className="mb-1 flex max-w-[100%]  items-center text-black">
                            <h1>Total</h1>
                            <div className=" w-full border-t border-dotted border-gray-400"></div>
                            <h1>105/110</h1>
                          </div>
                          {LatihanSoalNilaiData.subject_scores.map(
                            (subItem: any, index: any) => (
                              <div
                                className="mb-1 flex max-w-[100%]  items-center text-black"
                                key={index}
                              >
                                <h1>{subItem.subject}</h1>
                                <div className=" w-full border-t border-dotted border-gray-400"></div>
                                <h1>
                                  {subItem.obtained}/{subItem.maximum}
                                </h1>
                              </div>
                            ),
                          )}
                        </div>
                        <div className="h-[1px] w-[100%] bg-[#9CA3AF]"></div>
                        <div className="px-3 py-2">
                          <h1 className="font-semibold leading-normal">
                            Nilai
                          </h1>

                          {LatihanSoalNilaiData.nilai.map(
                            (subItem: any, index: any) => (
                              <div
                                className="mb-1 flex max-w-[100%]  items-center text-black"
                                key={index}
                              >
                                <h1>{subItem.subject}</h1>
                                <div className="w-full border-t border-dotted border-gray-400"></div>
                                <h1>
                                  {subItem.obtained}/{subItem.maximum}
                                </h1>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* end nilai tertinggi */}
                </div>
              ))}
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
              Nilai belum muncul, harap kerjakan {typeNilai} terlebih dahulu
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LatihanSoal;
