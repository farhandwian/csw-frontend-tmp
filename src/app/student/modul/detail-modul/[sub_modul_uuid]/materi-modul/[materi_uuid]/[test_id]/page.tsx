"use client";
import React, { useState } from "react";
import MateriModulLayout from "@/app/student/modul/detail-modul/[sub_modul_uuid]/materi-modul/_components/MateriModulLayout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MateriTerkunciAlert from "../../_components/MateriTerkunciAlert";
import { TMateriModulParams } from "@/types/modul";
import { useGetMateriModul } from "@/hooks/modul/hook";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";

const Page = ({ params }: { params: TMateriModulParams }) => {
  console.log(params);
  const {
    data,
    isLoading: isLoadingMateriModul,
    isError: isErrorMateriModul,
  } = useGetMateriModul(params.materi_uuid);

  const [activeSubSubject, setActiveSubSubject] = useState(0); // this will be the activeSubSubject that used to move through SubSubject array

  const onClickNavigation = (noSoal: number, activeSubSubject: number) => {
    setActiveSubSubject(activeSubSubject);
  };

  const dataMateriModul = data?.data;
  const dataSubSubjects = dataMateriModul?.sub_subject;

  const onClickNext = () => {
    if (dataSubSubjects && activeSubSubject !== dataSubSubjects.length - 1) {
      setActiveSubSubject((prev: number) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (activeSubSubject !== 0) {
      setActiveSubSubject((prev: number) => prev - 1);
    }
  };

  if (isErrorMateriModul) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingMateriModul) {
    return <Loading>{loadingMessage}</Loading>;
  }

  return (
    <MateriModulLayout
      dataMateriModul={dataMateriModul}
      activeSubSubject={activeSubSubject}
      setActiveSubSubject={setActiveSubSubject}
    >
      <MateriTerkunciAlert />
      <div
        key={activeSubSubject}
        className="h-fit max-w-[100%] bg-white shadow-md"
        style={{ overflowWrap: "break-word" }}
      >
        {/* header */}
        <div className="flex min-h-16 w-[100%] items-center bg-blue-300 ">
          <h1 className="ml-6 text-2xl font-bold">
            {dataMateriModul?.subject}
          </h1>
        </div>
        {/* isi */}
        <div className="h-[28.75rem] overflow-y-scroll p-3 shadow-sm">
          {/* kotak nomor kecil */}
          <div className="h-fit w-fit border border-blue-400 px-2 py-1">
            <h3>{`${activeSubSubject + 1}.0`}</h3>
          </div>
          <h1 className="text-2xl font-semibold">
            {dataSubSubjects && dataSubSubjects[activeSubSubject].name}
          </h1>

          {/* horizontal line thin */}
          <div className="w-100% mt-2 h-1 bg-gray-100"></div>

          <p>
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s.
            <br />
            <br />
            {dataSubSubjects && dataSubSubjects[activeSubSubject].content}
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
            versions of Lorem Ipsum. When an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. When an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. When an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. When an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        {/* footer */}
        <div className=" min-h-8 w-[100%] p-1 shadow-md">
          <h1 className="text-sm font-semibold">
            <div
              className={`w-100% flex min-h-10 ${activeSubSubject !== 0 ? "justify-between" : "justify-end"}`}
            >
              {activeSubSubject !== 0 && (
                <div className="inline cursor-pointer " onClick={onClickPrev}>
                  <div className="flex items-center">
                    <ArrowBackIosNewIcon sx={{ fontSize: "30px" }} />
                    <div>
                      <h1 className="text-left">{activeSubSubject}.0</h1>
                      <h1>
                        {dataSubSubjects &&
                          dataSubSubjects[activeSubSubject - 1].name}
                      </h1>
                    </div>
                  </div>
                </div>
              )}

              {dataSubSubjects &&
                activeSubSubject !== dataSubSubjects.length - 1 && (
                  <div className=" inline cursor-pointer" onClick={onClickNext}>
                    <div className="flex items-center">
                      <div>
                        <h1 className="text-right">{activeSubSubject + 2}.0</h1>
                        <h1>
                          {dataSubSubjects &&
                            dataSubSubjects[activeSubSubject + 1].name}
                        </h1>
                      </div>
                      <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
                    </div>
                  </div>
                )}
            </div>
          </h1>
        </div>
      </div>
    </MateriModulLayout>
  );
};

export default Page;
