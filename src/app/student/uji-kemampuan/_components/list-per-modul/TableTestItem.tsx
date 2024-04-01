import React from "react";
import { Pagination } from "flowbite-react";
import Image from "next/image";
import CardPreTestItem from "../../_components/list-per-modul/CardTestItem";
type TypeTest = "pretest" | "posttest";

interface TableTestItemProps {
  isHaveModul: boolean;
  currentPage: number;
  typeTest: TypeTest;
  onPageChange: (page: number) => void;
}
const TableTestItem = ({
  isHaveModul,
  currentPage,
  typeTest,
  onPageChange,
}: TableTestItemProps) => {
  return (
    <>
      <div className={`${isHaveModul ? "block" : "hidden"}`}>
        {[...Array(6)].map((index) => (
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
              <CardPreTestItem isStillOpen={true} typeTest={typeTest} />
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
    </>
  );
};

export default TableTestItem;
