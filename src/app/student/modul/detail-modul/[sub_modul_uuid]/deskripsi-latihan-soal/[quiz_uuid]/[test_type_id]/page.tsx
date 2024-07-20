"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import InformationTest from "@/app/student/_components/InformationTest";
import ModulFAB from "@/app/student/modul/detail-modul/[sub_modul_uuid]/_components/ModulFAB";
import BlueButton from "@/components/Button/BlueButton";
import { TDeskripsiLatihanSoalParams } from "@/types/modul";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizDetail } from "@/hooks/quiz/hook";
import { TQuizDetail } from "@/types/quiz";
import Nilai from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/Nilai";
import GrayButton from "@/components/Button/GrayButton";
import Link from "next/link";

const Page = ({ params }: { params: TDeskripsiLatihanSoalParams }) => {
  const informasi = {
    PENGERJAAN: "",
    STATUS: "",
    WAKTU: "",
    JUMLAH_SOAL: "",
    Nilai: "",
  };
  const updateInformasi = (dataQuizDetail: TQuizDetail) => {
    console.log(dataQuizDetail?.score);
    // informasi.PENGERJAAN =
    //   `dapat dikerjakan ${dataQuizDetail?.attempt_allowed}x` || "";
    informasi.PENGERJAAN = `dapat dikerjakan berkali-kali`;
    informasi.STATUS =
      `${dataQuizDetail?.status} ${dataQuizDetail?.attempt ? `${dataQuizDetail?.attempt}x` : ""}` ||
      "";
    informasi.WAKTU = `${dataQuizDetail?.total_time} MENIT` || "";
    informasi.JUMLAH_SOAL = `${dataQuizDetail?.total_questions} SOAL` || "";
    informasi.Nilai = `${dataQuizDetail?.score !== -1 ? `${dataQuizDetail?.score}/${dataQuizDetail?.max_score}` : "-"}`;
  };
  const {
    data,
    isLoading: isLoadingQuizDetail,
    isError: isErrorQuizDetail,
  } = useGetQuizDetail(params.quiz_uuid, params.test_type_id);
  // params.test_type_id
  const dataQuizDetail = data?.data!;
  console.log(dataQuizDetail);

  updateInformasi(dataQuizDetail);

  //   const informasiArray = Object.entries(informasi);

  if (isLoadingQuizDetail) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizDetail) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }
  return (
    <>
      <Breadcrumbs widthReduction={"54px"} paramsIndexPosition={[6]} />

      <section className="relative p-4 md:p-5">
        <ModulFAB modulUUID={params.sub_modul_uuid}></ModulFAB>
        <h1 className="my-2 text-lg font-bold leading-normal text-tp-Gunmetal md:text-2xl">
          {`Latihan soal ${dataQuizDetail?.subject}`}
        </h1>
        {/* informasi soal */}
        <InformationTest informasi={informasi} />
        <hr className="border-y-1 border-y-gray-300" />
        <h1 className="text-base text-tp-SlateGray md:text-xl">
          Deskripsi Latihan
        </h1>
        <p className={`text-sm leading-normal text-tp-SteelBlue md:text-base`}>
          {dataQuizDetail.description}
        </p>
        <p className="mt-3 text-sm font-semibold text-[#b4b4b4] md:text-base">
          Persiapkan diri kamu sebelum mengerjakan latihan dengan mempelajari
          dan memahami modul materi. Sudah belajar sebelumnya? Lanjutkan dan
          mulai kerjakan latihan!
        </p>

        <div className="flex gap-3">
          <Link
            href={`/student/modul/detail-modul/${params.sub_modul_uuid}/deskripsi-latihan-soal/${params.quiz_uuid}/${params.test_type_id}/CBT`}
          >
            <BlueButton className="my-3 bg-pl-RoyalBlue">
              {dataQuizDetail?.attempt! > 0
                ? "kerjakan lagi"
                : "mulai kerjakan"}
            </BlueButton>
          </Link>

          <Link
            href={`/student/modul/detail-modul/${params.sub_modul_uuid}/nilai/review-jawaban/${dataQuizDetail.quiz_submission_uuid}/${params.quiz_uuid}/${params.test_type_id}`}
          >
            <GrayButton
              className={`my-3 ${dataQuizDetail?.attempt! < 1 && "hidden"}`}
            >
              Lihat Review Jawaban
            </GrayButton>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
