import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Daftar = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <div className="w-1/2  relative">
          <Image
            src={"/image/bg-login.png"}
            width={1000}
            height={700}
            alt="bg-login"
            className="h-screen absolute -z-10"
          />
          <div className="pt-16 flex items-center flex-col justify-center h-screen">
            <Image
              src={"/image/img-daftar.png"}
              width={440}
              height={380}
              alt="img-daftar"
              className="w-[350px] h-[380px]"
            />
            <div className="mt-16 text-white text-center max-w-xl">
              <h2 className="font-semibold text-2xl">
                Buatlah Mimpimu Jadi Kenyataan
              </h2>
              <p className="mt-2">Daftarkan akunmu segera</p>
            </div>
          </div>
          <p className="absolute bottom-2 left-4 text-white text-xs font-light">
            Powered by CSW
          </p>
        </div>

        <div className="w-1/2 max-h-screen pt-20 bg-white flex flex-col items-center justify-center overflow-y-scroll">
          <div>
            <Image
              src={"/image/img-logo.png"}
              height={112}
              width={150}
              alt="img-logo"
            />
            <h4 className="mt-8 font-medium text-[#475569] text-center">
              Registrasi
            </h4>
          </div>

          <div className="w-full mt-4">
            {/* Form */}
            <div className="mt-3 w-full px-16">
              <form action="#" method="POST">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nama
                    </label>
                    <div className="mt-1 \">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Masukkan Nama"
                        required
                        className="block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kelas
                    </label>
                    <div className="mt-1 \">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Pilih kelas atau alumni"
                        required
                        className="block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kecamatan
                    </label>
                    <div className="mt-1 \">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Pilih Kecamatan"
                        required
                        className="block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1 \">
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

                  {/* <div className="flex items-center justify-between">
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
                  </div> */}
                </div>

                {/* <div>
                  <button
                    type="submit"
                    className="mt-8 flex w-full justify-center rounded-md bg-[#5E72E4] px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div> */}
              </form>

              {/* <p className="mt-2 text-center text-sm text-gray-500">
                Belum memiliki akun?
                <Link
                  href="#"
                  className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Daftar
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
