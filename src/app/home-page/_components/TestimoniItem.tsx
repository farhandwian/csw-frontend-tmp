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
      <div className="relative h-full w-full rounded-2xl border-[1.5px] border-[#E7E7E7] bg-white px-6 py-8 lg:rounded-[36px] lg:px-14 lg:py-10">
        <Image
          src={"/icon/ic-quote.svg"}
          width={180}
          height={99}
          alt="ic-quote"
          className="absolute -right-[10px] -top-[6px] z-0 h-[50px] w-[100px] lg:-right-[22px] lg:-top-[22px] lg:h-fit lg:w-fit lg:scale-75"
        />

        <div className="flex items-start gap-x-4">
          <Image
            src={`/img/img-${img}.png`}
            width={105}
            height={105}
            alt="img-profile"
            className="h-20 w-20 lg:h-fit lg:w-fit"
          />
          <div className=" text-[#393934]">
            <h2 className="text-lg font-bold lg:text-2xl">{name}</h2>
            <p className="mt-1 lg:text-xl">{student}</p>
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="mt-5 text-sm lg:mt-9 lg:text-lg">{text}</p>
          <div className="mt-3 flex gap-x-2">
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
