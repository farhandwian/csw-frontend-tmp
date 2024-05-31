import { Menu, Popover, Transition } from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { TUser } from "@/types/auth";

const profiles = [
  {
    id: 1,
    image: "/foto-profil.png",
    text: "Farhan Dwian",
  },
  {
    id: 2,
    image: "/logo-csw.png",
    text: "Civil Servant Warrior",
  },
  {
    id: 3,
    image: "/icon/ic-logout.svg",
    text: "Logout",
  },
];

interface TopBarProps {
  user: TUser;
  showNav: boolean;
  setShowNav: (arg: boolean) => void;
  isMobile: boolean;
}

export default function TopBar({
  user,
  showNav,
  setShowNav,
  isMobile,
}: TopBarProps) {
  return (
    <div
      className={`fixed ${
        showNav && !isMobile ? "w-[calc(100%-14rem)]" : "w-[100%]"
      }  ${
        showNav && "right-0"
      } z-[100] flex h-16 items-center justify-between border-b-[1px]  bg-white transition-all duration-[400ms]`}
    >
      <div className="flex items-center pl-4 md:pl-4">
        {/* <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer mr-2"
          onClick={() => setShowNav(!showNav)}
        /> */}
        <MenuIcon
          className="mr-2 h-8 w-8 cursor-pointer text-gray-700"
          onClick={() => setShowNav(!showNav)}
        />

        <Link href={"/home-page"} className="flex">
          <Image
            width={40}
            height={40}
            src="/logo-csw.png"
            className={`w-10 object-cover md:w-10`}
            alt="Logo CSW"
          />
          <p className="mt-2 hidden font-semibold capitalize text-black md:block">
            Civil Servant Warrior
          </p>
        </Link>
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="mr-5 cursor-pointer text-gray-700 outline-none md:mr-8">
            <NotificationsNoneIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 z-50 mt-2 w-screen max-w-xs rounded bg-white shadow-sm sm:right-4 sm:max-w-sm">
              <div className="relative p-3">
                <div className="flex w-full items-center justify-between">
                  <p className="font-medium text-gray-700">Notifications</p>
                  <a className="text-sm text-red-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 overflow-hidden">
                  <div className="flex">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative mt-1 inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full items-center justify-center">
              <picture>
                <img
                  src="/foto-profil.png"
                  className="h-8 rounded-full border-2 border-white shadow-sm md:mr-4"
                  alt="profile picture"
                />
              </picture>
              <span className="hidden font-medium text-gray-700 md:block">
                {user.name}
              </span>
              <ExpandMoreIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded bg-white shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="group flex items-center rounded p-2 text-sm text-gray-700 transition-colors hover:bg-red-500 hover:text-white"
                  >
                    <Image
                      src={profiles[0].image}
                      alt={"profile-image"}
                      width={25}
                      height={25}
                      className={`mr-2
                       rounded-full`}
                    />
                    <div>
                      {/* <h3>Login as {profiles[0].text}</h3>
                      <h3>Newbie User</h3> */}

                      <h3>Login sebagai {user.name}</h3>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="group flex items-center rounded p-2 text-sm text-gray-700 transition-colors hover:bg-red-500 hover:text-white"
                  >
                    <Image
                      src={profiles[1].image}
                      alt={"profile-anda"}
                      width={25}
                      height={25}
                      className={`mr-2
                       rounded-full`}
                    />
                    <h3>{profiles[1].text}</h3>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="group flex items-center rounded p-2 text-sm text-gray-700 transition-colors hover:bg-red-500 hover:text-white"
                  >
                    <LogoutIcon className="mr-4 h-4 w-4" />

                    <h3>{profiles[2].text}</h3>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
