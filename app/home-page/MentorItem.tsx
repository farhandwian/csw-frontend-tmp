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
    <div className="bg-white w-full h-full lg:w-[379px] lg:h-[402px] rounded-lg lg:rounded-[20px]">
      <div className="flex w-full justify-center">
        <Image
          src={`/img/img-${img}.png`}
          width={288}
          height={281}
          alt={`img-${img}`}
          className="w-[281px] h-[280px]"
        />
      </div>
      <div className="w-full h-[180px]  bg-[#0D0D68] rounded-b-lg lg:rounded-b-[20px] text-white flex flex-col justify-between items-center lg:px-8 py-5">
        <div className="text-center">
          <h4 className="font-semibold">{name}</h4>
          <p className="font-medium text-sm">Mentor {job} Terbaik</p>
        </div>
        <h4 className="italic text-sm text-center h-full mt-10">
          &quot;{quote}&quot;
        </h4>
      </div>
    </div>
  );
};

export default MentorItem;
