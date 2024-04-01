import LoginForm from "@/components/Forms/LoginForm";
import HeroImage from "@/components/HeroImage";
import Image from "next/image";

import React from "react";

const LoginSection = () => {
  return (
    <div className="relative flex h-[calc(100vh-80px)]">
      <HeroImage
        src={"/image/img-login.png"}
        width={1815}
        height={1815 / (1815 / 1660)}
        alt="img-login"
        classNameWrap="px-12"
      />

      <div className="flex h-screen w-1/2 flex-col justify-center bg-white pl-28 pt-14">
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold">
            Selamat Datang di Civil Servant Warrior
          </h3>
          <p className="mt-2 font-medium text-[#5E5252]">
            Sign in untuk belajar dan meraih mimpimu bersama kami
          </p>
        </div>
        <div className="mt-6 max-w-md">
          <LoginForm />

          <div className="relative my-8 flex w-full items-center">
            <div className="w-full flex-auto border-t border-[#D4D4D4] "></div>
            <span className="mx-2 flex-shrink text-[#6F6F6F]">Atau</span>
            <div className="w-full flex-auto border-t border-[#D4D4D4] "></div>
          </div>

          <div className="flex flex-col gap-y-5">
            <button className="flex w-full items-center justify-center rounded-full border border-black py-3">
              <div className="flex items-center gap-x-2">
                <Image
                  src={"/icon/ic-google-color.svg"}
                  alt="ic-google"
                  width={24}
                  height={24}
                />
                <h4 className="font-semibold">Lanjut dengan Google</h4>
              </div>
            </button>
            <button className="flex w-full items-center justify-center rounded-full border border-black py-3">
              <div className="flex items-center gap-x-2">
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
