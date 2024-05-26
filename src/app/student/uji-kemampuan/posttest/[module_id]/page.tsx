"use client";
import PapanInformasi from "@/app/student/uji-kemampuan/_components/PapanInformasi";
import { TQuizSubModuleAllParams } from "@/types/uji-kemampuan";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizSubModuleAll } from "@/hooks/uji-kemampuan/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = (quizCount: number, submissionCount: number) => {
  return Math.floor((submissionCount / quizCount) * 100);
};

const subModuleDeskripsiPosttest = (subModule: string) => {
  if (subModule === "TWK") {
    return "Wawasan Seputar Kebangsaan";
  } else if (subModule === "TIU") {
    return "Menguji Kemampuan peserta";
  } else if (subModule === "TKP") {
    return "Menguji Karakteristik Pribadi";
  } else if (subModule === "Matematika") {
    return "Menguji Kemampuan Matematika";
  }
};

// Tipe untuk objek srcItemCardsMap dengan tipe kunci string
type SrcItemCardsMap = {
  [key: string]: {
    color: string;
    iconColor: string;
    iconImageUrl: string;
    itemImage: string;
  };
};

const srcItemCardsMap: SrcItemCardsMap = {
  TWK: {
    color: "#EFDBA5",
    iconColor: "#F9BF3B",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_1.png",
    itemImage: "/img/uji-kemampuan/pretest/img_pretest_1.png",
  },
  TIU: {
    color: "#D7C2FB",
    iconColor: "#3F51B5",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_2.png",
    itemImage: "/img/uji-kemampuan/pretest/img_pretest_2.png",
  },
  TKP: {
    color: "#F4BDD9",
    iconColor: "#F48891",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_3.png",
    itemImage: "/img/uji-kemampuan/pretest/img_pretest_3.png",
  },
  Matematika: {
    color: "#FFC6B4",
    iconColor: "#E9969A",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_4.png",
    itemImage: "/img/uji-kemampuan/pretest/img_pretest_4.png",
  },
};

const Page = ({ params }: { params: TQuizSubModuleAllParams }) => {
  console.log(params.module_id);
  const {
    data,
    isLoading: isLoadingAllPosttest,
    isError: isErrorAllPosttest,
  } = useGetQuizSubModuleAll(params.module_id, 2);

  const dataAllPosttest = data?.data;

  if (isErrorAllPosttest) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingAllPosttest) {
    return <Loading>{loadingMessage}</Loading>;
  }

  return (
    <>
      <Breadcrumbs
        widthReduction={"54px"}
        fontSize="12px"
        paramsIndexPosition={[3]}
      />

      <section className="relative w-[100%]  p-4 md:p-5">
        <div className="mb-3">
          <h1 className="text-md font-bold">
            Posttest {dataAllPosttest?.module_name}
          </h1>
          <h2 className="text-sm">
            {dataAllPosttest?.module_name === "SKD"
              ? "Berikut adalah posttest modul SKD(Seleksi Kompentensi Dasar) yang di pisah per-submodul"
              : "Berikut adalah posttest dari modul Matematika"}
          </h2>
        </div>
        <div className="flex">
          <div className="w-[70%]">
            {/* container card posttest */}
            <div className="grid grid-cols-3 gap-2">
              {/* container item card posttest */}
              {dataAllPosttest?.quizzes_grouped_by_sub_module.map(
                (dataPosttest, index) => (
                  <Link
                    href={`${params.module_id}/daftar-posttest/${dataPosttest.sub_module_uuid}`}
                    key={index}
                    style={{
                      backgroundColor:
                        srcItemCardsMap[dataPosttest.sub_module_name].color,
                    }}
                    className={`rounded-md py-6 `}
                  >
                    <div className="mb-3 flex justify-between px-6 text-sm">
                      <h3>Posttest {dataPosttest.sub_module_name}</h3>
                      <ArrowCircleRightIcon sx={{ color: "white" }} />
                    </div>

                    <h1 className="text-md px-6 font-bold">
                      {subModuleDeskripsiPosttest(dataPosttest.sub_module_name)}
                    </h1>
                    <h3 className="px-6 text-xs">
                      {dataPosttest.quiz_count} Pertemuan |{" "}
                      {dataPosttest.quiz_count} Posttest
                    </h3>
                    <div className="mt-3 flex justify-between">
                      <div className="flex w-[50%] flex-col items-center justify-center">
                        <div className="h-16 w-16">
                          <CircularProgressbar
                            value={percentage(
                              dataPosttest.quiz_count,
                              dataPosttest.submission_count,
                            )}
                            text={`${percentage(
                              dataPosttest.quiz_count,
                              dataPosttest.submission_count,
                            )}%`}
                            styles={buildStyles({
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "16px",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor:
                                srcItemCardsMap[dataPosttest.sub_module_name]
                                  .iconColor,
                              textColor: "#000000",
                              // trailColor: "#d6d6d6",
                              // backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>

                        <div className="ml-2 mt-3 min-h-5 w-fit rounded-md bg-white p-1 pr-2 shadow-md">
                          <h3 className="text-xs">
                            <Image
                              src={
                                "/img/uji-kemampuan/pretest/ic_pretest_1.png"
                              }
                              width={165}
                              height={165}
                              alt="ic-banner"
                              className="mr-1 inline h-[1.3rem] w-[1.3rem]"
                            />
                            {dataPosttest.submission_count} of{" "}
                            {dataPosttest.quiz_count}
                          </h3>
                        </div>
                      </div>
                      <div className="50% ">
                        <Image
                          src={
                            srcItemCardsMap[dataPosttest.sub_module_name]
                              .itemImage
                          }
                          width={165}
                          height={165}
                          alt="ic-banner"
                          className="mr-3 mt-2 h-[6.3rem] w-[5.3rem]"
                        />
                      </div>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="w-[30%]">
            <PapanInformasi />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
