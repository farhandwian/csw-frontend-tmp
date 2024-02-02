"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
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
      <nav className="py-2 drop-shadow-xl fixed w-full bg-white z-50 flex items-center md:justify-center px-2 md:px-10 lg:px-16 xl:px-32">
        <div className="flex items-center justify-between w-full md:gap-x-24 lg:gap-x-0 xl:gap-x-10">
          <div className="flex flex-none items-center">
            <Image
              src={"/image/img-logo.png"}
              width={72}
              height={57}
              alt="img-logo"
              className="w-[80px] h-[60px] lg:w-[72px] lg:h-[57px] xl:w-full xl:h-full"
            />
          </div>

          <div className="lg:hidden" onClick={handleOpenMenu}>
            <Image
              src={isOpen ? "/icon/ic-close.svg" : "/icon/ic-hamburger.svg"}
              alt={isOpen ? "ic-close" : "ic-hamburger"}
              width={32}
              height={32}
            />
          </div>

          <div className="hidden lg:flex lg:flex-none">
            <ul className="md:flex w-full flex-none lg:gap-x-5 xl:gap-x-12 lg:text-sm xl:text-base">
              <Link href={"/"}>Beranda</Link>
              <li>Produk</li>
              <Link href={"#testimoni"}>Testimoni</Link>
              <li>Informasi</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-10 lg:text-sm xl:text-base">
            <button>
              <Link href={"/login"}>Masuk</Link>
            </button>
            <button className="text-white bg-[#090963] rounded-full py-4 px-7 lg:py-3 xl:py-4">
              <Link href={"/daftar"}>Daftar</Link>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed z-40 h-screen w-full bg-white overscroll-none overflow-hidden">
          {/* Menu Item Mobile */}
          <div
            className=" flex flex-col items-center justify-center text-center text-xl h-full w-full px-2 md:px-10 relative"
            onClick={() => setIsOpen(false)}
          >
            <ul className="flex flex-col gap-y-4">
              <Link href={"/"}>Beranda</Link>
              <li>Produk</li>
              <Link href="#testimoni">Testimoni</Link>
              <li>Informasi</li>
              <li>Hubungi Kami</li>
            </ul>
            <div className="mt-10 flex justify-between gap-x-2 md:gap-x-5 w-full">
              <button className="py-2 border border-gray-400 rounded-lg w-full">
                <Link href={"/login"}>Masuk</Link>
              </button>
              <button className="py-2 text-white bg-[#090963] rounded-lg w-full">
                <Link href={"/daftar"}>Daftar</Link>
              </button>
            </div>

            <p className="absolute bottom-2 text-xs">
              © 2020 - 2024 Civil Servant Warrior <br /> Merek dagang dari PT.
              Pilihanmu Indonesia
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
