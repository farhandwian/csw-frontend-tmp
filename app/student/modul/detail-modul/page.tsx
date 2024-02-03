"use client";

import Studentlayout from "@/app/components/StudentLayout";
import ModulFAB from "@/app/student/modul/component/ModulFAB";
import React, { useState } from "react";

import { usePathname } from "next/navigation";

import Image from "next/image";

import Link from "next/link";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import GlobalStyles from "@/app/Globals.module.css";

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
  const pathname = usePathname();

  const checkUrl = () => {
    const arr = pathname.split("/");
    const firstTwoWords = "/" + arr.slice(1, 3).join("/");
    return firstTwoWords;
  };

  const [alignment, setAlignment] = useState("modul_home");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
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
          Modul Tes Wawasan Kebangsaan
        </h1>
        <hr className="border-y-1 border-y-gray-300" />
        <h1
          className={`${GlobalStyles["light-base-gray-typography"]} text-customColorTypography-SlateGray`}
        >
          pengenalan
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
        <ul className="list-disc text-customColorTypography-SteelBlue ml-3">
          <li>Modul Materi</li>
          <li>Latihan Pada Setiap Materi</li>
        </ul>
        <div className="container rounded-xl border border-gray-300 mt-3 mb-3">
          {detail_moduls.map((detail_modul, index) => (
            <div key={index} className="w-[97%] m-auto">
              {/* Render your content for each detail_modul here */}

              {/* Conditionally render content for the last item */}
              {index === detail_moduls.length - 1 ? (
                <div>
                  <p className="text-customColorTypography-SlateGray mt-2">
                    {detail_modul.materi}
                  </p>
                  <div className="flex justify-start gap-4 mt-2">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/stationery.png"
                      className={`object-cover w-10 md:w-10 inline-block`}
                      alt="Logo CSW"
                    />
                    <p className="text-customColorTypography-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.isi}
                    </p>
                  </div>

                  <div className="flex justify-start gap-4 mt-2 mb-2">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/assignment.png"
                      className={`object-cover w-10 md:w-10 inline-block`}
                      alt="Logo CSW"
                    />
                    <p className="text-customColorTypography-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.latihan}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-customColorTypography-SlateGray mt-2">
                    {detail_modul.materi}
                  </p>
                  <div className="flex justify-start gap-4 mt-2">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/stationery.png"
                      className={`object-cover w-10 md:w-10 inline-block`}
                      alt="Logo CSW"
                    />
                    <p className="text-customColorTypography-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.isi}
                    </p>
                  </div>

                  <div className="flex justify-start gap-4 mt-2">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/assignment.png"
                      className={`object-cover w-10 md:w-10 inline-block`}
                      alt="Logo CSW"
                    />
                    <p className="text-customColorTypography-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.latihan}
                    </p>
                  </div>

                  <hr className="m-auto border-y-1 border-y-gray-300 mt-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
