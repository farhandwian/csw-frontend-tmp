import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-white px-20 flex justify-between py-16">
        <div className="max-w-[250px]">
          <Image
            src={"/image/img-logo.png"}
            alt="img-logo"
            width={90}
            height={70}
          />
          <p className="mt-5 font-light text-[#1E293B] text-sm">
            Website untuk belajar seputar sekolah kedinasan bersama mentor -
            mentor yang berpengalaman
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#334155] text-lg">Company</h3>
          <ul className="mt-5 font-light text-[#1E293B] flex flex-col gap-y-2">
            <li>Privacy</li>
            <li>Hubungi Kami</li>
            <li>Tentang Kami</li>
            <li>Mentor</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#334155] text-lg">Product</h3>
          <ul className="mt-5 font-light text-[#1E293B] flex flex-col gap-y-2">
            <li>Paket Bimbel</li>
            <li>Modul</li>
            <li>Blockchain</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#334155] text-lg">Support</h3>
          <ul className="mt-5 font-light text-[#1E293B] flex flex-col gap-y-2">
            <li>FAQ</li>
            <li>Support 24/7</li>
            <li>Glossary</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#334155] text-lg">Office</h3>
          <ul className="mt-5 font-light text-[#1E293B] flex flex-col gap-y-2">
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
      <div className="bg-[#6255A5] py-2 px-20 flex justify-between items-center">
        <Image
          src={"/image/img-logo.png"}
          alt="img-logo"
          width={60}
          height={40}
        />
        <h3 className="font-medium text-white">
          © 2022 Civil Servant Warrior. All rights reserved{" "}
        </h3>
        <div className="flex items-center gap-x-3">
          <Image
            src={"/icon/ic-instagram.svg"}
            width={40}
            height={40}
            alt="ic-instagram"
          />
          <Image
            src={"/icon/ic-whatsapp.svg"}
            width={40}
            height={40}
            alt="ic-whatsapp"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
