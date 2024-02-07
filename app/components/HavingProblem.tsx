import Image from "next/image";
import React from "react";

const HavingProblem = () => {
  return (
    <div className="mt-10 lg:mt-32 w-full h-[210px] lg:h-[400px] bg-[#1A69F0] flex items-center justify-center relative">
      <Image
        src={"/image/img-contactus.png"}
        alt="bg-contact-me"
        width={1171}
        height={440}
        className="h-full"
      />
      <div className="absolute max-w-3xl text-center text-white px-2 lg:px-0">
        <h1 className="font-bold text-xl lg:text-5xl">Memiliki Kesulitan?</h1>
        <p className="mt-3 lg:mt-6 font-medium text-xs lg:text-base">
          Kami tahu Anda memiliki beberapa pertanyaan, kami telah mencoba
          membuat daftar yang paling penting sekali dan Anda bisa mengajukan
          pertanyaan jika terdapat kebingunan
        </p>
        <button className="mt-6 text-black bg-white px-4 py-2 lg:px-5 lg:py-4 rounded-full font-semibold">
          Ajukan Pertanyaan
        </button>
      </div>
    </div>
  );
};

export default HavingProblem;
