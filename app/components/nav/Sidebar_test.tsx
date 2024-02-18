"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineAssignmentTurnedIn,
  MdAssignmentTurnedIn,
  MdOutlineSpaceDashboard,
  MdSpaceDashboard,
  MdOutlineLibraryBooks,
  MdLibraryBooks,
  MdOutlineCalendarMonth,
  MdCalendarMonth,
  MdOutlineSettings,
  MdSettings,
} from "react-icons/md";
import {
  IoBarChartOutline,
  IoBarChart,
  IoVideocamOutline,
  IoVideocam,
  IoPersonOutline,
  IoPerson,
} from "react-icons/io5";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import {
  HiOutlineClipboardDocumentList,
  HiClipboardDocumentList,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidebarItems = [
    {
      text: "Dashboard",
      href: "/student/dashboard",
      icon: <MdOutlineSpaceDashboard />,
      active: <MdSpaceDashboard />,
    },
    {
      text: "Uji Kemampuan",
      href: "/student/uji-kemampuan",
      icon: <MdOutlineAssignmentTurnedIn />,
      active: <MdAssignmentTurnedIn />,
    },
    {
      text: "Modul",
      href: "/student/modul",
      icon: <MdOutlineLibraryBooks />,
      active: <MdLibraryBooks />,
    },
    {
      text: "Try Out",
      href: "/student/try-out",
      icon: <HiOutlineClipboardDocumentList />,
      active: <HiClipboardDocumentList />,
    },
    {
      text: "Grafik",
      href: "/student/grafik",
      icon: <IoBarChartOutline />,
      active: <IoBarChart />,
    },
    {
      text: "Record Zoom",
      href: "/student/record-zoom",
      icon: <IoVideocamOutline />,
      active: <IoVideocam />,
    },
    {
      text: "Profile Mentor",
      href: "/student/profile-mentor",
      icon: <IoPersonOutline />,
      active: <IoPerson />,
    },
    {
      text: "Jadwal",
      href: "/student/jadwal",
      icon: <MdOutlineCalendarMonth />,
      active: <MdCalendarMonth />,
    },
    {
      text: "Settings",
      href: "/student/settings",
      icon: <MdOutlineSettings />,
      active: <MdSettings />,
    },
  ];
  return (
    <div
      className={`h-screen w-[15%] bg-[#ffffff] border border-solid border-[#E5E7EB] transition-all relative duration-300 ${
        isSidebarOpen ? "w-[15%]" : "w-[5%]"
      }`}
    >
      <button onClick={toggleSidebar} className="absolute top-2 right-2">
        {isSidebarOpen ? (
          <LuArrowLeftFromLine size={16} />
        ) : (
          <LuArrowRightFromLine size={16} />
        )}
      </button>
      <div className="flex flex-col items-center">
        <div
          className={`mt-8 ${
            !isSidebarOpen ? "w-14 h-14" : "h-32 w-32"
          } relative`}
        >
          <Image
            src={"/foto-profil.png"}
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        {isSidebarOpen && (
          <>
            <h3 className="mt-3">Dashboard Anda</h3>
            <h4>Username</h4>
          </>
        )}
      </div>
      <div className="mt-6">
        <ul>
          {sidebarItems.map((item, index) => (
            <Link key={index} href={item.href} className="">
              <li
                className={`p-4 my-2 hover:bg-[#F9F9F9] flex items-center gap-5 text-xl text-[#64748B] ${
                  index == sidebarItems.length - 1
                    ? "border-t border-solid border-[#000000]"
                    : ""
                } ${
                  pathname === item.href
                    ? "text-[#F3736C] bg-[#F9F9F9] border-l-4 border-solid border-l-[#f3736c]"
                    : ""
                } ${isSidebarOpen ? "justify-normal" : "justify-center "}`}
              >
                <span className={`text-2xl`}>
                  {pathname === item.href ? item.active : item.icon}
                </span>
                {isSidebarOpen && <span>{item.text}</span>}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
