import Image from "next/image";
import React from "react";
import { TMentor } from "@/types/home-page";

const MentorItem = ({
  img,
  props,
  key,
}: {
  img: string;
  props: TMentor;
  key?: string;
}) => {
  const { profile_picture, name, teaching_field, motto } = props;
  return (
    <>
      <div
        key={key}
        className="relative rounded-lg bg-white md:h-full md:w-full lg:h-[25.125rem] lg:w-[23.6875rem] lg:rounded-[1.25rem]"
      >
        <div className="flex w-full justify-center">
          <Image
            src={`/img/${img}.png`}
            width={288}
            height={281}
            alt={`img-mentor1`}
            className="h-[14rem] w-[14rem] object-fill md:h-[17.5rem] md:w-[17.5625rem]"
          />
        </div>
        <div className="flex h-[6.5rem] w-full  flex-col items-center justify-between rounded-b-lg bg-[#0D0D68] py-5 text-white md:h-[180px] lg:rounded-b-[20px] lg:px-8">
          <div className="text-center">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-xs font-medium md:text-sm">
              Mentor {teaching_field} Terbaik
            </p>
          </div>
          <h4 className="mt-3 h-full text-center text-xs italic md:mt-10 md:text-sm">
            &quot;{motto}&quot;
          </h4>
        </div>
      </div>
    </>
  );
};

export default MentorItem;
