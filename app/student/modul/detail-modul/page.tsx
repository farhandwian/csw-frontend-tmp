"use client";

import StudentLayout from "@/app/student/components/StudentLayout";
import ModulFAB from "@/app/student/modul/detail-modul/latihan-soal/_components/ModulFAB";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import GlobalStyles from "@/app/Globals.module.css";
import Checkbox from "@mui/material/Checkbox";
import LockIcon from "@mui/icons-material/Lock";

let detail_moduls: {
  materi: string;
  isiStatus: string;
  isi: string;
  latihan: string;
  latihanStatus: string;
}[];

// diIsi,belumDiIsi,terkunci
detail_moduls = [
  {
    materi: "Modul Materi 1 - Pancasila",
    isi: "Isi Modul Materi 1",
    isiStatus: "diIsi",
    latihan: "Latihan Modul Materi 1",
    latihanStatus: "diIsi",
  },
  {
    materi: "Modul Materi 2 - Pancasila",
    isi: "Isi Modul Materi 2",
    isiStatus: "belumDiIsi",
    latihan: "Latihan Modul Materi 2",
    latihanStatus: "belumDiIsi",
  },
  {
    materi: "Modul Materi 3 - Pancasila",
    isiStatus: "terkunci",
    isi: "Isi Modul Materi 3",
    latihan: "Latihan Modul Materi 3",
    latihanStatus: "terkunci",
  },
  {
    materi: "Modul Materi 4 - Pancasila",
    isiStatus: "terkunci",
    isi: "Isi Modul Materi 4",
    latihan: "Latihan Modul Materi 4",
    latihanStatus: "terkunci",
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const checkStatus = (status: string) => {
  if (status === "diIsi") {
    return (
      <>
        <Checkbox {...label} disabled checked />
      </>
    );
  } else if (status === "belumDiIsi") {
    return (
      <>
        <Checkbox {...label} disabled />
      </>
    );
  } else if (status === "terkunci") {
    return (
      <>
        <LockIcon color="disabled" />
      </>
    );
  }
};

const page = () => {
  const [alignment, setAlignment] = useState("modul_home");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <StudentLayout isBreadCrumb={true}>
      <section className="relative z-10">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-tp-Gunmetal`}
        >
          Modul Tes Wawasan Kebangsaan
        </h1>
        <hr className="border-y-1 border-y-gray-300" />
        <h1
          className={`${GlobalStyles["light-base-gray-typography"]} text-tp-SlateGray`}
        >
          pengenalan
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
        <ul className="ml-3 list-disc text-tp-SteelBlue">
          <li>Modul Materi</li>
          <li>Latihan Pada Setiap Materi</li>
        </ul>
        <div className="container mb-3 mt-3 rounded-xl border border-gray-300">
          {detail_moduls.map((detail_modul, index) => (
            <div key={index} className="m-auto w-[97%]">
              {/* Render your content for each detail_modul here */}

              {/* Conditionally render content for the last item */}
              {/* {index === detail_moduls.length - 1 ? (
                <div>
                  <p className="text-tp-SlateGray mt-2">
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
                    <p className="text-tp-Gunmetal mt-1 inline-block ml-4">
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
                    <p className="text-tp-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.latihan}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-tp-SlateGray mt-2">
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
                    <p className="text-tp-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.isi}
                    </p>

                    <Checkbox {...label} />
                  </div>

                  <div className="flex justify-start gap-4 mt-2">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/assignment.png"
                      className={`object-cover w-10 md:w-10 inline-block`}
                      alt="Logo CSW"
                    />
                    <p className="text-tp-Gunmetal mt-1 inline-block ml-4">
                      {detail_modul.latihan}
                    </p>
                    <Checkbox {...label} />
                  </div>

                  <hr className="m-auto border-y-1 border-y-gray-300 mt-2" />
                </div>
              )} */}

              <div>
                <p className="mt-2 text-tp-SlateGray">{detail_modul.materi}</p>
                <div className="mt-2 flex justify-between gap-4">
                  <div className="flex">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/stationery.png"
                      className={`inline-block w-10 object-cover md:w-10`}
                      alt="Logo CSW"
                    />
                    <p className="ml-4 mt-1 inline-block text-tp-Gunmetal">
                      {detail_modul.isi}
                    </p>
                  </div>

                  <div className="">{checkStatus(detail_modul.isiStatus)}</div>
                </div>

                <div className="mt-2 flex justify-between gap-4">
                  <div className="flex">
                    <Image
                      width={25}
                      height={25}
                      src="/img/modul/assignment.png"
                      className={`inline-block w-10 object-cover md:w-10`}
                      alt="Logo CSW"
                    />
                    <p className="ml-4 mt-1 inline-block text-tp-Gunmetal">
                      {detail_modul.latihan}
                    </p>
                  </div>

                  <div className="">
                    {checkStatus(detail_modul.latihanStatus)}
                  </div>
                </div>

                {index === detail_moduls.length - 1 ? (
                  ""
                ) : (
                  <hr className="border-y-1 m-auto mt-2 border-y-gray-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </StudentLayout>
  );
};

export default page;
