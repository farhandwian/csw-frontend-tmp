import { useGetUser } from "@/hooks/auth/hook";
import { Menu, Transition } from "@headlessui/react";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { signOut } from "next-auth/react";

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
    image: "/logo-dashboard-pelajar.png",
    text: "Dashboard Pelajar",
  },
  {
    id: 4,
    image: "/icon/ic-logout.svg",
    text: "Logout",
  },
];

const Profile = () => {
  const { data, isLoading: isLoadingUser, isError: isErrorUser } = useGetUser();

  const dataUser = data?.data;
  return (
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
            {dataUser?.name}
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

                  <h3>Login sebagai {dataUser?.name}</h3>
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
              <div
                onClick={() => signOut({ redirect: false })}
                className="group flex items-center rounded p-2 text-sm text-gray-700 transition-colors hover:bg-red-500 hover:text-white"
              >
                <Image
                  src={profiles[2].image}
                  alt={"profile-image"}
                  width={25}
                  height={25}
                  className={`mr-2`}
                />

                <h3>{profiles[2].text}</h3>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => signOut({ redirect: false })}
                className="group flex items-center rounded p-2 text-sm text-gray-700 transition-colors hover:bg-red-500 hover:text-white"
              >
                <LogoutIcon className="mr-4 h-4 w-4" />

                <h3>{profiles[3].text}</h3>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Profile;
