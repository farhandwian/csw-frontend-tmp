import Image from "next/image";
import React from "react";
import IconStar from "../../../../public/icon/ic-star.svg";

const Testimoni = () => {
  return (
    <div className="relative h-full">
      <div className="h-full mt-32 w-full px-20">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[#0D0D68] font-medium text-[26px]">
            Testimoni dan Kisah Sukses Orang-orang Yang Belajar di CSW
          </h4>
          <h2 className="mt-1 text-4xl text-center font-semibold text-[#1A69F0] leading-tight">
            Menjadikan Ilmu Semakin Bermanfaat
          </h2>
        </div>

        {/* Button Left & Right */}
        <div className="flex items-center justify-center w-full gap-x-5 mt-[70px]">
          <div className="bg-[#0D0D68] flex items-center justify-center w-[54px] h-[54px] rounded-full">
            <Image
              src={"/icon/ic-arrow.svg"}
              alt="ic-arrow"
              width={21}
              height={21}
              className="-rotate-90"
            />
          </div>
          <div className="bg-[#0D0D68] flex items-center justify-center w-[54px] h-[54px] rounded-full">
            <Image
              src={"/icon/ic-arrow.svg"}
              alt="ic-arrow"
              width={21}
              height={21}
              className="rotate-90"
            />
          </div>
        </div>

        {/* Card Testimoni */}
        <div className="mt-11 flex items-center justify-center gap-x-6">
          <div className="max-w-[640px]">
            <div className="bg-white w-full h-full relative border-[1.5px] border-[#E7E7E7] rounded-[36px] py-10 px-14">
              <Image
                src={"/icon/ic-quote.svg"}
                width={180}
                height={99}
                alt="ic-quote"
                className="absolute -top-3 -right-0.5"
              />

              <div className="flex items-start gap-x-4">
                <Image
                  src={"/image/img-profile.png"}
                  width={105}
                  height={105}
                  alt="img-profile"
                />
                <div className=" text-[#393934]">
                  <h2 className="font-bold text-2xl">Annisa Pertiwi</h2>
                  <p className="mt-1 text-xl">Mahasiswa STIS 2021</p>
                </div>
              </div>
              <div>
                <p className="mt-9 text-lg">
                  Bimbel csw merupakan salah satu bimbel online kedinasan dengan
                  sistem pembelajaran terbaik yang pernah saya temui. Setelah
                  mengikuti bimbel ini alhamdulillah sekarang saya bisa diterima
                  di lembaga yang saya inginkan.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[640px]">
            <div className="bg-white w-full h-full relative border-[1.5px] border-[#E7E7E7] rounded-[36px] py-10 px-14">
              <Image
                src={"/icon/ic-quote.svg"}
                width={180}
                height={99}
                alt="ic-quote"
                className="absolute -top-3 -right-0.5"
              />

              <div className="flex items-start gap-x-4">
                <Image
                  src={"/image/img-profile.png"}
                  width={105}
                  height={105}
                  alt="img-profile"
                />
                <div className=" text-[#393934]">
                  <h2 className="font-bold text-2xl">Annisa Pertiwi</h2>
                  <p className="mt-1 text-xl">Mahasiswa STIS 2021</p>
                </div>
              </div>
              <div>
                <p className="mt-9 text-lg">
                  Bimbel csw merupakan salah satu bimbel online kedinasan dengan
                  sistem pembelajaran terbaik yang pernah saya temui. Setelah
                  mengikuti bimbel ini alhamdulillah sekarang saya bisa diterima
                  di lembaga yang saya inginkan.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                  <Image
                    src={"/icon/ic-star.svg"}
                    width={30}
                    height={30}
                    alt="ic-star"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative w-full">
          <Image
            src={"/image/bg-testimoni.png"}
            width={1440}
            height={680}
            alt="bg-testimoni"
            className="w-full "
          />
          <div className="absolute bottom-20 w-full flex flex-col items-center">
            <h2 className="text-[#393934] font-semibold text-3xl">
              Ayo temukan minat dan potensi dirimu bersama Pilih Jurusan
              sekarang!
            </h2>
            <button className="mt-10 flex items-center justify-center gap-x-6 px-24 py-5 bg-[#1A69F0] rounded-full">
              <Image
                src={"/icon/ic-arrow-circle.svg"}
                alt="ic-arrow-circle"
                width={36}
                height={36}
              />
              <h3 className="text-white font-bold text-xl">Daftar Sekarang</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
