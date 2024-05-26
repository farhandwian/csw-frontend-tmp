"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BreadCrumbsProps {
  widthReduction?: string | null;
  fontSize?: string;
  bgColor?: string;
  isShadow?: boolean;
  padding?: string;
  paramsIndexPosition?: number[]; // untuk menghapus crumb berdasarkan index
}

interface BreadCrumbData {
  link: string;
  uiCrumbs: string;
}

export default function Breadcrumbs({
  widthReduction,
  fontSize,
  bgColor,
  isShadow = true,
  padding,
  paramsIndexPosition = [],
}: BreadCrumbsProps) {
  const pathname = usePathname();
  let currentLink = "";
  const len = pathname.split("/").length;
  let crumbs;

  if (len === 2) {
    currentLink = "/dashboard";
    crumbs = (
      <div className="ml-2 inline-flex items-center ">
        <ArrowBackIosIcon style={{ fontSize: 15 }} />
        <div
          className={`text-tp-SlateGray ${
            fontSize ? `text-${fontSize}` : "text-base"
          }`}
        >
          <Link href={currentLink} passHref>
            <a className="hover:underline">dashboard</a>
          </Link>
        </div>
      </div>
    );
  } else {
    let arrayCrumbs = pathname
      .split("/")
      .filter((crumb) => crumb !== "" && !crumb.includes(":"));

    let breadCrumbsData: BreadCrumbData[] = [];

    //deleting unwanted crumbs
    if (paramsIndexPosition.length > 0) {
      for (let i = 0; i < paramsIndexPosition.length; i++) {
        arrayCrumbs.splice(paramsIndexPosition[i], 1);
      }
    }

    for (let i = 1, k = 0; i < arrayCrumbs.length; ) {
      // Check if arrayCrumbs[i + 1] is an id that string containing a number
      const isNextCrumbNumber = !isNaN(Number(arrayCrumbs[i + 1]));
      // check if arrayCrumbs[i + 1] is a uuid that has more than 30 characters
      if (
        arrayCrumbs[i].length <= 30 &&
        (arrayCrumbs[i + 1]?.length > 30 || isNextCrumbNumber)
      ) {
        breadCrumbsData.push({
          link: `${breadCrumbsData[k - 1]?.link ?? ""}/${arrayCrumbs[i]}/${arrayCrumbs[i + 1]}`,
          uiCrumbs: `${arrayCrumbs[i]}`,
        });
        i += 2;
      } else {
        if (arrayCrumbs[i].length <= 30) {
          breadCrumbsData.push({
            link: `${breadCrumbsData[k - 1]?.link ?? ""}/${arrayCrumbs[i]}`,
            uiCrumbs: `${arrayCrumbs[i]}`,
          });
        } else {
          breadCrumbsData.push({
            link: `${breadCrumbsData[k - 1]?.link ?? ""}/${arrayCrumbs[i]}`,
            uiCrumbs: ``,
          });
        }

        i++;
      }
      console.log(JSON.stringify(breadCrumbsData[k]));
      1;
      console.log(k);
      k++;
    }

    console.log(fontSize);
    crumbs = breadCrumbsData.map(({ link, uiCrumbs }) => {
      if (uiCrumbs !== "uji-kemampuan") {
        return (
          <div
            className={`ml-2 inline-flex items-center ${fontSize ? `text-[${fontSize}]` : "text-xs md:text-base"}`}
            key={link}
          >
            <ArrowBackIosIcon fontSize="inherit" />
            <div
              className={`text-tp-SlateGray ${fontSize && `text-[${fontSize}]`}`}
            >
              <Link
                href={`/student/${link}`}
                className={`font-bold hover:underline ${fontSize && `text-[${fontSize}]`}`}
              >
                {uiCrumbs}
              </Link>
            </div>
          </div>
        );
      }
    });
  }

  return (
    <div
      className={`relative  ${
        bgColor ? `bg-${bgColor}` : "bg-white"
      } rounded-sm ${isShadow ? "shadow-md" : ""} text-left ${
        padding ? `p-${padding}` : "md:p-1"
      } text-black `}
    >
      <div className="inline">{crumbs}</div>
    </div>
  );
}
