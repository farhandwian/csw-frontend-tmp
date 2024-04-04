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
    <div className="flex flex-col items-center rounded-sm bg-white p-2 shadow-md md:rounded-[20px] md:p-4 lg:w-fit">
      {/* card image */}
      <div className="relative flex h-[80px] w-[120px] items-center justify-center  md:h-[146px] md:w-[226px]">
        <Image
          src={"/img/img-paket1.png"}
          alt="img-paket"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="mt-2 md:mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xs font-semibold md:text-sm">Paket D</h2>
          <div className=" rounded-full border border-[#6255A4] px-1 md:block md:px-3 md:py-1">
            <h4 className="text-3xs font-medium">Paket SKD Teratas</h4>
          </div>
        </div>
        <h1 className="pt-1 text-xs font-semibold text-[#E23535] md:pt-2 md:text-base">
          Rp 285.000,00
        </h1>
        <p className="text-3xs text-[#0A0A65] md:mt-1 md:text-xs">
          Sesuai untuk mengasah kemampuan
        </p>

        {/* Isi Paket */}
        <div className="md:mt-1">
          <h2 className="text-3xs font-medium text-[#0A0A65] md:text-xs">
            Detail isi Paket :
          </h2>
          <div className="ml-3 mt-1 flex flex-col md:mt-2 md:gap-y-[2px]">
            {DetailsData.map((detail, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <Image
                  src={"/icon/ic-check.svg"}
                  width={15}
                  height={15}
                  alt="ic-check"
                />
                <p className="text-3xs font-medium text-[#696F8C] md:text-xs">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-1 flex w-full items-center justify-center md:mt-3">
          <button className="rounded-[10px] bg-[#0A0A65] px-2 py-1 text-3xs font-semibold text-white hover:bg-[#36367e] md:px-6 md:py-2 md:text-sm">
            Beli Paket
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaketItem;
