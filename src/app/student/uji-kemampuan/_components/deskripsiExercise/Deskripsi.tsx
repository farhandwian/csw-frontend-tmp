"use client";

import NilaiLatihanSoal from "@/app/student/uji-kemampuan/_components/deskripsiExercise/nilai/LatihanSoal";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Link from "next/link";
import { useState, useEffect } from "react";
import InformationTest from "@/app/student/_components/InformationTest";
import { TExerciseDetail } from "@/types/exercise";
import { TDeskripsiLatihanSoalParams } from "@/types/modul";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetExerciseDetail } from "@/hooks/exercise/hook";
import { TTestType } from "@/types/index";
import { convertTestTypeNameToID } from "@/lib/utils/ConvertTestType";

const informasi = {
  PENGERJAAN: "",
  STATUS: "",
  WAKTU: "",
  JUMLAH_SOAL: "",
};

const updateInformasi = (dataExerciseDetail: TExerciseDetail) => {
  // if (dataExerciseDetail?.attempt > 0) {
  //   informasi.PENGERJAAN = `dapat dikerjakan berkali-kali`;
  // } else {
  //   informasi.PENGERJAAN = `Tidak dapat dikerjakan berkali-kali`;
  // }

  informasi.PENGERJAAN = `dapat dikerjakan berkali-kali`;

  if (dataExerciseDetail?.user_attempt > 0) {
    informasi.STATUS =
      `sudah-dikerjakan ${dataExerciseDetail?.user_attempt ? `${dataExerciseDetail?.user_attempt}x` : ""}` ||
      "";
  } else {
    informasi.STATUS = "belum-dikerjakan";
  }
  informasi.WAKTU = `${dataExerciseDetail?.time} MENIT` || "";
  informasi.JUMLAH_SOAL = `${dataExerciseDetail?.questions.length} SOAL` || "";
};

interface DeskripsiProps {
  exercise_uuid: string;
  module_id: number;
}

const Deskripsi = ({ exercise_uuid, module_id }: DeskripsiProps) => {
  // const [isDone, setIsDone] = useState(false);
  const {
    data,
    isLoading: isLoadingExerciseDetail,
    isError: isErrorExerciseDetail,
    refetch,
  } = useGetExerciseDetail(exercise_uuid);

  const dataExerciseDetail = data?.data!;
  console.log(dataExerciseDetail);

  updateInformasi(dataExerciseDetail);

  // useEffect(() => {
  //   if (
  //     dataExerciseDetail?.user_attempt &&
  //     dataExerciseDetail?.user_attempt > 0
  //   ) {
  //     setIsDone(true);
  //   }
  // }, [dataExerciseDetail, isDone]);

  if (isLoadingExerciseDetail) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorExerciseDetail) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  // const urlRedirectCBT = (test_type: TTestType) => {
  //   if (test_type === "pretest") {
  //     return `${exercise_uuid}/CBT`;
  //   } else if (test_type === "posttest") {
  //     return `${sub_module_uuid}/deskripsi-posttest/${exercise_uuid}/CBT`;
  //   }
  //   return "";
  // };

  return (
    <>
      <section className="relative p-4 md:p-5">
        <div className="flex flex-wrap">
          <div className="w-[100%] md:w-[60%]">
            <h1 className={`text-lg text-[#267CDD]`}>
              {dataExerciseDetail.title}
            </h1>
            {/* informasi test */}
            <InformationTest informasi={informasi} />
            {/* horizontal line */}
            <hr className="border-y-1 my-3 border-y-gray-300" />
            <h1 className="text-xl leading-normal text-tp-SlateGray">
              Overview
            </h1>
            <p className={`text-sm font-semibold text-[#64748B]`}>
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book... */}
              {dataExerciseDetail.description}
            </p>

            <div className=" mt-6 w-[100%] rounded-md border-2 p-3">
              <h1 className=" text-sm text-[#9CA3AF]">BERSIAP MENGERJAKAN</h1>
              <h2 className="text-sm text-[#B4B4B4]">
                Sudah belajar dengan mengikuti pelajaran yang disediakan?
                Lanjutkan dan mulai kerjakan Latihan dengan sungguh-sungguh
              </h2>

              {dataExerciseDetail?.user_attempt &&
              dataExerciseDetail?.user_attempt > 0 ? (
                <Link href={`${exercise_uuid}/CBT`}>
                  <button className="mb-2 me-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Kerjakan Kembali
                  </button>
                </Link>
              ) : (
                <Link href={`${exercise_uuid}/CBT`}>
                  <button className="mb-2 me-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Mulai Kerjakan
                  </button>
                </Link>
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
                <Link href={""} className="cursor-default">
                  <h3 className="inline cursor-default text-right text-[#267DDD]">
                    LIHAT
                  </h3>
                </Link>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <AttachFileIcon className="inline" fontSize="medium" />
                  <h3 className="inline">Soal(PDF) dan pemahasan</h3>
                </div>
                <Link href={""} className="cursor-default">
                  <h3 className="inline cursor-default text-right text-[#267DDD]">
                    LIHAT
                  </h3>
                </Link>
              </div>
            </div>

            {/* bagian nilai */}
            <div className="mt-3 w-[100%] rounded-md border-[2px]">
              <NilaiLatihanSoal
                exercise_uuid={exercise_uuid}
                module_id={module_id}
                user_attempt={dataExerciseDetail?.user_attempt}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deskripsi;
