import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BreadCrumbsProps {
  widthReduction?: string | null;
  fontSize?: string;
  bgColor?: string;
  isShadow?: boolean;
  padding?: string;
  paramsIndexPosition?: number[];
}

export default function Breadcrumbs({
  widthReduction,
  fontSize,
  bgColor,
  isShadow = true,
  padding,
  paramsIndexPosition = [], //paramsIndexPosition adalah index param untuk menghapus data nya dari array agar tidak ditampilkan
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
    crumbs = pathname
      .split("/")
      .filter((crumb) => crumb !== "" && !crumb.includes(":"))
      .map((crumb, index, array) => {
        currentLink += `/${crumb}`;
        const isLast = index === array.length - 1;
        if (!paramsIndexPosition.includes(index)) {
          // Check jika index tidak ada dalam paramsIndexPosition
          if (crumb !== "student") {
            return (
              <div
                className="ml-2 inline-flex items-center text-xs md:text-base"
                key={crumb}
              >
                <ArrowBackIosIcon fontSize="inherit" />
                <div
                  className={`text-tp-SlateGray ${
                    fontSize && `text-${fontSize}`
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
        }
      });
  }

  return (
    <div
      className={`relative  ${
        bgColor ? `bg-${bgColor}` : "bg-white"
      } rounded-sm ${isShadow ? "shadow-md" : ""} text-left ${
        padding ? `p-${padding}` : "px-1 py-2 md:p-3"
      } text-black`}
    >
      <div className="inline">{crumbs}</div>
    </div>
  );
}
