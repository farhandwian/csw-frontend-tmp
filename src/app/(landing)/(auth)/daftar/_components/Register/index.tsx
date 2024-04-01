"use client";
import RegisterForm from "@/components/Forms/RegisterForm";
import HeroImage from "@/components/HeroImage";

const RegisterSection = () => {
  return (
    <div className="flex py-3">
      <HeroImage
        src={"/image/bg-register.png"}
        width={1815}
        height={1815 / (1815 / 1660)}
        alt="img-register"
        classNameWrap="px-12"
      />
      <div className="flex h-screen w-1/2 flex-col justify-center bg-white px-28 pt-14">
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold">
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
  );
};

export default RegisterSection;
