"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useDesktop from "@/hooks/useDesktop";
import useTablet from "@/hooks/useTablet";
import PaketItem from "@/app/(landing)/paket/_components/PaketItem";

const Beranda = () => {
  const tabletView = useTablet();
  const desktopView = useDesktop();

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },

    slides: {
      perView: 1,
      spacing: 10,
    },
    initial: 0,
  });

  const [refPaket] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    initial: 0,
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [refTestimoni, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 8,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <>
      {/* Banner */}
      <div className="relative flex h-72 w-full items-center">
        <div className="relative h-full w-full overflow-hidden bg-[#1A69F0]">
          {/*  Background for Banner */}
          <div className="absolute bottom-0 right-0 top-11 z-0 overflow-hidden md:h-full md:w-full  ">
            <Image
              src={"/img/landing-paket/ic-banner-paket.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 h-full w-full lg:scale-150 xl:scale-100"
            />
          </div>
          <div className="absolute bottom-0 top-0 z-0 h-full w-full md:h-full md:w-full  ">
            <Image
              src={"/img/landing-paket/ic-paket.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 left-1/2 top-24 h-[200px] w-[200px]  -translate-x-1/2 transform md:bottom-0 md:left-96 md:right-0 md:top-16 md:h-full md:w-full md:-translate-x-0 lg:scale-150 xl:scale-100"
            />
          </div>
          <div className="absolute left-5 top-5  text-white md:left-24 md:top-1/2 md:-translate-y-1/2 md:transform ">
            <h1 className="text-xl font-bold md:text-2xl">
              Paket Kelas Untukmu!
            </h1>
            <h3 className="text-sm md:text-base ">
              Temukan kelas yang sesuai dengan
              <br /> passionmu untuk menuju ke kedinasan impianmu!
            </h3>
          </div>
        </div>
      </div>

      {/* Paket */}
      <div className="mb-8 mt-8 h-full w-full px-2 md:mb-24 md:px-0 lg:mt-16 lg:px-10 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-sm font-medium text-[#0D0D68] md:text-lg lg:text-xl">
            Paket Unggulan Teratas
          </h4>
          <h2 className="mt-1 text-xs font-semibold leading-tight text-[#1A69F0] md:max-w-4xl md:text-center md:text-xl lg:text-xl">
            Pilih Paket Unggulan untuk Meningkatkan Ilmu
          </h2>
        </div>
        {/* produk card and search */}
        <div className="relative mt-5 md:px-20 lg:mt-10 lg:flex lg:w-full lg:items-center lg:justify-center lg:px-24">
          <div className="relative flex flex-col items-center justify-center gap-2 ">
            {/* search and filter container */}
            <div className="relative flex w-[90%] flex-col items-center justify-between  md:flex-row ">
              {/* filter dropdown */}
              <form className="relative bottom-4 w-[100%] md:w-[30%]">
                <label
                  htmlFor="jenis-modul"
                  className="mb-2 block text-xs font-medium text-gray-900 dark:text-white md:text-sm"
                >
                  Jenis Modul
                </label>
                <select
                  id="jenis-modul"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:text-sm"
                  defaultValue="all"
                >
                  <option value="all">All Jenis Modul</option>
                  <option value="SKD">Paket SKD</option>
                  <option value="matematika">Paket Matematika</option>
                </select>
              </form>

              {/* search */}
              <form className="flex w-[100%] items-center md:w-[65%]">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:text-sm"
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="ms-2 inline-flex items-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="h-4 w-4 md:me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>

                  <h1 className="hidden md:block md:text-sm">Search</h1>
                </button>
              </form>
            </div>

            {desktopView ? (
              <div className="grid grid-cols-3 gap-4  ">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index}>
                    <PaketItem />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3  ">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index}>
                      <PaketItem />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F0F0F0] ">
        <div className="px-2 md:px-10 lg:px-20 xl:px-32">
          <div className="flex flex-col justify-between gap-x-4 py-14 text-sm lg:flex-row lg:text-base">
            <div className="lg:max-w-[280px] xl:max-w-xs">
              <Image
                src={"/img/img-logo.png"}
                alt="img-logo"
                width={90}
                height={70}
              />
              <p className="mt-5 text-[#888888] ">
                Website untuk belajar seputar sekolah kedinasan bersama mentor -
                mentor yang berpengalaman
              </p>
              <div className="mt-4 flex items-center gap-x-2 lg:mt-7 lg:gap-x-4">
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4f4f4f"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#ff0000]"
                  >
                    <path d="M9.69361 15.3172L15.625 11.8887L9.69361 8.4601V15.3172ZM22.905 6.36867C23.0536 6.90581 23.1564 7.62581 23.225 8.5401C23.305 9.45439 23.3393 10.243 23.3393 10.9287L23.4079 11.8887C23.4079 14.3915 23.225 16.2315 22.905 17.4087C22.6193 18.4372 21.9564 19.1001 20.9279 19.3858C20.3907 19.5344 19.4079 19.6372 17.8993 19.7058C16.4136 19.7858 15.0536 19.8201 13.7965 19.8201L11.9793 19.8887C7.19076 19.8887 4.20791 19.7058 3.03077 19.3858C2.00221 19.1001 1.33935 18.4372 1.05364 17.4087C0.905066 16.8715 0.802209 16.1515 0.733638 15.2372C0.653638 14.323 0.619352 13.5344 0.619352 12.8487L0.550781 11.8887C0.550781 9.38581 0.733638 7.54581 1.05364 6.36867C1.33935 5.3401 2.00221 4.67724 3.03077 4.39153C3.56792 4.24296 4.55077 4.1401 6.05934 4.07153C7.54505 3.99153 8.90504 3.95724 10.1622 3.95724L11.9793 3.88867C16.7679 3.88867 19.7507 4.07153 20.9279 4.39153C21.9564 4.67724 22.6193 5.3401 22.905 6.36867Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#2447F9]"
                  >
                    <path d="M12.8224 3.97364C13.4062 3.9714 13.9899 3.97727 14.5735 3.99124L14.7287 3.99684C14.9079 4.00324 15.0847 4.01124 15.2983 4.02084C16.1494 4.06084 16.7302 4.19523 17.2398 4.39283C17.7678 4.59602 18.2125 4.87121 18.6573 5.31599C19.064 5.71567 19.3787 6.19912 19.5797 6.73275C19.7773 7.24233 19.9116 7.82391 19.9516 8.67508C19.9612 8.88787 19.9692 9.06547 19.9756 9.24466L19.9804 9.39986C19.9947 9.98319 20.0008 10.5667 19.9988 11.1502L19.9996 11.747V12.7949C20.0016 13.3787 19.9955 13.9625 19.9812 14.5461L19.9764 14.7013C19.97 14.8805 19.962 15.0573 19.9524 15.2709C19.9124 16.122 19.7765 16.7028 19.5797 17.2124C19.3794 17.7466 19.0646 18.2304 18.6573 18.6299C18.2573 19.0366 17.7736 19.3513 17.2398 19.5523C16.7302 19.7499 16.1494 19.8843 15.2983 19.9243C15.0847 19.9339 14.9079 19.9419 14.7287 19.9483L14.5735 19.9531C13.9899 19.9673 13.4062 19.9735 12.8224 19.9715L12.2256 19.9723H11.1785C10.5947 19.9743 10.011 19.9681 9.42738 19.9539L9.27219 19.9491C9.08229 19.9422 8.89243 19.9342 8.70262 19.9251C7.85146 19.8851 7.27069 19.7491 6.76032 19.5523C6.22649 19.3518 5.74296 19.037 5.34359 18.6299C4.93645 18.2302 4.62141 17.7464 4.42044 17.2124C4.22285 16.7028 4.08846 16.122 4.04846 15.2709C4.03955 15.081 4.03155 14.8912 4.02446 14.7013L4.02046 14.5461C4.00571 13.9625 3.99905 13.3787 4.00046 12.7949V11.1502C3.99823 10.5667 4.0041 9.98319 4.01806 9.39986L4.02366 9.24466C4.03006 9.06547 4.03806 8.88787 4.04766 8.67508C4.08766 7.82311 4.22205 7.24313 4.41964 6.73275C4.62073 6.19886 4.93638 5.71554 5.34439 5.31679C5.74349 4.90941 6.22672 4.59408 6.76032 4.39283C7.27069 4.19523 7.85066 4.06084 8.70262 4.02084L9.27219 3.99684L9.42738 3.99284C10.0107 3.9781 10.5942 3.97143 11.1777 3.97284L12.8224 3.97364ZM12.0001 7.9735C11.4701 7.96601 10.9439 8.06392 10.4521 8.26155C9.96031 8.45918 9.5127 8.75258 9.13527 9.12471C8.75785 9.49684 8.45815 9.94027 8.25359 10.4292C8.04903 10.9182 7.94369 11.4429 7.94369 11.973C7.94369 12.503 8.04903 13.0277 8.25359 13.5167C8.45815 14.0057 8.75785 14.4491 9.13527 14.8212C9.5127 15.1934 9.96031 15.4868 10.4521 15.6844C10.9439 15.882 11.4701 15.9799 12.0001 15.9724C13.0609 15.9724 14.0782 15.551 14.8283 14.8009C15.5784 14.0508 15.9998 13.0334 15.9998 11.9726C15.9998 10.9117 15.5784 9.89436 14.8283 9.14424C14.0782 8.39412 13.0609 7.9735 12.0001 7.9735ZM12.0001 9.57345C12.3188 9.56758 12.6356 9.62529 12.9318 9.74321C13.2281 9.86113 13.4978 10.0369 13.7254 10.2603C13.9529 10.4836 14.1337 10.7501 14.2571 11.0441C14.3805 11.3381 14.4441 11.6537 14.4441 11.9726C14.4442 12.2914 14.3807 12.6071 14.2574 12.9011C14.1341 13.1951 13.9534 13.4617 13.726 13.6851C13.4985 13.9085 13.2288 14.0844 12.9326 14.2024C12.6364 14.3204 12.3196 14.3783 12.0009 14.3725C11.3644 14.3725 10.7539 14.1196 10.3039 13.6696C9.85382 13.2195 9.60097 12.6091 9.60097 11.9726C9.60097 11.3361 9.85382 10.7256 10.3039 10.2756C10.7539 9.8255 11.3644 9.57265 12.0009 9.57265L12.0001 9.57345ZM16.1998 6.77355C15.9418 6.78387 15.6977 6.89366 15.5188 7.07991C15.3398 7.26616 15.2399 7.51443 15.2399 7.77271C15.2399 8.03099 15.3398 8.27926 15.5188 8.46551C15.6977 8.65176 15.9418 8.76155 16.1998 8.77188C16.465 8.77188 16.7194 8.66652 16.9069 8.47899C17.0944 8.29146 17.1998 8.03712 17.1998 7.77191C17.1998 7.5067 17.0944 7.25236 16.9069 7.06483C16.7194 6.8773 16.465 6.77195 16.1998 6.77195V6.77355Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#2447F9]"
                  >
                    <path d="M16.2003 6.45393C15.5927 5.76026 15.2579 4.86943 15.2581 3.94727H12.5114V14.9695C12.4903 15.566 12.2384 16.1309 11.809 16.5454C11.3796 16.9599 10.8061 17.1916 10.2092 17.1917C8.94701 17.1917 7.89813 16.1606 7.89813 14.8806C7.89813 13.3517 9.37368 12.205 10.8937 12.6762V9.86727C7.82702 9.45838 5.14258 11.8406 5.14258 14.8806C5.14258 17.8406 7.59591 19.9473 10.2003 19.9473C12.9914 19.9473 15.2581 17.6806 15.2581 14.8806V9.28949C16.3719 10.0894 17.7091 10.5185 19.0803 10.5162V7.76949C19.0803 7.76949 17.4092 7.84949 16.2003 6.45393Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#1877F2]"
                  >
                    <path d="M20.001 12.049C20.001 7.60355 16.4194 4 12.002 4C7.58253 4.001 4.00098 7.60355 4.00098 12.05C4.00098 16.0665 6.92661 19.3961 10.7501 20V14.3757H8.72039V12.05H10.7521V10.2752C10.7521 8.25847 11.947 7.14461 13.7738 7.14461C14.6496 7.14461 15.5645 7.30159 15.5645 7.30159V9.28134H14.5557C13.5628 9.28134 13.2528 9.90226 13.2528 10.5392V12.049H15.4705L15.1166 14.3747H13.2518V19.999C17.0753 19.3951 20.001 16.0655 20.001 12.049Z" />
                  </svg>
                </Link>
                <Link href={"#"} target="blank" className="inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F4F4F"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-[#0A66C2]"
                  >
                    <path d="M7.43821 4.77857C7.43798 5.25004 7.25046 5.7021 6.91691 6.03532C6.58336 6.36853 6.1311 6.55559 5.65962 6.55536C5.18815 6.55512 4.73608 6.36761 4.40286 6.03406C4.06964 5.70051 3.88258 5.24826 3.88281 4.77679C3.88305 4.30532 4.07057 3.85325 4.40412 3.52004C4.73767 3.18683 5.18993 2.99976 5.6614 3C6.13288 3.00024 6.58495 3.18775 6.91817 3.5213C7.25138 3.85484 7.43845 4.3071 7.43821 4.77857ZM7.49154 7.87173H3.93614V19H7.49154V7.87173ZM13.1091 7.87173H9.57145V19H13.0735V13.1603C13.0735 9.90717 17.3133 9.60497 17.3133 13.1603V19H20.8243V11.9515C20.8243 6.46736 14.549 6.6718 13.0735 9.36498L13.1091 7.87173Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:justify-between lg:gap-8 xl:gap-4 ">
              <div>
                <h3 className="text-lg font-bold text-[#334155]">Company</h3>
                <ul className="mt-3 flex flex-col gap-y-2 text-[#888888] lg:mt-5">
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Hubungi Kami
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Mentor
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#334155]">Product</h3>
                <ul className="mt-3 flex flex-col gap-y-2 text-[#888888] lg:mt-5">
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Paket Bimbel
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Modul
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold text-[#334155]">Support</h3>
                <ul className="mt-3 flex flex-col gap-y-2 text-[#888888] lg:mt-5">
                  <li>
                    <Link href={"#"} className="hover:text-[#2447F9]">
                      Support 24/7
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold text-[#334155]">Office</h3>
                <div className="mt-3 flex flex-col gap-y-2 text-[#888888] lg:mt-5">
                  <Link href={"#"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D0D68] transition duration-300 group-hover:bg-[#2447F9]">
                        <Image
                          src={"/icon/ic-office-vctr.svg"}
                          width={15}
                          height={18}
                          style={{ objectFit: "contain" }}
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9]">
                        PT. Civil Servant Warrior
                      </p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D0D68] transition duration-300 group-hover:bg-[#2447F9]">
                        <Image
                          src={"/icon/ic-map.svg"}
                          width={14}
                          height={21}
                          style={{ objectFit: "contain" }}
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9]">
                        Jakarta Selatan, Indonesia
                      </p>
                    </div>
                  </Link>
                  <Link target="blank" href={"https://wa.me/082246550661"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D0D68] transition duration-300 group-hover:bg-[#2447F9]">
                        <Image
                          src={"/icon/ic-wa.svg"}
                          width={16}
                          height={16}
                          style={{ objectFit: "contain" }}
                          alt="ic-office"
                        />
                      </div>
                      <p className="group-hover:text-[#2447F9]">
                        +6282246550661
                      </p>
                    </div>
                  </Link>
                  <Link target="blank" href={"mailto:wstatistical@gmail.com"}>
                    <div className="group flex items-center gap-x-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D0D68] transition duration-300 group-hover:bg-[#2447F9]">
                        <Image
                          src={"/icon/ic-mail-2.svg"}
                          width={16}
                          height={13}
                          style={{ objectFit: "contain" }}
                          alt="ic-office"
                        />
                      </div>
                      <p className="transition duration-300 group-hover:text-[#2447F9]">
                        wstatistical@gmail.com
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t border-[#B0B0B0] px-2 py-3 text-center text-xs text-[#888888] md:px-10 lg:justify-between lg:px-20 xl:px-32 xl:text-sm">
          <h4>
            © 2020 - 2024 Civil Servant Warrior | Merek dagang dari PT.
            Pilihanmu Indonesia{" "}
          </h4>
          <div className="hidden gap-x-2 lg:flex">
            <h4 className="hover:text-[#2447F9]">
              <Link href={"#"}>Kebijakan Privasi</Link>
            </h4>
            <span>|</span>
            <h4 className="hover:text-[#2447F9]">
              <Link href={"#"}>Syarat dan Ketentuan Umum</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
