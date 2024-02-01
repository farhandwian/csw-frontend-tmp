import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-2 drop-shadow-xl fixed w-full bg-white z-50 flex items-center md:justify-center px-2 md:px-10 lg:px-16 xl:px-32">
      <div className="flex items-center justify-between w-full md:gap-x-24 lg:gap-x-0 xl:gap-x-[166px]">
        <div className="flex flex-none items-center">
          <Image
            src={"/image/img-logo.png"}
            width={72}
            height={57}
            alt="img-logo"
            className="w-[80px] h-[60px] lg:w-[72px] lg:h-[57px] xl:w-full xl:h-full"
          />
        </div>

        <div className="lg:hidden">
          <Image
            src={"/icon/ic-hamburger.svg"}
            alt="ic-hamburger"
            width={32}
            height={32}
          />
        </div>

        <div className="hidden lg:flex lg:flex-none">
          <ul className="md:flex w-full flex-none lg:gap-x-5 xl:gap-x-12 lg:text-sm xl:text-base">
            <Link href={"/"}>Beranda</Link>
            <li>Produk</li>
            <li>Testimoni</li>
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
  );
};

export default Navbar;
