import React from "react";
import MainLayout from "../components/MainLayout";

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="flex">
        <div className="w-1/2">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src="/logo-csw.png"
              className={`mx-auto my-2.5 object-cover w-auto h-20 md:w-28 xl:w-32 2xl:w-44`}
              alt="Logo CSW"
            />
            <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in dengan
            </h2>
          </div>

          <div className="flex justify-evenly">
            <div className="w-[15%] h-[15%]">
              <img
                src="/img/Facebook.png"
                className={`mx-auto my-2.5 object-cover w-[75%] h-50`}
                alt="Logo CSW"
              />
            </div>
            <div className="w-[15%] h-[15%]">
              <img
                src="/img/Google.png"
                className={`mx-auto my-2.5 object-cover w-[75%] h-50`}
                alt="Logo CSW"
              />
            </div>
          </div>

          <div className="flex w-[75%] mx-auto items-center">
            <div className="flex-grow h-px bg-black"></div>
            <span className="px-3 text-black text-center">atau</span>
            <div className="flex-grow h-px bg-black"></div>
          </div>

          <div className="mt-[3%] sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-[1%]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-1%">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

                <a href="#" className="text-indigo-600 hover:underline">
                  Lupa Password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-[5%] text-center text-sm text-gray-500">
              Belum memiliki akun?
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Daftar
              </a>
            </p>
          </div>
        </div>

        {/* <div className="w-1/2">
          <img
            src="/img/SlideLogin.png"
            className={`mx-auto object-cover w-full h-auto`}
            alt="Logo CSW"
          />
        </div> */}
      </div>
    </MainLayout>
  );
};

export default LoginPage;
