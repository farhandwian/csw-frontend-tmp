import React, { useState, useEffect } from "react";
import CardHistoryPreTestItem from "../../_components/list-per-modul/CardHistoryTestItem";
import Image from "next/image";
import { useGetQuizAll } from "@/hooks/uji-kemampuan/hook";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TQuizAllParams } from "@/types/uji-kemampuan";
import { TTestType } from "@/types/index";
import { convertTestTypeTittleToID } from "@/lib/utils/checkTestType";
import { TQuizAll, TQuiz } from "@/types/uji-kemampuan";

interface TableHistoryTestItemProps {
  sub_module_uuid: string;
  testType: TTestType;
}

const TableHistoryTestItem = ({
  sub_module_uuid,
  testType,
}: TableHistoryTestItemProps) => {
  const testTypeID: number = convertTestTypeTittleToID(testType);

  const {
    data,
    isLoading: isLoadingQuizAllPretest,
    isError: isErrorQuizAllPretest,
  } = useGetQuizAll(0, 100, sub_module_uuid, testTypeID);

  const dataQuizAllPretest = data?.data;
  console.log(data);

  const [isHaveModul, setIsHaveModul] = useState(true);
  useState(() => {
    if (dataQuizAllPretest?.quizzes?.length === 0) {
      setIsHaveModul(false);
    } else {
      setIsHaveModul(true);
    }
  });

  const [quizzes, setQuizzes] = useState<TQuiz[]>(
    dataQuizAllPretest?.quizzes ? dataQuizAllPretest.quizzes : [],
  );
  const [filter, setFilter] = useState("sudah-dikerjakan"); //sudah-dikerjakan,belum-dikerjakan

  useEffect(() => {
    if (dataQuizAllPretest) {
      setQuizzes(dataQuizAllPretest.quizzes);
    }
  }, [dataQuizAllPretest]);

  const filteredQuizzes = quizzes.filter((quiz) => {
    if (filter === "") {
      return true;
    }
    // Filter berdasarkan status
    if (quiz.status_pengerjaan !== filter) {
      return false;
    }
    return true;
  });

  const handleFilterClick = (value: string) => {
    setFilter(value);
  };

  if (isErrorQuizAllPretest) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingQuizAllPretest) {
    return <Loading>{loadingMessage}</Loading>;
  }

  return (
    <div
      className={`ml-5 ${
        isHaveModul ? "h-[33.75rem]" : "h-[10rem]"
      }  max-w-[23rem] rounded-md border bg-white`}
    >
      {/* header table */}
      <div className="border-b-[1px] border-[#94A3B8] p-2 shadow-md">
        <div className="flex ">
          <div className="mr-2">
            <Image
              src={"/img/uji-kemampuan/ic_history.png"}
              width={165}
              height={165}
              alt="ic-banner"
              className="mt-[2px] inline h-[2.3rem] w-[2.3rem]"
            />
          </div>

          <div className="m-auto w-[80%]">
            <h1 className="text-sm font-bold">
              Histori {testType === "pretest" ? "Pretest" : "Posttest"}{" "}
              {dataQuizAllPretest?.module_name} Bagian{" "}
              {dataQuizAllPretest?.sub_module_name}
            </h1>
          </div>
        </div>
        <h3 className="mt-1 text-[10px]">
          Histori yang muncul adalah histori setelah selesai maupun belum
          mengerjakan {testType === "pretest" ? "pretest" : "posttest"}{" "}
        </h3>
      </div>

      <div
        className={`${
          isHaveModul ? "block" : "hidden"
        } relative h-[85%] max-w-full overflow-y-scroll bg-[#F9F9F9] scrollbar-thin`}
      >
        {/* tombol sudah dikerjakan atau belum dikerjakan */}
        <div className="h-14 w-[100%] bg-white px-2 py-2">
          <div className="mx-auto flex h-[100%] w-[100%] items-center justify-center gap-2 bg-[#F1F1F1]">
            <button
              onClick={() => handleFilterClick("sudah-dikerjakan")}
              className={`min-h-6 w-[40%] rounded-md p-0 text-[11px] ${filter === "sudah-dikerjakan" ? "bg-[#366AD3] text-white" : "bg-[#F1F1F1] text-black"}`}
            >
              sudah dikerjakan
            </button>
            <button
              onClick={() => handleFilterClick("belum-dikerjakan")}
              className={`min-h-6 w-[40%] rounded-md p-0 text-[11px] ${filter === "belum-dikerjakan" ? "bg-[#366AD3] text-white" : "bg-[#F1F1F1] text-black"}`}
            >
              belum dikerjakan
            </button>
          </div>
        </div>

        {/* container list item histori pretest */}

        {filteredQuizzes?.map((quiz, index) => (
          <div
            key={`history_test_${index}`}
            className="w-full border border-x-0 border-t px-2 py-3"
          >
            <h1 className="mb-1 text-sm">
              Judul Pertemuan - Tanggal Pertemuan
            </h1>
            {/* card item history pretest */}
            <CardHistoryPreTestItem
              sub_module_uuid={sub_module_uuid}
              quiz={quiz}
              testType={testType}
            />
          </div>
        ))}
      </div>

      <div
        className={`${
          isHaveModul ? "hidden" : "block"
        } max-w-full bg-[#F9F9F9] p-3`}
      >
        <h2 className="text xs">Belum ada histori pretest untuk ditampilkan</h2>
      </div>
    </div>
  );
};

export default TableHistoryTestItem;
