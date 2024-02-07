"use client";

import React from "react";
import { ImPriceTags } from "react-icons/im";
import { MdCheckCircle } from "react-icons/md";

// Dummy data array
const paketData = [
  {
    id: 1,
    imageUrl: "/img/img_level_4.png",
    price: "Rp. 285.000",
    paketName: "Paket D",
    description: "Sesuai untuk mengasah kemampuan",
    features: [
      "Grup",
      "36 Zoom Meet",
      "660 Latihan Soal",
      "Modul",
      "2x TryOut",
      "3 Bulan Akses",
    ],
  },
  {
    id: 1,
    imageUrl: "/img/img_level_4.png",
    price: "Rp. 285.000",
    paketName: "Paket D",
    description: "Sesuai untuk mengasah kemampuan",
    features: [
      "Grup",
      "36 Zoom Meet",
      "660 Latihan Soal",
      "Modul",
      "2x TryOut",
      "3 Bulan Akses",
    ],
  },
  {
    id: 1,
    imageUrl: "/img/img_level_4.png",
    price: "Rp. 285.000",
    paketName: "Paket D",
    description: "Sesuai untuk mengasah kemampuan",
    features: [
      "Grup",
      "36 Zoom Meet",
      "660 Latihan Soal",
      "Modul",
      "2x TryOut",
      "3 Bulan Akses",
    ],
  },
  // Add two more objects to the array for card 2 and card 3 with their respective details
  // ...
];

const PaketPenawaran = () => {
  return (
    <>
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 py-4 px-3 gap-3">
        {paketData.map((paket) => (
          <div
            key={paket.id}
            className="col-span-1 grid grid-cols-2 md:grid-cols-2 gap-2 bg-white text-black rounded-lg shadow-md p-2"
          >
            <div className="col-span-1 items-center pt-1">
              <img
                alt={`Gambar ${paket.paketName}`}
                src={paket.imageUrl}
                className="w-full" // Correct the class name here
              />
              <div className="rounded-md border-2 text-sm flex items-center p-1 my-3">
                <ImPriceTags
                  size={18}
                  className="text-yellow-400 scale-x-[-1]"
                />
                <p className="text-sm font-semibold ml-1">{paket.price}</p>
              </div>
              <button className="rounded-lg p-3 text-white bg-pl-primary w-full text-sm font-semibold">
                Beli Paket
              </button>
            </div>
            <div className="col-span-1">
              <p className="font-semibold">{paket.paketName}</p>
              <h4 className="font-semibold capitalize text-xs my-1">
                {paket.description}
              </h4>
              <div className="bg-slate-500 py-2 my-3">
                <p className="text-xs text-center text-white">
                  {paket.features[0]}
                </p>
              </div>
              <p className="text-pl-primary text-xs font-bold">
                Detail Isi Paket:
              </p>
              <div className="text-xs font-semibold text-pl-primary">
                {paket.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-200 py-2 my-1 flex items-center"
                  >
                    <MdCheckCircle className="mx-1" size={17} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaketPenawaran;
