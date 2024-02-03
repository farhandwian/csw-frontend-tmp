"use client";

import Studentlayout from "@/app/components/StudentLayout";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import GlobalStyles from "@/app/Globals.module.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ModulFAB from "@/app/student/modul/component/ModulFAB";

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

  const pathname = usePathname();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const checkUrl = () => {
    const arr = pathname.split("/");
    const firstTwoWords = "/" + arr.slice(1, 3).join("/");
    return firstTwoWords;
  };

  return (
    <Studentlayout>
      <section className="relative">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-customColorTypography-Gunmetal`}
        >
          Latihan Modul Materi 1
        </h1>
        <div className="inline-flex bg-white border rounded-2xl mb-5">
          <div className="flex p-3">
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          className={`${GlobalStyles["light-base-gray-typography"]} text-customColorTypography-SlateGray`}
        >
          Deskripsi Latihan
        </h1>
        <p
          className={`${GlobalStyles["light-sm-typography"]} text-customColorTypography-SteelBlue`}
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

        <Button variant="contained" className="bg-customPalette-RoyalBlue my-3">
          Mulai Kerjakan
        </Button>
      </section>
    </Studentlayout>
  );
};

export default page;
