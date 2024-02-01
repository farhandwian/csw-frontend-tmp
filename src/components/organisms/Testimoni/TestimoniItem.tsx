import Image from "next/image";
import React from "react";

interface TestimoniItemProps {
  img: string;
  name: string;
  student: string;
  text: string;
  rating: number;
}

const TestimoniItem = (props: TestimoniItemProps) => {
  const { img, name, student, text, rating } = props;

  return (
    <div className="w-full ">
      <div className="bg-white w-full h-full relative border-[1.5px] border-[#E7E7E7] rounded-2xl lg:rounded-[36px] px-6 py-8 lg:py-10 lg:px-14">
        <Image
          src={"/icon/ic-quote.svg"}
          width={180}
          height={99}
          alt="ic-quote"
          className="absolute -top-[6px] -right-[10px] lg:-top-[22px] lg:-right-[22px] w-[100px] h-[50px] lg:w-fit lg:h-fit z-0 lg:scale-75"
        />

        <div className="flex items-start gap-x-4">
          <Image
            src={`/image/img-${img}.png`}
            width={105}
            height={105}
            alt="img-profile"
            className="w-20 h-20 lg:w-fit lg:h-fit"
          />
          <div className=" text-[#393934]">
            <h2 className="font-bold text-lg lg:text-2xl">{name}</h2>
            <p className="mt-1 lg:text-xl">{student}</p>
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="mt-5 lg:mt-9 text-sm lg:text-lg">{text}</p>
          <div className="flex gap-x-2 mt-3">
            {Array.from({ length: rating }, (_, index) => (
              <Image
                key={index}
                src={"/icon/ic-star.svg"}
                width={30}
                height={30}
                alt={`star-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniItem;
