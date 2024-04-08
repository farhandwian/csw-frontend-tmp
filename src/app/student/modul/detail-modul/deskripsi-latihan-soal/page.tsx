"use client";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import InformationTest from "@/app/student/_components/InformationTest";
import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import BlueButton from "@/components/Button/BlueButton";
import React, { useState } from "react";

let detail_moduls: {
  materi: string;
  isi: string;
  latihan: string;
}[];

detail_moduls = [
  {
    materi: "Modul Materi 1 - Pancasila",
    isi: "Isi Modul Materi 1",
    latihan: "Latihan Modul Materi 1",
  },
  {
    materi: "Modul Materi 2 - Pancasila",
    isi: "Isi Modul Materi 2",
    latihan: "Latihan Modul Materi 2",
  },
  {
    materi: "Modul Materi 3 - Pancasila",
    isi: "Isi Modul Materi 3",
    latihan: "Latihan Modul Materi 3",
  },
  {
    materi: "Modul Materi 4 - Pancasila",
    isi: "Isi Modul Materi 4",
    latihan: "Latihan Modul Materi 4",
  },
];

const informasi = {
  PENGERJAAN: "DAPAT DIKERJAKAN BERKALI-KALI",
  STATUS: "BELUM DIKERJAKAN",
  WAKTU: "6 MENIT",
  JUMLAH_SOAL: "5 SOAL",
};

const Page = () => {
  const [alignment, setAlignment] = useState("modul_home");
  const informasiArray = Object.entries(informasi);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />

      <section className="relative p-4 md:p-5">
        <ModulFAB></ModulFAB>
        <h1 className="my-2 text-lg font-bold leading-normal text-tp-Gunmetal md:text-2xl">
          Latihan Modul Materi 1
        </h1>
        {/* informasi soal */}
        <InformationTest informasi={informasi} />
        <hr className="border-y-1 border-y-gray-300" />
        <h1 className="text-base text-tp-SlateGray md:text-xl">
          Deskripsi Latihan
        </h1>
        <p className={`text-sm leading-normal text-tp-SteelBlue md:text-base`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil et
          voluptate quos fuga tempora laborum voluptatibus cumque nobis mollitia
          facere facilis natus labore ad perspiciatis ut repellendus, aut amet
          quae nostrum. Possimus libero at veritatis distinctio, similique quasi
          voluptate, pariatur ab nemo id, minima voluptas. Exercitationem ea
          animi odit aperiam consectetur consequuntur, eaque, sit aspernatur
          quisquam laudantium sed possimus corporis magni modi placeat quae
          eligendi repudiandae officiis maiores dicta? Unde sit fugit hic
          deserunt cum. Qui maxime repellendus molestias possimus itaque at
          mollitia! Enim doloremque velit molestiae eum illo possimus quod ab,
          minus accusamus placeat laudantium suscipit maiores consequuntur quas.
        </p>
        <p className="mt-3 text-sm font-semibold text-[#b4b4b4] md:text-base">
          Persiapkan diri kamu sebelum mengerjakan latihan dengan mempelajari
          dan memahami modul materi 1. Sudah belajar sebelumnya? Lanjutkan dan
          mulai kerjakan latihan!
        </p>

        <BlueButton className="my-3 bg-pl-RoyalBlue">Mulai Kerjakan</BlueButton>
      </section>
    </>
  );
};

export default Page;
