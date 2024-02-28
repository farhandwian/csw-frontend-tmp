"use client";

import Studentlayout from "@/app/student/components/StudentLayout";
import React, { useState } from "react";
import GlobalStyles from "@/app/Globals.module.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ModulFAB from "@/app/student/modul/detail-modul/latihan-soal/_components/ModulFAB";

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
const page = () => {
  const [alignment, setAlignment] = useState("modul_home");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Studentlayout isBreadCrumb={true}>
      <section className="relative">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-tp-Gunmetal`}
        >
          Latihan Modul Materi 1
        </h1>
        <div className="mb-5 flex max-w-max rounded-2xl border bg-white">
          <div className="flex p-3">
            <div className="mr-3">
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                PENGERJAAN DIPERBOLEHKAN
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                DAPAT DIKERJAKAN BERKALI - KALI
              </p>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div className="mr-3">
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                STATUS
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                BELUM DIKERJAKAN
              </p>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div className="mr-3">
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                WAKTU
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                6 MENIT
              </p>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div className="mr-3">
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                JUMLAH SOAL
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                5 SOAL
              </p>
            </div>
          </div>
        </div>
        <hr className="border-y-1 border-y-gray-300" />
        <h1
          className={`${GlobalStyles["light-base-gray-typography"]} text-tp-SlateGray`}
        >
          Deskripsi Latihan
        </h1>
        <p
          className={`${GlobalStyles["light-sm-typography"]} text-tp-SteelBlue`}
        >
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
        <p className={`${GlobalStyles["bold-sm-gray-typography"]} mt-3`}>
          Persiapkan diri kamu sebelum mengerjakan latihan dengan mempelajari
          dan memahami modul materi 1. Sudah belajar sebelumnya? Lanjutkan dan
          mulai kerjakan latihan!
        </p>

        <Button variant="contained" className="my-3 bg-pl-RoyalBlue">
          Mulai Kerjakan
        </Button>
      </section>
    </Studentlayout>
  );
};

export default page;
