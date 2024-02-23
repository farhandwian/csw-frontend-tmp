"use client";
import React, { useState } from "react";
import Studentlayout from "@/app/student/components/StudentLayout";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";
import CardPreTestItem from "./components/CardPreTestItem";

import CardHistoryPreTestItem from "./components/CardHistoryPreTestItem";
import { Pagination } from "flowbite-react";

const page = () => {
  const [isHaveModul, setIsHaveModul] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <Studentlayout>
      {/* <Breadcrumbs /> */}
      <section className="relative min-w-36 ">
        <div className={`${!isHaveModul && "hidden"}`}>
          <h1>Pretest SKD Bagian TWK</h1>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            nesciunt.
          </h3>
        </div>

        <div className={`flex w-[100%] mt-3`}>
          {/* list pretest card */}
          <div className="relative w-[70%] ">
            <div className={`${isHaveModul ? "block" : "hidden"}`}>
              {[...Array(6)].map((index) => (
                // container card item pretest
                <div
                  key={index}
                  className="w-[95%] bg-[#F1F1F1] shadow-md rounded-md"
                >
                  <div className="w-[100%] bg-white pl-4">
                    <h3>
                      <Image
                        src={
                          "/img/uji-kemampuan/pretest/ic-list-pretest-per-modul-judul-pertemuan.png"
                        }
                        width={20}
                        height={20}
                        alt="ic-banner"
                        className="w-[1.3rem] h-[1.3rem] inline mr-1 ml-1"
                      />{" "}
                      Judul pertemuan - tanggal pertemuan
                    </h3>
                  </div>
                  <div className="h-fit bg-[#F1F1F1] w-100% p-4">
                    {/* card item pretest */}
                    <CardPreTestItem isStillOpen={true} />
                  </div>
                </div>
              ))}
              <div className="flex overflow-x-auto sm:justify-center text-xs">
                <Pagination
                  currentPage={currentPage}
                  totalPages={100}
                  onPageChange={onPageChange}
                />
              </div>
            </div>
            {/* jika tidak ada modul */}
            <div
              className={`${
                isHaveModul ? "hidden" : "block"
              } w-[100%] m-auto text-center mt-20`}
            >
              <Image
                src={"/img/uji-kemampuan/pretest/img_empty.png"}
                width={320}
                height={300}
                alt="ic-banner"
                className="w-[20rem] h-[20rem] inline m-auto"
              />
            </div>
          </div>
          {/* list histori pretest */}
          <div className="w-[30%]">
            <div
              className={`ml-5 ${
                isHaveModul ? "h-[43.75rem]" : "h-[10rem]"
              }  max-w-[23rem] bg-white border border-[#9CA3AF] rounded-md`}
            >
              {/* header table */}
              <div className="flex shadow-md p-2 border-b-2 border-[#94A3B8]">
                <div className="w-[20%] mr-2">
                  <Image
                    src={"/img/uji-kemampuan/ic_history.png"}
                    width={165}
                    height={165}
                    alt="ic-banner"
                    className="w-[2.3rem] h-[2.3rem] inline mt-1"
                  />
                </div>

                <div className="">
                  <h1 className="text-sm font-bold">
                    Histori Pretest SKD Bagian TWK
                  </h1>
                  <h3 className="text-[10px]">
                    Histori yang muncul adalah histori setelah selesai maupun
                    belum mengerjakan pretest skd
                  </h3>
                </div>
              </div>

              <div
                className={`${
                  isHaveModul ? "block" : "hidden"
                } h-[85%] max-w-full bg-[#F9F9F9] relative overflow-y-scroll scrollbar-thin`}
              >
                {/* tombol sudah dikerjakan atau belum dikerjakan */}
                <div className="w-[100%] bg-white h-14 px-2 py-2">
                  <div className="w-[100%] h-[100%] flex justify-center items-center gap-2 mx-auto bg-[#F1F1F1]">
                    <button className="w-[40%] bg-[#366AD3] rounded-md text-[11px] text-white p-0 min-h-6">
                      sudah dikerjakan
                    </button>
                    <button className="w-[40%] bg-[#F1F1F1] rounded-md text-[11px] text-black p-0 min-h-6">
                      belum dikerjakan
                    </button>
                  </div>
                </div>

                {/* container list item histori pretest */}

                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full border border-tp.SteelBlue border-x-0 py-3 px-2"
                  >
                    <h1 className="text-sm mb-1">
                      Judul Pertemuan - Tanggal Pertemuan
                    </h1>
                    {/* card item history pretest */}
                    <CardHistoryPreTestItem />
                  </div>
                ))}
              </div>

              <div
                className={`${
                  isHaveModul ? "hidden" : "block"
                } p-3 max-w-full bg-[#F9F9F9]`}
              >
                <h2 className="text xs">
                  Belum ada histori pretest untuk ditampilkan
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
