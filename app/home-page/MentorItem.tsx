import Image from "next/image";
import React from "react";

interface MentorItemProps {
  img: "mentor1" | "mentor2" | "mentor3";
  name: string;
  job: string;
  quote: string;
}

const MentorItem = (props: MentorItemProps) => {
  const { img, name, job, quote } = props;
  return (
    <div className="h-full w-full rounded-lg bg-white lg:h-[402px] lg:w-[379px] lg:rounded-[20px]">
      <div className="flex w-full justify-center">
        <Image
          src={`/img/img-${img}.png`}
          width={288}
          height={281}
          alt={`img-${img}`}
          className="h-[280px] w-[281px]"
        />
      </div>
      <div className="flex h-[180px]  w-full flex-col items-center justify-between rounded-b-lg bg-[#0D0D68] py-5 text-white lg:rounded-b-[20px] lg:px-8">
        <div className="text-center">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm font-medium">Mentor {job} Terbaik</p>
        </div>
        <h4 className="mt-10 h-full text-center text-sm italic">
          &quot;{quote}&quot;
        </h4>
      </div>
    </div>
  );
};

export default MentorItem;
