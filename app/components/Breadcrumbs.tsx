"use client";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

import GlobalStyles from "@/app/Globals.module.css";
import { usePathname, useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Breadcrumbs() {
  const pathname = usePathname();
  let currentLink = "";
  const len = pathname.split("/").length;
  let crumbs;
  if (len == 2) {
    currentLink = "/dashboard";
    crumbs = (
      <div className={styles.crumb} key="0">
        <Link href={currentLink}>
          <h1>dashboard</h1>
        </Link>
      </div>
    );
  } else {
    crumbs = pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb) => {
        currentLink += `/${crumb}`;
        if (crumb !== "student") {
          return (
            <div className={`${styles["crumb"]}`} key={crumb}>
              <Link href={currentLink}>
                <h1 className="text-tp-SlateGray text-[16px] inline-block">
                  {crumb}
                </h1>
              </Link>
            </div>
          );
        }
      });
  }

  return (
    <div className="bg-white rounded-sm shadow-md text-left p-3 text-black">
      <div className={styles.breadcrumbs}>
        <ArrowBackIosIcon style={{ fontSize: 15 }} />
        {crumbs}
      </div>
    </div>
  );
  //   return <></>;
}
