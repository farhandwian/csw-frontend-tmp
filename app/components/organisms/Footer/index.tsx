import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] px-40">
      <div>
        <div className=" flex justify-between py-14">
          <div className="max-w-xs">
            <Image
              src={"/image/img-logo.png"}
              alt="img-logo"
              width={90}
              height={70}
            />
            <p className="mt-5 text-[#888888]">
              Website untuk belajar seputar sekolah kedinasan bersama mentor -
              mentor yang berpengalaman
            </p>
            <div className="mt-7 flex items-center gap-x-4">
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
          <div className="mt-10">
            <h3 className="text-lg font-bold text-[#334155]">Company</h3>
            <ul className="mt-5 flex flex-col gap-y-2 text-[#888888]">
              <li>Privacy</li>
              <li>Hubungi Kami</li>
              <li>Tentang Kami</li>
              <li>Mentor</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold text-[#334155]">Product</h3>
            <ul className="mt-5 flex flex-col gap-y-2 text-[#888888]">
              <li>Paket Bimbel</li>
              <li>Modul</li>
              <li>Blockchain</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold text-[#334155]">Support</h3>
            <ul className="mt-5 flex flex-col gap-y-2 text-[#888888]">
              <li>FAQ</li>
              <li>Support 24/7</li>
              <li>Glossary</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold text-[#334155]">Office</h3>
            <ul className="mt-5 flex flex-col gap-y-2 text-[#888888]">
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
      <div className="flex justify-between border-t border-[#B0B0B0] py-3 text-sm text-[#888888]">
        <h4>
          © 2020 - 2023 Civil Servant Warrior | Merek dagang dari PT. Pilihanmu
          Indonesia{" "}
        </h4>
        <div className="flex gap-x-2">
          <h4>Kebijakan Privasi</h4>
          <span>|</span>
          <h4>Syarat dan Ketentuan Umum</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
