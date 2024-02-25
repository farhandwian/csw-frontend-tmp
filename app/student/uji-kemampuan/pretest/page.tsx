import React from "react";
import Studentlayout from "@/app/student/components/StudentLayout";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CircularProgress from "@/app/student/uji-kemampuan/pretest/components/CircularProgress/CircularProgress";
import Image from "next/image";

const percentage = 66;
const page = () => {
  return (
    <Studentlayout>
      {/* <Breadcrumbs /> */}
      <section className="relative w-[100%]">
        <div className="mb-3">
          <h1 className="text-md font-bold">Pretest SKD</h1>
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
            <div className="ml-5 h-[22.5rem] max-w-[23rem] rounded-md bg-white shadow-md">
              <div className="flex h-[20%] p-2 shadow-md">
                <div className="mr-2 w-[20%]">
                  <Image
                    src={"/img/uji-kemampuan/ic_info_uji.png"}
                    width={165}
                    height={165}
                    alt="ic-banner"
                    className="mt-1 inline h-[2.3rem] w-[2.3rem]"
                  />
                </div>

                <div className="">
                  <h1 className="text-sm font-bold">Papan Informasi</h1>
                  <h3 className="text-[10px]">
                    Informasi seputar pelaksanan posttest dan rules untuk
                    mengerjakan posttest
                  </h3>
                </div>
              </div>
              <div className="relative h-[80%] max-w-full overflow-y-scroll bg-[#F9F9F9] p-2">
                <h3>Tulis informasi disini</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
