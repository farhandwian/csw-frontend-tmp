import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const moduls = [
  {
    name: "Ayu Lestari",
    title: "Mentor Matematika Terbaik",
    description:
      "Saya salah satu mentor yang ahli dalam mengajarkan seputar matematika untuk salah satu syarat test di sekolah kedinasan STIS. “Matematika itu mudah, asik dan seru”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-01",
    dateTime: "2023-11-01T09:00",
  },
  {
    name: "Budi Darmawan",
    title: "Mentor Fisika Terapan",
    description:
      "Dengan pengalaman mengajar yang luas, saya siap membantu anda menguasai fisika terapan untuk berbagai tes sekolah kedinasan. “Fisika adalah tentang memahami alam semesta.”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-02",
    dateTime: "2023-11-02T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
  {
    name: "Citra Kirana",
    title: "Mentor Kimia Analitik",
    description:
      "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
    imageUrl: "/img/img_mentor.png",
    date: "2023-11-03",
    dateTime: "2023-11-03T09:00",
  },
];

const Page = () => {
  return (
    <section className="relative p-4 md:p-5">
      <div className="mb-6">
        <h1 className="text-base font-bold md:text-2xl">
          Modul Yang Dipelajari
        </h1>
        <h3 className="text-sm md:text-sm">
          Pelajari materi dibawah ini agar dapat memudahkanmu dalam mencapai
          targetmu!!!
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {moduls.map((modul, index) => (
          <div className="rounded-3xl bg-white p-4 shadow-md" key={index}>
            <div className="relative m-auto h-[100px] w-full rounded-2xl bg-[#DCDDFF] md:h-[150px] md:w-[100%]   ">
              <Image
                src={"/img/modul/list-modul-2.svg"}
                alt="img-paket"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 transform object-fill"
              />
              <div className="absolute bottom-0 right-1 text-4xs md:right-2 md:text-xs">
                <button
                  type="button"
                  className="mb-2 rounded-2xl border border-gray-300 bg-white px-[3px] py-[1px] text-4xs  font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:py-[2px] md:pl-2 md:text-2xs"
                >
                  Lihat Detail
                  <ChevronRightIcon fontSize="inherit" />
                </button>
              </div>
            </div>

            <div className="relative mt-2 flex flex-col  md:mt-2">
              <h1 className="mb-1 text-2xs  font-bold md:mb-2 md:text-lg">
                MODUL TWK
              </h1>
              <h3 className="mb-1 text-justify text-3xs md:mb-3 md:text-xs">
                Berisi tentang materi - materi pembelajaran twk yang dapat
                digunakan selama mengikuti pertemuan mulai dari 20 September -
                30 Desember 2022
              </h3>
              <small className="text-3xs text-slate-400">
                <InfoIcon fontSize="inherit" className="mr-1 inline-block" />
                Modul tidak bisa di download
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
