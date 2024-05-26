"use client";

import Nilai from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/Nilai";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Link from "next/link";
import { useState } from "react";
import InformationTest from "@/app/student/_components/InformationTest";

export type TypeNilai = "latihan-soal" | "pretest" | "posttest";
const informasi = {
  PENGERJAAN: "DAPAT DIKERJAKAN BERKALI-KALI",
  STATUS: "SUDAH DIKERJAKAN",
  WAKTU: "6 MENIT",
  JUMLAH_SOAL: "5 SOAL",
};

export interface DataNilai {
  id: number;
  deskripsi: string;
}
interface DeskripsiProps {
  typeNilai: TypeNilai;
}

const dataNilai: DataNilai[] = []; // ada datanya arr len != 0

const dataNilai2: DataNilai[] = [
  { id: 0, deskripsi: "Nilai" },
  { id: 1, deskripsi: "Nilai 2" },
];
const Deskripsi = ({ typeNilai }: DeskripsiProps) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <section className="relative p-4 md:p-5">
        <div className="flex flex-wrap">
          <div className="w-[100%] md:w-[60%]">
            <h1 className={`text-lg text-[#267CDD]`}>
              Pretest SKD Bagian TWK - Judul Pretest
            </h1>
            {/* informasi test */}
            <InformationTest informasi={informasi} />
            {/* horizontal line */}
            <hr className="border-y-1 my-3 border-y-gray-300" />
            <h1 className="text-xl leading-normal text-tp-SlateGray">
              Overview
            </h1>
            <p className={`text-sm font-semibold text-[#64748B]`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book...
            </p>

            <div className=" mt-6 w-[100%] rounded-md border-2 p-3">
              <h1 className=" text-sm text-[#9CA3AF]">BERSIAP MENGERJAKAN</h1>
              <h2 className="text-sm text-[#B4B4B4]">
                Sudah belajar dengan mengikuti pelajaran yang disediakan?
                Lanjutkan dan mulai kerjakan pretest dengan sungguh-sungguh
              </h2>

              {isDone ? (
                <button
                  type="button"
                  className="me-2 mt-2 rounded-lg border border-gray-200 bg-[#E5E7EB] px-5 py-2.5 text-sm font-medium text-[#9CA3AF] hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                >
                  Tidak Bisa Dikerjakan Kembali
                </button>
              ) : (
                <button
                  type="button"
                  className="mb-2 me-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Mulai Kerjakan
                </button>
              )}
            </div>
          </div>
          <div className="w-[100%] text-sm md:w-[40%] md:pl-6">
            <div className="mt-3 w-[100%] rounded-md border-[2px]">
              <div className="border-b-[2px] p-2">
                <h1 className="text-md text-[#267DDD]">SOAL DAN PEMBAHASAN</h1>
              </div>
              <div className="flex justify-between border-b-[2px] p-2">
                <div>
                  <AttachFileIcon className="inline" fontSize="medium" />
                  <h3 className="inline">Soal(PDF)</h3>
                </div>
                <Link href={""}>
                  <h3 className="inline text-right text-[#267DDD]">LIHAT</h3>
                </Link>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <AttachFileIcon className="inline" fontSize="medium" />
                  <h3 className="inline">Soal(PDF) dan pemahasan</h3>
                </div>
                <Link href={""}>
                  <h3 className="inline text-right text-[#267DDD]">LIHAT</h3>
                </Link>
              </div>
            </div>

            {/* bagian nilai */}
            <Nilai typeNilai={typeNilai} dataNilai={dataNilai2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Deskripsi;
