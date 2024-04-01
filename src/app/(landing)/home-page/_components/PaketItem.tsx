import Image from "next/image";
import React from "react";

interface PaketItemProps {
  paket: string;
  price: number;
}

const PaketItem = () => {
  return (
    <div className="w-full rounded-[20px] bg-white p-6 shadow-md lg:w-fit">
      <div className="flex w-full items-center justify-center">
        <Image
          src={"/img/img-paket1.png"}
          width={312}
          height={256}
          alt="img-paket"
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Paket D</h2>
        <div className="rounded-full border border-[#6255A4] px-3 py-1">
          <h4 className="text-xs font-medium">Paket SKD Teratas</h4>
        </div>
      </div>
      <h1 className="pt-2 text-3xl font-semibold text-[#E23535]">
        Rp 285.000,00
      </h1>
      <p className="pt-2 text-sm text-[#0A0A65]">
        Sesuai untuk mengasah kemampuan
      </p>

      {/* Isi Paket */}
      <div className="mt-6">
        <h2 className="font-medium text-[#0A0A65]">Detail isi Paket</h2>
        <div className="ml-3 mt-2 flex flex-col gap-y-2">
          <div className="flex items-center gap-x-3">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-sm font-medium text-[#696F8C]">
              Grup Bersama dengan Mentor
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-sm font-medium text-[#696F8C]">
              36 Pertemuan Zoom
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-sm font-medium text-[#696F8C]">
              660 Latihan Soal
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-sm font-medium text-[#696F8C]">Modul</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-sm font-medium text-[#696F8C]">2x Tryout</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              src={"/icon/ic-check.svg"}
              width={21}
              height={21}
              alt="ic-check"
            />
            <p className="text-sm font-medium text-[#696F8C]">
              3 Bulan Akses Web
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 flex w-full items-center justify-center">
        <button className="rounded-[10px] bg-[#0A0A65] px-12 py-3 text-sm font-semibold text-white hover:bg-[#36367e]">
          Beli Paket
        </button>
      </div>
    </div>
  );
};

export default PaketItem;
