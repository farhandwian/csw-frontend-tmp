import React from "react";
import CardHistoryPreTestItem from "../../_components/list-per-modul/CardHistoryTestItem";
import Image from "next/image";
type TypeTest = "pretest" | "posttest";

interface TableHistoryTestItemProps {
  isHaveModul: boolean;
  typeTest: TypeTest;
}

const TableHistoryTestItem = ({
  isHaveModul,
  typeTest,
}: TableHistoryTestItemProps) => {
  return (
    <div
      className={`ml-5 ${
        isHaveModul ? "h-[43.75rem]" : "h-[10rem]"
      }  max-w-[23rem] rounded-md border bg-white`}
    >
      {/* header table */}
      <div className="flex border-b-[1px] border-[#94A3B8] p-2 shadow-md">
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
          <h1 className="text-sm font-bold">Histori Pretest SKD Bagian TWK</h1>
          <h3 className="text-[10px]">
            Histori yang muncul adalah histori setelah selesai maupun belum
            mengerjakan pretest skd
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
            key={`history_test_${index}`}
            className="w-full border border-x-0 border-t px-2 py-3"
          >
            <h1 className="mb-1 text-sm">
              Judul Pertemuan - Tanggal Pertemuan
            </h1>
            {/* card item history pretest */}
            <CardHistoryPreTestItem isDone={true} typeTest={typeTest} />
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
