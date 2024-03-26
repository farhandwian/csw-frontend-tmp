"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
const UjiKemampuanNavigationTest = () => {
  const pathName = usePathname();
  const checkUrl = () => {
    const arr = pathName.split("/");
    const lastWord = arr[arr.length - 1];
    return lastWord;
  };
  return (
    <div className=" relative h-10 w-[100%] rounded-sm border bg-white shadow-md">
      <ul className="ml-5 flex h-full  ">
        <Link
          href={"/student/uji-kemampuan"}
          className={`mr-6 flex flex-col items-center  justify-center ${checkUrl() === "uji-kemampuan" && "border-b-2 border-black"}  text-center text-sm`}
        >
          <h2 className="mt-3">Latihan Soal</h2>
        </Link>
        <Link
          href={"/student/uji-kemampuan/pretest"}
          className={`mr-6 flex flex-col items-center  justify-center ${checkUrl() === "pretest" && "border-b-2 border-black"}  text-center text-sm`}
        >
          <h2 className="mt-3">Pretest</h2>
        </Link>
        <Link
          href={"/student/uji-kemampuan/posttest"}
          className={`mr-6 flex flex-col items-center  justify-center ${checkUrl() === "posttest" && "border-b-2 border-black"}  text-center text-sm`}
        >
          <h2 className="mt-3">Posttest</h2>
        </Link>
      </ul>
    </div>
  );
};

export default UjiKemampuanNavigationTest;
