"use client";
import React from "react";
import { BlueButton } from "@/components/Button/BlueButton";
import Image from "next/image";
import { TAfterTestParams } from "@/types/modul";
import Link from "next/link";

interface AfterTestProps {
  params: TAfterTestParams;
}

const AfterTest = ({ params }: AfterTestProps) => {
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
        Yeay!!! Selamat kamu telah menyelesaikan {params.quiz_title}
      </h2>

      <h3 className="mb-2 text-xs md:text-sm">
        Nilai akan langsung muncul dan kamu bisa melihatnya di halaman deskripsi{" "}
        {params.quiz_title}
      </h3>

      <Link href={""} className="m-auto">
        <BlueButton
          className="ml-2 bg-pl-RoyalBlue  text-white "
          onClick={() => {}}
        >
          <h1 className="text-xs md:text-sm">
            Kembali ke deskripsi {params.quiz_title}
          </h1>
        </BlueButton>
      </Link>
    </div>
  );
};

export default AfterTest;
