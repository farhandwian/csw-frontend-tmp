import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <div className="h-full mt-32 w-full px-28">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-[#0D0D68] font-medium text-[26px]">
          Kenapa memilih kami?
        </h4>
        <h2 className="mt-1 text-3xl max-w-4xl text-center font-semibold text-[#1A69F0] leading-tight">
          Platform Bimbel Kedinasan Online Menggunakan Kurikulum Terbaru
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-6">
          <Image
            src={"/image/img-whyus1.png"}
            alt="img-whyus1"
            width={110}
            height={110}
          />
          <div className="flex items-center mt-7 gap-x-2">
            <h3 className="font-bold text-xl">Studi Kasus</h3>
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
            />
          </div>
          <p className="mt-5">
            Belajar secara efektif dan efisien bersama mentor melalui meeting
            secara online
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <Image
            src={"/image/img-whyus2.png"}
            alt="img-whyus2"
            width={110}
            height={110}
          />
          <div className="flex items-center mt-7 gap-x-2">
            <h3 className="font-bold text-xl">Konsultasi</h3>
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
            />
          </div>
          <p className="mt-5">
            Gabung grup private untuk konsultasi dengan mentor
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <Image
            src={"/image/img-whyus3.png"}
            alt="img-whyus3"
            width={110}
            height={110}
          />
          <div className="flex items-center mt-7 gap-x-2">
            <h3 className="font-bold text-xl">#DibuatOlehMahasiswaKedinasan</h3>
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
            />
          </div>
          <p className="mt-5">
            Materi dibuat dan disampaikan oleh mahasiswa yang sudah bersekolah
            di kedinasan
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <Image
            src={"/image/img-whyus4.png"}
            alt="img-whyus4"
            width={110}
            height={110}
          />
          <div className="flex items-center mt-7 gap-x-2">
            <h3 className="font-bold text-xl">Harga Terjangkau</h3>
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
            />
          </div>
          <p className="mt-5">
            Harga paket bimbel yang terjangkau bagi kalangan pelajar
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <Image
            src={"/image/img-whyus5.png"}
            alt="img-whyus5"
            width={110}
            height={110}
          />
          <div className="flex items-center mt-7 gap-x-2">
            <h3 className="font-bold text-xl">Paket Bimbel</h3>
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
            />
          </div>
          <p className="mt-5">
            Terdapat banyak pilihan paket bimbel yang dapat kamu pilih
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <Image
            src={"/image/img-whyus6.png"}
            alt="img-whyus6"
            width={110}
            height={110}
          />
          <div className="flex items-center mt-7 gap-x-2">
            <h3 className="font-bold text-xl">Mengasah Kemampuan</h3>
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
            />
          </div>
          <p className="mt-5">
            Asah kemampuanmu menjadi lebih baik lagi dengan mengikuti try out,
            pretest, dan post test
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
