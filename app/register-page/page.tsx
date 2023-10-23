import React from "react";
import MainLayout from "../components/MainLayout";

const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="flex sm:flex-row flex-col justify-center min-h-full bg-white ">
        <div className="w-1/2">
          <img
            src="/img/SlideDaftar.png"
            className={`mx-auto object-cover w-full h-auto`}
            alt="Logo CSW"
          />
        </div>
        <div className="w-1/2 min-h-screen flex justify-center items-center">
          <div className="w-auto">
            <h1 className="text-xl font-bold mb-4 text-center">Registrasi</h1>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-2">Nama</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Masukkan nama"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Kelas</label>
                <select className="w-full p-2 border rounded">
                  <option>Pilih Kelas atau Alumni</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-2">
                  Kecamatan
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Pilih kecamatan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Kabupaten / Kota
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Pilih kabupaten / Kota</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-2">Provinsi</label>
                <select className="w-full p-2 border rounded">
                  <option>Pilih provinsi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">No WA</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Masukkan nomor whatsapp"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                placeholder="Masukkan email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                className="w-full p-2 border rounded"
                type="password"
                placeholder="Masukkan password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Konfirmasi Password
              </label>
              <input
                className="w-full p-2 border rounded"
                type="password"
                placeholder="Masukkan konfirmasi password"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">
                Saya setuju dengan term dan kondisi
              </label>
            </div>

            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Daftar
            </button>

            <p className="text-center mt-4">
              Sudah memiliki akun?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
