"use client";
import CircularProgress from "@/app/student/uji-kemampuan/pretest/_components/CircularProgress/CircularProgress";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";

import PapanInformasi from "@/app/student/uji-kemampuan/_components/PapanInformasi";

const percentage = 66;
const Page = () => {
  return (
    <>
      <section className="relative w-[100%]  p-4 md:p-5">
        <div className="mb-3">
          <h1 className="text-md font-bold">Posttest SKD</h1>
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
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: "rgba(217, 167, 32, 1)" }}
                  className=" rounded-md px-6 pb-2 pt-6"
                >
                  <div className="mb-3 flex justify-between text-sm">
                    <h3>TWK </h3>
                    <ArrowCircleRightIcon sx={{ color: "white" }} />
                  </div>

                  <h1 className="text-md font-bold">
                    Wawasan Seputar Kebangsaan
                  </h1>
                  <h3 className="text-xs">36 Pertemuan | 36 Pretest</h3>
                  <div className="flex justify-between">
                    <div className="w-[50%]">
                      <CircularProgress></CircularProgress>
                      <div className="ml-3 min-h-5 w-fit rounded-md bg-white p-1 shadow-md">
                        <h3 className="text-xs">
                          <Image
                            src={"/img/uji-kemampuan/pretest/ic_pretest_1.png"}
                            width={165}
                            height={165}
                            alt="ic-banner"
                            className="mr-1 inline h-[1.3rem] w-[1.3rem]"
                          />
                          18 of 36
                        </h3>
                      </div>
                    </div>
                    <div className="50%">
                      <Image
                        src={"/img/uji-kemampuan/pretest/img_pretest_1.png"}
                        width={165}
                        height={165}
                        alt="ic-banner"
                        className="ml-3 h-[9.3rem] w-[9.3rem]"
                      />
                    </div>
                  </div>
                </div>
              ))}
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
