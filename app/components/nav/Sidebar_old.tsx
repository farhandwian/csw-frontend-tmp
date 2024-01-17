// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   MdDashboard,
//   MdAssignmentAdd,
//   MdLibraryBooks,
//   MdListAlt,
//   MdBarChart,
//   MdFiberSmartRecord,
//   MdEmojiPeople,
//   MdDateRange,
//   MdLogout,
//   MdSettings,
// } from "react-icons/md";
// import { FiMenu } from "react-icons/fi";
// import React from "react";
// import Image from "next/image";
// import StudentLayout from "../StudentLayout";

// interface SidebarLayoutProps {
//   title?: string;
//   activePage?: string;
// }

// const Sidebar_old: React.FC<SidebarLayoutProps> = ({ activePage, title }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const links = [
//     {
//       id: 1,
//       menu: "dashboard",
//       link: "/student",
//       gambar: MdDashboard,
//     },
//     {
//       id: 2,
//       menu: "uji kemampuan",
//       link: "/",
//       gambar: MdAssignmentAdd,
//     },
//     {
//       id: 3,
//       menu: "modul",
//       link: "/student/modul",
//       gambar: MdLibraryBooks,
//     },
//     {
//       id: 4,
//       menu: "try out",
//       link: "/",
//       gambar: MdListAlt,
//     },
//     {
//       id: 5,
//       menu: "grafik",
//       link: "/",
//       gambar: MdBarChart,
//     },
//     {
//       id: 6,
//       menu: "record zoom",
//       link: "/",
//       gambar: MdFiberSmartRecord,
//     },
//     {
//       id: 7,
//       menu: "profile mentor",
//       link: "/login-page",
//       gambar: MdEmojiPeople,
//     },
//     {
//       id: 8,
//       menu: "jadwal",
//       link: "/login-page",
//       gambar: MdDateRange,
//     },
//     {
//       id: 9,
//       menu: "pengaturan",
//       link: "/login-page",
//       gambar: MdSettings,
//     },
//     {
//       id: 10,
//       menu: "logout",
//       link: "/login-page",
//       gambar: MdLogout,
//     },
//   ];

//   useEffect(() => {
//     // Fungsi untuk menutup sidebar saat pengguna mengklik di luar
//     const closeSidebarOnOutsideClick = (e: any) => {
//       if (isOpen && !e.target.closest(".sidebar")) {
//         setIsOpen(false);
//       }
//     };
//   }, [isOpen]);

//   return (
//     <div className="md:flex relative">
//       <div className="shadow fixed w-screen z-30 bg-white">
//         <div className="container flex justify-between items-center w-full h-20 px-4 text-white bg-white nav">
//           <div className=" text-black">
//             <button className="text-black mt-2 ml-2" onClick={toggleSidebar}>
//               <FiMenu size={24} />
//             </button>
//           </div>
//           <div className="md:flex items-center">
//             <Image
//               width={50}
//               height={50}
//               src="/logo-csw.png"
//               className={`mx-auto my-2.5 object-cover w-16 md:w-20`}
//               alt="Logo CSW"
//             />
//             <p className="text-black font-semibold capitalize hidden md:block">
//               Civil Servant Warrior
//             </p>
//           </div>
//         </div>
//       </div>

//       <aside
//         className={`bg-white border-r-2 z-20 fixed border-gray-300 pt-16 shadow-md text-gray-900 w-48 md:w-64 h-screen top-0 left-0 overflow-y-auto transition-transform transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full fixed"
//         } ${isOpen ? "md:translate-x-0" : ""}`}
//       >
//         <div className="p-4">
//           <div className="flex flex-col items-center justify-center">
//             <Image
//               src="/foto-profil.png"
//               alt="Foto Profil"
//               width={200}
//               height={200}
//               className="rounded-full mt-4 w-16 h-16 md:w-20 md:h-20 "
//             />
//             <p className="capitalize text-center mt-2">
//               Dashboard Anda, <br />{" "}
//               <span className="font-semibold">Username</span>
//             </p>
//           </div>
//         </div>
//         <nav className="mt-0 ">
//           <ul>
//             {links.map(({ id, link, menu, gambar: Icon }) => (
//               <li key={id} className="mb-1">
//                 <Link href={link}>
//                   <div
//                     className={`flex items-center text-gray-700 hover:bg-blue-200 hover:text-white ${
//                       activePage === menu ? "bg-slate-200 text-red-500" : ""
//                     }`}
//                   >
//                     {" "}
//                     {Icon && <Icon size={24} className="mx-4" />}
//                     <p className="capitalize text-center text-sm hover-text-gray-300 md:text-lg lg:text-xl h-10 flex items-center ">
//                       {menu}
//                     </p>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       <div className="md:hidden">
//         <button className="text-black mt-2 ml-2" onClick={toggleSidebar}>
//           <FiMenu size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar_old;
