import ForgotPassForm from "../../../../../components/Forms/ForgotPassForm";
import HeroImage from "../../../../../components/HeroImage";
import React from "react";

const ForgotPassSection = () => {
  return (
    <div className="flex">
      <HeroImage
        src={"/image/bg-forgot-pass.png"}
        width={3242}
        height={2904}
        alt="img-forgot-pass"
        classNameWrap="px-12"
      />

      <div className="flex h-screen w-1/2 flex-col justify-center bg-white px-28 pt-14">
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold">Atur Ulang Password Anda</h3>
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
