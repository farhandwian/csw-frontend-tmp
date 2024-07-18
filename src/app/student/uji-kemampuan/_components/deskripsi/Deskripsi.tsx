"use client";

import Nilai from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/Nilai";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Link from "next/link";
import { useState, useEffect } from "react";
import InformationTest from "@/app/student/_components/InformationTest";
import { TQuizDetail } from "@/types/quiz";
import { TDeskripsiLatihanSoalParams } from "@/types/modul";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizDetail } from "@/hooks/quiz/hook";
import { TTestType } from "@/types/index";
import { convertTestTypeNameToID } from "@/lib/utils/ConvertTestType";

const informasi = {
  PENGERJAAN: "",
  STATUS: "",
  WAKTU: "",
  JUMLAH_SOAL: "",
};

const updateInformasi = (dataQuizDetail: TQuizDetail) => {
  // informasi.PENGERJAAN =
  //   `dapat dikerjakan ${dataQuizDetail?.attempt_allowed}x` || "";
  informasi.PENGERJAAN = `dapat dikerjakan sekali`;

  informasi.STATUS =
    `${dataQuizDetail?.status} ${dataQuizDetail?.attempt ? `${dataQuizDetail?.attempt}x` : ""}` ||
    "";
  informasi.WAKTU = `${dataQuizDetail?.total_time} MENIT` || "";
  informasi.JUMLAH_SOAL = `${dataQuizDetail?.total_questions} SOAL` || "";
};

interface DeskripsiProps {
  test_type: TTestType;
  quiz_uuid: string;
  sub_module_uuid: string;
}

const Deskripsi = ({
  test_type,
  quiz_uuid,
  sub_module_uuid,
}: DeskripsiProps) => {
  const [isDone, setIsDone] = useState(false);
  const [singleScore, setSingleScore] = useState(0);
  const [multipleScore, setMultipleScore] = useState([]);
  const {
    data,
    isLoading: isLoadingQuizDetail,
    isError: isErrorQuizDetail,
    refetch,
  } = useGetQuizDetail(quiz_uuid, convertTestTypeNameToID(test_type));

  // params.test_type_id
  console.log(convertTestTypeNameToID(test_type));
  const dataQuizDetail = data?.data!;
  console.log(dataQuizDetail);

  updateInformasi(dataQuizDetail);

  //   const informasiArray = Object.entries(informasi);
  useEffect(() => {
    refetch();
    if (dataQuizDetail?.attempt && dataQuizDetail?.attempt > 0) {
      setIsDone(true);
    }
    if (
      dataQuizDetail?.score &&
      (test_type === "pretest" || test_type === "posttest")
    ) {
      setSingleScore(dataQuizDetail?.score);
      console.log(singleScore);
    }
  }, [dataQuizDetail, test_type, singleScore, refetch]);

  if (isLoadingQuizDetail) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizDetail) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  // const urlRedirectCBT = (test_type: TTestType) => {
  //   if (test_type === "pretest") {
  //     return `${quiz_uuid}/CBT`;
  //   } else if (test_type === "posttest") {
  //     return `${sub_module_uuid}/deskripsi-posttest/${quiz_uuid}/CBT`;
  //   }
  //   return "";
  // };

  const urlRedirectReview = (test_type: TTestType) => {
    if (test_type === "pretest") {
      return `${sub_module_uuid}/deskripsi-pretest/${quiz_uuid}/CBT`;
    } else if (test_type === "posttest") {
      return `${sub_module_uuid}/deskripsi-posttest/${quiz_uuid}/CBT`;
    }
  };

  return (
    <>
      <section className="relative p-4 md:p-5">
        <div className="flex flex-wrap">
          <div className="w-[100%] md:w-[60%]">
            <h1 className={`text-lg text-[#267CDD]`}>{dataQuizDetail.title}</h1>
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
              {dataQuizDetail.description}
            </p>

            <div className=" mt-6 w-[100%] rounded-md border-2 p-3">
              <h1 className=" text-sm text-[#9CA3AF]">BERSIAP MENGERJAKAN</h1>
              <h2 className="text-sm text-[#B4B4B4]">
                Sudah belajar dengan mengikuti pelajaran yang disediakan?
                Lanjutkan dan mulai kerjakan pretest dengan sungguh-sungguh
              </h2>

              {dataQuizDetail?.attempt && dataQuizDetail?.attempt ? (
                <button className="me-2 mt-2 cursor-auto rounded-lg border border-gray-200 bg-[#E5E7EB] px-5 py-2.5 text-sm font-medium text-[#9CA3AF]  ">
                  Tidak Bisa Dikerjakan Kembali
                </button>
              ) : (
                <Link href={`${quiz_uuid}/CBT`}>
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
            <Nilai
              singleScore={singleScore}
              testType={test_type}
              maxScore={dataQuizDetail.max_score}
              quiz_uuid={quiz_uuid}
              quiz_submission_uuid={dataQuizDetail.quiz_submission_uuid}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Deskripsi;
