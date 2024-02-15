"use client";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import { usePathname, useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BreadCrumbsProps {
  widthReduction?: string | null;
  fontSize?: string;
  bgColor?: string;
  isShadow?: boolean;
  padding?: string;
}
export default function Breadcrumbs({
  widthReduction,
  fontSize,
  bgColor,
  isShadow = true,
  padding,
}: BreadCrumbsProps) {
  console.log(widthReduction ? `ml-[${widthReduction}]` : "");
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
      className={`${
        widthReduction ? `ml-[${widthReduction}]` : ""
      } relative z-20 ${bgColor ? `bg-[${bgColor}]` : "bg-white"}  rounded-sm ${
        isShadow ? "shadow-md" : ""
      } text-left ${padding ? `p-[${padding}]` : "p-3"} text-black `}
    >
      <div className={`${styles.breadcrumbs}`}>
        <ArrowBackIosIcon style={{ fontSize: 15 }} />
        {crumbs}
        {/* {tes}
        {widthReduction ? `ml-[${widthReduction}]` : ""}
        {"---"}
        {`${
          widthReduction ? `ml-[${widthReduction}]` : ""
        } z-20 bg-white rounded-sm shadow-md text-left p-3 text-black ml-[56px]`} */}
      </div>
    </div>
  );
}
