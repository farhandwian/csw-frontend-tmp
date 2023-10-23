"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Fungsi untuk menutup sidebar saat pengguna mengklik di luar
    const closeSidebarOnOutsideClick = (e: any) => {
      if (isOpen && !e.target.closest(".sidebar")) {
        setIsOpen(false);
      }
    };

    // Tambahkan event listener saat komponen Sidebar dipasang
    if (isOpen) {
      document.addEventListener("click", closeSidebarOnOutsideClick);
    }

    // Hapus event listener saat komponen Sidebar dilepas
    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="md:flex">
      <aside
        className={`bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">My Sidebar</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="mb-4">
              <Link href="/">
                <p className="block text-white hover-text-gray-300">Home</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/about">
                <p className="block text-white hover-text-gray-300">About</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact">
                <p className="block text-white hover-text-gray-300">Contact</p>
              </Link>
            </li>
            {/* Tambahkan menu lainnya sesuai kebutuhan */}
          </ul>
        </nav>
      </aside>
      <div className="md:hidden">
        <button className="text-black mt-2 ml-2" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
