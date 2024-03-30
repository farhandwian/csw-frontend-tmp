import React from "react";
import Image from "next/image";

const PapanInformasi = () => {
  return (
    <>
      <div className="ml-5 h-[22.5rem] max-w-[23rem] rounded-md bg-white shadow-md">
        <div className="flex h-[20%] p-2 shadow-md">
          <div className="mr-2 w-[20%]">
            <Image
              src={"/img/uji-kemampuan/ic_info_uji.png"}
              alt="ic-banner"
              width={165}
              height={165}
              className="mt-1 inline h-[2.3rem] w-[2.3rem]"
            />
          </div>

          <div className="">
            <h1 className="text-sm font-bold">Papan Informasi</h1>
            <h3 className="text-[10px]">
              Informasi seputar pelaksanan posttest dan rules untuk mengerjakan
              posttest
            </h3>
          </div>
        </div>
        <div className="relative h-[80%] max-w-full overflow-y-scroll bg-[#F9F9F9] p-2">
          <h3>Tulis informasi disini</h3>
        </div>
      </div>
    </>
  );
};

export default PapanInformasi;
