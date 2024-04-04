import ReTypePassFprm from "@/components/Forms/ReTypePassForm";
import HeroImage from "@/components/HeroImage";
import Image from "next/image";
import React from "react";

const ReTypePassSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <HeroImage
        src={"/image/bg-forgot-pass.png"}
        width={3242}
        height={2904}
        alt="img-forgot-pass"
        classNameWrap="px-12 h-[13.375rem] w-[14.375rem] object-fill"
      />

      <div className="flex w-full flex-col justify-center bg-white px-10 py-8 md:h-screen md:w-1/2 md:px-28 md:pt-14">
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold">
            Buat Mimpimu Menjadi Kenyataan
          </h3>
          <p className="mt-2 font-normal text-[#5E5252]">
            Yuk Daftarkan Akunmu Segera !
          </p>
        </div>
        <div className="mt-6">
          <ReTypePassFprm />
        </div>
      </div>
    </div>
  );
};

export default ReTypePassSection;
