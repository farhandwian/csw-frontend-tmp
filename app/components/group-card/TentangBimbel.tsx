import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TentangBimbel = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
        {/* row 1 */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 pl-3 pt-2">
          <img src="img/img_about_1.png" width="110" alt="..." />
          <div className="bg-white rounded-full flex items-center justify-start gap-2">
            <h5 className="font-medium">Studi Kasus</h5>
            <FaCheckCircle className="text-customPalette-primary" size={24} />
          </div>

          <p className="mb-9">
            Belajar secara efektif dan efisien bersama mentor melalui meeting
            secara online
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 pl-3 pt-2">
          <img src="img/img_about_2.png" width="110" alt="..." />
          <div className="bg-white rounded-full flex items-center justify-start gap-2">
            <h5 className="font-medium">Konsultasi</h5>
            <FaCheckCircle className="text-customPalette-primary" size={24} />
          </div>

          <p className="mb-9">
            Gabung grup private untuk konsultasi dengan mentor
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 pl-3 pt-2">
          <img src="img/img_about_3.png" width="110" alt="..." />
          <div className="bg-white rounded-full flex items-center justify-start gap-2">
            <h5 className="font-medium">#DibuatOlehMahasiswaKedinasan</h5>
            <FaCheckCircle className="text-customPalette-primary" size={24} />
          </div>

          <p className="mb-9">
            Materi dibuat dan disampaikan oleh mahasiswa yang sudah bersekolah
            di kedinasan
          </p>
        </div>

        {/* // row 2 */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 pl-3 pt-2">
          <img src="img/img_about_4.png" width="110" alt="..." />
          <div className="bg-white rounded-full flex items-center justify-start gap-2">
            <h5 className="font-medium">Harga Terjangkau</h5>
            <FaCheckCircle className="text-customPalette-primary" size={24} />
          </div>

          <p className="mb-9">
            Harga paket bimbel yang terjangkau bagi kalangan pelajar
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 pl-3 pt-2">
          <img src="img/img_about_5.png" width="110" alt="..." />
          <div className="bg-white rounded-full flex items-center justify-start gap-2">
            <h5 className="font-medium">Paket Bimbel</h5>
            <FaCheckCircle className="text-customPalette-primary" size={24} />
          </div>

          <p className="mb-9">
            Terdapat banyak pilihan paket bimbel yang dapat kamu pilih
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 pl-3 pt-2">
          <img src="img/img_about_6.png" width="110" alt="..." />
          <div className="bg-white rounded-full flex items-center justify-start gap-2">
            <h5 className="font-medium">Studi Kasus</h5>
            <FaCheckCircle className="text-customPalette-primary" size={24} />
          </div>

          <p className="mb-9">
            Belajar secara efektif dan efisien bersama mentor melalui meeting
            secara online
          </p>
        </div>
      </div>
    </>
  );
};

export default TentangBimbel;
