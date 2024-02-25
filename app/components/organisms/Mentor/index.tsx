import Image from "next/image";
import React from "react";

const Mentor = () => {
  return (
    <div className="mt-20 h-full w-full px-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="max-w-2xl text-center text-4xl font-bold leading-normal text-[#323062]">
          Gapai Impianmu Bersama Mentor Berpengalaman
        </h2>
      </div>

      <div className="mt-16 flex w-full flex-col items-center justify-center">
        <div className="relative flex w-fit items-center justify-center gap-x-7 pt-32">
          <div className="absolute left-0 top-0">
            <h4 className="text-2xl font-medium text-[#323062]">
              Mau belajar bersama mentor terbaik dari kami?
            </h4>
            <p className="mt-3 max-w-3xl font-light">
              Perdalam ilmumu seputar tes SKD dan tes khusus setiap sekolah
              kedinasan secara teratur, terarah dan terorganisir
            </p>
          </div>

          <div className="h-[402px] w-[379px] rounded-[20px] bg-white">
            <div className="flex w-full justify-center">
              <Image
                src={"/image/img-mentor1.png"}
                width={288}
                height={281}
                alt="img-mentor"
                className="h-[281px] w-[288px]"
              />
            </div>
            <div className="flex h-[150px] w-full flex-col items-center justify-between rounded-b-[20px] bg-[#0D0D68] px-8 py-5 text-white">
              <div className="text-center">
                <h4 className="font-semibold">Ayu Lestari</h4>
                <p className="text-sm font-medium">Mentor Matematika Terbaik</p>
              </div>
              <h4 className="text-center text-sm italic">
                “Matematika itu mudah, asik dan seru”
              </h4>
            </div>
          </div>
          <div className="h-[402px] w-[379px] rounded-[20px] bg-white">
            <div className="flex w-full justify-center">
              <Image
                src={"/image/img-mentor2.png"}
                width={288}
                height={281}
                alt="img-mentor"
                className="h-[281px] w-[288px]"
              />
            </div>
            <div className="flex h-[150px] w-full flex-col items-center justify-between rounded-b-[20px] bg-[#0D0D68] px-8 py-5 text-white">
              <div className="text-center">
                <h4 className="font-semibold">Budi Pangestu</h4>
                <p className="text-sm font-medium">Mentor TWK Terbaik</p>
              </div>
              <h4 className="text-center text-sm italic">
                “TWK lebih banyak logika, jadi pahamilah setiap pertanyaan dan
                jawabannya”
              </h4>
            </div>
          </div>
          <div className="h-[402px] w-[379px] rounded-[20px] bg-white">
            <div className="flex w-full justify-center">
              <Image
                src={"/image/img-mentor3.png"}
                width={288}
                height={281}
                alt="img-mentor"
                className="h-[281px] w-[288px]"
              />
            </div>
            <div className="flex h-[150px] w-full flex-col items-center justify-between rounded-b-[20px] bg-[#0D0D68] px-8 py-5 text-white">
              <div className="text-center">
                <h4 className="font-semibold">Annisa</h4>
                <p className="text-sm font-medium">Mentor TIU Terbaik</p>
              </div>
              <h4 className="text-center text-sm italic">
                “Tes Intelegensi Umum merupakan salah satu test SKD yang gampang
                banget”
              </h4>
            </div>
          </div>
        </div>

        <button className="mt-20 rounded-lg bg-[#FFC007] px-5 py-4 font-bold text-[#0D0D68]">
          Meet All Mentor
        </button>
      </div>
    </div>
  );
};

export default Mentor;
