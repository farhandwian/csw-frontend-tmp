import ForgotPassForm from "@/components/molecules/Forms/ForgotPassForm";
import RegisterForm from "@/components/molecules/Forms/RegisterForm";
import HeroImage from "@/components/molecules/HeroImage";
import Image from "next/image";
import React from "react";

const ForgotPassSection = () => {
  return (
    <div className="flex">
      <HeroImage
        src={"/image/bg-register.png"}
        width={1815}
        height={1815 / (1815 / 1660)}
        alt="img-login"
        className="lg:h-[85%] xl:h-[95%] object-cover
          "
      />

      <div className="w-1/2 bg-white h-screen flex flex-col justify-center px-28 pt-14">
        <div className="max-w-xl">
          <h3 className="font-semibold text-3xl">Atur Ulang Password Anda</h3>
          <p className="mt-2 font-normal text-[#5E5252]">
            Masukkan Email Yang Terdaftar Pada Civil Servan Warrior !
          </p>
        </div>
        <div className="mt-6 max-w-md">
          <ForgotPassForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassSection;
