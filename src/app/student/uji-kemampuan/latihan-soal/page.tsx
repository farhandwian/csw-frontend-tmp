// ini adalah page uji kemampuan latihan soal
"use client";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";
import PapanInformasi from "@/app/student/uji-kemampuan/_components/PapanInformasi";

const percentage = 66;

const color = [
  "#E5E5FE",
  "#E3F3FF",
  "#FFDDCF",
  "#FFF1B6",
  "#FFFFFF",
  "#F4F2EE",
];

const srcItemCards = [
  {
    color: "#E5E5FE",
    iconColor: "#D7D5FC",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_1.png",
  },
  {
    color: "#E3F3FF",
    iconColor: "#D7EAFF",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_2.png",
  },
  {
    color: "#FFDDCF",
    iconColor: "#F8CFC2",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_3.png",
  },
  {
    color: "#FFF1B6",
    iconColor: "#FDE47D",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_4.png",
  },
  {
    color: "#FFFFFF",
    iconColor: "#F6F6F6",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_5.png",
  },
  {
    color: "#F4F2EE",
    iconColor: "#E9E4DA",
    iconImageUrl: "/img/uji-kemampuan/latihan-soal/ic_uji_6.png",
  },
];

const Page = () => {
  return (
    <>
      {/* <UjiKemampuanNavigationTest />
      <UjiKemampuanNavigationModul />
      <Breadcrumbs widthReduction={"54px"} fontSize="7px" /> */}
      <section className="relative w-[100%]  p-4 md:p-5">
        <div className="mb-3">
          <h1 className="text-md font-bold">Paket Latihan Soal Matematika</h1>
          <h2 className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h2>
        </div>
        <div className="flex">
          <div className="w-[70%]">
            {/* container card pretest */}
            <div className="grid grid-cols-3 gap-2">
              {/* container item card pretest */}
              {srcItemCards.map((srcItemCard, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: srcItemCard.color }}
                  className=" rounded-md px-6 pb-2 pt-3"
                >
                  <Image
                    src={srcItemCard.iconImageUrl}
                    alt="ic-banner"
                    width={165}
                    height={165}
                    className="mt-1 inline h-[2.3rem] w-[2.3rem]"
                  />

                  <div className="my-6">
                    <h1 className="text-base font-semibold text-[#F9BF3B]">
                      Latihan Soal
                    </h1>
                    <h1 className="text-lg font-bold">Paket {index + 1}</h1>
                    <p className="text-xs">
                      Berisi tentang latihan soal matematika yang dapat
                      dikerjakan berkali - kali
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <h3>40 Soal</h3>
                    <ArrowCircleRightIcon sx={{ color: "black" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* papan informasi */}
          <div className="w-[30%]">
            <PapanInformasi />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
