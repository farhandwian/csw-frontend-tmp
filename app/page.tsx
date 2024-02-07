"use client";
import React from "react";

import MainLayout from "./components/MainLayout";

import MentorCard from "./components/group-card/mentor";

import TentangBimbel from "./components/group-card/TentangBimbel";

import PaketPenawaran from "./components/group-card/PaketPenawaran";

import Review from "./components/group-card/Review";

import Footer from "./components/Footer";

import CustomizedAccordions from "./components/Accordion";
const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const Beranda = () => {
  return (
    <MainLayout>
      {/* banner */}
      <div className="flex relative">
        <img
          src="/img/bg.png"
          alt=""
          className="hidden sm:block absolute w-full h-auto"
        />
        <div className="w-[100%] sm:w-[45%] relative z-10 flex h-full justify-center items-center top-[10px] sm:top-[30px] lg:top-[100px] bg-white bg-opacity-90 rounded-lg shadow-xl sm:shadow-none sm:border-none sm:bg-transparent">
          <div className="max-w-4xl mx-auto p-4 space-y-6">
            <h1 className="sm:text-2xl lg:text-3xl font-bold text-center text-gray-800">
              Selamat Datang di Civil Servant Warrior.
            </h1>

            <p className="sm:text-lg lg:text-xl text-center text-gray-600">
              Masih Bingung Untuk Belajar Test Masuk Sekolah Kedinasan? Belajar
              Sekarang
            </p>
            <div className="text-center">
              <a
                href="#"
                className="inline-block px-6 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Daftar dan Belajar sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* tentang mentor */}
      <div className="container mx-auto mt-[30%] pb-20">
        <div className="text-center mt-20 pt-20">
          <h2 className="text-2xl font-bold">
            Gapai Impianmu Bersama <br />
            Mentor Berpengalaman
          </h2>
          <p className="mt-4 text-xl font-medium text-gray-900">
            Perdalam ilmumu seputar tes SKD dan tes khusus setiap <br />
            sekolah kedinasan secara teratur, terarah dan terorganisir
          </p>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6 mt-6 px-[5%]">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <p className="font-semibold text-pl-primary">
              Mau belajar bersama mentor terbaik dari kami?
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 text-right">
            <button
              type="button"
              className="bg-pl-primary text-white font-bold py-1 px-3 rounded"
            >
              Lihat lebih banyak mentor
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col lg:flex-row -mx-3 w-[90%] justify-around gap-[2%] m-auto">
            <MentorCard />
          </div>
        </div>

        {/* tentang bimbel */}

        <div className="flex flex-wrap -mx-3 mb-6 mt-16 px-[5%]">
          <div className="w-full px-3 mb-6 md:mb-0 text-center">
            <p className="font-semibold text-green-300 text-lg">
              kenapa memilih kami?
            </p>
          </div>
          <div className="w-full text-center mt-[1%]">
            <h1 className="text-xl font-medium text-gray-900">
              Platform Bimbel Kedinasan Online <br />
              Menggunakan Kurikulum Terbaru
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-row w-[90%] justify-around gap-[2%] m-auto">
            <TentangBimbel />
          </div>
        </div>

        {/* tentang paket */}

        <div className="flex flex-wrap -mx-3 mb-6 mt-16 px-[5%]">
          <div className="w-full px-3 mb-6 md:mb-0 text-center">
            <p className="font-semibold text-green-300 text-lg">
              Paket Unggulan Teratas
            </p>
          </div>
          <div className="w-full text-center mt-[1%]">
            <h1 className="text-xl font-medium text-gray-900">
              Pilih Paket Unggulan untuk <br />
              Meningkatkan Ilmu
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-4 px-[5%]">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <p className="font-semibold text-pl-primary">
              Tertarik untuk membeli paket bimbel kami?
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 text-right">
            <button
              type="button"
              className="bg-pl-primary text-white font-bold py-1 px-3 rounded"
            >
              Semua Paket
            </button>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-row w-[92%] justify-around gap-[4%] m-auto">
            <PaketPenawaran />
          </div>
        </div>

        {/* review */}

        <div className="flex flex-wrap -mx-3 mb-6 mt-16 px-[5%]">
          <div className="w-full px-3 mb-6 md:mb-0 text-center">
            <p className="font-semibold text-green-300 text-lg">
              Testimoni dan Kisah Sukses Orang-orang Yang Belajar di CSW
            </p>
          </div>
          <div className="w-full text-center mt-[1%]">
            <h1 className="text-xl font-medium text-gray-900">
              Menjadikan Ilmu Semakin Bermanfaat
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-4 px-[5%]">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <p className="font-semibold text-pl-primary">
              Ingin tahu lebih banyak kisah sukses lainnya?
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 text-right">
            <button
              type="button"
              className="bg-pl-primary text-white font-bold py-1 px-3 rounded"
            >
              Semua Testimoni
            </button>
          </div>
        </div>
        <div className="container mb-6">
          <div className="flex flex-row w-[92%] justify-around gap-[4%] m-auto">
            <Review />
          </div>
        </div>

        {/* FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-[90%] m-auto">
          <div className="w-[80%] sm:w-[50%]">
            <h1 className="text-2xl text-pl-primary mb-2">FAQ</h1>
            <p className="font-semibold text-green-300 text-lg mb-1">
              Ada pertanyaan? Kami akan membantu
            </p>
            <p className="mb-2">
              Kami tahu Anda memiliki beberapa pertanyaan, kami telah mencoba
              membuat daftar yang paling penting sekali dan Anda bisa mengajukan
              pertanyaan jika terdapat kebingunan
            </p>
            <div className="w-full md:w-1/2 text-left">
              <button
                type="button"
                className="bg-pl-primary text-white font-bold py-1 px-2 rounded"
              >
                Semua Paket
              </button>
            </div>
          </div>
          <div className="w-[80%] sm:w-[50%] grid justify-items-end">
            <CustomizedAccordions />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </MainLayout>
  );
};

export default Beranda;
