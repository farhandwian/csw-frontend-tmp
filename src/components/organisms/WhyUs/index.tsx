import Image from "next/image";
import React from "react";
import WhyUsItem from "./WhyUsItem";

const WhyUs = () => {
  return (
    <div className="h-full mt-14 lg:mt-32 w-full px-2 md:px-5 lg:px-16 xl:px-28">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-[#0D0D68] font-medium text-lg lg:text-[26px]">
          Kenapa memilih kami?
        </h4>
        <h2 className="mt-1 text-xl lg:text-3xl max-w-4xl text-center font-semibold text-[#1A69F0] leading-tight">
          Platform Bimbel Kedinasan Online Menggunakan Kurikulum Terbaru
        </h2>
      </div>

      <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <WhyUsItem
          img="whyus1"
          title="Studi Kasus"
          text="Belajar secara efektif dan efisien bersama mentor melalui meeting secara online"
        />
        <WhyUsItem
          img="whyus2"
          title="Konsultasi"
          text="Gabung grup private untuk konsultasi dengan mentor"
        />
        <WhyUsItem
          img="whyus3"
          title="#DiBuatOlehMahasiswaKedinasan"
          text="Gabung grup private untuk konsultasi dengan mentor"
        />
        <WhyUsItem
          img="whyus4"
          title="Harga Terjangkau"
          text="Harga paket bimbel yang terjangkau bagi kalangan pelajar"
        />
        <WhyUsItem
          img="whyus5"
          title="Paket Bimbel"
          text="Terdapat banyak pilihan paket bimbel yang dapat kamu pilih"
        />
        <WhyUsItem
          img="whyus6"
          title="Mengasah Kemampuan"
          text="Asah kemampuanmu menjadi lebih baik lagi dengan mengikuti try out, pretest, dan post test"
        />
      </div>
    </div>
  );
};

export default WhyUs;
