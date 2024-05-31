import QuizCard from "@/app/student/dashboard/_components/QuizCard";
import { TQuiz, TQuizTestTypeAll } from "@/types/dashboard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

interface CardTestItemProps {
  data: TQuizTestTypeAll;
}
const Quiz = ({ data }: CardTestItemProps) => {
  const mathQuizArray = data.quiz_all_dahsboard_per_module?.filter(
    (quiz_dahsboard_per_modul) =>
      quiz_dahsboard_per_modul.module_name === "Matematika",
  );
  const skdQuizArray = data.quiz_all_dahsboard_per_module?.filter(
    (quiz_dahsboard_per_modul) =>
      quiz_dahsboard_per_modul.module_name === "SKD",
  );

  const skdQuiz =
    skdQuizArray && skdQuizArray.length === 1 ? skdQuizArray[0] : skdQuizArray;

  const mathQuiz =
    mathQuizArray && mathQuizArray.length === 1
      ? mathQuizArray[0]
      : mathQuizArray;

  console.log(skdQuiz);

  const redirectUrl = `/student/uji-kemampuan/${data.test_type === "Pretest" ? "pretest" : "posttest"}/1`;
  return (
    <div className="mt-3 rounded-md border bg-white">
      <h1 className="px-3 pt-2 font-bold">Recently {data.test_type}</h1>
      {/* horizontal line */}
      <div className="w-100% mt-2 h-[2px] bg-gray-100 p-0"></div>

      <h1 className="ml-3 mt-2 font-semibold">{data.test_type} SKD</h1>
      {skdQuiz.quizzes.map((quiz: TQuiz, index: number) => (
        <div key={index}>
          <QuizCard
            modul={skdQuiz.module_name}
            testType={data.test_type}
            quiz={quiz}
          />
        </div>
      ))}
      <Link href={redirectUrl} className="">
        <h3 className="mb-3 text-center text-sm text-tp-BlueUserDashboard">
          LIHAT SEMUA <NavigateNextIcon className="mb-1" />
        </h3>
      </Link>

      {/* horizontal line */}
      <div className="w-100% mt-2 h-[2px] bg-gray-100 p-0"></div>

      <h1 className="ml-3 mt-2 font-semibold">{data.test_type} Matematika</h1>
      {mathQuiz.quizzes.map((quiz: TQuiz, index: number) => (
        <div key={index}>
          <QuizCard
            modul={mathQuiz.module_name}
            testType={data.test_type}
            quiz={quiz}
          />
        </div>
      ))}
      <Link href={redirectUrl} className="">
        <h3 className="mb-3 text-center text-sm text-tp-BlueUserDashboard">
          LIHAT SEMUA <NavigateNextIcon className="mb-1" />
        </h3>
      </Link>
    </div>
  );
};

export default Quiz;
