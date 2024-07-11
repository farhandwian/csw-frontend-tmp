"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store";

import { usePathname } from "next/navigation";
import { setujiKemampuanmoduleNav } from "@/store/student/uji-kemampuan/navigationSlice";
const UjiKemampuanNavigationModul = () => {
  const pathName = usePathname();
  const checkUrl = () => {
    const arr = pathName.split("/");
    const lastWord = arr[arr.length - 1];
    return lastWord;
  };

  const dispatch = useDispatch<AppDispatch>();

  const onClickSKD = () => {
    dispatch(setujiKemampuanmoduleNav(1));
  };

  const onClickMatematika = () => {
    dispatch(setujiKemampuanmoduleNav(2));
  };

  const ujiKemampuanTestTypeNav = useAppSelector(
    (state) => state.ujiKemampuanNav.ujiKemampuanTestTypeNav,
  );
  const ujiKemampuanmoduleNav = useAppSelector(
    (state) => state.ujiKemampuanNav.ujiKemampuanmoduleNav,
  );

  console.log(ujiKemampuanTestTypeNav);
  console.log(ujiKemampuanmoduleNav);

  return (
    <div className=" relative h-9 w-[100%] rounded-sm border-b-[1px] bg-white shadow-md">
      <ul className="ml-5 flex h-full items-center  ">
        <Link
          href={`/student/uji-kemampuan/${ujiKemampuanTestTypeNav}/1`}
          onClick={onClickSKD}
        >
          <div
            className={`me-6 inline-flex h-5 items-center justify-center rounded-2xl ${ujiKemampuanmoduleNav === 1 ? "bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700" : "border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"}`}
          >
            SKD
          </div>
        </Link>

        <Link
          href={`/student/uji-kemampuan/${ujiKemampuanTestTypeNav}/2`}
          onClick={onClickMatematika}
          className={`me-6 inline-flex h-5 items-center justify-center rounded-2xl ${ujiKemampuanmoduleNav === 2 ? "bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700" : "border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"}`}
        >
          MATEMATIKA
        </Link>
      </ul>
    </div>
  );
};

export default UjiKemampuanNavigationModul;
