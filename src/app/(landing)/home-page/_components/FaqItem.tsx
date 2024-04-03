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
      className="flex w-full cursor-pointer select-none items-center justify-between gap-x-3 rounded-xl bg-white p-2 md:w-[600px] md:items-start md:p-4 lg:w-[880px] lg:gap-x-4 lg:px-4 lg:py-6"
      onClick={toggleOpen}
    >
      <div>
        <h3 className="text-sm font-medium text-[#334155] md:text-base lg:text-lg">
          {title}
        </h3>
        {isOpen && (
          <p className="mt-4 text-xs text-[#1E293B]/40 md:text-sm lg:text-base">
            {text}
          </p>
        )}
      </div>

      <div className="flex-none">
        <Image
          src={"/icon/ic-arrow.svg"}
          alt="ic-arrow"
          width={13}
          height={24}
          className={` mt-[2px] h-3 w-3 transform md:h-5 md:w-5 lg:h-7 lg:w-7  ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </div>
    </div>
  );
};

export default FaqItem;
