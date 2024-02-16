import React from "react";
import Studentlayout from "@/app/student/components/StudentLayout";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CircularProgress from "./components/CircularProgress/CircularProgress";
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
          <div className="w-[75%] bg-red-200">
            {/* container card pretest */}
            <div className="grid grid-cols-3 gap-2">
              {/* container item card pretest */}
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: "rgba(217, 167, 32, 1)" }}
                  className=" rounded-md px-6 pt-6 pb-2"
                >
                  <div className="flex justify-between mb-3 text-sm">
                    <h3>TWK </h3>
                    <ArrowCircleRightIcon />
                  </div>

                  <h1 className="text-lg font-bold">
                    Wawasan Seputar Kebangsaan
                  </h1>
                  <h3 className="text-xs">36 Pertemuan | 36 Pretest</h3>
                  <div className="flex justify-between">
                    <div className="w-[50%]">
                      <CircularProgress></CircularProgress>
                      <div className="w-fit min-h-5 bg-white rounded-md shadow-md p-1 ml-3">
                        <h3 className="text-sm">
                          <Image
                            src={"/img/uji-kemampuan/ic_pretest_1.png"}
                            width={165}
                            height={165}
                            alt="ic-banner"
                            className="w-[1.3rem] h-[1.3rem] inline mr-1"
                          />
                          18 of 36
                        </h3>
                      </div>
                    </div>
                    <div className="50%">
                      <Image
                        src={"/img/uji-kemampuan/img_pretest_1.png"}
                        width={165}
                        height={165}
                        alt="ic-banner"
                        className="w-[10.3rem] h-[10.3rem]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[25%] bg-red-900">
            <div className="ml-5 min-h-[22.5rem] max-w-[23rem] bg-white rounded-md shadow-md"></div>
          </div>
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
