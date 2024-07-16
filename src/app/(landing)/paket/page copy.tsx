"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useDesktop from "@/hooks/useDesktop";
import useTablet from "@/hooks/useTablet";
import PaketItem from "@/app/(landing)/paket/_components/PaketItem";
import Footer from "@/app/(landing)/_components/Footer";
import { useGetSearchPakets } from "@/hooks/paket/hook";
import { TPaket } from "@/types/home-page";

import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";

const Page = () => {
  const tabletView = useTablet();
  const desktopView = useDesktop();
  const [isOpen, setIsOpen] = useState(false);

  const [filter, setFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  const {
    data: dataPakets,
    isLoading: isLoadingSearchPakets,
    isError: isErrorSearchPakets,
  } = useGetSearchPakets(filter, searchText);

  const [pakets, setPakets] = useState<TPaket[]>(
    dataPakets ? dataPakets.data : [],
  );

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

  useEffect(() => {
    if (dataPakets) {
      setPakets(dataPakets.data);
    }
  }, [dataPakets]);

  const filteredPakets = pakets.filter((paket) => {
    if (filter === "") {
      return true;
    }
    // Filter berdasarkan module
    if (filter !== "all" && paket.module_name !== filter) {
      return false;
    }
    // Filter berdasarkan pencarian text
    if (
      searchText &&
      !paket.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  if (isErrorSearchPakets) {
    return <ErrorComponent> {errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingSearchPakets) {
    return <Loading> {loadingMessage}</Loading>;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("voice-search") as HTMLInputElement;
    console.log(input.value);
    setSearchText(input.value);
  };

  return (
    <>
      {/* Banner */}
      <div className="relative flex h-72 w-full items-center">
        <div className="relative h-full w-full overflow-hidden bg-[#1A69F0]">
          {/*  Background for Banner */}
          <div className="absolute bottom-0 right-0 top-14 z-0 overflow-hidden md:h-full md:w-full  ">
            <Image
              src={"/img/landing-paket/ic-banner-paket.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 h-full w-full xl:scale-100"
            />
          </div>
          <div className="absolute bottom-0 top-0 z-0 h-full w-full md:h-full md:w-full  ">
            <Image
              src={"/img/landing-paket/ic-paket.svg"}
              width={0}
              height={0}
              alt="ic-banner"
              className="absolute bottom-0 left-1/2 top-24 h-[200px] w-[200px]  -translate-x-1/2 transform md:bottom-0 md:left-96 md:right-0 md:top-16 md:h-full md:w-full md:-translate-x-0 xl:scale-100"
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
                  onChange={handleFilterChange}
                >
                  <option value="all">All Jenis Modul</option>
                  <option value="SKD">Paket SKD</option>
                  <option value="Matematika">Paket Matematika</option>
                </select>
              </form>

              {/* search */}
              {/* <form
                className="flex w-[100%] items-center md:w-[65%]"
                onSubmit={handleSearchSubmit}
              >
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
                    onChange={handleSearchChange}
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
              </form> */}

              <form
                className="flex w-[100%] items-center md:w-[65%]"
                onSubmit={handleSearchSubmit}
              >
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
                    // onChange={handleSearchChange}
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
                {filteredPakets?.map((paket, index) => (
                  <PaketItem props={paket} key={`${index}`} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3  ">
                  {filteredPakets?.map((paket, index) => (
                    <PaketItem props={paket} key={`${index}`} />
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
