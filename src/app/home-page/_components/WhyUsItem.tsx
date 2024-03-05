import Image from "next/image";
import React from "react";

interface WhyUseItemProps {
  img: "whyus1" | "whyus2" | "whyus3" | "whyus4" | "whyus5" | "whyus6";
  title: string;
  text: string;
}

const WhyUsItem = (props: WhyUseItemProps) => {
  const { img, title, text } = props;
  return (
    <div className="flex items-start gap-x-5 rounded-3xl bg-white p-3 lg:flex-col lg:p-6">
      <Image
        src={`/img/img-${img}.png`}
        alt="img-whyus1"
        width={110}
        height={110}
        // className="h-fit w-fit"
        className="h-[90px] w-[90px] lg:h-fit lg:w-fit"
      />
      <div>
        <h3 className="flex items-center gap-x-2 break-all text-sm font-bold lg:mt-7 lg:text-xl">
          {title}
          <span className="flex-none">
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
              className="h-4 w-4 lg:h-6 lg:w-6"
            />
          </span>
        </h3>
        <p className="mt-3 text-xs lg:mt-5 lg:text-base">{text}</p>
      </div>
    </div>
  );
};

export default WhyUsItem;
