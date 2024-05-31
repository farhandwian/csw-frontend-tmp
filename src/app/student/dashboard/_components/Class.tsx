import React from "react";
import Image from "next/image";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { red } from "@mui/material/colors";

const ClassData = [
  {
    module_name: "SKD",
    sub_module: [
      {
        name: "TWK",
        waktu_akses: "Waktu akses",
      },
      {
        name: "TIU",
        waktu_akses: "Waktu akses",
      },
      {
        name: "TKP",
        waktu_akses: "Waktu akses",
      },
    ],
  },
  {
    module_name: "Matematika",
    sub_module: [
      {
        name: "Matematika",
        waktu_akses: "Waktu akses",
      },
    ],
  },
];

const Class = () => {
  return (
    <div className="rounded-md border bg-white">
      {/* mata pelajaran yang saya ikuti card */}
      <h1 className="p-3 font-bold">Mata Pelajaran yang saya ikuti</h1>
      {ClassData.map((moduleData, moduleIndex) => (
        <div key={moduleIndex}>
          {moduleData.sub_module.map((subModuleData, subModuleIndex) => (
            <div key={subModuleIndex}>
              {/* horizontal line */}
              <div className="h-[2px] w-full bg-gray-100"></div>
              {/* Display module name only once */}
              {subModuleIndex === 0 && (
                <h1 className="ml-3 font-bold">{moduleData.module_name}</h1>
              )}

              <Image
                src="/img/img_matpel.png"
                width={200}
                height={200}
                className="mx-auto my-2.5 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-[150px] lg:w-[200px]"
                alt="Logo CSW"
              />

              <h1 className="ml-3 font-bold">{subModuleData.name}</h1>
              <h2 className="ml-3 text-sm font-semibold">Kelas</h2>
              <div className="mb-4 mt-2">
                <AccessTimeFilledIcon
                  className="ml-3 inline-block"
                  sx={{ color: red[400] }}
                />
                <h2 className="ml-1 inline-block">
                  {subModuleData.waktu_akses}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Class;
