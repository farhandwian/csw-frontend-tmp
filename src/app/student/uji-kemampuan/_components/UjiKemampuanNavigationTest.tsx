"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store";
import { setujiKemampuantestTypeNav } from "@/store/student/uji-kemampuan/navigationSlice";

import { usePathname } from "next/navigation";
const UjiKemampuanNavigationTest = () => {
  const pathName = usePathname();
  const checkUrl = () => {
    const arr = pathName.split("/");

    const flagWord = arr[3];
    return flagWord;
  };

  const dispatch = useDispatch<AppDispatch>();

  const onClickLatihanSoal = () => {
    dispatch(setujiKemampuantestTypeNav("latihan-soal"));
  };

  const onClickPretest = () => {
    dispatch(setujiKemampuantestTypeNav("pretest"));
  };

  const onClickPosttest = () => {
    dispatch(setujiKemampuantestTypeNav("posttest"));
  };

  const ujiKemampuanTestTypeNav = useAppSelector(
    (state) => state.ujiKemampuanNav.ujiKemampuanTestTypeNav,
  );
  const ujiKemampuanmoduleNav = useAppSelector(
    (state) => state.ujiKemampuanNav.ujiKemampuanmoduleNav,
  );
  return (
    <div className=" relative h-8 w-[100%] rounded-sm border bg-white shadow-md">
      <ul className="ml-5 flex h-full  ">
        <Link
          href={`/student/uji-kemampuan/latihan-soal/${ujiKemampuanmoduleNav}`}
          className={`mr-6 flex flex-col items-center  justify-center ${checkUrl() === "latihan-soal" && "border-b-2 border-black"}  text-center text-sm`}
          onClick={onClickLatihanSoal}
        >
          <h2 className="mt-3">Latihan Soal</h2>
        </Link>
        <Link
          href={`/student/uji-kemampuan/pretest/${ujiKemampuanmoduleNav}`}
          className={`mr-6 flex flex-col items-center  justify-center ${checkUrl() === "pretest" && "border-b-2 border-black"}  text-center text-sm`}
          onClick={onClickPretest}
        >
          <h2 className="mt-3">Pretest</h2>
        </Link>
        <Link
          href={`/student/uji-kemampuan/posttest/${ujiKemampuanmoduleNav}`}
          className={`mr-6 flex flex-col items-center  justify-center ${checkUrl() === "posttest" && "border-b-2 border-black"}  text-center text-sm`}
          onClick={onClickPosttest}
        >
          <h2 className="mt-3">Posttest</h2>
        </Link>
      </ul>
    </div>
  );
};

export default UjiKemampuanNavigationTest;
