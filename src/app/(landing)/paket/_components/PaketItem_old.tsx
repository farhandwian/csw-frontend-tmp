import Image from "next/image";
import React from "react";

interface PaketItemProps {
  paket: string;
  price: number;
}

const DetailsData = [
  "3 Bulan Akses Web",
  "36 Pertemuan Zoom",
  "660 Latihan Soal",
  "Grup dengan Mentor",
  "2x Tryout",
  "Modul",
];

const PaketItem = () => {
  return (
    <div className="w-full rounded-[20px] bg-white p-6 shadow-md lg:w-fit">
      <div className="flex w-full items-center justify-center">
        <Image
          src={"/img/img-paket1.png"}
          width={150}
          height={100}
          alt="img-paket"
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-base font-semibold">Paket D</h2>
        <div className="rounded-full border border-[#6255A4] px-3 py-1">
          <h4 className="text-xs font-medium">Paket SKD Teratas</h4>
        </div>
      </div>

      {/* <p className="pt-2 text-sm text-[#0A0A65]">
        Sesuai untuk mengasah kemampuan
      </p> */}

      {/* Isi Paket */}
      <div className="mt-3">
        <h2 className="font-medium text-[#0A0A65]">Detail isi Paket :</h2>
        <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-2 ">
          {DetailsData.map((detail, index) => (
            <div key={index} className="flex items-center gap-x-2">
              <Image
                src={"/icon/ic-check.svg"}
                width={21}
                height={21}
                alt="ic-check"
              />
              <p className="text-xs font-medium text-[#696F8C]">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="whitespace-nowrap pt-2 text-base font-semibold text-[#E23535]">
          RP 285.000,00
        </h1>
        {/* Button */}
        <div className="mt-3 flex w-full items-center justify-end">
          <button className="py- rounded-[10px] bg-[#0A0A65] px-6 py-3 text-sm font-semibold text-white hover:bg-[#36367e]">
            Beli Paket
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaketItem;
