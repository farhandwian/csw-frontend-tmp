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
    <div className="flex lg:flex-col items-start gap-x-5 bg-white rounded-3xl p-3 lg:p-6">
      <Image
        src={`/image/img-${img}.png`}
        alt="img-whyus1"
        width={110}
        height={110}
        // className="h-fit w-fit"
        className="w-[90px] h-[90px] lg:h-fit lg:w-fit"
      />
      <div>
        <h3 className="lg:mt-7 gap-x-2 break-all font-bold text-sm flex items-center lg:text-xl">
          {title}
          <span className="flex-none">
            <Image
              src={"/icon/ic-check.svg"}
              width={24}
              height={24}
              alt="ic-check"
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </span>
        </h3>
        <p className="mt-3 lg:mt-5 text-xs lg:text-base">{text}</p>
      </div>
    </div>
  );
};

export default WhyUsItem;
