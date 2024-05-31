"use client";
import Material from "@/app/student/dashboard/_components/Material";
import Quiz from "@/app/student/dashboard/_components/Quiz";
import Class from "@/app/student/dashboard/_components/Class";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizAll } from "@/hooks/dashboard/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import Image from "next/image";

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
  const {
    data,
    isLoading: isLoadingQuizAll,
    isError: isErrorQuizAll,
  } = useGetQuizAll();

  const dataQuizAll = data?.data!;
  console.log(dataQuizAll);

  if (isErrorQuizAll) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingQuizAll) {
    return <Loading>{loadingMessage}</Loading>;
  }

  const pretestQuiz = dataQuizAll[0];
  const posttestQuiz = dataQuizAll[1];
  return (
    <>
      <section className="relative p-4 md:p-5">
        <h1>Overview</h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* kolom 1 */}
          <div>
            <Class />
          </div>

          {/* kolom 2 */}
          <div>
            {/* Materi card section */}
            <Material />
            {/* Recently Pretest section */}
            <Quiz data={pretestQuiz!} />
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
                      <div className="p-1">
                        {/* item card jadwal */}
                        {dashboards.status !== "newbie" && (
                          <>
                            {[...Array(2)].map((_, index) => (
                              <div
                                key={`jadwal${index}`}
                                className="mb-2 flex min-h-[50px] w-[100%] rounded-md bg-pl-GreenUserDashboard p-1 text-2xs"
                              >
                                <div className="relative flex w-[80%] items-center">
                                  <div className="relative h-[25px] w-[30px]">
                                    <Image
                                      src="/img/dashboard-user/skd.png"
                                      width={0}
                                      height={0}
                                      sizes="100vw"
                                      className={
                                        "ml-1 inline-block h-full w-full object-fill"
                                      }
                                      alt="Logo CSW"
                                    />
                                  </div>

                                  <div className="ml-2 inline-block text-red-400 ">
                                    <h1 className="leading-tight">TKP</h1>
                                    <h2 className="leading-tight">
                                      09:00-10.00 WIB
                                    </h2>
                                    <div className="flex">
                                      <Image
                                        src="/img/dashboard-user/zoom.png"
                                        width={10}
                                        height={10}
                                        className={"mr-1"}
                                        alt="Logo CSW"
                                      />
                                      <h2 className="leading-tight text-[#013899]">
                                        zoom dimulai
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-[20%] items-center justify-end">
                                  <div className="mr-1 h-fit w-fit rounded-xl bg-green-500 px-1">
                                    SKD
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
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
            <Quiz data={posttestQuiz!} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
