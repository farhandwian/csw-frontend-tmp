"use client";
import Image from "next/image";
import React, { useState } from "react";

interface FaqItemProps {
  title: string;
  text: string;
}

const FaqItem = (props: FaqItemProps) => {
  const { title, text } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex items-start justify-between gap-x-3 lg:gap-x-4 bg-white p-4 lg:px-4 lg:py-6 rounded-xl cursor-pointer select-none w-full md:w-[600px] lg:w-[880px]"
      onClick={toggleOpen}
    >
      <div>
        <h3 className="text-[#334155] font-medium text-base lg:text-lg">
          {title}
        </h3>
        {isOpen && (
          <p className="mt-4 text-[#1E293B]/40 text-sm lg:text-base">{text}</p>
        )}
      </div>

      <div className="flex-none">
        <Image
          src={"/icon/ic-arrow.svg"}
          alt="ic-arrow"
          width={13}
          height={24}
          className={` mt-[2px] w-5 h-5 lg:w-7 lg:h-7 transform  ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </div>
    </div>
  );
};

export default FaqItem;
