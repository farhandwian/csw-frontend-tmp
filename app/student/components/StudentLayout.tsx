"use client";
import { useState, useEffect, Fragment, ReactNode } from "react";
import SideBar from "./nav/Sidebar";
import TopBar from "./nav/Topbar";
import { Transition } from "@headlessui/react";
import Breadcrumbs from "./Breadcrumbs";

interface StudentLayoutProps {
  children: ReactNode;
  isBreadCrumb?: boolean;
}

export default function StudentLayout({ children, isBreadCrumb }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setisMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setisMobile(true);
    } else {
      setShowNav(true);
      setisMobile(false);
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

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} isMobile={isMobile} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        {isBreadCrumb && <Breadcrumbs widthReduction={"54px"} />}

        <div className="p-4 md:p-5">{children}</div>
      </main>
    </>
  );
}
