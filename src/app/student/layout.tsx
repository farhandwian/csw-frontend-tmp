"use client";
import { useState, useEffect, Fragment, ReactNode } from "react";
import SideBar from "./_components/nav/Sidebar";
import TopBar from "./_components/nav/Topbar";
import { Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { setShowNav, setIsMobile } from "@/store/student/layout/layoutSlice";
import { AppDispatch, useAppSelector } from "@/store";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetUser } from "@/hooks/auth/hook";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";

interface StudentLayoutProps {
  children?: ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  const { data, isLoading: isLoadingUser, isError: isErrorUser } = useGetUser();

  const dataUser = data?.data;
  console.log(dataUser);

  // const [showNav, setShowNav] = useState(true);
  // const [isMobile, setisMobile] = useState(false);
  const [showNavLocal, setShowNavLocal] = useState(true);
  const [isMobileLocal, setIsMobileLocal] = useState(false);

  const showNav = useAppSelector((state) => state.studentLayout.showNav);
  const isMobile = useAppSelector((state) => state.studentLayout.isMobile);

  const dispatch = useDispatch<AppDispatch>();

  dispatch(setShowNav(showNavLocal));

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNavLocal(false);
      setIsMobileLocal(true);
      dispatch(setShowNav(false));
      dispatch(setIsMobile(true));
    } else {
      setShowNavLocal(true);
      setIsMobileLocal(false);
      dispatch(setShowNav(true));
      dispatch(setIsMobile(false));
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  if (isErrorUser) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }

  if (isLoadingUser) {
    return "";
  }

  return (
    <>
      <TopBar
        user={dataUser!}
        showNav={showNavLocal}
        setShowNav={setShowNavLocal}
        isMobile={isMobileLocal}
      />
      <Transition
        as={Fragment}
        show={showNavLocal}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar user={dataUser!} showNav={showNavLocal} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNavLocal && !isMobileLocal ? "pl-56" : ""
        }`}
      >
        <div className="min-h-[calc(100vh-4rem)] bg-[#FAF8FD]">{children}</div>
      </main>
    </>
  );
}
