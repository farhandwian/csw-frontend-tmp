import Image from "next/image";
import React from "react";

const Mentor = () => {
  return (
    <div className="h-full mt-20 w-full px-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-2xl text-center font-bold text-[#323062] leading-normal">
          Gapai Impianmu Bersama Mentor Berpengalaman
        </h2>
      </div>

      <div className="mt-16 w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center pt-32 gap-x-7 relative w-fit">
          <div className="absolute left-0 top-0">
            <h4 className="text-[#323062] font-medium text-2xl">
              Mau belajar bersama mentor terbaik dari kami?
            </h4>
            <p className="mt-3 font-light max-w-3xl">
              Perdalam ilmumu seputar tes SKD dan tes khusus setiap sekolah
              kedinasan secara teratur, terarah dan terorganisir
            </p>
          </div>

          <div className="bg-white w-[379px] h-[402px] rounded-[20px]">
            <div className="flex w-full justify-center">
              <Image
                src={"/image/img-mentor1.png"}
                width={288}
                height={281}
                alt="img-mentor"
                className="w-[288px] h-[281px]"
              />
            </div>
            <div className="w-full h-[150px] bg-[#0D0D68] rounded-b-[20px] text-white flex flex-col justify-between items-center px-8 py-5">
              <div className="text-center">
                <h4 className="font-semibold">Ayu Lestari</h4>
                <p className="font-medium text-sm">Mentor Matematika Terbaik</p>
              </div>
              <h4 className="italic text-sm text-center">
                “Matematika itu mudah, asik dan seru”
              </h4>
            </div>
          </div>
          <div className="bg-white w-[379px] h-[402px] rounded-[20px]">
            <div className="flex w-full justify-center">
              <Image
                src={"/image/img-mentor2.png"}
                width={288}
                height={281}
                alt="img-mentor"
                className="w-[288px] h-[281px]"
              />
            </div>
            <div className="w-full h-[150px] bg-[#0D0D68] rounded-b-[20px] text-white flex flex-col justify-between items-center py-5 px-8">
              <div className="text-center">
                <h4 className="font-semibold">Budi Pangestu</h4>
                <p className="font-medium text-sm">Mentor TWK Terbaik</p>
              </div>
              <h4 className="italic text-sm text-center">
                “TWK lebih banyak logika, jadi pahamilah setiap pertanyaan dan
                jawabannya”
              </h4>
            </div>
          </div>
          <div className="bg-white w-[379px] h-[402px] rounded-[20px]">
            <div className="flex w-full justify-center">
              <Image
                src={"/image/img-mentor3.png"}
                width={288}
                height={281}
                alt="img-mentor"
                className="w-[288px] h-[281px]"
              />
            </div>
            <div className="w-full h-[150px] bg-[#0D0D68] rounded-b-[20px] text-white flex flex-col justify-between items-center px-8 py-5">
              <div className="text-center">
                <h4 className="font-semibold">Annisa</h4>
                <p className="font-medium text-sm">Mentor TIU Terbaik</p>
              </div>
              <h4 className="italic text-sm text-center">
                “Tes Intelegensi Umum merupakan salah satu test SKD yang gampang
                banget”
              </h4>
            </div>
          </div>
        </div>

        <button className="text-[#0D0D68] bg-[#FFC007] px-5 py-4 mt-20 rounded-lg font-bold">
          Meet All Mentor
        </button>
      </div>
    </div>
  );
};

export default Mentor;
