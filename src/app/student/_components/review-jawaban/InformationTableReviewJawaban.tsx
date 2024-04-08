import { ReviewJawaban } from "@/app/student/_components/review-jawaban/ReviewJawabanInterface";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

export default function InformationTable({
  reviewJawaban,
}: {
  reviewJawaban: ReviewJawaban;
}) {
  return (
    // <TableContainer classNameName="mb-3 mt-3 w-[90%]" component={Paper}>
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //     <TableHead classNameName="border">
    //       <TableRow>
    //         <StyledTableCell component="th" scope="row" colSpan={2}>
    //           <h1>Review Jawaban • Latihan Modul Materi 1 - Pancasila</h1>
    //           <p classNameName="text-xs font-normal">
    //             Detail informasi untuk review jawaban pada latihan per materi
    //             untuk modul twk
    //           </p>
    //         </StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">dimulai pada</StyledTableCell>
    //         <StyledTableCell>{reviewJawaban.start}</StyledTableCell>
    //       </StyledTableRow>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">Status Pengerjaan</StyledTableCell>
    //         <StyledTableCell>{reviewJawaban.status}</StyledTableCell>
    //       </StyledTableRow>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">Selesai Pada</StyledTableCell>
    //         <StyledTableCell>{reviewJawaban.finish}</StyledTableCell>
    //       </StyledTableRow>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">
    //           Waktu Yang DIbutuhkan
    //         </StyledTableCell>
    //         <StyledTableCell>{reviewJawaban.formattedTime}</StyledTableCell>
    //       </StyledTableRow>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">Jawaban Benar/Mark</StyledTableCell>
    //         <StyledTableCell>
    //           {reviewJawaban.totalRightQuestion}/
    //           {reviewJawaban.maxTotalRightQuestion}
    //         </StyledTableCell>
    //       </StyledTableRow>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">Nilai</StyledTableCell>
    //         <StyledTableCell>
    //           {reviewJawaban.score}/{reviewJawaban.maxScore}
    //         </StyledTableCell>
    //       </StyledTableRow>
    //       <StyledTableRow classNameName="">
    //         <StyledTableCell classNameName="">Pengerjaan</StyledTableCell>
    //         <StyledTableCell>{reviewJawaban.attempt}</StyledTableCell>
    //       </StyledTableRow>
    //     </TableBody>
    //   </Table>
    // </TableContainer>
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
                  Review Jawaban <br className="md:hidden" /> • Latihan Modul
                  Materi 1 - Pancasila
                </h1>

                <h1 className="text-3xs font-normal md:text-xs">
                  Detail informasi untuk review jawaban pada{" "}
                  <br className="md:hidden" />
                  latihan per materi untuk modul twk
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
                Dimulai pada
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {reviewJawaban.start}
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-2 text-2xs font-medium text-gray-900 dark:text-white md:px-6 md:py-4 md:text-sm"
              >
                waktu yang dibutuhkan
              </th>
              <td className="px-3 py-2 text-2xs md:px-6 md:py-4 md:text-sm">
                {reviewJawaban.formattedTime}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <></>
    </>
  );
}
