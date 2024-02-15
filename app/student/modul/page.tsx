import React from "react";
import Image from "next/image";
import Studentlayout from "@/app/student/components/StudentLayout";
import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci";
import { FaChevronCircleRight } from "react-icons/fa";
import { Box, Container } from "@mui/material";
import Breadcrumbs from "@/app/student/components/Breadcrumbs";

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

const page = () => {
  return (
    <Studentlayout>
      {/* <Breadcrumbs /> */}
      <section className="relative">
        <div className="grid grid-cols-3 gap-6">
          {moduls.map((modul, index) => (
            <div
              className="flex bg-white rounded-3xl shadow-md p-6"
              key={index}
            >
              <div className="">
                <Image
                  src="/img/modul/ic_modul.png"
                  width={35}
                  height={35}
                  alt="Picture of the author"
                />
                <h1 className="text-2xl font-semibold mb-2">MODUL TWK</h1>
                <p className="text-sm mb-3">
                  Berisi tentang materi - materi pembelajaran twk yang dapat
                  digunakan selama mengikuti pertemuan mulai dari 20 September -
                  30 Desember 2022
                </p>
                <small className="text-slate-400">
                  <CiCircleInfo className="inline-block mr-1" />
                  Modul tidak bisa di download
                </small>
              </div>
              <Link href="/student/modul/detail-modul">
                <i>
                  <FaChevronCircleRight />
                </i>
                <h1 className="leading-5 mt-1">Lihat Modul</h1>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Studentlayout>
  );
};

export default page;
