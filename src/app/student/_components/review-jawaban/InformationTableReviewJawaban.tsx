import { TQuizReview } from "@/types/quiz";

interface InformationTableProps {
  dataQuizReview: TQuizReview;
}

export default function InformationTable({
  dataQuizReview,
}: InformationTableProps) {
  return (
    <>
      <div className="relative mb-3 mt-3 max-w-fit overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-2 font-medium text-gray-900 dark:text-white md:px-6 md:py-4"
                colSpan={2} // Menggunakan colSpan untuk menggabungkan 2 kolom
              >
                <h1 className="mr-1 text-xs font-semibold md:inline-block md:text-base">
                  Review Jawaban <br className="md:hidden" /> •{" "}
                  {dataQuizReview.topic}
                </h1>

                <h1 className="text-3xs font-normal md:text-xs">
                  Detail informasi untuk review jawaban pada{" "}
                  <br className="md:hidden" />
                  latihan per materi untuk modul {dataQuizReview.modul}
                </h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th className="h-24 w-full bg-black" colSPan={2}>
                <h1 className="text-base font-semibold">
                  Review Jawaban • Latihan Modul Materi 1 - Pancasila
                </h1>
                <p className="text-xs font-normal">
                  Detail informasi untuk review jawaban pada latihan per materi
                  untuk modul twk
                </p>
              </th>
            </tr> */}
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className=" whitespace-nowrap px-3 py-2 text-2xs font-medium text-gray-900 dark:text-white md:px-6 md:py-4 md:text-sm"
              >
                Dikerjakan pada
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {dataQuizReview.started_at}
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-2 text-2xs font-medium text-gray-900 dark:text-white md:px-6 md:py-4 md:text-sm"
              >
                Waktu yang dibutuhkan
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {dataQuizReview.total_time}
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className=" whitespace-nowrap px-3 py-2 text-2xs font-medium text-gray-900 dark:text-white md:px-6 md:py-4 md:text-sm"
              >
                Jawaban benar/Total soal
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {dataQuizReview.total_right_answers}/
                {dataQuizReview.total_questions}
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-2 text-2xs font-medium text-gray-900 dark:text-white md:px-6 md:py-4 md:text-sm"
              >
                Nilai
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {dataQuizReview.score}/{dataQuizReview.max_score}
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className=" whitespace-nowrap px-3 py-2 text-2xs font-medium text-gray-900 dark:text-white md:px-6 md:py-4 md:text-sm"
              >
                Pengerjaan
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {dataQuizReview.attempt}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <></>
    </>
  );
}
