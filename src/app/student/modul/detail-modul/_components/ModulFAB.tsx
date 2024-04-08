"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ModulFAB() {
  const pathName = usePathname();
  const checkUrl = () => {
    const arr = pathName.split("/");

    if (arr[3] === "detail-modul" && arr[4] !== "nilai") {
      return "detail-modul";
    } else {
      return "nilai";
    }
  };
  return (
    <>
      <div className="mb-2 max-w-fit rounded-lg border-[1.5px] border-[#C9CAF6] shadow-md">
        <Link
          href="/student/modul/detail-modul"
          className={`inline-flex rounded-l-md ${checkUrl() === "detail-modul" ? "bg-[#C9CAF6] hover:bg-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 " : "bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 "}   px-3 py-2 text-sm font-medium text-white md:px-5 md:py-2.5 `}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/img/modul/ic-home.svg"
            className={`mr-2 inline-block h-4 w-4 object-fill md:h-5 md:w-5`}
            alt="ic document"
          />{" "}
          <h1 className="text-xs text-[#64748B] md:text-base">Modul Home</h1>
        </Link>
        <Link
          href="/student/modul/detail-modul/nilai"
          className={`inline-flex rounded-r-md  border-gray-300  px-3 py-2 text-sm font-medium text-gray-900 md:px-5 md:py-2.5 ${checkUrl() === "nilai" ? "bg-[#C9CAF6] hover:bg-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 " : "bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 "}`}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/img/modul/ic-nilai.svg"
            className={`mr-2 inline-block h-4 w-4 object-fill md:h-5 md:w-5`}
            alt="ic document"
          />{" "}
          <h1 className="text-xs text-[#64748B] md:text-base">Nilai</h1>
        </Link>
      </div>
    </>
  );
}
