"use client";
import React from "react";
import PaketItem from "./PaketItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useDesktop from "@/hooks/useDesktop";

const Paket = () => {
  const desktopView = useDesktop();

  const [ref] = useKeenSlider<HTMLDivElement>({
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

  return (
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
              <div ref={ref} className="keen-slider">
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
  );
};

export default Paket;
