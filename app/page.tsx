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
      <>
        <nav className="py-2 drop-shadow-xl fixed w-full bg-white z-50 flex items-center md:justify-center px-2 md:px-10 lg:px-16 xl:px-32">
          <div className="flex items-center justify-between w-full md:gap-x-24 lg:gap-x-0 xl:gap-x-10">
            <div className="flex flex-none items-center">
              <Image
                src={"/img/img-logo.png"}
                width={72}
                height={57}
                alt="img-logo"
                className="w-[80px] h-[60px] lg:w-[72px] lg:h-[57px] xl:w-full xl:h-full"
              />
            </div>

            <div className="lg:hidden" onClick={handleOpenMenu}>
              <Image
                src={isOpen ? "/icon/ic-close.svg" : "/icon/ic-hamburger.svg"}
                alt={isOpen ? "ic-close" : "ic-hamburger"}
                width={32}
                height={32}
              />
            </div>

            <div className="hidden lg:flex lg:flex-none">
              <ul className="md:flex w-full flex-none lg:gap-x-5 xl:gap-x-12 lg:text-sm xl:text-base">
                <Link href={"/"}>Beranda</Link>
                <li>Produk</li>
                <Link href={"#testimoni"}>Testimoni</Link>
                <li>Informasi</li>
                <li>Hubungi Kami</li>
              </ul>
            </div>

            <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-10 lg:text-sm xl:text-base">
              <button>
                <Link href={"/login"}>Masuk</Link>
              </button>
              <button className="text-white bg-[#090963] rounded-full py-4 px-7 lg:py-3 xl:py-4">
                <Link href={"/daftar"}>Daftar</Link>
              </button>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div className="fixed z-40 h-screen w-full bg-white overscroll-none overflow-hidden">
            {/* Menu Item Mobile */}
            <div
              className=" flex flex-col items-center justify-center text-center text-xl h-full w-full px-2 md:px-10 relative"
              onClick={() => setIsOpen(false)}
            >
              <ul className="flex flex-col gap-y-4">
                <Link href={"/"}>Beranda</Link>
                <li>Produk</li>
                <Link href="#testimoni">Testimoni</Link>
                <li>Informasi</li>
                <li>Hubungi Kami</li>
              </ul>
              <div className="mt-10 flex justify-between gap-x-2 md:gap-x-5 w-full">
                <button className="py-2 border border-gray-400 rounded-lg w-full">
                  <Link href={"/login"}>Masuk</Link>
                </button>
                <button className="py-2 text-white bg-[#090963] rounded-lg w-full">
                  <Link href={"/daftar"}>Daftar</Link>
                </button>
              </div>

              <p className="absolute bottom-2 text-xs">
                © 2020 - 2024 Civil Servant Warrior <br /> Merek dagang dari PT.
                Pilihanmu Indonesia
              </p>
            </div>
          </div>
        )}
      </>

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
              <button className="mt-8 bg-[#FFC007] text-[#090963] w-full py-3 md:w-fit md:px-10 md:py-4 rounded-xl font-bold">
                Daftar Sekarang
              </button>
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
            <button className="text-[#0D0D68] bg-[#FFC007] w-full md:w-fit md:px-5 py-3 md:py-4 rounded-lg font-bold">
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
              <button className="flex-none flex items-center justify-center bg-[#090963] text-[#E2E8F0] w-fit px-4 py-2 lg:py-0 lg:h-[52px] lg:w-[218px] font-semibold text-sm xl:text-base rounded-full">
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
                className="bg-[#0D0D68] flex items-center justify-center w-[54px] h-[54px] rounded-full disabled:bg-gray-400"
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
                className="bg-[#0D0D68] flex items-center justify-center w-[54px] h-[54px] rounded-full disabled:bg-gray-400"
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
              <button className="mt-2 md:mt-4 lg:mt-8 xl:mt-10 flex items-center justify-center gap-x-3 lg:gap-x-4 xl:gap-x-6 px-4 py-2 lg:px-16 lg:py-3 xl:px-24 xl:py-5 bg-[#1A69F0] rounded-full">
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
          <button className="mt-6 text-black bg-white px-4 py-2 lg:px-5 lg:py-4 rounded-full font-semibold">
            Ajukan Pertanyaan
          </button>
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
                <Image
                  src={"/icon/ic-youtube.svg"}
                  alt="ic-youtube"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icon/ic-ig.svg"}
                  alt="ic-ig"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icon/ic-tiktok.svg"}
                  alt="ic-tiktok"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icon/ic-fb.svg"}
                  alt="ic-fb"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icon/ic-linked.svg"}
                  alt="ic-linked"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between w-full gap-4 lg:gap-8 xl:gap-4 ">
              <div>
                <h3 className="font-bold text-[#334155] text-lg">Company</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li>Privacy</li>
                  <li>Hubungi Kami</li>
                  <li>Tentang Kami</li>
                  <li>Mentor</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#334155] text-lg">Product</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li>Paket Bimbel</li>
                  <li>Modul</li>
                  <li>Blockchain</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold text-[#334155] text-lg">Support</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li>FAQ</li>
                  <li>Support 24/7</li>
                  <li>Glossary</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold text-[#334155] text-lg">Office</h3>
                <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                  <li className="flex items-center gap-x-2">
                    <Image
                      src={"/icon/ic-office.svg"}
                      width={40}
                      height={40}
                      alt="ic-office"
                    />
                    <p>PT. Civil Servant Warrior</p>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Image
                      src={"/icon/ic-maps.svg"}
                      width={40}
                      height={40}
                      alt="ic-maps"
                    />
                    <p>Jakarta, Indonesia</p>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Image
                      src={"/icon/ic-phone.svg"}
                      width={40}
                      height={40}
                      alt="ic-phone"
                    />
                    <p>+628917393780</p>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Image
                      src={"/icon/ic-mail.svg"}
                      width={40}
                      height={40}
                      alt="ic-mail"
                    />
                    <p>csw@mail.com</p>
                  </li>
                </ul>
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
            <h4>Kebijakan Privasi</h4>
            <span>|</span>
            <h4>Syarat dan Ketentuan Umum</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
