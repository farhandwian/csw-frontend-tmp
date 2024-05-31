"use client";

import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import ModulFAB from "@/app/student/modul/detail-modul/[sub_modul_uuid]/_components/ModulFAB";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetDetailModul } from "@/hooks/modul/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import { TDetailModulParams } from "@/types/modul";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";

import Link from "next/link";
let detail_moduls: {
  materi: string;
  isiStatus: string;
  isi: string;
  latihan: string;
  latihanStatus: string;
}[];

// diIsi,belumDiIsi,terkunci
detail_moduls = [
  {
    materi: "Modul Materi 1 - Pancasila",
    isi: "Isi Modul Materi 1",
    isiStatus: "diIsi",
    latihan: "Latihan Modul Materi 1",
    latihanStatus: "diIsi",
  },
  {
    materi: "Modul Materi 2 - Pancasila",
    isi: "Isi Modul Materi 2",
    isiStatus: "belumDiIsi",
    latihan: "Latihan Modul Materi 2",
    latihanStatus: "belumDiIsi",
  },
  {
    materi: "Modul Materi 3 - Pancasila",
    isiStatus: "terkunci",
    isi: "Isi Modul Materi 3",
    latihan: "Latihan Modul Materi 3",
    latihanStatus: "terkunci",
  },
  {
    materi: "Modul Materi 4 - Pancasila",
    isiStatus: "terkunci",
    isi: "Isi Modul Materi 4",
    latihan: "Latihan Modul Materi 4",
    latihanStatus: "terkunci",
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// diIsi,belumDiIsi,terkunci
const checkStatus = (status: string) => {
  if (status === "diIsi") {
    return (
      <>
        <Checkbox {...label} disabled checked />
      </>
    );
  } else if (status === "belumDiIsi") {
    return (
      <>
        <Checkbox {...label} disabled />
      </>
    );
  } else if (status === "terkunci") {
    return (
      <>
        <LockIcon color="disabled" />
      </>
    );
  }
};
// params: TDetailModulParams
const Page = ({ params }: { params: TDetailModulParams }) => {
  const {
    data,
    isLoading: isLoadingDetailModul,
    isError: isErrorDetailModul,
  } = useGetDetailModul(params.sub_modul_uuid);

  const dataDetailModul = data?.data;
  console.log(dataDetailModul);

  if (isErrorDetailModul) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingDetailModul) {
    return <Loading>{loadingMessage}</Loading>;
  }
  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />
      <section className="relative z-10 p-4 md:p-5">
        <ModulFAB modulUUID={params.sub_modul_uuid}></ModulFAB>
        <div className="leading-normal">
          <h1 className="text-lg font-bold leading-normal text-tp-Gunmetal md:text-2xl">
            Modul {dataDetailModul?.sub_module_name}
          </h1>
          <hr className="border-y-1 border-y-gray-300" />
          <h1 className="text-base leading-normal  text-tp-SlateGray md:text-xl">
            pengenalan
          </h1>
          <p className="lead-normal text-xs text-tp-SteelBlue md:text-base">
            {dataDetailModul?.description}
          </p>
          <ul className="ml-3 mt-2 list-disc text-tp-SteelBlue">
            <li>Modul Materi</li>
            <li>Latihan Pada Setiap Materi</li>
          </ul>
        </div>

        <div className="container mb-3 mt-3 rounded-xl border border-gray-300 px-1">
          {dataDetailModul?.subjects.map((detail_modul, index) => (
            <div key={index} className="m-auto w-[97%]">
              <div>
                <p className="mt-2 text-tp-SlateGray">{`Modul Materi ${index + 1} - ${detail_modul.name}`}</p>
                <div className="flex items-center justify-between  md:mt-2 md:gap-4">
                  <div className="flex">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/img/modul/stationery.png"
                      className={`inline-block h-7 w-7 object-fill md:h-10 md:w-10`}
                      alt="Logo stationery"
                    />

                    <Link
                      href={`/student/modul/detail-modul/${params.sub_modul_uuid}/materi-modul/${detail_modul.uuid}`}
                    >
                      <p className="ml-4 mt-1 inline-block text-tp-Gunmetal">
                        {`isi Modul Materi ${index + 1}`}
                      </p>
                    </Link>
                  </div>

                  <div className="">{checkStatus("belumDiIsi")}</div>
                </div>

                <div className="flex items-center justify-between gap-4 md:mt-2">
                  <div className="flex">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/img/modul/assignment.png"
                      className={`inline-block h-7 w-7 object-fill md:h-10 md:w-10`}
                      alt="Logo assignment"
                    />
                    <Link
                      href={`/student/modul/detail-modul//${params.sub_modul_uuid}/deskripsi-latihan-soal/${dataDetailModul.quizzes[index].uuid}/${dataDetailModul.test_type_id}`}
                    >
                      <p className="ml-4 mt-1 inline-block text-tp-Gunmetal">
                        {`Latihan Modul Materi ${index + 1}`}
                      </p>
                    </Link>
                  </div>

                  <div className="">{checkStatus("belumDiIsi")}</div>
                </div>

                {index === detail_moduls.length - 1 ? (
                  ""
                ) : (
                  <hr className="border-y-1 m-auto mt-2 border-y-gray-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
