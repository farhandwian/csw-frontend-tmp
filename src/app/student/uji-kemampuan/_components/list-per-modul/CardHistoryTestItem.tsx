import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type TypeTest = "pretest" | "posttest";

interface CardHistoryTestItemProps {
  typeTest: TypeTest;
  isDone: boolean;
}
const CardHistoryTestItem = ({
  typeTest,
  isDone,
}: CardHistoryTestItemProps) => {
  const BgColor = () => {
    if (typeTest === "pretest" && !isDone) {
      return "bg-[#7547FF]";
    } else if (typeTest === "pretest" && isDone) {
      return "bg-[#5E6A2E]";
    } else if (typeTest === "posttest" && !isDone) {
      return "bg-[#7547FF]";
    } else if (typeTest === "posttest" && isDone) {
      return "bg-[#5E6A2E]";
    }
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
            <h3>15 menit</h3>
            <WorkspacePremiumIcon sx={{ color: "white" }} fontSize="small" />

            <h3>100 pts</h3>
            <QuizIcon sx={{ color: "white" }} fontSize="small" />
            <h3>quizziz</h3>
            <CheckCircleOutlineIcon sx={{ color: "white" }} fontSize="small" />
            <h3>Selesai</h3>
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-bold">Judul Pretest</h1>
              <h3 className="mb-2 text-left text-xs">
                Kamu telah selesai mengerjakan pretest ini
              </h3>
            </div>
            <div className="">
              <ChevronRightIcon />
              <h3 className="text-xs">
                Lihat <br /> Pretest
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHistoryTestItem;
