import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className="border-t-2 mt-[700px] py-16 px-20 flex justify-between">
      <div className="max-w-lg">
        <h3 className="text-[#323062] font-semibold text-3xl">FAQ</h3>
        <h4 className="text-[#22C58B] font-medium text-2xl">
          Ada pertanyaan? Kami akan membantu
        </h4>
        <p className="mt-7 font-light">
          Kami tahu Anda memiliki beberapa pertanyaan, kami telah mencoba
          membuat daftar yang paling penting sekali dan Anda bisa mengajukan
          pertanyaan jika terdapat kebingunan
        </p>
        <button className="mt-8 bg-[#6255A4] text-[#E2E8F0]  px-10  py-4 rounded-[10px] font-semibold xl:text-base w-fit shadow-lg shadow-[#6255A4]/60">
          Ajukan Pertanyaan
        </button>
      </div>

      <div>
        <div className="relative pr-20 mt-3">
          <div className="pb-3 max-w-[400px] border-b-2 ">
            <h3 className="text-[#334155] font-medium">
              Masalah apa yang Anda selesaikan?
            </h3>
            <p className="mt-3 text-[#1E293B]/45 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <div className="absolute top-[6px] right-0">
            <Image
              src={"/icon/ic-arrow.svg"}
              width={18}
              height={18}
              alt="ic-arrow"
            />
          </div>
        </div>
        <div className="relative pr-20 mt-3">
          <div className="pb-3 max-w-[400px] border-b-2 ">
            <h3 className="text-[#334155] font-medium">
              Apa saja yang terdapat di website ini?
            </h3>
            <p className="hidden mt-3 text-[#1E293B]/45 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <div className="absolute top-[6px] right-0">
            <Image
              src={"/icon/ic-arrow.svg"}
              width={18}
              height={18}
              alt="ic-arrow"
            />
          </div>
        </div>
        <div className="relative pr-20 mt-3">
          <div className="pb-3 max-w-[400px] border-b-2 ">
            <h3 className="text-[#334155] font-medium">
              Mengapa memilih kami?
            </h3>
            <p className="hidden mt-3 text-[#1E293B]/45 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <div className="absolute top-[6px] right-0">
            <Image
              src={"/icon/ic-arrow.svg"}
              width={18}
              height={18}
              alt="ic-arrow"
            />
          </div>
        </div>
        <div className="relative pr-20 mt-3">
          <div className="pb-3 max-w-[400px] border-b-2 ">
            <h3 className="text-[#334155] font-medium">Tentang CSW</h3>
            <p className="hidden mt-3 text-[#1E293B]/45 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
          <div className="absolute top-[6px] right-0">
            <Image
              src={"/icon/ic-arrow.svg"}
              width={18}
              height={18}
              alt="ic-arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
