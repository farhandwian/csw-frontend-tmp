"use client";

import GlobalStyles from "@/app/Globals.module.css";
import Studentlayout from "@/app/student/components/StudentLayout";
import Image from "next/image";
import Link from "next/link";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const page = () => {
  return (
    <Studentlayout isBreadCrumb={true}>
      <section className="relative">
        <div className="flex flex-wrap">
          <div className="w-[100%] md:w-[60%]">
            <h1 className={`text-lg text-[#267CDD]`}>
              Pretest SKD Bagian TWK - Judul Pretest
            </h1>
            {/* informasi test */}
            <div className="flex flex-wrap md:flex-nowrap max-w-max bg-white border rounded-2xl mb-5">
              <div className="flex p-3">
                <div className="mr-3">
                  <p
                    className={`text-[#9CA3AF] font-bold text-[0.75rem] md:text-sm`}
                  >
                    PHASE
                  </p>
                  <p
                    className={`text-[#64748B] font-bold text-[0.75rem] md:text-sm`}
                  >
                    DAPAT DIKERJAKAN BERKALI - KALI
                  </p>
                </div>
                {/* horizontal line */}
                <div className="w-[3px] h-[90%] bg-[#E5E7EB]"></div>
              </div>
              <div className="flex p-3">
                <div className="mr-3">
                  <p
                    className={`text-[#9CA3AF] font-bold text-[0.75rem] md:text-sm`}
                  >
                    STATUS
                  </p>
                  <p
                    className={`text-[#64748B] font-bold text-[0.75rem] md:text-sm`}
                  >
                    SUDAH DIKERJAKAN
                  </p>
                </div>

                {/* horizontal line */}
                <div className="w-[3px] h-[90%] bg-[#E5E7EB]"></div>
              </div>
              <div className="flex p-3">
                <div className="mr-3">
                  <p
                    className={`text-[#9CA3AF] font-bold text-[0.75rem] md:text-sm`}
                  >
                    WAKTU
                  </p>
                  <p
                    className={`text-[#64748B] font-bold text-[0.75rem] md:text-sm`}
                  >
                    6 MENIT
                  </p>
                </div>

                <div className="w-[3px] h-[90%] bg-[#E5E7EB]"></div>
              </div>
              <div className="flex p-3">
                <div className="mr-3">
                  <p
                    className={`text-[#9CA3AF] font-bold text-[0.75rem] md:text-sm`}
                  >
                    JUMLAH SOAL
                  </p>
                  <p
                    className={`text-[#64748B] font-bold text-[0.75rem] md:text-sm`}
                  >
                    5 SOAL
                  </p>
                </div>
              </div>
            </div>
            {/* horizontal line */}
            <hr className="border-y-1 border-y-gray-300 my-3" />
            <h1
              className={`${GlobalStyles["light-base-gray-typography"]} text-tp-SlateGray`}
            >
              Overview
            </h1>
            <p className={`text-sm font-semibold text-[#64748B]`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book...
            </p>

            <div className="w-[100%] p-3 rounded-md border-2 mt-6">
              <h1 className=" text-[#9CA3AF] text-sm">BERSIAP MENGERJAKAN</h1>
              <h2 className="text-[#B4B4B4] text-sm">
                Sudah belajar dengan mengikuti pelajaran yang disediakan?
                Lanjutkan dan mulai kerjakan pretest dengan sungguh-sungguh
              </h2>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mt-2 text-sm font-medium text-[#9CA3AF] focus:outline-none bg-[#E5E7EB] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Tidak Bisa Dikerjakan Kembali
              </button>
            </div>
          </div>
          <div className="w-[100%] md:w-[40%] md:pl-6 text-sm">
            <div className="w-[100%] border-[2px] rounded-md mt-3">
              <div className="border-b-[2px] p-2">
                <h1 className="text-[#267DDD] text-md">SOAL DAN PEMBAHASAN</h1>
              </div>
              <div className="border-b-[2px] flex justify-between p-2">
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

            <div className="w-[100%] border-[2px] rounded-md mt-3">
              <div className="border-b-[2px] p-2">
                <h1 className="text-[#267DDD] text-md">NILAI</h1>
              </div>
              <div className="p-3">
                <div className="bg-white rounded-md">
                  <Image
                    src={"/img/uji-kemampuan/ic_nilai_mtk.png"}
                    width={538}
                    height={638}
                    alt="img-banner"
                    className="max-w-[4rem] min-h-[4rem] "
                  />
                  <div className="flex justify-between items-center">
                    <div className="w-[60%] mt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">
                          Nilai
                        </span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">
                          45/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    >
                      Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
