import Link from "next/link";
import { forwardRef } from "react";

import {
  Assignment as AssignmentAddIcon,
  BarChart as BarChartIcon,
  Dashboard as DashboardIcon,
  DateRange as DateRangeIcon,
  EmojiPeople as EmojiPeopleIcon,
  FiberSmartRecord as FiberSmartRecordIcon,
  LibraryBooks as LibraryBooksIcon,
  ListAlt as ListAltIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";

// height topbar:
// xl: h-16 / 4rem

const dataSidebar = [
  {
    id: 0,
    label: "Dashboard",
    img: <DashboardIcon />,
    path: "/student/dashboard",
  },
  {
    id: 1,
    label: "Uji Kemampuan",
    img: <AssignmentAddIcon />,
    path: "/student/uji-kemampuan",
  },
  {
    id: 2,
    label: "Modul",
    img: <LibraryBooksIcon />,
    path: "/student/modul",
  },
  {
    id: 3,
    label: "Try Out",
    img: <ListAltIcon />,
    path: "/Contact",
  },
  {
    id: 4,
    label: "Grafik",
    img: <BarChartIcon />,
    path: "/Contact",
  },
  {
    id: 5,
    label: "Record Zoom",
    img: <FiberSmartRecordIcon />,
    path: "/Contact",
  },
  {
    id: 6,
    label: "Profile Mentor",
    img: <EmojiPeopleIcon />,
    path: "/Contact",
  },
  {
    id: 7,
    label: "Jadwal",
    img: <DateRangeIcon />,
    path: "/Contact",
  },
  {
    id: 8,
    label: "Pengaturan",
    img: <SettingsIcon />,
    path: "/Contact",
  },
  {
    id: 9,
    label: "Logout",
    img: <LogoutIcon />,
    path: "/Contact",
  },
];

// Add remaining code for the drawer, app bar, and menu items as needed

const SideBar = forwardRef(({ showNav, isMobile }, ref) => {
  const pathName = usePathname();
  const checkUrl = () => {
    const arr = pathName.split("/");
    const firstTwoWords = "/" + arr.slice(1, 3).join("/");
    return firstTwoWords;
  };

  return (
    <div
      ref={ref}
      className="fixed w-30 md:w-56 h-[37.5rem] md:h-full  mt-16 md:mt-0 bg-white z-20 shadow-sm overflow-y-scroll text-xs md:text-sm"
    >
      <div className="flex justify-center mt-1 md:mt-6 mb-3">
        {/* profile jika sidebar terbuka */}
        <div className={`p-4 ${true ? "block" : "hidden"}`}>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/foto-profil.png"
              alt="Foto Profil"
              width={200}
              height={200}
              className="rounded-full mt-4 w-16 h-16 md:w-20 md:h-20"
            />
            <p className="capitalize text-center mt-2">
              Dashboard Anda, <br />
              <span className="font-semibold">Username</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {dataSidebar.map((item) => (
          <Link key={item.id} href={item.path}>
            <div
              className={`pl-2 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                item.path === checkUrl()
                  ? "bg-red-100 text-red-500"
                  : "text-gray-400 hover:bg-red-100 hover:text-red-500"
              }`}
            >
              <div className="mr-2">{item.icon}</div>
              <div>
                <p>{item.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
