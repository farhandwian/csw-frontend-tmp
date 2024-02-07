import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center h-screen w-full relative  ">
      <div className="bg-gradient-to-br from-[#090963] via-[#090963]  to-[#3333A1] w-full h-full relative">
        <div className="flex items-center w-full h-full text-white pt-36 lg:pl-16 xl:pl-36 absolute z-20">
          <div className="max-w-[420px] xl:max-w-[550px]">
            <h1 className="lg:text-[24px] xl:text-[32px] font-bold">
              Masih Bingung Untuk Belajar Test Masuk Sekolah Kedinasan? Belajar
              Sekarang
            </h1>
            <p className="mt-2 font-semibold lg:text-sm xl:text-base">
              Kami menyediakan modul untuk Anda mengenal dan mempelajari seputar
              sekolah kedinasan
            </p>
            <p className="mt-14 font-medium">
              #Platform Bimbel Kedinasan Online Terbaik
            </p>
            <button className="mt-8 bg-[#FFC007] text-[#090963] px-10 py-4 rounded-xl font-bold">
              Daftar Sekarang
            </button>
          </div>
        </div>

        {/* Icon Banner */}
        <div className="w-full h-full absolute flex lg:top-14 xl:top-5 z-0 right-0 ">
          <Image
            src={"/icon/ic-banner.svg"}
            width={1440}
            height={680}
            alt="ic-banner"
            className="h-full w-auto"
          />
        </div>

        {/* Image Banner */}
        <div className="w-full h-full absolute flex items-end justify-end lg:right-16 xl:right-36 bottom-0 z-10 ">
          <Image
            src={"/image/img-banner.png"}
            width={538}
            height={638}
            alt="img-banner"
            className="lg:w-[438px] lg:h-[538px] xl:w-auto xl:h-[550px] 2xl:h-[85%] 2xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
