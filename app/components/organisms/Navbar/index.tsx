import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const navbarItems = [
    { text: "Beranda", href: "/" },
    { text: "Produk", href: "/" },
    { text: "Testimoni", href: "#" },
    { text: "Informasi", href: "#" },
    { text: "Hubungi Kami", href: "#" },
  ];

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
            <Link href={"/"}>
              <Image
                src={"/img/img-logo.png"}
                width={72}
                height={57}
                alt="img-logo"
                className="w-[80px] h-[60px] lg:w-[72px] lg:h-[57px] xl:w-full xl:h-full"
              />
            </Link>
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
            <ul className="md:flex w-full flex-none lg:gap-x-5 text-[#909090] xl:gap-x-12 lg:text-sm xl:text-base">
              {navbarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="focus:bg-[#E9EFFD] focus:text-[#1D4EDF] hover:text-[#010101] py-3 px-5 rounded-full"
                >
                  {item.text}
                </Link>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:gap-x-3 xl:gap-x-5 lg:text-sm xl:text-base">
            <Link href={"/login"}>
              <button
                className={`${
                  pathname === "/login"
                    ? "bg-[#090963] text-white border-none"
                    : "hover:text-[#5E5ED0]"
                } rounded-full py-3 px-7 border-solid border-[#090963] border-2 hover:border-[#5E5ED0]`}
              >
                Masuk
              </button>
            </Link>
            <Link href={"/daftar"}>
              <button
                className={`${
                  pathname === "/daftar"
                    ? "bg-[#090963] text-white border-none"
                    : "hover:text-[#5E5ED0]"
                } rounded-full py-3 px-7 border-solid border-[#090963] border-2 hover:border-[#5E5ED0]`}
              >
                Daftar
              </button>
            </Link>
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
