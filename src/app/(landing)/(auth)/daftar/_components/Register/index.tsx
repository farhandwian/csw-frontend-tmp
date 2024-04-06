"use client";
import RegisterForm from "@/components/Forms/RegisterForm";
import HeroImage from "@/components/HeroImage";
import Image from "next/image";
const RegisterSection = () => {
  return (
    <div className="relative flex w-full">
      <div className="relative flex w-full flex-col md:flex-row">
        <div className="my-auto flex h-[50%] w-full items-center justify-center pt-10  md:h-screen md:w-1/2 md:pt-24">
          <Image
            src={"/image/bg-register.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="img-login"
            className="h-[13.375rem] w-[14.375rem] object-fill md:h-full md:w-full"
          />
        </div>
        <div className="relative mt-5 flex w-full flex-col justify-center px-8 md:w-1/2 md:pb-10 md:pl-16 md:pt-3">
          <div className="max-w-xl">
            <h3 className="text-base font-semibold md:text-3xl">
              Buat Mimpimu Menjadi Kenyataan
            </h3>
            <p className="mt-2 font-normal text-[#5E5252]">
              Yuk Daftarkan Akunmu Segera !
            </p>
          </div>
          <div className="mt-6">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
