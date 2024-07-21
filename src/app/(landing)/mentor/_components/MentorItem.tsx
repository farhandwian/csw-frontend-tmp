"use client";
import TruncateText from "@/lib/utils/TruncateText";
import { TMentor } from "@/types/home-page";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MentorItemProps {
  img: string;
  mentor: TMentor;
  key: string;
}

const MentorItem: React.FC<MentorItemProps> = ({ img, mentor, key }) => {
  return (
    <div
      key={key}
      className="h-full w-full rounded-md bg-white shadow-md md:min-h-24 md:rounded-xl lg:min-h-32"
    >
      <div className="relative flex w-full justify-center rounded-t-md bg-[#3838A4] md:rounded-t-xl">
        {/* ic bg card */}
        <div className="absolute -bottom-3 z-0 md:top-7">
          <Image
            src={`/img/landing-mentor/ic-bg-mentor-card.svg`}
            width={0}
            height={0}
            alt={`img-img-mentor1`}
            className="h-[130px] w-[130px] object-fill md:h-full md:w-full"
          />
        </div>
        <Image
          src={`/img/${img}.png`}
          width={288}
          height={281}
          alt={`img-img-mentor1`}
          className=" z-10 h-[100px] md:h-[260px] md:w-[261px]"
        />
      </div>

      <div className="md:h-[50%] lg:h-[350px] xl:h-[300px]">
        <div className="flex flex-col justify-between p-2 md:h-full md:p-4 lg:h-[100px]">
          <div className="md:mt-3">
            <div className="">
              <h4 className="text-xs font-bold md:text-base">{mentor.name}</h4>
              <p className="hidden text-2xs font-medium md:block md:text-xs">
                Mentor {mentor.teaching_field} Terbaik
              </p>
            </div>
            <div className="mt-1  md:mt-2">
              <h3 className=" text-justify text-3xs leading-tight text-[#828282] md:text-xs md:leading-normal">
                {mentor.description}
              </h3>
            </div>
            <h4 className="mt-2 text-4xs italic  md:mt-4 md:text-sm">
              &quot;{mentor.motto}&quot;
            </h4>
          </div>
          <div className="mt-1 flex items-center justify-center md:mt-3">
            {/* Gunakan Link untuk navigasi */}
            <Link href={`/mentor/detail-mentor/${mentor.uuid}`} passHref>
              <button className="mb-2 me-2 w-full rounded-2xl border border-gray-300 bg-white px-2 py-[2px] text-3xs font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:px-4 md:py-2 md:text-sm">
                <h1 className="text-3xs md:text-sm">Lihat Detail</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorItem;
