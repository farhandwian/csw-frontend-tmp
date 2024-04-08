"use client";
import React from "react";
import { BlueButton } from "@/components/Button/BlueButton";
import Image from "next/image";

const AfterTest = () => {
  return (
    <div className="mx-auto mt-3 flex w-[80%] flex-col gap-5 md:w-[50%]">
      <div className="mx-auto">
        <Image
          width={150}
          height={150}
          src="/img/uji-kemampuan/ic_success_latsol.gif"
          className={`inline-block object-cover`}
          alt="Logo CSW"
        />
      </div>
      <h2 className="text-center text-lg font-bold md:text-xl">
        Yeay!!! Selamat kamu telah menyelesaikan Latihan
      </h2>

      <h3 className="mb-2 text-xs md:text-sm">
        Nilai akan langsung muncul dan kamu bisa melihatnya di halaman awal
        latihan modul materi 1 Lorem Ipsum has been the industry&apos;s standard
        dummy text ever since the 1500s
      </h3>

      <form className="m-auto">
        <BlueButton
          className="ml-2 bg-pl-RoyalBlue  text-white "
          onClick={() => {}}
        >
          <h1 className="text-xs md:text-sm">
            Kembali ke Latihan Modul Materi 1{" "}
          </h1>
        </BlueButton>
      </form>
    </div>
  );
};

export default AfterTest;
