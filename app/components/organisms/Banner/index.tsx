import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative flex h-screen w-full items-center  ">
      <div className="relative h-full w-full  bg-gradient-to-br from-[#090963] via-[#090963] to-[#3333A1]">
        <div className="absolute z-20 flex h-full w-full items-center pt-36 text-white lg:pl-16 xl:pl-36">
          <div className="max-w-[420px] xl:max-w-[550px]">
            <h1 className="font-bold lg:text-[24px] xl:text-[32px]">
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
            <button className="mt-8 rounded-xl bg-[#FFC007] px-10 py-4 font-bold text-[#090963]">
              Daftar Sekarang
            </button>
          </div>
        </div>

        {/* Icon Banner */}
        <div className="absolute right-0 z-0 flex h-full w-full lg:top-14 xl:top-5 ">
          <Image
            src={"/icon/ic-banner.svg"}
            width={1440}
            height={680}
            alt="ic-banner"
            className="h-full w-auto"
          />
        </div>

        {/* Image Banner */}
        <div className="absolute bottom-0 z-10 flex h-full w-full items-end justify-end lg:right-16 xl:right-36 ">
          <Image
            src={"/image/img-banner.png"}
            width={538}
            height={638}
            alt="img-banner"
            className="lg:h-[538px] lg:w-[438px] xl:h-[550px] xl:w-auto 2xl:h-[85%] 2xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
