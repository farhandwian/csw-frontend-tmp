"use client";
import Footer from "@/app/(landing)/_components/Footer";
import MentorItem from "@/app/(landing)/mentor/_components/MentorItem";
import useDesktop from "@/hooks/useDesktop";
import useTablet from "@/hooks/useTablet";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useGetAllMentors } from "@/hooks/mentor/hook";
import Error from "@/components/Error";
const Page = () => {
  const tabletView = useTablet();
  const desktopView = useDesktop();
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: dataAllMentors,
    isLoading: isLoadingAllMentors,
    isError: isErrorAllMentors,
  } = useGetAllMentors();

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (isErrorAllMentors) {
    return <Error message="error while fetching data" />;
  }

  return (
    <>
      {/* Banner */}
      <div className="relative flex h-72 w-full items-center">
        <div className="relative h-full w-full overflow-hidden bg-[#1A69F0]">
          {/*  Background for Banner */}
          <div className="absolute bottom-0 right-0 top-11 z-0 overflow-hidden md:h-full md:w-full  ">
            <Image
              src={"/img/landing-mentor/ic-bg-banner-mentor.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 h-full w-full lg:scale-150 xl:scale-100"
            />
          </div>
          <div className="absolute bottom-0 top-0 z-0 h-full w-full md:h-full md:w-full  ">
            <Image
              src={"/img/landing-mentor/ic-mentor.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 left-1/2 top-24 h-[200px] w-[200px]  -translate-x-1/2 transform md:bottom-0 md:left-96 md:right-0 md:top-16 md:h-full md:w-full md:-translate-x-0 lg:scale-150 xl:scale-100"
            />
          </div>
          <div className="absolute left-5 top-5  text-white md:left-24 md:top-1/2 md:-translate-y-1/2 md:transform ">
            <h1 className="text-xl font-bold md:text-2xl">
              Temukan Mentor Favoritmu
            </h1>
            <h3 className="text-sm md:text-base ">
              Gapai Impianmu Bersama Mentor Berpengalaman
            </h3>
          </div>
        </div>
      </div>

      {/* mentor */}
      <div className="mb-8 mt-8 h-full w-full  px-2 md:mb-24 md:px-0 lg:mt-16 lg:px-10 xl:px-0">
        <div className="relative mt-5  md:px-20 lg:mt-10 lg:w-full lg:flex-col lg:items-center lg:justify-center lg:px-24">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-xs font-semibold text-[#0D0D68] md:text-lg lg:text-xl">
              Mau belajar bersama mentor terbaik dari kami?
            </h4>
            <h2 className="mt-1 text-2xs leading-tight md:text-base  ">
              Perdalam ilmumu seputar tes SKD dan tes khusus setiap sekolah
              kedinasan secara teratur. terarah dan terorganisir
            </h2>
          </div>
          {/* mentor card  container*/}
          {/* mentor card item */}
          <div className="relative mt-5  md:mt-8 ">
            {desktopView ? (
              <div className="grid grid-cols-3 gap-4 ">
                {dataAllMentors?.data.map((mentor, index) => (
                  <div key={index}>
                    <MentorItem mentor={mentor} key={`mentor-${index}`} />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3  ">
                  {dataAllMentors?.data.map((mentor, index) => (
                    <div key={index}>
                      <MentorItem mentor={mentor} key={`mentor-${index}`} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
