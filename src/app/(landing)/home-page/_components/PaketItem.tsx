import Image from "next/image";
import React from "react";
import { TPaket } from "@/types/home-page";

const PaketItem = ({ props, key }: { props: TPaket; key?: string }) => {
  const { module_name, name, price } = props;
  const DetailsData = [
    props.access > 0 ? `${props.access} Bulan Akses Web` : null,
    props.zoom ? `${props.zoom} Pertemuan Zoom` : null,
    props.exercise > 0 ? `${props.exercise} Latihan Soal` : null,
    props.group ? "Grup dengan Mentor" : null,
    props.try_out > 0 ? `${props.try_out} Try Out` : null,
    props.module ? "Modul" : null,
  ].filter(Boolean);

  return (
    <div
      key={key}
      className="w-full rounded-[1.25rem] bg-white p-6 shadow-md lg:w-fit"
    >
      <div className="flex  items-center justify-center md:h-[16rem] md:w-[19.5rem]">
        <Image
          src={"/img/img-paket1.png"}
          width={0}
          height={0}
          alt="img-paket"
          sizes="100vw"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-sm font-semibold md:text-xl">{module_name}</h2>
        <div className="rounded-full border border-[#6255A4] px-1 py-1 md:px-3">
          <h4 className="text-2xs font-medium md:text-xs">{name}</h4>
        </div>
      </div>
      <h1 className="pt-1 text-sm font-semibold text-[#E23535] md:pt-2 md:text-3xl">
        {price}
      </h1>
      <p className="pt-1 text-xs text-[#0A0A65] md:pt-2 md:text-sm">
        Sesuai untuk mengasah kemampuan
      </p>

      {/* Isi Paket */}
      <div className="mt-2 md:mt-6">
        <h2 className="font-medium text-[#0A0A65]">Detail isi Paket :</h2>
        <div className="ml-2 mt-1 flex flex-col gap-y-1 md:ml-3 md:mt-2 md:gap-y-2">
          {DetailsData.map((detail, index) => (
            <div key={index} className="flex items-center gap-x-2 md:gap-x-3">
              <Image
                src={"/icon/ic-check.svg"}
                width={0}
                height={0}
                alt="ic-check"
                className="h-[1.0625rem] w-[1.0625rem] md:h-[1.3125rem] md:w-[1.3125rem]"
              />
              <p className="text-xs font-medium text-[#696F8C] md:text-sm">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-3 flex w-full items-center justify-center md:mt-6">
        <button className="rounded-[10px] bg-[#0A0A65] px-6 py-2 text-xs font-semibold text-white  hover:bg-[#36367e] md:px-12 md:py-3 md:text-sm">
          Beli Paket
        </button>
      </div>
    </div>
  );
};

export default PaketItem;
