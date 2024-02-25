import Image from "next/image";
import React from "react";

const Paket = () => {
  return (
    <div className="mt-32 h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-[26px] font-medium text-[#0D0D68]">
          Paket Unggulan Teratas
        </h4>
        <h2 className="mt-1 text-center text-4xl font-semibold leading-tight text-[#1A69F0]">
          Pilih Paket Unggulan untuk Meningkatkan Ilmu
        </h2>
      </div>

      <div className="mt-36 flex w-full items-center justify-center">
        <div className="relative mx-10 flex w-fit items-center justify-center gap-x-4 xl:gap-x-14 xl:px-0">
          <div className=" absolute -top-24 flex w-full items-center justify-between">
            <h4 className="text-lg font-medium text-[#323062]">
              Tertarik untuk membeli paket bimbel kami?
            </h4>
            <button className="flex h-[52px] w-[218px] items-center justify-center rounded-full bg-[#090963] font-semibold text-[#E2E8F0] xl:text-base">
              Semua Paket
            </button>
          </div>

          <div className="w-fit rounded-[20px] bg-white p-6">
            <Image
              src={"/image/img-paket1.png"}
              width={312}
              height={256}
              alt="img-paket"
            />
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
                  <p className="text-sm font-medium text-[#696F8C]">
                    2x Tryout
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
                    3 Bulan Akses Web
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 flex w-full items-center justify-center">
              <button className="rounded-[10px] bg-[#0A0A65] px-12 py-3 text-sm font-semibold text-white">
                Beli Paket
              </button>
            </div>
          </div>

          <div className="w-fit rounded-[20px] bg-white p-6">
            <Image
              src={"/image/img-paket1.png"}
              width={312}
              height={256}
              alt="img-paket"
            />
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
                  <p className="text-sm font-medium text-[#696F8C]">
                    2x Tryout
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
                    3 Bulan Akses Web
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 flex w-full items-center justify-center">
              <button className="rounded-[10px] bg-[#0A0A65] px-12 py-3 text-sm font-semibold text-white">
                Beli Paket
              </button>
            </div>
          </div>

          <div className="w-fit rounded-[20px] bg-white p-6">
            <Image
              src={"/image/img-paket1.png"}
              width={312}
              height={256}
              alt="img-paket"
            />
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
                  <p className="text-sm font-medium text-[#696F8C]">
                    2x Tryout
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
                    3 Bulan Akses Web
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 flex w-full items-center justify-center">
              <button className="rounded-[10px] bg-[#0A0A65] px-12 py-3 text-sm font-semibold text-white">
                Beli Paket
              </button>
            </div>
          </div>

          {/* <div className="bg-white p-4 flex rounded-2xl gap-x-3">
          <div className="flex flex-col flex-none justify-between">
            <div>
              <Image
                src={"/image/img-paket1.png"}
                alt="img-paket1"
                width={180}
                height={295}
              />
              <div className="mt-3 border border-[#DEBDBD] px-3 py-2 rounded-md flex items-center gap-x-3">
                <Image
                  src={"/icon/ic-tagprice.svg"}
                  alt="ic-tagprice"
                  width={32}
                  height={32}
                />
                <h3 className="font-semibold text-lg text-[#475569]">
                  Rp 285.000
                </h3>
              </div>
            </div>
            <button className="bg-[#6255A4] w-full font-semibold text-xl text-white py-3 rounded-md">
              Beli Paket
            </button>
          </div>

          <div>
            <h2 className="font-medium text-xl">Paket D</h2>
            <p className="mt-1 font-medium text-[#DEBDBD] text-xs">
              Sesuai untuk mengasah kemampuan
            </p>
            <div className="mt-7 w-[180px] h-[36px] relative">
              <Image
                src={"/icon/ic-label.svg"}
                width={176}
                height={36}
                alt="ic-label"
              />
              <p className="absolute top-1/2 -translate-y-1/2 text-sm left-2 font-medium text-white">
                Paket SKD Teratas
              </p>
            </div>
            <h4 className="mt-6">Detail isi Paket</h4>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3 bg-[#E8EFFF] p-2 rounded-2xl">
                <Image
                  src={"/icon/ic-check.svg"}
                  alt="ic-check"
                  width={25}
                  height={25}
                />
                <p>Grup</p>
              </div>
              <div className="flex items-center gap-x-3 bg-[#E8EFFF] p-2 rounded-2xl">
                <Image
                  src={"/icon/ic-check.svg"}
                  alt="ic-check"
                  width={25}
                  height={25}
                />
                <p>36 Pertemuan Zoom</p>
              </div>
              <div className="flex items-center gap-x-3 bg-[#E8EFFF] p-2 rounded-2xl">
                <Image
                  src={"/icon/ic-check.svg"}
                  alt="ic-check"
                  width={25}
                  height={25}
                />
                <p>660 Latihan Soal</p>
              </div>
              <div className="flex items-center gap-x-3 bg-[#E8EFFF] p-2 rounded-2xl">
                <Image
                  src={"/icon/ic-check.svg"}
                  alt="ic-check"
                  width={25}
                  height={25}
                />
                <p>Modul</p>
              </div>
              <div className="flex items-center gap-x-3 bg-[#E8EFFF] p-2 rounded-2xl">
                <Image
                  src={"/icon/ic-check.svg"}
                  alt="ic-check"
                  width={25}
                  height={25}
                />
                <p>2x Try Out</p>
              </div>
              <div className="flex items-center gap-x-3 bg-[#E8EFFF] p-2 rounded-2xl">
                <Image
                  src={"/icon/ic-check.svg"}
                  alt="ic-check"
                  width={25}
                  height={25}
                />
                <p>3 Bulan Akses Web</p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Paket;
