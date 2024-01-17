/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import Link from "next/link";

const Topnav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      menu: "beranda",
      link: "/",
    },
    {
      id: 2,
      menu: "produk",
      link: "/",
    },
    {
      id: 3,
      menu: "testimoni",
      link: "/",
    },
    {
      id: 4,
      menu: "informasi",
      link: "/",
    },
    {
      id: 5,
      menu: "hubungi kami",
      link: "/",
    },
    {
      id: 6,
      menu: "daftar",
      link: "/register-page",
    },
    {
      id: 7,
      menu: "login",
      link: "/login-page",
    },
  ];

  return (
    <div>
      <div className="shadow fixed w-screen z-30 bg-white">
        <div className="container flex justify-between items-center w-full h-20 px-4 text-white bg-white nav">
          <div>
            <h1 className="text-3xl md:text-5xl font-signature ml-2">
              <a
                className="link-underline link-underline-black"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/logo-csw.png"
                  className={`mx-auto my-2.5 object-cover w-auto h-20 md:w-28 xl:w-32 2xl:w-44 ${
                    nav ? "md:block" : "block"
                  }`}
                  alt="Logo CSW"
                />
              </a>
            </h1>
          </div>

          <ul className={`hidden md:flex ${nav ? "hidden" : "block"}`}>
            {links.slice(0, 5).map(({ id, link, menu }) => (
              <li
                key={id}
                className="nav-links px-2 md:px-4 cursor-pointer capitalize font-medium text-sm md:text-base text-gray-500 hover:scale-105 hover:text-yellow-600 duration-200 link-underline"
              >
                <Link href={link}>{menu}</Link>
              </li>
            ))}
          </ul>

          <ul className={`hidden md:flex ${nav ? "hidden" : "block"}`}>
            {links.slice(5, 6).map(({ id, link, menu }) => (
              <li
                key={id}
                className="nav-links px-2 md:px-4 cursor-pointer capitalize font-medium text-sm md:text-base text-gray-500 hover:scale-105 hover:text-yellow-600 duration-200 link-underline"
              >
                <Link href={link}>
                  <button className="flex items-center capitalize px-3 py-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 duration-200">
                    <FaUserPlus className="mr-2" /> {menu}
                  </button>
                </Link>
              </li>
            ))}
            {links.slice(6, 7).map(({ id, link, menu }) => (
              <li
                key={id}
                className=" px-2 md:px-4 font-medium text-sm md:text-base text-gray-500 hover:scale-105 hover:text-yellow-600 duration-200 link-underline"
              >
                <Link href={link}>
                  <button className="flex nav-links items-center px-3 md:px-4 capitalize py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-200">
                    <FaSignInAlt className="mr-2" /> {menu}
                  </button>
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute pt-36 top-0 left-0 w-full h-72">
              {links.map(({ id, link, menu }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer shadow-md py-2 w-44 text-xl md:text-4xl hover:bg-gray-100 text-black transition  border-b bg-white capitalize text-center border-gray-200"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="h-[80px]"></div>
    </div>
  );
};

export default Topnav;
