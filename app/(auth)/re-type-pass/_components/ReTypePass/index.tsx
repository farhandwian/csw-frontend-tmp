import ReTypePassFprm from "../../../../components/Forms/ReTypePassForm";
import HeroImage from "../../../../components/HeroImage";
import Image from "next/image";
import React from "react";

const ReTypePassSection = () => {
  return (
    <div className="flex">
      <HeroImage
        src={"/image/bg-forgot-pass.png"}
        width={3242}
        height={2904}
        alt="img-forgot-pass"
        classNameWrap="px-12"
      />

      <div className="flex h-screen w-1/2 flex-col justify-center bg-white px-28 pt-14">
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
