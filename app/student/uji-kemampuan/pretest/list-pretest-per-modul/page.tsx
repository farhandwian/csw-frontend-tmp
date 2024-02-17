import React from "react";
import Studentlayout from "@/app/student/components/StudentLayout";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";

const page = () => {
  return (
    <Studentlayout>
      {/* <Breadcrumbs /> */}
      <section className="relative min-w-36 bg-red-300">
        <h1>Pretest SKD Bagian TWK</h1>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          nesciunt.
        </h3>
        <div className="flex w-[100%]">
          <div className="w-[75%]">
            <div className="w-[90%] bg-[#F1F1F1] shadow-md">
              <div className="w-[100%] bg-white">
                <h3>
                  <Image
                    src={
                      "/img/uji-kemampuan/pretest/ic-list-pretest-per-modul-judul-pertemuan.png"
                    }
                    width={20}
                    height={20}
                    alt="ic-banner"
                    className="w-[1.3rem] h-[1.3rem] inline mr-1 ml-1"
                  />{" "}
                  Judul pertemuan - tanggal pertemuan
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[25%]"></div>
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
