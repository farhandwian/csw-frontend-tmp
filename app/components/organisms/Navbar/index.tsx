import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-2 drop-shadow-xl fixed w-full bg-white z-50 flex items-center justify-center">
      <div className="flex items-center gap-x-24 xl:gap-x-[166px] ">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/image/img-logo.png"}
              width={72}
              height={57}
              alt="img-logo"
              // className="lg:w-20 lg:h-16 xl:w-[103px] xl:h-[81px]"
            />
          </Link>
        </div>
        <div>
          <ul className="flex lg:gap-x-5 xl:gap-x-12">
            <Link href={"/"}>Beranda</Link>

            <li>Produk</li>
            <li>Testimoni</li>
            <li>Informasi</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
        <div className="flex gap-x-10">
          <button>
            <Link href={"/login"}>Masuk</Link>
          </button>
          <button className="text-white bg-[#090963] rounded-full py-4 px-7">
            <Link href={"/daftar"}>Daftar</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
