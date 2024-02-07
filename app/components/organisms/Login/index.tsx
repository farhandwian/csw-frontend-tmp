import LoginForm from "../../Forms/LoginForm";
import HeroImage from "../../HeroImage";
import Image from "next/image";

import React from "react";

const LoginSection = () => {
  return (
    <div className="flex">
      <HeroImage
        src={"/image/img-login.png"}
        width={1815}
        height={1815 / (1815 / 1660)}
        alt="img-login"
        className="lg:h-[85%] xl:h-[95%] object-cover"
      />

      <div className="w-1/2 bg-white h-screen flex flex-col justify-center pl-28 pt-14">
        <div className="max-w-xl">
          <h3 className="font-semibold text-3xl">
            Selamat Datang di Civil Servant Warrior
          </h3>
          <p className="mt-2 font-medium text-[#5E5252]">
            Sign in untuk belajar dan meraih mimpimu bersama kami
          </p>
        </div>
        <div className="mt-6 max-w-md">
          <LoginForm />

          <div className="relative flex my-8 items-center w-full">
            <div className="w-full flex-auto border-t border-[#D4D4D4] "></div>
            <span className="flex-shrink mx-2 text-[#6F6F6F]">Atau</span>
            <div className="w-full flex-auto border-t border-[#D4D4D4] "></div>
          </div>

          <div className="flex flex-col gap-y-5">
            <button className="py-3 w-full border border-black rounded-full flex items-center justify-center">
              <div className="flex gap-x-2 items-center">
                <Image
                  src={"/icon/ic-google-color.svg"}
                  alt="ic-google"
                  width={24}
                  height={24}
                />
                <h4 className="font-semibold">Lanjut dengan Google</h4>
              </div>
            </button>
            <button className="py-3 w-full border border-black rounded-full flex items-center justify-center">
              <div className="flex gap-x-2 items-center">
                <Image
                  src={"/icon/ic-fb-color.svg"}
                  alt="ic-facebook"
                  width={20}
                  height={20}
                />
                <h4 className="font-semibold">Lanjut dengan Facebook</h4>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
