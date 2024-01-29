import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/2 h-screen flex items-center justify-center pt-24 pl-3">
          <Image
            src={"/image/img-login.png"}
            width={907}
            height={830}
            alt="img-login"
            className="lg:h-[85%] xl:h-[95%] w-[700px]"
          />
        </div>

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
            <form action="#" method="POST">
              <div className="space-y-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Alamat Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Masukkan Email Anda"
                      required
                      className="bg-[#F8F8F8] block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-1 ">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Masukkan Password Anda"
                      required
                      className="bg-[#F8F8F8] block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full justify-center bg-[#090963] py-3 rounded-full text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lanjut
              </button>

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
            </form>
          </div>
        </div>
        {/* <div className="w-1/2 pt-20 bg-white flex flex-col items-center justify-center">
          <Image
            src={"/image/img-logo.png"}
            height={112}
            width={150}
            alt="img-logo"
          />
          <h4 className="mt-8 font-medium text-[#475569]">Sign in dengan</h4>
          
          <div className="mt-5 flex gap-x-5">
            <div className="bg-white w-[80px] h-[60px] drop-shadow-xl rounded-[10px] flex items-center justify-center">
              <Image
                src={"/icon/ic-facebook.svg"}
                width={50}
                height={50}
                alt="ic-facebook"
                className="w-10 h-10"
              />
            </div>
            <div className="bg-white w-[80px] h-[60px] drop-shadow-xl rounded-[10px] flex items-center justify-center">
              <Image
                src={"/icon/ic-google.svg"}
                width={50}
                height={50}
                alt="ic-google"
                className="w-9 h-9"
              />
            </div>
          </div>

          <div className="max-w-md">
            <div className="relative flex mt-5 items-center ">
              <div className="w-32 border-t border-black "></div>
              <span className="flex-shrink mx-2">atau</span>
              <div className="w-32 border-t border-black "></div>
            </div>

            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST">
                <div className="space-y-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Masukkan Email"
                        required
                        className="block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Masukkan Password"
                        required
                        className="block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                      <span className="ml-2 text-gray-700">Ingat saya</span>
                    </label>

                    <Link
                      href="/login-page/reset-password"
                      className="text-indigo-600 hover:underline"
                    >
                      Lupa Password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mt-8 flex w-full justify-center rounded-md bg-[#5E72E4] px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <p className="mt-2 text-center text-sm text-gray-500">
                Belum memiliki akun?
                <Link
                  href="#"
                  className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="w-1/2 max-h-screen relative">
          <Image
            src={"/image/bg-login.png"}
            width={1000}
            height={700}
            alt="bg-login"
            className="h-screen absolute -z-10"
          />
          <div className="pt-16 flex items-center flex-col justify-center h-screen">
            <Image
              src={"/image/img-login.png"}
              width={480}
              height={380}
              alt="img-login"
              className="w-[400px] h-[380px]"
            />
            <div className="mt-16 text-white text-center max-w-xl">
              <h2 className="font-semibold text-2xl">
                Selamat Datang di Civil Servant Warrior
              </h2>
              <p className="mt-2">
                Sign in untuk belajar dan meraih mimpimu bersama kami
              </p>
            </div>
          </div>
          <p className="absolute bottom-2 right-4 text-white text-xs font-light">
            Powered by CSW
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
