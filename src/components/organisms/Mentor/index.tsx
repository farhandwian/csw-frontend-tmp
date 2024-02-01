"use client";
import Image from "next/image";
import React from "react";
import MentorItem from "./MentorItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useDesktop from "@/hooks/useDesktop";

const Mentor = () => {
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

  return (
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
  );
};

export default Mentor;
