import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { TQuiz } from "@/types/uji-kemampuan";
import { TTestType } from "@/types/index";
import Link from "next/link";

interface CardHistoryTestItemProps {
  sub_module_uuid: string;
  testType: TTestType;
  quiz: TQuiz;
}
const CardHistoryTestItem = ({
  sub_module_uuid,
  testType,
  quiz,
}: CardHistoryTestItemProps) => {
  const BgColor = () => {
    if (
      testType === "pretest" &&
      quiz.status_pengerjaan === "sudah-dikerjakan"
    ) {
      true;
      return "bg-[#7547FF]";
    } else if (
      testType === "pretest" &&
      quiz.status_pengerjaan === "belum-dikerjakan"
    ) {
      return "bg-[#5E6A2E]";
    } else if (
      testType === "posttest" &&
      quiz.status_pengerjaan === "sudah-dikerjakan"
    ) {
      return "bg-[#7547FF]";
    } else if (
      testType === "posttest" &&
      quiz.status_pengerjaan === "belum-dikerjakan"
    ) {
      return "bg-[#5E6A2E]";
    }
  };

  const urlRedirect = () => {
    if (testType === "pretest") {
      return `${sub_module_uuid}/deskripsi-pretest/${quiz.uuid}`;
    } else if (testType === "posttest") {
      return `${sub_module_uuid}/deskripsi-posttest/${quiz.uuid}`;
    }

    return "";
  };

  return (
    <>
      <div className="relative">
        {/* carditem pretest user jika sudah beli modul */}
        <div
          className={`min-h-28 w-[100%] rounded-md ${BgColor()}
          bg-cover bg-center p-2 text-white`}
        >
          <div className="mb-2 flex w-fit items-center justify-center gap-1 text-[11px] text-neutral-100">
            <AccessTimeFilledIcon sx={{ color: "white" }} fontSize="small" />
            <h3>{quiz.time} menit</h3>
            <WorkspacePremiumIcon sx={{ color: "white" }} fontSize="small" />

            <h3>{quiz.max_score} pts</h3>
            <QuizIcon sx={{ color: "white" }} fontSize="small" />
            <h3>quizziz</h3>
            {/* <CheckCircleOutlineIcon sx={{ color: "white" }} fontSize="small" />
            {quiz.status_pengerjaan === "sudah-dikerjakan"
              ? "belum"
              : "selesai"} */}
          </div>

          <div className="flex justify-between ">
            <div className="basis-4/5">
              <h1 className="text-xs font-bold">{quiz.title}</h1>
              <h3 className="mb-2 text-left text-2xs">
                {quiz.status_pengerjaan === "sudah-dikerjakan"
                  ? "Kamu telah selesai mengerjakan pretest ini"
                  : "Kamu belum mengerjakan pretest ini"}
              </h3>
            </div>

            <div className="flex basis-1/5 flex-col items-center">
              <Link href={urlRedirect()} className="text-2xs">
                <ArrowCircleRightIcon />
              </Link>
              <div className="mt-1 text-center leading-none">
                {quiz.status_pengerjaan === "belum-dikerjakan" ? (
                  <Link href={urlRedirect()} className="text-2xs">
                    Kerjakan {testType}
                  </Link>
                ) : (
                  <Link href={urlRedirect()} className="text-2xs">
                    lihat {testType}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHistoryTestItem;
