import React from "react";
import logo from "@/public/image/img-logo.png";
import Image from "next/image";

const NavbarStudent = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between bg-[#ffffff] border border-solid border-[#E5E7EB] px-24 py-4">
      <div className="flex items-center">
        <div className="w-16 ">
          <Image src={logo} alt="logo" />
        </div>
        <div className="font-semibold text-xl ml-4">Civil Servant Warrior</div>
      </div>
      <div className="h-14 w-14 relative">
        <Image
          src={"/foto-profil.png"}
          alt="Profile"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default NavbarStudent;
