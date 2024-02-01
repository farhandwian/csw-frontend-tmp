import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] ">
      <div className="px-2 md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col lg:flex-row justify-between py-14 gap-x-4 text-sm lg:text-base">
          <div className="lg:max-w-[280px] xl:max-w-xs">
            <Image
              src={"/image/img-logo.png"}
              alt="img-logo"
              width={90}
              height={70}
            />
            <p className="mt-5 text-[#888888] ">
              Website untuk belajar seputar sekolah kedinasan bersama mentor -
              mentor yang berpengalaman
            </p>
            <div className="flex items-center gap-x-2 lg:gap-x-4 mt-4 lg:mt-7">
              <Image
                src={"/icon/ic-youtube.svg"}
                alt="ic-youtube"
                width={24}
                height={24}
              />
              <Image
                src={"/icon/ic-ig.svg"}
                alt="ic-ig"
                width={24}
                height={24}
              />
              <Image
                src={"/icon/ic-tiktok.svg"}
                alt="ic-tiktok"
                width={24}
                height={24}
              />
              <Image
                src={"/icon/ic-fb.svg"}
                alt="ic-fb"
                width={24}
                height={24}
              />
              <Image
                src={"/icon/ic-linked.svg"}
                alt="ic-linked"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between w-full gap-4 lg:gap-8 xl:gap-4 ">
            <div>
              <h3 className="font-bold text-[#334155] text-lg">Company</h3>
              <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                <li>Privacy</li>
                <li>Hubungi Kami</li>
                <li>Tentang Kami</li>
                <li>Mentor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#334155] text-lg">Product</h3>
              <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                <li>Paket Bimbel</li>
                <li>Modul</li>
                <li>Blockchain</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold text-[#334155] text-lg">Support</h3>
              <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                <li>FAQ</li>
                <li>Support 24/7</li>
                <li>Glossary</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold text-[#334155] text-lg">Office</h3>
              <ul className="mt-3 lg:mt-5 text-[#888888] flex flex-col gap-y-2">
                <li className="flex items-center gap-x-2">
                  <Image
                    src={"/icon/ic-office.svg"}
                    width={40}
                    height={40}
                    alt="ic-office"
                  />
                  <p>PT. Civil Servant Warrior</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <Image
                    src={"/icon/ic-maps.svg"}
                    width={40}
                    height={40}
                    alt="ic-maps"
                  />
                  <p>Jakarta, Indonesia</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <Image
                    src={"/icon/ic-phone.svg"}
                    width={40}
                    height={40}
                    alt="ic-phone"
                  />
                  <p>+628917393780</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <Image
                    src={"/icon/ic-mail.svg"}
                    width={40}
                    height={40}
                    alt="ic-mail"
                  />
                  <p>csw@mail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#B0B0B0] flex py-3 justify-center lg:justify-between text-[#888888] text-xs xl:text-sm px-2 md:px-10 lg:px-20 xl:px-32 text-center">
        <h4>
          © 2020 - 2023 Civil Servant Warrior | Merek dagang dari PT. Pilihanmu
          Indonesia{" "}
        </h4>
        <div className="hidden lg:flex gap-x-2">
          <h4>Kebijakan Privasi</h4>
          <span>|</span>
          <h4>Syarat dan Ketentuan Umum</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
