"use client";
import Footer from "@/app/(landing)/_components/Footer";
import { useGetDetailMentor } from "@/hooks/mentor/hook";
import useDesktop from "@/hooks/useDesktop";
import useTablet from "@/hooks/useTablet";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Error from "@/components/Error";

const DetailTest = {
  title: "Tes Logika Verbal",
  description:
    "Menilai kemampuan seseorang dalam memahami dan menganalisis informasi tertulis",
  tests: [
    {
      title: "Tes Logika Numerik",
      description:
        "Menguji kemampuan calon pegawai dalam melakukan operasi matematika, pemahaman pola angka, serta kemampuan logika numerik",
    },
    {
      title: "Tes Pengetahuan Umum",
      description:
        "Menilai pengetahuan umum dan pengetahuan aktual calon pegawai. Soal-soalnya dapat mencakup berbagai bidang seperti sejarah, geografi, politik, dan perkembangan terkini di berbagai bidang.",
    },
    {
      title: "Tes Logika Formal",
      description:
        "Menilai kemampuan seseorang dalam memahami dan menganalisis aturan-aturan formal, termasuk logika proposisional dan inferensi.",
    },
    {
      title: "Tes Kemampuan Berpikir Matematis",
      description:
        "Menilai kemampuan seseorang dalam berpikir secara matematis, termasuk pemecahan masalah, penalaran matematis, dan penerapan konsep-konsep matematika dalam situasi nyata.",
    },
  ],
};

const Page = ({ params }: { params: { id: string } }) => {
  const {
    data,
    isLoading: isLoadingDetailMentor,
    isError: isErrorDetailMentor,
  } = useGetDetailMentor(params.id);

  const dataDetailMentor = data?.data;

  const tabletView = useTablet();
  const desktopView = useDesktop();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (isErrorDetailMentor) {
    return <Error message="error while fetching data" />;
  }
  return (
    <>
      {/* Banner */}
      <div className="relative flex h-72 w-full items-center">
        <div className="relative h-full w-full overflow-hidden bg-[#1A69F0]">
          {/*  Background for Banner */}
          <div className="absolute bottom-0 right-0 top-11 z-0 overflow-hidden md:h-full md:w-full  ">
            <Image
              src={"/img/landing-mentor/ic-bg-banner-mentor.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 h-full w-full lg:scale-150 xl:scale-100"
            />
          </div>
          <div className="absolute bottom-0 top-0 z-0 h-full w-full md:h-full md:w-full  ">
            <Image
              src={"/img/landing-mentor/ic-mentor.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 left-1/2 top-24 h-[200px] w-[200px]  -translate-x-1/2 transform md:bottom-0 md:left-96 md:right-0 md:top-16 md:h-full md:w-full md:-translate-x-0 lg:scale-150 xl:scale-100"
            />
          </div>
          <div className="absolute left-5 top-5  text-white md:left-24 md:top-1/2 md:-translate-y-1/2 md:transform ">
            <h1 className="text-xl font-bold md:text-2xl">
              Temukan Mentor Favoritmu
            </h1>
            <h3 className="text-sm md:text-base ">
              Gapai Impianmu Bersama Mentor Berpengalaman
            </h3>
          </div>
        </div>
      </div>

      {/* detail mentor dan bagian "yang kamu dapatkan" container*/}

      <div className="relative mx-auto mb-4 w-[90%] md:bottom-14 md:w-[70%]">
        {/* mentor */}
        <div className="flex flex-col gap-8 rounded-lg bg-white p-3 shadow-md md:flex-row">
          {/* bagian gambar */}
          <div className="flex flex-col gap-3">
            <div className="relative flex w-full justify-center bg-[#3838A4] px-3">
              {/* ic bg card */}
              <div className="absolute top-7 z-0">
                <Image
                  src={`/img/landing-mentor/ic-bg-mentor-card.svg`}
                  width={0}
                  height={0}
                  alt={`ic-bg-mentor-card.svg`}
                  className="h-full w-full object-fill"
                />
              </div>
              <Image
                src={`/${dataDetailMentor?.profile_picture}`}
                width={288}
                height={281}
                alt={`/${dataDetailMentor?.profile_picture}`}
                className=" z-10 h-[208px] w-[211px] object-fill md:h-[258px] md:w-[261px]"
              />
            </div>

            <button className="rounded-[10px] bg-[#0A0A65] px-3 py-2 text-xs font-semibold text-white hover:bg-[#36367e] md:px-6 md:py-2 md:text-sm">
              Buat Janjian
            </button>
          </div>
          {/* bagian informasi */}
          <div className="0 w-full">
            <h1 className="mt-2 text-sm font-extrabold md:text-4xl">
              {dataDetailMentor?.name}
            </h1>
            <h3 className="mt-3 text-justify text-xs">
              Dalam dunia persiapan kedinasan, Annisa Permatasari adalah lebih
              dari sekadar mentor. Dia adalah pemandu yang berkomitmen untuk
              membimbing Anda mencapai keberhasilan. Dengan pengalaman dan
              dedikasi yang luar biasa, Annisa telah membantu ribuan calon
              pegawai negeri untuk menghadapi dan mengatasi ujian Tes
              Inteligensi Umum dengan percaya diri.
            </h3>
            <div className="mt-3">
              <h2>Keunikan Ayu : </h2>
              <div className="mt-3">
                <div className="flex flex-col  gap-2">
                  {dataDetailMentor?.uniques.map((unik, index) => (
                    <div className="flex items-center gap-3" key={index}>
                      <CheckCircleOutlineIcon
                        color="success"
                        fontSize="small"
                      />
                      <h3>{unik}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* yang kamu dapatkan */}
        <div className="mt-5 rounded-xl  px-2 py-2 shadow-md md:px-4 md:py-4">
          <h1 className="font-bold">Yang Kamu Dapatkan</h1>
          {/* workshop dan deskripsi tes */}
          <div className="mt-3 px-2 md:mt-6 md:px-4">
            <div className="mt-5 flex flex-col gap-2 md:flex-row md:gap-5">
              <Image
                src={`/img/landing-mentor/ic-workshop.svg`}
                width={60}
                height={60}
                alt={`ic-workshop.svg`}
                className=" z-10 h-[50px] w-[50px] object-fill md:h-[60px] md:w-[60px]"
              />
              <div className="">
                <h1 className="font-bold">Workshop</h1>
                <h2 className="mt-1 text-justify text-xs md:text-sm">
                  Bersama coach profesional, ikuti workshop interaktif yang akan
                  membantumu lebih mengenal diri dan memperluas pemahamanmu
                  tentang berbagai jurusan kuliah dan dunia kerja.
                </h2>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 md:flex-row md:gap-5">
              <Image
                src={`/img/landing-mentor/ic-mata-pelajaran.svg`}
                width={60}
                height={60}
                alt={`ic-mata-pelajaran.svg`}
                className=" z-10 h-[50px] w-[50px] object-fill md:h-[60px] md:w-[60px]"
              />
              <div className="">
                <h1 className="font-bold">Tes Inteligensi Umum</h1>
                <h2 className="mt-1 text-justify text-xs md:text-sm">
                  Tes singkat ini terdiri dari beberapa tes yang dirancang
                  dengan sederhana untuk membantumu memahami dirimu lebih baik.
                  Seperti mengenal minat, bakat, kekuatan, gaya belajar, dan
                  lain-lain.
                </h2>
              </div>
            </div>

            {/* bagian-bagian detail tes */}
            <div className="mt-5 px-1 md:px-[82px]">
              {DetailTest.tests.map((test, index) => (
                <div key={`detail${index}`} className="mt-3 flex gap-3">
                  <Image
                    src={`/img/landing-mentor/ic-pensil.svg`}
                    width={20}
                    height={20}
                    alt={`ic-pensil.svg`}
                    className=" z-10 h-[15px] w-[15px] object-fill  md:h-[20px] md:w-[20px]"
                  />
                  <div>
                    <h1 className="text-2xs font-bold md:text-xs">
                      {test.title}
                    </h1>
                    <h3 className="mt-1 text-2xs md:text-xs">
                      {test.description}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
