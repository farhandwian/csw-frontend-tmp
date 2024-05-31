import YellowButton from "@/app/student/dashboard/_components/YellowButton";
import { TModule, TTestTypeResponse } from "@/types";
import { TQuiz } from "@/types/dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Link from "next/link";
import RedButton from "@/app/student/dashboard/_components/RedButton";
import { convertToReadableDate } from "@/lib/utils/convertToReadableDate";
import { convertModuleNameToID } from "@/lib/utils/ConvertModule";

interface CardTestItemProps {
  modul: TModule;
  testType: TTestTypeResponse;
  quiz: TQuiz;
}
const QuizCard = ({ modul, testType, quiz }: CardTestItemProps) => {
  const modulID = convertModuleNameToID(modul);
  const BgColor = () => {
    if (
      testType === "Pretest" &&
      quiz.status_pengerjaan === "belum-dikerjakan"
    ) {
      return "bg-[url('/img/dashboard-user/card_recently_pretest.png')]";
    } else if (
      testType === "Pretest" &&
      quiz.status_pengerjaan === "sudah-dikerjakan"
    ) {
      return "bg-[#FD6073]";
    } else if (
      testType === "Posttest" &&
      quiz.status_pengerjaan === "sudah-dikerjakan"
    ) {
      return "bg-[#FD6073]";
    } else if (
      testType === "Posttest" &&
      quiz.status_pengerjaan === "belum-dikerjakan"
    ) {
      return "bg-[url('/img/dashboard-user/card_recently_posttest.png')]";
    }
  };

  const urlRedirect = () => {
    if (testType === "Pretest") {
      return `uji-kemampuan/pretest/${modulID}/daftar-pretest/${quiz.sub_module_uuid}/deskripsi-pretest/${quiz.uuid}`;
    } else if (testType === "Posttest") {
      return `uji-kemampuan/posttest/${modulID}/daftar-posttest/${quiz.sub_module_uuid}/deskripsi-posttest/${quiz.uuid}`;
    }

    return "";
  };

  return (
    <>
      <div className="relative mb-3 px-3">
        {/* carditem pretest user jika sudah beli modul */}
        <div
          className={`min-h-32 w-[100%] rounded-md ${BgColor()} bg-cover bg-center p-2 text-white`}
        >
          <div className="my-2 flex w-fit items-center justify-center text-[12px] text-neutral-100">
            <AccessTimeFilledIcon sx={{ color: "white", fontSize: "14px" }} />

            <h3>{quiz.time} menit</h3>
            <WorkspacePremiumIcon sx={{ color: "white", fontSize: "14px" }} />
            <h3>{quiz.max_score} pts</h3>
            <QuizIcon sx={{ color: "white", fontSize: "14px" }} />
            <h3>quizziz</h3>
          </div>

          <div className="mt-4">
            <h1 className="text-sm font-bold">{quiz.title}</h1>
            <h3 className="mb-2 text-left text-xs">
              {testType} membahas seputar materi yang akan dipelajari nanti di
              pertemuan {quiz.description}
            </h3>
            {quiz.status_pengerjaan === "belum-dikerjakan" ? (
              <Link href={urlRedirect()}>
                <YellowButton className="mb-2 mt-3 text-sm">
                  Kerjakan {testType}
                </YellowButton>
              </Link>
            ) : (
              <Link href={urlRedirect()}>
                <RedButton className="mb-2 mt-3 text-sm">
                  lihat {testType}
                </RedButton>
              </Link>
            )}
          </div>
        </div>

        <div
          className={` absolute right-1 top-2 flex h-[45px] w-[80px] items-center justify-center rounded-md p-1 ${quiz.status_pengerjaan === "belum-dikerjakan" ? "bg-[#fbe360]" : "bg-[#F48891]"}`}
        >
          <h4
            className={`text-center text-[10px] leading-none ${quiz.status_pengerjaan === "belum-dikerjakan" ? "text-black" : "text-white"}`}
          >
            {quiz.status_pengerjaan === "belum-dikerjakan"
              ? `Dibuka pada ${convertToReadableDate(quiz.open)}`
              : "pretest telah ditutup"}
          </h4>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
