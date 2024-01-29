import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold text-[#323062]">
        Pertanyaan yang Paling Sering Ditanyakan
      </h2>
      <div className="mt-20 max-w-[880px] flex flex-col gap-y-6">
        <div className="flex items-start  justify-between gap-x-4 bg-white px-4 py-6 rounded-xl">
          <div>
            <h3 className="text-[#334155] font-medium text-lg">
              Masalah apa yang Anda selesaikan?
            </h3>
            <p className="mt-4 text-[#1E293B]/40">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <Image
            src={"/icon/ic-arrow.svg"}
            alt="ic-arrow"
            width={13}
            height={24}
            className="w-7 h-7"
          />
        </div>
        <div className="flex items-start justify-between gap-x-4 bg-white px-4 py-6 rounded-xl">
          <div>
            <h3 className="text-[#334155] font-medium text-lg">
              Masalah apa yang Anda selesaikan?
            </h3>
            <p className=" hidden mt-4 text-[#1E293B]/40">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <Image
            src={"/icon/ic-arrow.svg"}
            alt="ic-arrow"
            width={13}
            height={24}
            className="w-7 h-7 rotate-180"
          />
        </div>
        <div className="flex items-start justify-between gap-x-4 bg-white px-4 py-6 rounded-xl">
          <div>
            <h3 className="text-[#334155] font-medium text-lg">
              Masalah apa yang Anda selesaikan?
            </h3>
            <p className=" hidden mt-4 text-[#1E293B]/40">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <Image
            src={"/icon/ic-arrow.svg"}
            alt="ic-arrow"
            width={13}
            height={24}
            className="w-7 h-7 rotate-180"
          />
        </div>
        <div className="flex items-start justify-between gap-x-4 bg-white px-4 py-6 rounded-xl">
          <div>
            <h3 className="text-[#334155] font-medium text-lg">
              Masalah apa yang Anda selesaikan?
            </h3>
            <p className=" hidden mt-4 text-[#1E293B]/40">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <Image
            src={"/icon/ic-arrow.svg"}
            alt="ic-arrow"
            width={13}
            height={24}
            className="w-7 h-7 rotate-180"
          />
        </div>
      </div>

      <div className="mt-32 w-full h-[440px] bg-[#1A69F0] flex items-center justify-center relative">
        <Image
          src={"/image/img-contactus.png"}
          alt="bg-contact-me"
          width={1171}
          height={440}
        />
        <div className="absolute max-w-3xl text-center text-white">
          <h1 className="font-bold text-5xl">Memiliki Kesulitan?</h1>
          <p className="mt-6 font-medium">
            Kami tahu Anda memiliki beberapa pertanyaan, kami telah mencoba
            membuat daftar yang paling penting sekali dan Anda bisa mengajukan
            pertanyaan jika terdapat kebingunan
          </p>
          <button className="mt-6 text-black bg-white px-5 py-4 rounded-full font-semibold">
            Ajukan Pertanyaan
          </button>
        </div>
      </div>
    </div>
    // <div className="border-t-2 mt-[700px] py-16 px-20 flex justify-between">
    //   <div className="max-w-lg">
    //     <h3 className="text-[#323062] font-semibold text-3xl">FAQ</h3>
    //     <h4 className="text-[#22C58B] font-medium text-2xl">
    //       Ada pertanyaan? Kami akan membantu
    //     </h4>
    //     <p className="mt-7 font-light">
    //       Kami tahu Anda memiliki beberapa pertanyaan, kami telah mencoba
    //       membuat daftar yang paling penting sekali dan Anda bisa mengajukan
    //       pertanyaan jika terdapat kebingunan
    //     </p>
    //     <button className="mt-8 bg-[#6255A4] text-[#E2E8F0]  px-10  py-4 rounded-[10px] font-semibold xl:text-base w-fit shadow-lg shadow-[#6255A4]/60">
    //       Ajukan Pertanyaan
    //     </button>
    //   </div>

    //   <div>
    //     <div className="relative pr-20 mt-3">
    //       <div className="pb-3 max-w-[400px] border-b-2 ">
    //         <h3 className="text-[#334155] font-medium">
    //           Masalah apa yang Anda selesaikan?
    //         </h3>
    //         <p className="mt-3 text-[#1E293B]/45 text-sm">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry&apos;s standard dummy
    //           text ever since the 1500s
    //         </p>
    //       </div>
    //       <div className="absolute top-[6px] right-0">
    //         <Image
    //           src={"/icon/ic-arrow.svg"}
    //           width={18}
    //           height={18}
    //           alt="ic-arrow"
    //         />
    //       </div>
    //     </div>
    //     <div className="relative pr-20 mt-3">
    //       <div className="pb-3 max-w-[400px] border-b-2 ">
    //         <h3 className="text-[#334155] font-medium">
    //           Apa saja yang terdapat di website ini?
    //         </h3>
    //         <p className="hidden mt-3 text-[#1E293B]/45 text-sm">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry&apos;s standard dummy
    //           text ever since the 1500s
    //         </p>
    //       </div>
    //       <div className="absolute top-[6px] right-0">
    //         <Image
    //           src={"/icon/ic-arrow.svg"}
    //           width={18}
    //           height={18}
    //           alt="ic-arrow"
    //         />
    //       </div>
    //     </div>
    //     <div className="relative pr-20 mt-3">
    //       <div className="pb-3 max-w-[400px] border-b-2 ">
    //         <h3 className="text-[#334155] font-medium">
    //           Mengapa memilih kami?
    //         </h3>
    //         <p className="hidden mt-3 text-[#1E293B]/45 text-sm">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry&apos;s standard dummy
    //           text ever since the 1500s
    //         </p>
    //       </div>
    //       <div className="absolute top-[6px] right-0">
    //         <Image
    //           src={"/icon/ic-arrow.svg"}
    //           width={18}
    //           height={18}
    //           alt="ic-arrow"
    //         />
    //       </div>
    //     </div>
    //     <div className="relative pr-20 mt-3">
    //       <div className="pb-3 max-w-[400px] border-b-2 ">
    //         <h3 className="text-[#334155] font-medium">Tentang CSW</h3>
    //         <p className="hidden mt-3 text-[#1E293B]/45 text-sm">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry&apos;s standard dummy
    //           text ever since the 1500s
    //         </p>
    //       </div>
    //       <div className="absolute top-[6px] right-0">
    //         <Image
    //           src={"/icon/ic-arrow.svg"}
    //           width={18}
    //           height={18}
    //           alt="ic-arrow"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Faq;
