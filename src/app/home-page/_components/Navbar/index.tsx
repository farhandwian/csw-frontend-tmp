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
      <nav className="fixed z-50 flex w-full items-center bg-white px-2 py-2 drop-shadow-xl md:justify-center md:px-10 lg:px-16 xl:px-32">
        <div className="flex w-full items-center justify-between md:gap-x-24 lg:gap-x-0 xl:gap-x-10">
          <div className="flex flex-none items-center">
            <Link href={"/"}>
              <Image
                src={"/img/img-logo.png"}
                width={72}
                height={57}
                alt="img-logo"
                className="h-[60px] w-[80px] lg:h-[57px] lg:w-[72px] xl:h-full xl:w-full"
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
            <ul className="w-full flex-none text-[#909090] md:flex lg:gap-x-5 lg:text-sm xl:gap-x-12 xl:text-base">
              {navbarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="rounded-full px-5 py-3 hover:text-[#010101] focus:bg-[#E9EFFD] focus:text-[#1D4EDF]"
                >
                  {item.text}
                </Link>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:gap-x-3 lg:text-sm xl:gap-x-5 xl:text-base">
            <Link href={"/login"}>
              <button
                className={`${
                  pathname === "/login"
                    ? "border-none bg-[#090963] text-white"
                    : "hover:text-[#5E5ED0]"
                } rounded-full border-2 border-solid border-[#090963] px-7 py-3 hover:border-[#5E5ED0]`}
              >
                Masuk
              </button>
            </Link>
            <Link href={"/daftar"}>
              <button
                className={`${
                  pathname === "/daftar"
                    ? "border-none bg-[#090963] text-white"
                    : "hover:text-[#5E5ED0]"
                } rounded-full border-2 border-solid border-[#090963] px-7 py-3 hover:border-[#5E5ED0]`}
              >
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed z-40 h-screen w-full overflow-hidden overscroll-none bg-white">
          {/* Menu Item Mobile */}
          <div
            className=" relative flex h-full w-full flex-col items-center justify-center px-2 text-center text-xl md:px-10"
            onClick={() => setIsOpen(false)}
          >
            <ul className="flex flex-col gap-y-4">
              <Link href={"/"}>Beranda</Link>
              <li>Produk</li>
              <Link href="#testimoni">Testimoni</Link>
              <li>Informasi</li>
              <li>Hubungi Kami</li>
            </ul>
            <div className="mt-10 flex w-full justify-between gap-x-2 md:gap-x-5">
              <button className="w-full rounded-lg border border-gray-400 py-2">
                <Link href={"/login"}>Masuk</Link>
              </button>
              <button className="w-full rounded-lg bg-[#090963] py-2 text-white">
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
