"use client";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import { usePathname, useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BreadCrumbsProps {
  fontSize?: string;
  bgColor?: string;
  isShadow?: boolean;
  padding?: string;
}
export default function Breadcrumbs({
  fontSize,
  bgColor,
  isShadow = true,
  padding,
}: BreadCrumbsProps) {
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
                <h1
                  className={`text-tp-SlateGray ${
                    fontSize ? `text-[${fontSize}]` : "text-[16px]"
                  } inline-block`}
                >
                  {crumb}
                </h1>
              </Link>
            </div>
          );
        }
      });
  }

  return (
    <div
      className={`${bgColor ? `bg-[${bgColor}]` : "bg-white"}  rounded-sm ${
        isShadow ? "shadow-md" : ""
      } text-left ${padding ? `p-[${padding}]` : "p-3"} text-black `}
    >
      <div className={`${styles.breadcrumbs}`}>
        <ArrowBackIosIcon style={{ fontSize: 15 }} />
        {crumbs}
      </div>
    </div>
  );
}
