"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useGetAllModuls } from "@/hooks/modul/hook";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";

const Page = () => {
  const {
    data,
    isLoading: isLoadingAllModuls,
    isError: isErrorAllModuls,
  } = useGetAllModuls();

  const dataAllModuls = data?.data;

  if (isErrorAllModuls) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingAllModuls) {
    return <Loading>{loadingMessage}</Loading>;
  }

  return (
    <section className="relative p-4 md:p-5">
      <div className="mb-6">
        <h1 className="text-base font-bold md:text-2xl">
          Modul Yang Dipelajari
        </h1>
        <h3 className="text-sm md:text-sm">
          Pelajari materi dibawah ini agar dapat memudahkanmu dalam mencapai
          targetmu!!!
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {dataAllModuls?.map((modul, index) => (
          <div className="rounded-3xl bg-white p-4 shadow-md" key={index}>
            <div className="relative m-auto h-[100px] w-full rounded-2xl bg-[#DCDDFF] md:h-[150px] md:w-[100%]   ">
              <Image
                src={"/img/modul/list-modul-2.svg"}
                alt="img-paket"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 transform object-fill"
              />
              <div className="absolute bottom-0 right-1 text-4xs md:right-2 md:text-xs">
                <Link
                  href={`/student/modul/detail-modul/${modul.uuid}`}
                  type="button"
                  className="mb-2 rounded-2xl border border-gray-300 bg-white px-[3px] py-[1px] text-4xs  font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:py-[2px] md:pl-2 md:text-2xs"
                >
                  Lihat Detail
                  <ChevronRightIcon fontSize="inherit" />
                </Link>
              </div>
            </div>

            <div className="relative mt-2 flex flex-col  md:mt-2">
              <h1 className="mb-1 text-2xs  font-bold md:mb-2 md:text-lg">
                {modul.sub_module_name}
              </h1>
              <h3 className="mb-1 line-clamp-4  text-3xs md:mb-3 md:text-xs">
                {modul.description}
              </h3>
              <small className="text-3xs text-slate-400">
                <InfoIcon fontSize="inherit" className="mr-1 inline-block" />
                Modul tidak bisa di download
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
