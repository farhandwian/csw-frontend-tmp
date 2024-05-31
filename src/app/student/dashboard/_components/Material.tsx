"use client";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetMaterialAll } from "@/hooks/dashboard/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import LockIcon from "@mui/icons-material/Lock";
import { red } from "@mui/material/colors";
import Link from "next/link";

const Material = () => {
  const {
    data,
    isLoading: isLoadingMaterialAll,
    isError: isErrorMaterialAll,
  } = useGetMaterialAll();

  const dataMaterialAll = data?.data;

  if (isErrorMaterialAll) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingMaterialAll) {
    return <Loading>{loadingMessage}</Loading>;
  }

  const mathMaterial = dataMaterialAll
    ?.filter((material) => material.module.name === "Matematika")
    .slice(0, 4);

  const skdMaterial = dataMaterialAll
    ?.filter((material) => material.module.name === "SKD")
    .slice(0, 4);

  return (
    <div className="cursor-default rounded-md border bg-white">
      <h1 className="mb-3 ml-3 mt-3 font-bold">Materi</h1>
      {[1, 2].map((_, index) => {
        if (index === 0) {
          return (
            <div key={index} className="">
              <div className="px-3">
                <h2 className="text-sm font-semibold">Materi Matematika</h2>
                <h3 className="mb-3 text-xs">
                  Materi akan di lock jika pertemuan zoom belum berlangsung dan
                  akan dibuka 3 hari sebelum pertemuan zoom berlangsung.
                </h3>
              </div>

              <div className="flex justify-between bg-pl-GrayUserDashboard px-3 py-[2px]">
                <h2 className="text-sm">Nama Materi</h2>
                <h2 className=" text-sm text-tp-BlueUserDashboard">
                  Baca Materi
                </h2>
              </div>

              {mathMaterial?.map((material, index) => {
                if (index !== 3) {
                  return (
                    <div key={index}>
                      <div
                        className={`${
                          index % 2 === 1
                            ? "bg-pl-GrayUserDashboard"
                            : "bg-white"
                        }  flex  justify-between p-[2px] px-3 text-sm`}
                      >
                        <div className="flex-grow text-[#f3736c]">
                          {material.subject}
                        </div>
                        <Link
                          href={`/student/modul/detail-modul/${material.sub_module.uuid}/materi-modul/${material.uuid}`}
                          className="cursor-pointer"
                        >
                          <button className="text-sm text-blue-400">
                            Lihat
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={`${
                        index % 2 === 1 ? "bg-pl-GrayUserDashboard" : "bg-white"
                      }  flex items-center justify-between px-3 text-sm`}
                    >
                      <div className="relative flex-grow blur-sm">
                        <p className="text-xl font-bold">Sensit</p>
                      </div>
                      <div className="flex-grow text-[#f3736c]">
                        materi dikunci
                      </div>
                      <div className="flex-grow text-right blur-sm">
                        <LockIcon sx={{ color: red[400] }} />
                      </div>
                    </div>
                  );
                }
              })}
              <Link href={`/student/modul`}>
                <h2 className="mt-2 cursor-pointer px-3 text-sm text-tp-BlueUserDashboard">
                  Lihat Semua Materi Matematika
                </h2>
              </Link>

              {/* horizontal line */}
              <div className="w-100% mt-2 h-[1px] bg-gray-100"></div>
            </div>
          );
        } else if (index === 1) {
          return (
            <div key={index} className="">
              <div className="px-3">
                <h2 className="text-sm font-semibold">Materi SKD</h2>
                <h3 className="mb-3 text-xs">
                  Materi akan di lock jika pertemuan zoom belum berlangsung dan
                  akan dibuka 3 hari sebelum pertemuan zoom berlangsung.
                </h3>
              </div>

              <div className="flex justify-between bg-pl-GrayUserDashboard px-3 py-[2px]">
                <h2 className="text-sm">Nama Materi</h2>
                <h2 className=" text-sm text-tp-BlueUserDashboard">
                  Baca Materi
                </h2>
              </div>

              {skdMaterial?.map((material, index) => {
                if (index !== 3) {
                  return (
                    <div key={index}>
                      <div
                        className={`${
                          index % 2 === 1
                            ? "bg-pl-GrayUserDashboard"
                            : "bg-white"
                        }  flex justify-between px-3 py-[2px] text-sm`}
                      >
                        <div className="flex-grow text-[#f3736c]">
                          {material.subject}
                        </div>
                        <div className="flex-grow text-right">
                          <Link
                            href={`/student/modul/detail-modul/${material.sub_module.uuid}/materi-modul/${material.uuid}`}
                            className="cursor-pointer"
                          >
                            <button className="text-sm text-blue-400">
                              Lihat
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={`${
                        index % 2 === 1 ? "bg-pl-GrayUserDashboard" : "bg-white"
                      }  flex items-center justify-between px-3 text-sm`}
                    >
                      <div className="relative flex-grow blur-sm">
                        <p className="text-xl font-bold">Sensit</p>
                      </div>
                      <div className="flex-grow text-[#f3736c]">
                        materi dikunci
                      </div>
                      <div className="flex-grow text-right blur-sm">
                        <LockIcon sx={{ color: red[400] }} />
                      </div>
                    </div>
                  );
                }
              })}

              <Link href={`/student/modul`}>
                <h2 className="mt-2 cursor-pointer px-3 text-sm text-tp-BlueUserDashboard">
                  Lihat Semua Materi SKD
                </h2>
              </Link>
              {/* horizontal line */}
              <div className="w-100% mt-2 h-[1px] bg-gray-100"></div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Material;
