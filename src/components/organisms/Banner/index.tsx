import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center h-screen w-full relative">
      <div className="bg-gradient-to-br from-[#090963] via-[#090963]  to-[#3333A1] w-full h-full relative">
        <div className="flex items-center w-full h-full text-white px-2 md:px-10 lg:px-0 lg:pt-36 lg:pl-16 xl:pl-32 absolute z-20">
          <div className="md:max-w-[400px] lg:max-w-[420px] xl:max-w-[550px]">
            <h1 className="text-xl lg:text-[24px] xl:text-[32px] font-bold xl:leading-snug">
              Masih Bingung Untuk Belajar Test Masuk Sekolah Kedinasan? Belajar
              Sekarang
            </h1>
            <p className="mt-2 text-xs font-regular md:text-sm md:font-semibold xl:text-base">
              Kami menyediakan modul untuk Anda mengenal dan mempelajari seputar
              sekolah kedinasan
            </p>
            <p className="mt-14 font-medium text-sm md:text-base">
              #Platform Bimbel Kedinasan Online Terbaik
            </p>
            <button className="mt-8 bg-[#FFC007] text-[#090963] w-full py-3 md:w-fit md:px-10 md:py-4 rounded-xl font-bold">
              Daftar Sekarang
            </button>
          </div>
        </div>

        {/* Icon Background for Banner */}
        <div className="overflow-hidden w-fit h-fit md:w-full md:h-full absolute flex bottom-0 right-0 md:-bottom-40 lg:top-0 z-0  ">
          <Image
            src={"/icon/ic-banner.svg"}
            width={1440}
            height={680}
            alt="ic-banner"
            className="h-full w-auto lg:scale-150 xl:scale-100"
          />
        </div>

        {/* Image Banner */}
        <div className="hidden md:w-full md:h-full md:flex absolute items-end justify-end bottom-0 md:right-5 lg:right-16 xl:right-36  z-10 ">
          <Image
            src={"/image/img-banner.png"}
            width={538}
            height={638}
            alt="img-banner"
            className="md:w-[380px] md:h-[438px] lg:w-[438px] lg:h-[538px] xl:w-auto xl:h-[550px] 2xl:h-[85%] 2xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
