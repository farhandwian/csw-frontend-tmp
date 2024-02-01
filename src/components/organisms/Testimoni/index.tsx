"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimoniItem from "./TestimoniItem";
import useTablet from "@/hooks/useTablet";

const Testimoni = () => {
  const tabletView = useTablet();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
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
  return (
    <div className="relative h-full">
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
          <div ref={ref} className="keen-slider">
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
            src={"/image/bg-testimoni.png"}
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
  );
};

export default Testimoni;
