"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useDesktop from "./hooks/useDesktop";
import MentorItem from "./home-page/MentorItem";
import WhyUsItem from "./home-page/WhyUsItem";
import PaketItem from "./home-page/PaketItem";
import TestimoniItem from "./home-page/TestimoniItem";
import useTablet from "./hooks/useTablet";
import FaqItem from "./home-page/FaqItem";
import Link from "next/link";
import Navbar from "./components/organisms/Navbar";
import { useRouter } from "next/router";

const Beranda = () => {
  const tabletView = useTablet();
  const desktopView = useDesktop();

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },

    slides: {
      perView: 1,
      spacing: 10,
    },
    initial: 0,
  });

  const [refPaket] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    initial: 0,
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [refTestimoni, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 8,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <div className="flex items-center h-screen w-full relative">
        <div className="bg-gradient-to-br from-[#090963] via-[#090963]  to-[#3333A1] w-full h-full relative">
          <div className="flex items-center w-full h-full text-white px-2 md:px-10 lg:px-0 lg:pt-36 lg:pl-16 xl:pl-32 absolute z-20">
            <div className="md:max-w-[400px] lg:max-w-[420px] xl:max-w-[550px]">
              <h1 className="text-xl lg:text-[24px] xl:text-[32px] font-bold xl:leading-snug">
                Masih Bingung Untuk Belajar Test Masuk Sekolah Kedinasan?
                Belajar Sekarang
              </h1>
              <p className="mt-2 text-xs font-regular md:text-sm md:font-semibold xl:text-base">
                Kami menyediakan modul untuk Anda mengenal dan mempelajari
                seputar sekolah kedinasan
              </p>
              <p className="mt-14 font-medium text-sm md:text-base">
                #Platform Bimbel Kedinasan Online Terbaik
              </p>
              <Link href={"/daftar"}>
                <button className="mt-8 bg-[#FFC007] text-[#090963] hover:bg-[#CAA022] w-full py-3 md:w-fit md:px-10 md:py-4 rounded-xl font-bold">
                  Daftar Sekarang
                </button>
              </Link>
            </div>
          </div>

          {/* Icon Background for Banner */}
          <div className="overflow-hidden w-fit h-fit md:w-full md:h-full absolute flex bottom-0 right-0 md:-bottom-40 lg:top-0 z-0  ">
            <Image
              src={"/icon/ic-banner.svg"}
              width={1440}
              height={680}
              alt="ic-banner"
              className="h-full w-auto lg:scale-150 xl:scale-100"
            />
          </div>

          {/* Image Banner */}
          <div className="hidden md:w-full md:h-full md:flex absolute items-end justify-end bottom-0 md:right-5 lg:right-16 xl:right-36  z-10 ">
            <Image
              src={"/img/img-banner.png"}
              width={538}
              height={638}
              alt="img-banner"
              className="md:w-[380px] md:h-[438px] lg:w-[438px] lg:h-[538px] xl:w-auto xl:h-[550px] 2xl:h-[85%] 2xl:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Mentor */}
      <div className="h-full mt-10 lg:mt-20 w-full">
        <div className="flex flex-col items-center justify-center px-2 md:px-10 lg:px-20">
          <h2 className="text-2xl lg:text-4xl lg:max-w-2xl text-center font-bold text-[#323062] leading-normal">
            Gapai Impianmu Bersama Mentor Berpengalaman
          </h2>
        </div>

        <div className="mt-10 lg:mt-16 lg:w-full lg:items-center lg:justify-center">
          <div className="lg:flex lg:flex-col md:flex-row lg:items-center lg:justify-center lg:pt-32 lg:gap-x-7 lg:relative lg:mx-20 xl:mx-32">
            <div className="lg:absolute left-0 top-10 px-2 md:px-10 lg:px-0">
              <h4 className="text-[#323062] font-medium text-base lg:text-2xl">
                Mau belajar bersama mentor terbaik dari kami?
              </h4>
              <p className="mt-2 lg:mt-3 font-light lg:max-w-3xl text-xs lg:text-base">
                Perdalam ilmumu seputar tes SKD dan tes khusus setiap sekolah
                kedinasan secara teratur, terarah dan terorganisir
              </p>
            </div>

            {desktopView ? (
              <div className="mt-10 flex lg:gap-x-5 xl:gap-x-10 w-full h-full items-center justify-center">
                <MentorItem
                  img="mentor1"
                  name="Ayu Lestari"
                  job="Matematika"
                  quote="Matematika itu mudah, asik, dan seru"
                />
                <MentorItem
                  img="mentor2"
                  name="Budi Pangestu"
                  job="TWK"
                  quote="TWK lebih banyak logika, jadi pahamilah setiap pertanyaan dan
              jawabannya"
                />
                <MentorItem
                  img="mentor3"
                  name="Annisa"
                  job="TIU"
                  quote="Tes Intelegensi Umum merupakan salah satu test SKD yang
              gampang banget"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center relative w-full md:px-10 xl:px-32">
                <div ref={ref} className="keen-slider">
                  <div className="keen-slider__slide number-slide1 px-2 md:px-0 lg:py-20">
                    <MentorItem
                      img="mentor1"
                      name="Ayu Lestari"
                      job="Matematika"
                      quote="Matematika itu mudah, asik, dan seru"
                    />
                  </div>
                  <div className="keen-slider__slide number-slide2 px-2 md:px-0 lg:py-20">
                    <MentorItem
                      img="mentor2"
                      name="Budi Pangestu"
                      job="TWK"
                      quote="TWK lebih banyak logika, jadi pahamilah setiap pertanyaan dan
              jawabannya"
                    />
                  </div>
                  <div className="keen-slider__slide number-slide3 px-2 md:px-0 lg:py-20">
                    <MentorItem
                      img="mentor3"
                      name="Annisa"
                      job="TIU"
                      quote="Tes Intelegensi Umum merupakan salah satu test SKD yang
              gampang banget"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-2 mt-5 lg:mt-24 w-full flex items-center justify-center">
            <button className="text-[#0D0D68] bg-[#FFC007] hover:bg-[#CAA022] w-full md:w-fit md:px-5 py-3 md:py-4 rounded-lg font-bold">
              Meet All Mentor
            </button>
          </div>
        </div>
      </div>

      {/* WhyUs */}
      <div className="h-full mt-14 lg:mt-32 w-full px-2 md:px-5 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[#0D0D68] font-medium text-lg lg:text-[26px]">
            Kenapa memilih kami?
          </h4>
          <h2 className="mt-1 text-xl lg:text-3xl max-w-4xl text-center font-semibold text-[#1A69F0] leading-tight">
            Platform Bimbel Kedinasan Online Menggunakan Kurikulum Terbaru
          </h2>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WhyUsItem
            img="whyus1"
            title="Studi Kasus"
            text="Belajar secara efektif dan efisien bersama mentor melalui meeting secara online"
          />
          <WhyUsItem
            img="whyus2"
            title="Konsultasi"
            text="Gabung grup private untuk konsultasi dengan mentor"
          />
          <WhyUsItem
            img="whyus3"
            title="#DiBuatOlehMahasiswaKedinasan"
            text="Gabung grup private untuk konsultasi dengan mentor"
          />
          <WhyUsItem
            img="whyus4"
            title="Harga Terjangkau"
            text="Harga paket bimbel yang terjangkau bagi kalangan pelajar"
          />
          <WhyUsItem
            img="whyus5"
            title="Paket Bimbel"
            text="Terdapat banyak pilihan paket bimbel yang dapat kamu pilih"
          />
          <WhyUsItem
            img="whyus6"
            title="Mengasah Kemampuan"
            text="Asah kemampuanmu menjadi lebih baik lagi dengan mengikuti try out, pretest, dan post test"
          />
        </div>
      </div>

      {/* Paket */}
      <div className="h-full mt-14 lg:mt-32 w-full px-2 md:px-0 lg:px-10 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[#0D0D68] font-medium text-lg lg:text-[26px]">
            Paket Unggulan Teratas
          </h4>
          <h2 className="mt-1 text-xl lg:text-3xl max-w-4xl text-center font-semibold text-[#1A69F0] leading-tight">
            Pilih Paket Unggulan untuk Meningkatkan Ilmu
          </h2>
        </div>

        <div className="mt-10 lg:mt-36 lg:w-full lg:flex lg:items-center lg:justify-center">
          <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-x-4 xl:gap-x-14 lg:relative">
            <div className="flex flex-row items-center justify-between gap-x-10 lg:absolute -top-20 w-full md:px-10 lg:px-0">
              <h4 className="text-[#323062] font-medium text-base lg:text-lg">
                Tertarik untuk membeli paket bimbel kami?
              </h4>
              <button className="flex-none flex items-center justify-center bg-[#090963] hover:bg-[#36367e]1 text-[#E2E8F0] w-fit px-4 py-2 lg:py-0 lg:h-[52px] lg:w-[218px] font-semibold text-sm xl:text-base rounded-full">
                Semua Paket
              </button>
            </div>

            {desktopView ? (
              <div className="flex lg:gap-x-5 xl:gap-x-10">
                <div>
                  <PaketItem />
                </div>{" "}
                <div>
                  <PaketItem />
                </div>{" "}
                <div>
                  <PaketItem />
                </div>
              </div>
            ) : (
              <div className="mt-5 flex items-center justify-center relative w-full lg:w-fit md:px-10">
                <div ref={refPaket} className="keen-slider">
                  <div className="keen-slider__slide number-slide1 px-2 md:px-0 w-fit">
                    <PaketItem />
                  </div>
                  <div className="keen-slider__slide number-slide2 px-2 md:px-0 w-fit">
                    <PaketItem />
                  </div>
                  <div className="keen-slider__slide number-slide3 px-2 md:px-0 w-fit">
                    <PaketItem />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimoni */}
      <div className="relative h-full" id="testimoni">
        <div className="h-full mt-10 lg:mt-32 w-full ">
          <div className="flex flex-col items-center justify-center text-center px-2 lg:px-20">
            <h4 className="text-[#0D0D68] font-medium text-lg lg:text-[26px]">
              Testimoni dan Kisah Sukses Orang-orang Yang Belajar di CSW
            </h4>
            <h2 className="mt-1 text-xl lg:text-4xl text-center font-semibold text-[#1A69F0] leading-tight">
              Menjadikan Ilmu Semakin Bermanfaat
            </h2>
          </div>

          {/* Button Left & Right */}
          {loaded && instanceRef.current && (
            <div className="flex items-center justify-center w-full gap-x-5 mt-10 lg:mt-[70px]">
              <button
                className="bg-[#0D0D68] hover:bg-[#36367e] flex items-center justify-center w-[54px] h-[54px] rounded-full disabled:bg-gray-400"
                onClick={handlePrevClick}
                disabled={currentSlide === 0}
              >
                <Image
                  src={"/icon/ic-arrow.svg"}
                  alt="ic-arrow"
                  width={21}
                  height={21}
                  className="-rotate-90"
                />
              </button>
              <button
                className="bg-[#0D0D68] hover:bg-[#36367e] flex items-center justify-center w-[54px] h-[54px] rounded-full disabled:bg-gray-400 pointer"
                onClick={handleNextClick}
                disabled={
                  // currentSlide >=
                  // Math.ceil(instanceRef.current.track.details.slides.length / 2) -
                  //   1
                  tabletView
                    ? currentSlide ===
                      instanceRef.current.track.details.slides.length - 2
                    : currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                }
              >
                <Image
                  src={"/icon/ic-arrow.svg"}
                  alt="ic-arrow"
                  width={21}
                  height={21}
                  className="rotate-90"
                />
              </button>
            </div>
          )}

          {/* Card Testimoni */}
          <div className="mt-5 lg:mt-11 flex items-center justify-center md:px-10 lg:px-20 xl:px-32">
            <div ref={refTestimoni} className="keen-slider">
              <div className="keen-slider__slide number-slide1 w-fit px-2 py-5">
                <TestimoniItem
                  img="profile"
                  name="Annisa Pertiwi"
                  student="Mahasiswa STIS 2021"
                  text="Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui. Setelah mengikuti bimbel ini alhamdulillah sekarang saya bisa diterima di lembaga yang saya inginkan."
                  rating={5}
                />
              </div>
              <div className="keen-slider__slide number-slide1 w-fit px-2 py-5">
                <TestimoniItem
                  img="profile"
                  name="Siti Permatasari"
                  student="Mahasiswa STAN 2023"
                  text="Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui. "
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 w-fit px-2 py-5">
                <TestimoniItem
                  img="profile"
                  name="Siti Permatasari"
                  student="Mahasiswa STAN 2023"
                  text="Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui. "
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 w-fit px-2 py-5">
                <TestimoniItem
                  img="profile"
                  name="Siti Permatasari"
                  student="Mahasiswa STAN 2023"
                  text="Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui. Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui. Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui."
                  rating={3}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="relative w-full">
            <Image
              src={"/img/bg-testimoni.png"}
              width={1440}
              height={680}
              alt="bg-testimoni"
              className="w-full h-[180px] lg:h-full lg:max-h-[680px]"
            />
            <div className="absolute bottom-3 md:bottom-4 lg:bottom-10 xl:bottom-20 w-full flex flex-col items-center">
              <h2 className="text-[#393934] font-semibold text-center text-xs lg:text-xl xl:text-3xl">
                Ayo temukan minat dan potensi dirimu bersama{" "}
                <br className="block md:hidden" /> Pilih Jurusan sekarang!
              </h2>
              <button className="mt-2 md:mt-4 lg:mt-8 xl:mt-10 flex items-center justify-center gap-x-3 lg:gap-x-4 xl:gap-x-6 px-4 py-2 lg:px-16 lg:py-3 xl:px-24 xl:py-5 bg-[#1A69F0] hover:bg-[#164fb0] rounded-full">
                <Image
                  src={"/icon/ic-arrow-circle.svg"}
                  alt="ic-arrow-circle"
                  width={36}
                  height={36}
                  className="w-5 h-5 lg:w-fit lg:h-fit"
                />
                <h3 className="text-white font-bold text-xs lg:text-base xl:text-xl">
                  Daftar Sekarang
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="mt-10 lg:mt-32 flex flex-col items-center justify-center px-2 lg:px-0">
        <h2 className="text-xl text-center lg:text-4xl font-semibold text-[#323062]">
          Pertanyaan yang Paling Sering Ditanyakan
        </h2>
        <div className="mt-5 lg:mt-20 w-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-6">
          <FaqItem
            title="Masalah apa yang Anda selesaikan?"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s"
          />
          <FaqItem
            title="Masalah apa yang Anda selesaikan?"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s"
          />
          <FaqItem
            title="Masalah apa yang Anda selesaikan?"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s"
          />
          <FaqItem
            title="Masalah apa yang Anda selesaikan?"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s"
          />
        </div>
      </div>

      {/* Having Problem */}
      <div className="mt-10 lg:mt-32 w-full h-[210px] lg:h-[400px] bg-[#1A69F0] flex items-center justify-center relative">
        <Image
          src={"/img/img-contactus.png"}
          alt="bg-contact-me"
          width={1171}
          height={440}
          className="h-full"
        />
        <div className="absolute max-w-3xl text-center text-white px-2 lg:px-0">
          <h1 className="font-bold text-xl lg:text-5xl">Memiliki Kesulitan?</h1>
          <p className="mt-3 lg:mt-6 font-medium text-xs lg:text-base">
            Kami tahu Anda memiliki beberapa pertanyaan, kami telah mencoba
            membuat daftar yang paling penting sekali dan Anda bisa mengajukan
            pertanyaan jika terdapat kebingunan
          </p>
          <Link href={"#"}>
            <button className="mt-6 text-black bg-white px-4 py-2 lg:px-5 lg:py-4 rounded-full font-semibold hover:bg-[#e0e0e0] cursor-pointer">
              Ajukan Pertanyaan
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F0F0F0] ">
        <div className="px-2 md:px-10 lg:px-20 xl:px-32">
          <div className="flex flex-col lg:flex-row justify-between py-14 gap-x-4 text-sm lg:text-base">
            <div className="lg:max-w-[280px] xl:max-w-xs">
              <Image
                src={"/img/img-logo.png"}
                alt="img-logo"
                width={90}
                height={70}
              />
              <p className="mt-5 text-[#888888] ">
                Website untuk belajar seputar sekolah kedinasan bersama mentor -
                mentor yang berpengalaman
              </p>
              <div className="flex items-center gap-x-2 lg:gap-x-4 mt-4 lg:mt-7">
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4f4f4f"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#ff0000]"
                  >
                    <path d="M9.69361 15.3172L15.625 11.8887L9.69361 8.4601V15.3172ZM22.905 6.36867C23.0536 6.90581 23.1564 7.62581 23.225 8.5401C23.305 9.45439 23.3393 10.243 23.3393 10.9287L23.4079 11.8887C23.4079 14.3915 23.225 16.2315 22.905 17.4087C22.6193 18.4372 21.9564 19.1001 20.9279 19.3858C20.3907 19.5344 19.4079 19.6372 17.8993 19.7058C16.4136 19.7858 15.0536 19.8201 13.7965 19.8201L11.9793 19.8887C7.19076 19.8887 4.20791 19.7058 3.03077 19.3858C2.00221 19.1001 1.33935 18.4372 1.05364 17.4087C0.905066 16.8715 0.802209 16.1515 0.733638 15.2372C0.653638 14.323 0.619352 13.5344 0.619352 12.8487L0.550781 11.8887C0.550781 9.38581 0.733638 7.54581 1.05364 6.36867C1.33935 5.3401 2.00221 4.67724 3.03077 4.39153C3.56792 4.24296 4.55077 4.1401 6.05934 4.07153C7.54505 3.99153 8.90504 3.95724 10.1622 3.95724L11.9793 3.88867C16.7679 3.88867 19.7507 4.07153 20.9279 4.39153C21.9564 4.67724 22.6193 5.3401 22.905 6.36867Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#2447F9]"
                  >
                    <path d="M12.8224 3.97364C13.4062 3.9714 13.9899 3.97727 14.5735 3.99124L14.7287 3.99684C14.9079 4.00324 15.0847 4.01124 15.2983 4.02084C16.1494 4.06084 16.7302 4.19523 17.2398 4.39283C17.7678 4.59602 18.2125 4.87121 18.6573 5.31599C19.064 5.71567 19.3787 6.19912 19.5797 6.73275C19.7773 7.24233 19.9116 7.82391 19.9516 8.67508C19.9612 8.88787 19.9692 9.06547 19.9756 9.24466L19.9804 9.39986C19.9947 9.98319 20.0008 10.5667 19.9988 11.1502L19.9996 11.747V12.7949C20.0016 13.3787 19.9955 13.9625 19.9812 14.5461L19.9764 14.7013C19.97 14.8805 19.962 15.0573 19.9524 15.2709C19.9124 16.122 19.7765 16.7028 19.5797 17.2124C19.3794 17.7466 19.0646 18.2304 18.6573 18.6299C18.2573 19.0366 17.7736 19.3513 17.2398 19.5523C16.7302 19.7499 16.1494 19.8843 15.2983 19.9243C15.0847 19.9339 14.9079 19.9419 14.7287 19.9483L14.5735 19.9531C13.9899 19.9673 13.4062 19.9735 12.8224 19.9715L12.2256 19.9723H11.1785C10.5947 19.9743 10.011 19.9681 9.42738 19.9539L9.27219 19.9491C9.08229 19.9422 8.89243 19.9342 8.70262 19.9251C7.85146 19.8851 7.27069 19.7491 6.76032 19.5523C6.22649 19.3518 5.74296 19.037 5.34359 18.6299C4.93645 18.2302 4.62141 17.7464 4.42044 17.2124C4.22285 16.7028 4.08846 16.122 4.04846 15.2709C4.03955 15.081 4.03155 14.8912 4.02446 14.7013L4.02046 14.5461C4.00571 13.9625 3.99905 13.3787 4.00046 12.7949V11.1502C3.99823 10.5667 4.0041 9.98319 4.01806 9.39986L4.02366 9.24466C4.03006 9.06547 4.03806 8.88787 4.04766 8.67508C4.08766 7.82311 4.22205 7.24313 4.41964 6.73275C4.62073 6.19886 4.93638 5.71554 5.34439 5.31679C5.74349 4.90941 6.22672 4.59408 6.76032 4.39283C7.27069 4.19523 7.85066 4.06084 8.70262 4.02084L9.27219 3.99684L9.42738 3.99284C10.0107 3.9781 10.5942 3.97143 11.1777 3.97284L12.8224 3.97364ZM12.0001 7.9735C11.4701 7.96601 10.9439 8.06392 10.4521 8.26155C9.96031 8.45918 9.5127 8.75258 9.13527 9.12471C8.75785 9.49684 8.45815 9.94027 8.25359 10.4292C8.04903 10.9182 7.94369 11.4429 7.94369 11.973C7.94369 12.503 8.04903 13.0277 8.25359 13.5167C8.45815 14.0057 8.75785 14.4491 9.13527 14.8212C9.5127 15.1934 9.96031 15.4868 10.4521 15.6844C10.9439 15.882 11.4701 15.9799 12.0001 15.9724C13.0609 15.9724 14.0782 15.551 14.8283 14.8009C15.5784 14.0508 15.9998 13.0334 15.9998 11.9726C15.9998 10.9117 15.5784 9.89436 14.8283 9.14424C14.0782 8.39412 13.0609 7.9735 12.0001 7.9735ZM12.0001 9.57345C12.3188 9.56758 12.6356 9.62529 12.9318 9.74321C13.2281 9.86113 13.4978 10.0369 13.7254 10.2603C13.9529 10.4836 14.1337 10.7501 14.2571 11.0441C14.3805 11.3381 14.4441 11.6537 14.4441 11.9726C14.4442 12.2914 14.3807 12.6071 14.2574 12.9011C14.1341 13.1951 13.9534 13.4617 13.726 13.6851C13.4985 13.9085 13.2288 14.0844 12.9326 14.2024C12.6364 14.3204 12.3196 14.3783 12.0009 14.3725C11.3644 14.3725 10.7539 14.1196 10.3039 13.6696C9.85382 13.2195 9.60097 12.6091 9.60097 11.9726C9.60097 11.3361 9.85382 10.7256 10.3039 10.2756C10.7539 9.8255 11.3644 9.57265 12.0009 9.57265L12.0001 9.57345ZM16.1998 6.77355C15.9418 6.78387 15.6977 6.89366 15.5188 7.07991C15.3398 7.26616 15.2399 7.51443 15.2399 7.77271C15.2399 8.03099 15.3398 8.27926 15.5188 8.46551C15.6977 8.65176 15.9418 8.76155 16.1998 8.77188C16.465 8.77188 16.7194 8.66652 16.9069 8.47899C17.0944 8.29146 17.1998 8.03712 17.1998 7.77191C17.1998 7.5067 17.0944 7.25236 16.9069 7.06483C16.7194 6.8773 16.465 6.77195 16.1998 6.77195V6.77355Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#2447F9]"
                  >
                    <path d="M16.2003 6.45393C15.5927 5.76026 15.2579 4.86943 15.2581 3.94727H12.5114V14.9695C12.4903 15.566 12.2384 16.1309 11.809 16.5454C11.3796 16.9599 10.8061 17.1916 10.2092 17.1917C8.94701 17.1917 7.89813 16.1606 7.89813 14.8806C7.89813 13.3517 9.37368 12.205 10.8937 12.6762V9.86727C7.82702 9.45838 5.14258 11.8406 5.14258 14.8806C5.14258 17.8406 7.59591 19.9473 10.2003 19.9473C12.9914 19.9473 15.2581 17.6806 15.2581 14.8806V9.28949C16.3719 10.0894 17.7091 10.5185 19.0803 10.5162V7.76949C19.0803 7.76949 17.4092 7.84949 16.2003 6.45393Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#1877F2]"
                  >
                    <path d="M20.001 12.049C20.001 7.60355 16.4194 4 12.002 4C7.58253 4.001 4.00098 7.60355 4.00098 12.05C4.00098 16.0665 6.92661 19.3961 10.7501 20V14.3757H8.72039V12.05H10.7521V10.2752C10.7521 8.25847 11.947 7.14461 13.7738 7.14461C14.6496 7.14461 15.5645 7.30159 15.5645 7.30159V9.28134H14.5557C13.5628 9.28134 13.2528 9.90226 13.2528 10.5392V12.049H15.4705L15.1166 14.3747H13.2518V19.999C17.0753 19.3951 20.001 16.0655 20.001 12.049Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#0A66C2]"
                  >
                    <path d="M7.43821 4.77857C7.43798 5.25004 7.25046 5.7021 6.91691 6.03532C6.58336 6.36853 6.1311 6.55559 5.65962 6.55536C5.18815 6.55512 4.73608 6.36761 4.40286 6.03406C4.06964 5.70051 3.88258 5.24826 3.88281 4.77679C3.88305 4.30532 4.07057 3.85325 4.40412 3.52004C4.73767 3.18683 5.18993 2.99976 5.6614 3C6.13288 3.00024 6.58495 3.18775 6.91817 3.5213C7.25138 3.85484 7.43845 4.3071 7.43821 4.77857ZM7.49154 7.87173H3.93614V19H7.49154V7.87173ZM13.1091 7.87173H9.57145V19H13.0735V13.1603C13.0735 9.90717 17.3133 9.60497 17.3133 13.1603V19H20.8243V11.9515C20.8243 6.46736 14.549 6.6718 13.0735 9.36498L13.1091 7.87173Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between w-full gap-4 lg:gap-8 xl:gap-4 ">
              <div>
                <h3 className="font-bold text-[#334155] text-lg">Company</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Hubungi Kami
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Mentor
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#334155] text-lg">Product</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Paket Bimbel
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Modul
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold text-[#334155] text-lg">Support</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Support 24/7
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold text-[#334155] text-lg">Office</h3>
                <div className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <Link href={"#"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="bg-[#0D0D68] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#2447F9] transition duration-300">
                        <Image
                          src={"/icon/ic-office-vctr.svg"}
                          width={15}
                          height={18}
                          objectFit="contain"
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9]">
                        PT. Civil Servant Warrior
                      </p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="bg-[#0D0D68] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#2447F9] transition duration-300">
                        <Image
                          src={"/icon/ic-map.svg"}
                          width={14}
                          height={21}
                          objectFit="contain"
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9]">
                        Jakarta Selatan, Indonesia
                      </p>
                    </div>
                  </Link>
                  <Link target="blank" href={"https://wa.me/082246550661"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="bg-[#0D0D68] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#2447F9] transition duration-300">
                        <Image
                          src={"/icon/ic-wa.svg"}
                          width={16}
                          height={16}
                          objectFit="contain"
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9]">
                        +6282246550661
                      </p>
                    </div>
                  </Link>
                  <Link target="blank" href={"mailto:wstatistical@gmail.com"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="bg-[#0D0D68] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#2447F9] transition duration-300">
                        <Image
                          src={"/icon/ic-mail-2.svg"}
                          width={16}
                          height={13}
                          objectFit="contain"
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9] transition duration-300">
                        wstatistical@gmail.com
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#B0B0B0] flex py-3 justify-center lg:justify-between text-[#888888] text-xs xl:text-sm px-2 md:px-10 lg:px-20 xl:px-32 text-center">
          <h4>
            © 2020 - 2024 Civil Servant Warrior | Merek dagang dari PT.
            Pilihanmu Indonesia{" "}
          </h4>
          <div className="hidden lg:flex gap-x-2">
            <h4 className="hover:text-[#2447F9]">
              <Link href={"#"}>Kebijakan Privasi</Link>
            </h4>
            <span>|</span>
            <h4 className="hover:text-[#2447F9]">
              <Link href={"#"}>Syarat dan Ketentuan Umum</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
