"use client";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LockIcon from "@mui/icons-material/Lock";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { red } from "@mui/material/colors";
import Image from "next/image";
import RedButton from "@/app/student/dashboard/_components/RedButton";
import YellowButton from "@/app/student/dashboard/_components/YellowButton";
import Material from "@/app/student/dashboard/_components/Material";

const dashboards = {
  id: 1,
  status: "newbiee", // ganti ini jadi newbie klo mau buat tampilan user newbie
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

const Page = () => {
  return (
    <>
      <section className="relative p-4 md:p-5">
        <>
          <div className="relative mt-5 flex h-72 w-full items-center justify-center rounded-md border bg-pl-RedUserDahboard md:px-10 lg:w-full">
            <div className="h-[100%] w-[100%]  px-8 py-8 md:w-[30%] md:px-0">
              <h1 className="mt-4 text-2xl font-bold text-white">
                Hello,Farhan
              </h1>
              <h3 className="mb-4 text-sm text-white">
                Akun Anda saat ini masih berstatus newbie. Upgrade akun akan
                menjadi pro dengan memilih pilihan paket yang tersedia
              </h3>

              <button
                type="button"
                className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Beli Paket Sekarang
              </button>
            </div>
            {/* card paket */}
            <div className="hidden md:block md:h-full md:w-[70%] "></div>
          </div>
        </>

        <h1>Overview</h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* kolom 1 */}
          <div>
            <div className="rounded-md border bg-white">
              {/* mata pelajaran yang saya ikuti card */}
              <h1 className="p-3 font-bold">Mata Pelajaran yang saya ikuti</h1>
              <>
                <Image
                  src="/img/img_matpel_null.png"
                  width={200}
                  height={200}
                  className={
                    "mx-auto my-2.5 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-[150px] lg:w-[200px]"
                  }
                  alt="Logo CSW"
                />
                <div className="mt-3 px-4 text-center text-sm">
                  <h2>
                    Oopss!! sepertinya mata pelajaranmu kosong, pasti kamu belum
                    membeli paket belajar ya?
                    <br />
                    Tenang, kamu dapat membelinya sesuai dengan kebutuhanmu!
                  </h2>
                </div>

                <div className="w-100% text-md mb-4 mt-3 flex items-center justify-center">
                  <RedButton className="m-auto">
                    <h1 className="text-black">Lihat Paket Belajar</h1>
                  </RedButton>
                </div>
              </>
            </div>
          </div>

          {/* kolom 2 */}
          <div>
            {/* Materi card section */}
            <div className="rounded-md border bg-white">
              <h1 className="mb-3 ml-3 mt-3 font-bold">Materi</h1>
              {[...Array(2)].map((_, index) => (
                // Materi carditem
                <div key={index} className="">
                  <div className="px-3">
                    <h2 className="text-sm font-semibold">Materi Matematika</h2>
                    <h3 className="mb-3 text-xs">
                      Materi akan di lock jika pertemuan zoom belum berlangsung
                      dan akan dibuka 3 hari sebelum pertemuan zoom berlangsung.
                    </h3>
                  </div>

                  <div className="flex justify-between bg-pl-GrayUserDashboard px-3">
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
                    </div>
                  ))}

                  <h2 className="mt-2 px-3 text-sm text-tp-BlueUserDashboard">
                    Lihat Semua Materi Matematika
                  </h2>
                  {/* horizontal line */}
                  <div className="w-100% mt-2 h-[1px] bg-gray-100"></div>
                </div>
              ))}
            </div>
            {/* Recently Pretest section */}
            <div className="mt-3 rounded-md border bg-white">
              <h1 className="px-3 pt-2 font-bold">Recently pretest</h1>
              {/* horizontal line */}
              <div className="w-100% mt-2 h-[1px] bg-gray-100 p-0"></div>

              <div className="relative text-sm">
                <Image
                  src="/img/dashboard-user/pretest_newbie.png"
                  width={200}
                  height={200}
                  className={
                    "mx-auto my-2.5 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-[150px] lg:w-[200px]"
                  }
                  alt="Logo CSW"
                />
                <LockIcon
                  fontSize="large"
                  className="absolute left-7 top-0"
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

                <div className="w-100% mb-4 mt-3 flex items-center justify-center">
                  <RedButton className="m-auto">
                    <h1 className="text-black">Lihat Paket Belajar</h1>
                  </RedButton>
                </div>
              </div>
            </div>
          </div>

          {/* kolom 3 */}
          <div>
            {/* jam pelaksanaan bimbel */}
            <div className="rounded-md border bg-white px-3">
              <h1 className="py-3 font-bold">
                Jam Pelaksanaan Bimbel SKD dan Matematika
              </h1>
              <h2 className="text-sm text-tp-GrayTabelJadwalUserDashboard">
                Bulan September 2022
              </h2>
              {/* tabel */}
              <div className="max-h-[500px] overflow-y-scroll scrollbar-thin">
                {[...Array(7)].map((_, index) => (
                  <div
                    key={`itemtabel${index}`}
                    className="flex min-h-[50px] w-[100%] justify-center border border-gray-100 "
                  >
                    <div className="w-[20%] flex-col border-r-2 text-sm text-tp-GrayTabelJadwalUserDashboard">
                      <div className="h-7 w-[100%] bg-gray-100 text-center ">
                        Senin
                      </div>

                      <h3 className="mt-2 text-center">{index + 1}</h3>
                    </div>
                    <div className="w-[80%]">
                      <div className="p-1"></div>
                    </div>
                  </div>
                ))}
                {/* bagian bawah tabel */}
                <div className="flex min-h-16 w-[100%] border border-gray-100">
                  <div className="w-[20%] flex-col border-r-2">
                    <div className="h-7 w-[100%] bg-gray-100 text-center">
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
                <div className="mb-1 flex">
                  <div className="h-[20px] w-[20px] rounded-md border bg-pl-GreenUserDashboard"></div>
                  <h2 className="ml-2 text-sm">Pertemuan Zoom Pelajaran SKD</h2>
                </div>
                <div className="flex">
                  <div className="h-[20px] w-[20px] rounded-md border bg-pl-GrayUserDashboardTabelJamPelaksanaan"></div>
                  <h2 className="ml-2 text-sm">
                    Pertemuan Zoom Pelajaran Matematika
                  </h2>
                </div>
              </div>
            </div>

            {/* recently postest card */}
            <div className="mt-3 rounded-md border bg-white">
              <h1 className="ml-3 px-3 pt-2 font-bold">Recently Posttest</h1>
              {/* horizontal line */}
              <div className="w-100% mt-2 h-[1px] bg-gray-100"></div>
              <>
                <div className="relative text-sm">
                  <Image
                    src="/img/dashboard-user/pretest_newbie.png"
                    width={200}
                    height={200}
                    className={
                      "mx-auto my-2.5 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-[150px] lg:w-[200px]"
                    }
                    alt="Logo CSW"
                  />
                  <LockIcon
                    fontSize="large"
                    className="absolute left-7 top-0"
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

                  <div className="w-100% mb-4 mt-3 flex items-center justify-center">
                    <RedButton className="m-auto">
                      <h1 className="text-black">Lihat Paket Belajar</h1>
                    </RedButton>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
