import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  let currentLink = "";
  const len = pathname.split("/").length;
  let crumbs;

  if (len === 2) {
    currentLink = "/dashboard";
    crumbs = (
      <div className="inline-flex ml-2 items-center ">
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
    crumbs = pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb, index, array) => {
        currentLink += `/${crumb}`;
        const isLast = index === array.length - 1;
        if (crumb !== "student") {
          return (
            <div className="inline-flex ml-2 items-center" key={crumb}>
              <ArrowBackIosIcon style={{ fontSize: 15 }} />
              <div
                className={`text-tp-SlateGray ${
                  fontSize ? `text-${fontSize}` : "text-base"
                }`}
              >
                <Link
                  href={currentLink}
                  className={`hover:underline ${isLast ? "font-bold" : ""}`}
                >
                  {crumb}
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
        padding ? `p-${padding}` : "p-3"
      } text-black`}
    >
      <div className="inline">{crumbs}</div>
    </div>
  );
}
