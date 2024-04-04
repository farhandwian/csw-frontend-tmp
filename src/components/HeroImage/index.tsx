// HeroImage.tsx
import Image from "next/image";
import React, { ReactNode } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  children?: ReactNode;
  classNameWrap?: string;
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  width,
  height,
  children,
  classNameWrap = "",
  className = "",
}) => {
  return (
    <div
      className={`flex h-[50%] w-full items-center justify-center pt-8 md:h-full md:w-1/2 md:pt-24 ${classNameWrap}`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        sizes="100vw"
        alt={alt}
        className={className}
      />
      {children}
    </div>
  );
};

export default HeroImage;
