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
  Class as CalendarMonthIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TUser } from "@/types/auth";

// height topbar:
// xl: h-16 / 4rem

const dataSidebar = [
  {
    id: 0,
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/student/dashboard",
  },
  {
    id: 1,
    label: "Kelas",
    icon: <CalendarMonthIcon />,
    path: "/student/kelas",
  },
  {
    id: 2,
    label: "Uji Kemampuan",
    icon: <AssignmentAddIcon />,
    path: "/student/uji-kemampuan/latihan-soal/1",
  },
  {
    id: 3,
    label: "Modul",
    icon: <LibraryBooksIcon />,
    path: "/student/modul",
  },
  {
    id: 4,
    label: "Try Out",
    icon: <ListAltIcon />,
    path: "/Contact",
  },
  {
    id: 5,
    label: "Grafik",
    icon: <BarChartIcon />,
    path: "/Contact",
  },
  {
    id: 6,
    label: "Record Zoom",
    icon: <FiberSmartRecordIcon />,
    path: "/Contact",
  },
  {
    id: 7,
    label: "Profile Mentor",
    icon: <EmojiPeopleIcon />,
    path: "/Contact",
  },
  {
    id: 8,
    label: "Jadwal",
    icon: <DateRangeIcon />,
    path: "/Contact",
  },
  {
    id: 9,
    label: "Pengaturan",
    icon: <SettingsIcon />,
    path: "/Contact",
  },
  {
    id: 10,
    label: "Logout",
    icon: <LogoutIcon />,
    path: "/Contact",
  },
];

// Add remaining code for the drawer, app bar, and menu items as needed

interface SideBarProps {
  user: TUser;
  showNav: boolean;
  isMobile?: boolean;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ user, showNav, isMobile }: SideBarProps, ref) => {
    const pathName = usePathname();
    const checkUrl = () => {
      const arr = pathName.split("/");
      let firstTwoWords;
      // karena fitur uji kemampuan page nya agak beda
      if (arr[2] == "uji-kemampuan") {
        firstTwoWords = "/student/uji-kemampuan/latihan-soal/1";
      } else {
        firstTwoWords = "/" + arr.slice(1, 3).join("/");
      }
      return firstTwoWords;
    };

    return (
      <div
        ref={ref}
        className="fixed z-20 mt-16 h-[37.5rem] w-40  overflow-y-scroll bg-white text-xs shadow-sm md:mt-0 md:h-full md:w-56 md:text-sm"
      >
        <div className="mb-3 mt-1 flex justify-center md:mt-6">
          {/* profile jika sidebar terbuka */}
          <div className={`p-4 ${true ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/foto-profil.png"
                alt="Foto Profil"
                width={200}
                height={200}
                className="mt-4 h-16 w-16 rounded-full md:h-20 md:w-20"
              />
              <p className="mt-2 text-center capitalize">
                Dashboard Anda, <br />
                <span className="font-semibold">{user.name}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {dataSidebar.map((item) => (
            <Link key={item.id} href={item.path}>
              <div
                className={`mx-5 mb-3 flex cursor-pointer items-center rounded py-3 pl-2 text-center transition-colors ${
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
  },
);

SideBar.displayName = "SideBar";

export default SideBar;
