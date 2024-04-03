import Image from "next/image";
import React from "react";
import { Button } from "flowbite-react";

interface MentorItemProps {
  img: "mentor1" | "mentor2" | "mentor3";
  name: string;
  deskripsi: string;
  job: string;
  quote: string;
}

const MentorItem = (props: MentorItemProps) => {
  const { img, name, job, quote } = props;
  return (
    <div className="h-full w-full rounded-md bg-white shadow-md md:rounded-xl">
      <div className="relative flex w-full justify-center rounded-t-md bg-[#3838A4] md:rounded-t-xl">
        {/* ic bg card */}
        <div className="absolute -bottom-3  z-0 md:top-7">
          <Image
            src={`/img/landing-mentor/ic-bg-mentor-card.svg`}
            width={0}
            height={0}
            alt={`img-${img}`}
            className="h-[130px] w-[130px] object-fill md:h-full md:w-full"
          />
        </div>
        <Image
          src={`/img/img-${img}.png`}
          width={288}
          height={281}
          alt={`img-${img}`}
          className=" z-10 h-[100px] md:h-[260px] md:w-[261px]"
        />
      </div>

      <div className="p-2 md:p-4 ">
        <div className="">
          <h4 className="text-xs font-bold md:text-base">{name}</h4>
          <p className="hidden text-2xs font-medium md:block">
            Mentor {job} Terbaik
          </p>
        </div>
        <div className="mt-1 md:mt-2">
          <h3 className="text-justify text-2xs leading-tight text-[#828282] md:leading-normal">
            Saya salah satu mentor yang ahli dalam mengajarkan seputar
            matematika untuk salah satu syarat test di sekolah kedinasan STIS
            dan alumni di STIS sehingga tergolong orang yang kompeten di
            bidangnya{" "}
          </h3>
        </div>
        <h4 className="mt-2 text-3xs italic  md:mt-4 md:text-sm">
          &quot;{quote}&quot;
        </h4>
        <div className="mt-1 flex items-center justify-center md:mt-3">
          <button
            type="button"
            className="mb-2 me-2 w-full rounded-2xl border border-gray-300 bg-white px-2 py-[2px] text-2xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:px-4 md:py-2 md:text-sm"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorItem;
