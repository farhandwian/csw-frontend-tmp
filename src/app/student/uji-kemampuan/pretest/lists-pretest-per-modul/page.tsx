"use client";
import Studentlayout from "@/app/student/_components/layout";
import Image from "next/image";
import { useState } from "react";
import CardPreTestItem from "./_components/CardPreTestItem";
import { Pagination } from "flowbite-react";
import CardHistoryPreTestItem from "./_components/CardHistoryPreTestItem";

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

        <div className={`mt-3 flex w-[100%]`}>
          {/* list pretest card */}
          <div className="relative w-[70%] ">
            <div className={`${isHaveModul ? "block" : "hidden"}`}>
              {[...Array(6)].map((index) => (
                // container card item pretest
                <div
                  key={index}
                  className="w-[95%] rounded-md bg-[#F1F1F1] shadow-md"
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
                        className="ml-1 mr-1 inline h-[1.3rem] w-[1.3rem]"
                      />{" "}
                      Judul pertemuan - tanggal pertemuan
                    </h3>
                  </div>
                  <div className="w-100% h-fit bg-[#F1F1F1] p-4">
                    {/* card item pretest */}
                    <CardPreTestItem isStillOpen={true} />
                  </div>
                </div>
              ))}
              <div className="flex overflow-x-auto text-xs sm:justify-center">
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
              } m-auto mt-20 w-[100%] text-center`}
            >
              <Image
                src={"/img/uji-kemampuan/pretest/img_empty.png"}
                width={320}
                height={300}
                alt="ic-banner"
                className="m-auto inline h-[20rem] w-[20rem]"
              />
            </div>
          </div>
          {/* list histori pretest */}
          <div className="w-[30%]">
            <div
              className={`ml-5 ${
                isHaveModul ? "h-[43.75rem]" : "h-[10rem]"
              }  max-w-[23rem] rounded-md border border-[#9CA3AF] bg-white`}
            >
              {/* header table */}
              <div className="flex border-b-2 border-[#94A3B8] p-2 shadow-md">
                <div className="mr-2 w-[20%]">
                  <Image
                    src={"/img/uji-kemampuan/ic_history.png"}
                    width={165}
                    height={165}
                    alt="ic-banner"
                    className="mt-1 inline h-[2.3rem] w-[2.3rem]"
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
                } relative h-[85%] max-w-full overflow-y-scroll bg-[#F9F9F9] scrollbar-thin`}
              >
                {/* tombol sudah dikerjakan atau belum dikerjakan */}
                <div className="h-14 w-[100%] bg-white px-2 py-2">
                  <div className="mx-auto flex h-[100%] w-[100%] items-center justify-center gap-2 bg-[#F1F1F1]">
                    <button className="min-h-6 w-[40%] rounded-md bg-[#366AD3] p-0 text-[11px] text-white">
                      sudah dikerjakan
                    </button>
                    <button className="min-h-6 w-[40%] rounded-md bg-[#F1F1F1] p-0 text-[11px] text-black">
                      belum dikerjakan
                    </button>
                  </div>
                </div>

                {/* container list item histori pretest */}

                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="border-tp.SteelBlue w-full border border-x-0 px-2 py-3"
                  >
                    <h1 className="mb-1 text-sm">
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
                } max-w-full bg-[#F9F9F9] p-3`}
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
