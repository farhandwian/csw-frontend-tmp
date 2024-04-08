"use client";

import ModulFAB from "@/app/student/modul/detail-modul/_components/ModulFAB";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import React, { useState } from "react";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";

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

const Page = () => {
  const [alignment, setAlignment] = useState("modul_home");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />
      <section className="relative z-10 p-4 md:p-5">
        <ModulFAB></ModulFAB>
        <div className="leading-normal">
          <h1 className="text-lg font-bold leading-normal text-tp-Gunmetal md:text-2xl">
            Modul Tes Wawasan Kebangsaan
          </h1>
          <hr className="border-y-1 border-y-gray-300" />
          <h1 className="text-base leading-normal  text-tp-SlateGray md:text-xl">
            pengenalan
          </h1>
          <p className="lead-normal text-xs text-tp-SteelBlue md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil et
            voluptate quos fuga tempora laborum voluptatibus cumque nobis
            mollitia facere facilis natus labore ad perspiciatis ut repellendus,
            aut amet quae nostrum. Possimus libero at veritatis distinctio,
            similique quasi voluptate, pariatur ab nemo id, minima voluptas.
            Exercitationem ea animi odit aperiam consectetur consequuntur,
            eaque, sit aspernatur quisquam laudantium sed possimus corporis
            magni modi placeat quae eligendi repudiandae officiis maiores dicta?
            Unde sit fugit hic deserunt cum. Qui maxime repellendus molestias
            possimus itaque at mollitia! Enim doloremque velit molestiae eum
            illo possimus quod ab, minus accusamus placeat laudantium suscipit
            maiores consequuntur quas.
          </p>
          <ul className="ml-3 mt-2 list-disc text-tp-SteelBlue">
            <li>Modul Materi</li>
            <li>Latihan Pada Setiap Materi</li>
          </ul>
        </div>

        <div className="container mb-3 mt-3 rounded-xl border border-gray-300 px-1">
          {detail_moduls.map((detail_modul, index) => (
            <div key={index} className="m-auto w-[97%]">
              <div>
                <p className="mt-2 text-tp-SlateGray">{detail_modul.materi}</p>
                <div className="flex items-center justify-between  md:mt-2 md:gap-4">
                  <div className="flex">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/img/modul/stationery.png"
                      className={`inline-block h-7 w-7 object-fill md:h-10 md:w-10`}
                      alt="Logo stationery"
                    />
                    <p className="ml-4 mt-1 inline-block text-tp-Gunmetal">
                      {detail_modul.isi}
                    </p>
                  </div>

                  <div className="">{checkStatus(detail_modul.isiStatus)}</div>
                </div>

                <div className="flex items-center justify-between gap-4 md:mt-2">
                  <div className="flex">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/img/modul/assignment.png"
                      className={`inline-block h-7 w-7 object-fill md:h-10 md:w-10`}
                      alt="Logo assignment"
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
    </>
  );
};

export default Page;
