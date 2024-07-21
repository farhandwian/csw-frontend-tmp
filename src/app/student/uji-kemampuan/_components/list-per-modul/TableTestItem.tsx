import React, { useState, useEffect } from "react";
import { Pagination } from "flowbite-react";
import Image from "next/image";
import CardPreTestItem from "../../_components/list-per-modul/CardTestItem";
import { useGetQuizAll } from "@/hooks/uji-kemampuan/hook";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TQuizAllParams } from "@/types/uji-kemampuan";
import { TTestType } from "@/types/index";
import { convertTestTypeNameToID } from "@/lib/utils/ConvertTestType";

interface TableTestItemProps {
  sub_module_uuid: string;
  testType: TTestType;
}

const TableTestItem = ({ sub_module_uuid, testType }: TableTestItemProps) => {
  const [page, setPage] = useState(1);

  const testTypeID: number = convertTestTypeNameToID(testType);

  const {
    data,
    isLoading: isLoadingQuizAllPretest,
    isError: isErrorQuizAllPretest,
  } = useGetQuizAll(page, 4, sub_module_uuid, testTypeID);

  const dataQuizAllPretest = data?.data;
  const pagination = data?.pagination;

  const [isHaveModul, setIsHaveModul] = useState(true);
  useState(() => {
    if (dataQuizAllPretest?.quizzes?.length === 0) {
      setIsHaveModul(false);
    } else {
      setIsHaveModul(true);
    }
  });
  let lastPage;
  let firstPage;
  let pagesArray;

  if (pagination) {
    lastPage = () => setPage(pagination.total_pages);
    firstPage = () => setPage(1);

    pagesArray = Array(pagination.total_pages)
      .fill(null)
      .map((_, index) => index + 1);
  }

  if (isErrorQuizAllPretest) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingQuizAllPretest) {
    return <Loading>{loadingMessage}</Loading>;
  }

  return (
    <>
      <div className={`${isHaveModul ? "block" : "hidden"}`}>
        <div className={`${!isHaveModul && "hidden"}`}>
          <h1>
            {testType === "pretest" ? "Pretest" : "Posttest"}{" "}
            {dataQuizAllPretest?.module_name} Bagian{" "}
            {dataQuizAllPretest?.sub_module_name}
          </h1>
          {testType === "pretest" ? (
            <h3>
              Berikut adalah test yang dibuat untuk dikerjakan oleh peserta
              sebelum melakukan pertemuan dengan mentor untuk membahas suatu
              topik
            </h3>
          ) : (
            <h3>
              Berikut adalah test yang dibuat untuk dikerjakan oleh peserta
              sesudah melakukan pertemuan dengan mentor untuk membahas suatu
              topik
            </h3>
          )}
        </div>
        <div className="mt-3">
          {dataQuizAllPretest?.quizzes.map((quiz, index) => (
            // container card item pretest
            <div
              key={`test_${index}`}
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
                <CardPreTestItem
                  sub_module_uuid={sub_module_uuid}
                  quiz={quiz}
                  testType={testType}
                />
              </div>
            </div>
          ))}

          {/* pagination */}
          <div className="mt-2 flex cursor-pointer justify-center overflow-x-auto text-xs">
            <ul className="inline-flex h-10 -space-x-px text-base">
              <li>
                <button
                  onClick={firstPage}
                  disabled={page === 1}
                  className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-2.5 w-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </button>
              </li>

              {pagesArray &&
                pagesArray.map((pg) => (
                  <li key={pg}>
                    <a
                      onClick={() => setPage(pg)}
                      className={`flex h-10 items-center justify-center border px-4 leading-tight  ${pg === page ? "bg-gray-200" : "border-gray-300 bg-white  text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}
                    >
                      {pg}
                    </a>
                  </li>
                ))}
              <li>
                <button
                  onClick={lastPage}
                  disabled={pagination && page === pagination.total_pages}
                  className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-2.5 w-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
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
    </>
  );
};

export default TableTestItem;
