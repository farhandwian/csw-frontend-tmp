"use client";
import MainLayout from "@/app/components/MainLayout";
import { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (email.includes("test")) {
      setSuccessMessage(
        "Kami telah mengirimkan link atur ulang password ke email Anda"
      );
      setError(null);
    } else {
      setError("Email not found");
      setSuccessMessage(null);
    }
  };

  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen w[100%] flex flex-col items-center pt-[2%]">
        {successMessage && (
          <div className="w-[35%] mb-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded relative z-10">
            <button
              onClick={() => setSuccessMessage(null)}
              className="absolute right-3 top-3 text-green-500 hover:text-green-700"
            >
              ×
            </button>
            {successMessage}
          </div>
        )}
        <div className="mb-6 w-[35%]">
          <img
            src="/logo-csw.png"
            alt="Logo"
            className="mx-auto mb-4 w-[30%]"
          />
          <h1 className="text-xl font-bold text-center mb-4">
            Atur Ulang Password Anda
          </h1>
          <p className="text-sm text-center">
            Masukkan email yang Anda daftarkan di website csw dan kami akan
            mengirimkan link atur ulang password
          </p>
        </div>

        <div className="block w-96 bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <input
              className={`w-full p-2 border rounded ${
                error ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Kirim Link Atur Ulang Password
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
