"use client";
import React from "react";
import MateriModulLayout from "@/app/student/modul/detail-modul/materi-modul/_components/MateriModulLayout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MateriTerkunciAlert from "./_components/MateriTerkunciAlert";

const Page = () => {
  return (
    <MateriModulLayout>
      <MateriTerkunciAlert />
      <div
        className="h-fit max-w-[100%] bg-white shadow-md"
        style={{ overflowWrap: "break-word" }}
      >
        {/* header */}
        <div className="flex min-h-16 w-[100%] items-center bg-blue-300 ">
          <h1 className="ml-14 text-2xl font-bold">PANCASILA</h1>
        </div>
        {/* isi */}
        <div className="p-3">
          {/* kotak nomor kecil */}
          <div className="h-fit w-fit border border-blue-400 px-2 py-1">
            <h3>1.0</h3>
          </div>
          <h1 className="text-2xl font-semibold">Pengertian Pancasila</h1>

          {/* horizontal line thin */}
          <div className="w-100% mt-2 h-1 bg-gray-100"></div>

          <p>
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s.
            <br />
            <br />
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
            <br />
            <br />
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>

          {/* horizontal line thick */}
          <div className="w-100% mb-2 mt-2 h-2 bg-gray-200"></div>
          <div className="w-100% flex min-h-10 justify-end">
            <div className="flex items-center">
              <div>
                <h1 className="text-right">1.2</h1>
                <h1>Sejarah Pancasila</h1>
              </div>
              <ArrowForwardIosIcon sx={{ fontSize: "40px" }} />
            </div>
          </div>
        </div>
      </div>
    </MateriModulLayout>
  );
};

export default Page;
