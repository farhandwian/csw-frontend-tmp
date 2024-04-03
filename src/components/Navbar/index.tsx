import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// tinggi navbar:atau 60px atau 3.75 rem

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const temp = pathName.split("/");
  const rootPathName = "/" + temp[1];
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const navbarItems = [
    { text: "Beranda", href: "/home-page" },
    { text: "Kelas", href: "/kelas" },
    { text: "Mentor", href: "/mentor" },
    { text: "Testimoni", href: "#" },
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
      <nav className="fixed z-50 h-[3.75rem] w-full bg-white px-2 drop-shadow-xl md:px-10 lg:px-16">
        <div className="flex h-[3.75rem] w-full items-center justify-between  ">
          {/* logo */}
          <div className=" flex w-[15%] flex-none">
            <Link href={"/"}>
              <Image
                src={"/img/img-logo.png"}
                width={72}
                height={57}
                alt="img-logo"
                className="h-[50px] w-[65px] lg:h-[57px] lg:w-[72px] 2xl:h-full 2xl:w-full"
              />
            </Link>
          </div>
          {/* hamburge klo mode mobile */}
          <div className="lg:hidden" onClick={handleOpenMenu}>
            <Image
              src={isOpen ? "/icon/ic-close.svg" : "/icon/ic-hamburger.svg"}
              alt={isOpen ? "ic-close" : "ic-hamburger"}
              width={32}
              height={32}
            />
          </div>
          {/* navigasi */}
          <div className="hidden w-[65%] lg:flex lg:flex-none ">
            <ul className="w-full flex-none text-[#909090] md:flex lg:justify-between lg:gap-x-1 lg:text-sm xl:gap-x-4 xl:text-base">
              {navbarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`rounded-full ${
                    rootPathName === item.href
                      ? "border-none bg-[#E9EFFD] "
                      : "hover:text-[#5E5ED0]"
                  } px-3 py-2 hover:text-[#010101] focus:bg-[#E9EFFD] focus:text-[#1D4EDF]`}
                >
                  {item.text}
                </Link>
              ))}
            </ul>
          </div>
          {/* daftar login */}
          <div className="hidden w-[20%]  lg:flex lg:justify-end lg:gap-x-3 lg:text-sm xl:gap-x-5">
            <Link href={"/login"}>
              <button
                className={`${
                  rootPathName === "/login"
                    ? "border-none bg-[#090963] text-white"
                    : "hover:text-[#5E5ED0]"
                } rounded-full border-2 border-solid border-[#090963] px-3 py-2 hover:border-[#5E5ED0]`}
              >
                Masuk
              </button>
            </Link>
            <Link href={"/daftar"}>
              <button
                className={`${
                  rootPathName === "/daftar"
                    ? "border-none bg-[#090963] text-white"
                    : "hover:text-[#5E5ED0]"
                } rounded-full border-2 border-solid border-[#090963] px-3 py-2 hover:border-[#5E5ED0]`}
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
              {navbarItems.map((item, index) => (
                <Link key={index} href={item.href} className="text-sm">
                  {item.text}
                </Link>
              ))}
            </ul>
            {/* datar dan login mode mobile */}
            <div className="mt-5 flex w-full justify-center gap-x-10 md:gap-x-5">
              <Link href={"/login"}>
                <button
                  className={`${
                    rootPathName === "/login"
                      ? "border-none bg-[#090963] text-white"
                      : "hover:text-[#5E5ED0]"
                  } rounded-full border-2 border-solid border-[#090963] p-2 text-sm hover:border-[#5E5ED0]`}
                >
                  Masuk
                </button>
              </Link>
              <Link href={"/daftar"}>
                <button
                  className={`${
                    rootPathName === "/daftar"
                      ? "border-none bg-[#090963] text-white"
                      : "hover:text-[#5E5ED0]"
                  } rounded-full border-2 border-solid border-[#090963] p-2 text-sm hover:border-[#5E5ED0]`}
                >
                  Daftar
                </button>
              </Link>
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
