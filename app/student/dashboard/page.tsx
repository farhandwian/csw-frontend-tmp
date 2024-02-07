// Import necessary modules
"use client";
import Image from "next/image";
import StudentLayout from "@/app/components/StudentLayout";
import RedButton from "./components/RedButton";
import YellowButton from "./components/YellowButton";
import React from "react";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import { red } from "@mui/material/colors";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import QuizIcon from "@mui/icons-material/Quiz";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const dashboards = {
  id: 1,
  status: "newbie",
};

interface TableColor {
  bgColor: string;
  textColor: string;
  bgColor2: string;
}

const tableColor = (matkul: string): TableColor => {
  switch (matkul) {
    case "skd":
      return {
        bgColor: "#9BE1BD",
        textColor: "#F4886E",
        bgColor2: "#166534",
      };
    default:
      return {
        bgColor: "", // Atau berikan nilai default jika tidak ada nilai yang cocok
        textColor: "",
        bgColor2: "",
      };
  }
};

const page = () => {
  return (
    <StudentLayout>
      <>
        {/* <Breadcrumbs /> */}
        <section className="relative">
          {dashboards.status === "newbie" && (
            <>
              <div className="bg-pl-RedUserDahboard border rounded-md h-[300px] mt-5 flex items-center justify-center relative w-full lg:w-full md:px-10">
                <div className="w-[30%] h-[100%] py-8">
                  <h1 className="text-2xl font-bold mt-4 text-white">
                    Hello,Farhan
                  </h1>
                  <h3 className="text-sm mb-4 text-white">
                    Akun Anda saat ini masih berstatus newbie. Upgrade akun akan
                    menjadi pro dengan memilih pilihan paket yang tersedia
                  </h3>
                  <Button
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#F9FAFB",
                      },
                    }}
                  >
                    Beli Paket Sekarang
                  </Button>
                </div>
                {/* card paket */}
                <div className="w-[70%]"></div>
              </div>
            </>
          )}

          <h1>Overview</h1>

          <div className="grid grid-cols-3 gap-3">
            {/* kolom 1 */}
            <div>
              <div className="bg-white border rounded-md">
                {/* mata pelajaran yang saya ikuti card */}
                <h1 className="p-3 font-bold">
                  Mata Pelajaran yang saya ikuti
                </h1>

                {dashboards.status === "newbie" ? (
                  <>
                    <Image
                      src="/img/img_matpel_null.png"
                      width={200}
                      height={200}
                      className={
                        "mx-auto my-2.5 lg:w-[200px] lg:h-[150px] md:w-16 md:h-16 sm:w-12 sm:h-12"
                      }
                      alt="Logo CSW"
                    />
                    <div className="text-center mt-3 text-sm">
                      <h2>
                        Oopss!! sepertinya mata pelajaranmu kosong, pasti kamu
                        belum membeli paket belajar ya?
                      </h2>
                    </div>

                    <div className="text-center mt-3 text-sm">
                      <h2>
                        Tenang, kamu dapat membelinya sesuai dengan kebutuhanmu!
                      </h2>
                    </div>
                    <div className="w-100% flex justify-center items-center mt-3 mb-4 text-md">
                      <RedButton className="m-auto" variant="contained">
                        <h1 className="text-black">Lihat Paket Belajar</h1>
                      </RedButton>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src="/img/img_matpel.png"
                      width={200}
                      height={200}
                      className={
                        "mx-auto my-2.5 lg:w-[200px] lg:h-[150px] md:w-16 md:h-16 sm:w-12 sm:h-12"
                      }
                      alt="Logo CSW"
                    />

                    <h1 className="ml-3 font-bold">TWK</h1>
                    <h2 className="ml-3 text-sm font-semibold">Kelas</h2>
                    <div className="mt-2 mb-4">
                      <AccessTimeFilledIcon
                        className="inline-block ml-3"
                        sx={{ color: red[400] }}
                      />
                      <h2 className="inline-block ml-1">Waktu akses</h2>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* kolom 2 */}
            <div>
              {/* Materi card section */}
              <div className="bg-white border rounded-md">
                <h1 className="mt-3 mb-3 ml-3 font-bold">Materi</h1>
                {[...Array(2)].map((_, index) => (
                  // Materi carditem
                  <div key={index} className="">
                    <div className="px-3">
                      <h2 className="text-sm font-semibold">
                        Materi Matematika
                      </h2>
                      <h3 className="text-xs mb-3">
                        Materi akan di lock jika pertemuan zoom belum
                        berlangsung dan akan dibuka 3 hari sebelum pertemuan
                        zoom berlangsung.
                      </h3>
                    </div>

                    <div className="flex justify-between px-3 bg-pl-GrayUserDashboard">
                      <h2 className="text-sm">Nama Materi</h2>
                      <h2 className="text-sm text-tp-BlueUserDashboard">
                        Baca Materi
                      </h2>
                    </div>

                    {[...Array(4)].map((_, index) => (
                      <div key={index}>
                        <div
                          className={`${
                            index % 2 === 1
                              ? "bg-pl-GrayUserDashboard"
                              : "bg-white"
                          }  flex justify-between px-3 text-sm`}
                        >
                          <div className="relative blur-sm flex-grow">
                            <p className="text-xl font-bold">Sensit</p>
                          </div>
                          <div className="flex-grow text-[#f3736c]">
                            materi dikunci
                          </div>
                          <div className="blur-sm flex-grow text-right">
                            <LockIcon sx={{ color: red[400] }} />
                          </div>
                        </div>
                      </div>
                    ))}

                    <h2 className="px-3 text-sm mt-2 text-tp-BlueUserDashboard">
                      Lihat Semua Materi Matematika
                    </h2>
                    {/* horizontal line */}
                    <div className="w-100% h-[1px] bg-gray-100 mt-2"></div>
                  </div>
                ))}
              </div>
              {/* Recently Pretest card item */}
              <div className="bg-white border rounded-md mt-3">
                <h1 className="px-3 pt-2 font-bold">Recently pretest</h1>
                {/* horizontal line */}
                <div className="w-100% h-[1px] bg-gray-100 mt-2 p-0"></div>

                {dashboards.status === "newbie" ? (
                  <>
                    <div className="relative text-sm">
                      <Image
                        src="/img/dashboard-user/pretest_newbie.png"
                        width={200}
                        height={200}
                        className={
                          "mx-auto my-2.5 lg:w-[200px] lg:h-[150px] md:w-16 md:h-16 sm:w-12 sm:h-12"
                        }
                        alt="Logo CSW"
                      />
                      <LockIcon
                        fontSize="large"
                        className="absolute top-0 left-7"
                        sx={{ color: red[400] }}
                      />
                      <div className="px-3">
                        <h3 className="text-center">
                          Lorem Ipsum is simply dummy text
                        </h3>
                        <h3 className="text-center">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </h3>
                      </div>

                      <div className="w-100% flex justify-center items-center mt-3 mb-4">
                        <RedButton className="m-auto" variant="contained">
                          <h1 className="text-black">Lihat Paket Belajar</h1>
                        </RedButton>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="font-semibold ml-3">Pretest SKD</h1>
                    {[...Array(5)].map((_, index) => (
                      <>
                        <div className="px-3 relative mb-3">
                          {/* carditem pretest user jika sudah beli modul */}
                          <div className="p-2 bg-cover bg-center rounded-md min-h-32 w-[100%] bg-[url('/img/dashboard-user/card_recently_pretest.png')] text-white">
                            <div className="flex w-fit justify-center items-center text-neutral-100 text-xs mb-2">
                              <AccessTimeFilledIcon sx={{ color: "white" }} />

                              <h3>15 menit</h3>
                              <WorkspacePremiumIcon sx={{ color: "white" }} />
                              <h3>100 pts</h3>
                              <QuizIcon sx={{ color: "white" }} />
                              <h3>quizziz</h3>
                            </div>

                            <h1 className="text-sm font-bold">Judul Pretest</h1>
                            <h3 className="text-xs text-left mb-2">
                              Pada pretest kali ini akan membahas seputar materi
                              yang akan kita pelajari nanti di pertemuan,
                              kerjakan dengan...
                            </h3>
                            <YellowButton className="text-sm">
                              Kerjakan Pretest
                            </YellowButton>
                          </div>

                          <div className="absolute top-2 right-1 p-1 w-[80px] h-[50px] bg-[#fbe360] rounded-md">
                            <h4
                              className="text-black"
                              style={{ fontSize: "8px" }}
                            >
                              Dibuka pada 20 September 2022 Pukul 07:00 WIB
                            </h4>
                          </div>
                        </div>
                      </>
                    ))}
                    <h2 className="text-center text-sm text-tp-BlueUserDashboard mb-3">
                      LIHAT SEMUA <NavigateNextIcon className="mb-1" />
                    </h2>
                  </>
                )}
              </div>
            </div>

            {/* kolom 3 */}
            <div>
              {/* jam pelaksanaan bimbel */}
              <div className="bg-white border rounded-md px-3">
                <h1 className="py-3 font-bold">
                  Jam Pelaksanaan Bimbel SKD dan Matematika
                </h1>
                <h2 className="text-sm text-tp-GrayTabelJadwalUserDashboard">
                  Bulan September 2022
                </h2>
                {/* tabel */}
                <div>
                  {[...Array(7)].map((_, index) => (
                    <>
                      <div className="flex justify-center items-center border border-gray-100 min-h-28 w-[100%]">
                        <div className="w-[20%] flex-col border-r-2 text-sm text-tp-GrayTabelJadwalUserDashboard">
                          <div className="bg-gray-100 h-7 w-[100%] text-center ">
                            Senin
                          </div>

                          <h3 className="text-center mt-2">{index + 1}</h3>
                        </div>
                        <div className="w-[80%]">
                          <div className="p-1">
                            <div
                              className="flex rounded-md w-[100%] h-[50px] bg-pl-GreenUserDashboard mb-2 p-1"
                              style={{ fontSize: "10px" }}
                            >
                              <div className="flex w-[80%]">
                                <Image
                                  src="/img/dashboard-user/skd.png"
                                  width={30}
                                  height={25}
                                  className={"ml-1 inline-block"}
                                  alt="Logo CSW"
                                />
                                <div className="ml-2 inline-block">
                                  <h1>TKP</h1>
                                  <h2>09:00-10.00 WIB</h2>
                                  <div className="flex">
                                    <Image
                                      src="/img/dashboard-user/zoom.png"
                                      width={10}
                                      height={10}
                                      className={"mr-1"}
                                      alt="Logo CSW"
                                    />
                                    <h2>zoom dimulai</h2>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-[20%] justify-end items-center">
                                <div className="w-fit h-fit bg-green-500 rounded-xl mr-1 px-1">
                                  SKD
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                  {/* bagian bawah tabel */}
                  <div className="flex border border-gray-100 min-h-16 w-[100%]">
                    <div className="w-[20%] flex-col border-r-2">
                      <div className="bg-gray-100 h-7 w-[100%] text-center">
                        ............
                      </div>

                      <h3 className="text-center">...</h3>
                    </div>
                    <div className="w-[80%]">
                      <div className="p-3">
                        <h1 className="text-center text-sm text-tp-BlueUserDashboard">
                          Lihat Jadwal Lengkap
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* keterangan */}
                <div className="px-3">
                  <h1 className="mb-1">Keterangan</h1>
                  <div className="flex mb-1">
                    <div className="border rounded-md w-[20px] h-[20px] bg-pl-GreenUserDashboard"></div>
                    <h2 className="ml-2 text-sm">
                      Pertemuan Zoom Pelajaran SKD
                    </h2>
                  </div>
                  <div className="flex">
                    <div className="border rounded-md w-[20px] h-[20px] bg-pl-GrayUserDashboardTabelJamPelaksanaan"></div>
                    <h2 className="ml-2 text-sm">
                      Pertemuan Zoom Pelajaran Matematika
                    </h2>
                  </div>
                </div>
              </div>

              {/* recently postest card */}
              <div className="bg-white border rounded-md mt-3">
                <h1 className="ml-3 px-3 pt-2 font-bold">Recently Posttest</h1>
                {/* horizontal line */}
                <div className="w-100% h-[1px] bg-gray-100 mt-2"></div>
                {dashboards.status === "newbie" ? (
                  <>
                    <div className="relative text-sm">
                      <Image
                        src="/img/dashboard-user/pretest_newbie.png"
                        width={200}
                        height={200}
                        className={
                          "mx-auto my-2.5 lg:w-[200px] lg:h-[150px] md:w-16 md:h-16 sm:w-12 sm:h-12"
                        }
                        alt="Logo CSW"
                      />
                      <LockIcon
                        fontSize="large"
                        className="absolute top-0 left-7"
                        sx={{ color: red[400] }}
                      />
                      <div className="px-3">
                        <h3 className="text-center">
                          Lorem Ipsum is simply dummy text
                        </h3>
                        <h3 className="text-center">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </h3>
                      </div>

                      <div className="w-100% flex justify-center items-center mt-3 mb-4">
                        <RedButton className="m-auto" variant="contained">
                          <h1 className="text-black">Lihat Paket Belajar</h1>
                        </RedButton>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="font-semibold ml-3">Posttest SKD</h1>
                    {[...Array(5)].map((_, index) => (
                      <>
                        <div className="px-3 relative mb-3">
                          {/* carditem pretest user jika sudah beli modul */}
                          <div className="p-2 bg-cover bg-center rounded-md min-h-32 w-[100%] bg-[url('/img/dashboard-user/card_recently_posttest.png')] text-white">
                            <div className="flex w-fit justify-center items-center text-neutral-100 text-xs mb-2">
                              <AccessTimeFilledIcon sx={{ color: "white" }} />

                              <h3>15 menit</h3>
                              <WorkspacePremiumIcon sx={{ color: "white" }} />
                              <h3>100 pts</h3>
                              <QuizIcon sx={{ color: "white" }} />
                              <h3>quizziz</h3>
                            </div>

                            <h1 className="text-sm font-bold">Judul Pretest</h1>
                            <h3 className="text-xs text-left mb-2">
                              Pada pretest kali ini akan membahas seputar materi
                              yang akan kita pelajari nanti di pertemuan,
                              kerjakan dengan...
                            </h3>
                            <YellowButton className="text-sm">
                              Kerjakan Posttest
                            </YellowButton>
                          </div>

                          <div className="absolute top-2 right-1 p-1 w-[80px] h-[50px] bg-[#fbe360] rounded-md">
                            <h4
                              className="text-black"
                              style={{ fontSize: "8px" }}
                            >
                              Dibuka pada 20 September 2022 Pukul 07:00 WIB
                            </h4>
                          </div>
                        </div>
                      </>
                    ))}
                    <h2 className="text-center text-sm text-tp-BlueUserDashboard mb-3">
                      LIHAT SEMUA <NavigateNextIcon className="mb-1" />
                    </h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    </StudentLayout>
  );
};

export default page;
