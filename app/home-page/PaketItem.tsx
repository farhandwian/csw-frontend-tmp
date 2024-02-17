import Image from "next/image";
import React from "react";

interface PaketItemProps {
  paket: string;
  price: number;
}

const PaketItem = () => {
  return (
    <div className="bg-white p-6 w-full lg:w-fit rounded-[20px]">
      <div className="w-full flex items-center justify-center">
        <Image
          src={"/img/img-paket1.png"}
          width={312}
          height={256}
          alt="img-paket"
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Paket D</h2>
        <div className="border border-[#6255A4] px-3 py-1 rounded-full">
          <h4 className="font-medium text-xs">Paket SKD Teratas</h4>
        </div>
      </div>
      <h1 className="pt-2 text-[#E23535] font-semibold text-3xl">
        Rp 285.000,00
      </h1>
      <p className="pt-2 text-[#0A0A65] text-sm">
        Sesuai untuk mengasah kemampuan
      </p>

      {/* Isi Paket */}
      <div className="mt-6">
        <h2 className="font-medium text-[#0A0A65]">Detail isi Paket</h2>
        <div className="flex flex-col gap-y-2 ml-3 mt-2">
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-[#696F8C] text-sm font-medium">
              Grup Bersama dengan Mentor
            </p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-[#696F8C] text-sm font-medium">
              36 Pertemuan Zoom
            </p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-[#696F8C] text-sm font-medium">
              660 Latihan Soal
            </p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-[#696F8C] text-sm font-medium">Modul</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-[#696F8C] text-sm font-medium">2x Tryout</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-[#696F8C] text-sm font-medium">
              3 Bulan Akses Web
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex items-center justify-center mt-6">
        <button className="text-sm font-semibold text-white px-12 py-3 bg-[#0A0A65] hover:bg-[#36367e] rounded-[10px]">
          Beli Paket
        </button>
      </div>
    </div>
  );
};

export default PaketItem;
