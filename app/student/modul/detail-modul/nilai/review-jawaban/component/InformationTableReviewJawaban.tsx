import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReviewJawaban } from "@/app/student/modul/detail-modul/nilai/review-jawaban/interface/reviewJawabanInterface";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontFamily: "var(--font-poppins)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "var(--font-poppins)",
  },
}));

const StyledTableHead = styled(TableHead)`
  border: ;
`;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  width: "200px",

  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

export default function InformationTable({
  reviewJawaban,
}: {
  reviewJawaban: ReviewJawaban;
}) {
  return (
    <TableContainer className="mt-3 mb-3 w-[90%]" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="border">
          <TableRow>
            <StyledTableCell component="th" scope="row" colSpan={2}>
              <h1>Review Jawaban • Latihan Modul Materi 1 - Pancasila</h1>
              <p>
                Detail informasi untuk review jawaban pada latihan per materi
                untuk modul twk
              </p>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow className="">
            <StyledTableCell className="">dimulai pada</StyledTableCell>
            <StyledTableCell>{reviewJawaban.start}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow className="">
            <StyledTableCell className="">Status Pengerjaan</StyledTableCell>
            <StyledTableCell>{reviewJawaban.status}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow className="">
            <StyledTableCell className="">Selesai Pada</StyledTableCell>
            <StyledTableCell>{reviewJawaban.finish}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow className="">
            <StyledTableCell className="">
              Waktu Yang DIbutuhkan
            </StyledTableCell>
            <StyledTableCell>{reviewJawaban.formattedTime}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow className="">
            <StyledTableCell className="">Jawaban Benar/Mark</StyledTableCell>
            <StyledTableCell>
              {reviewJawaban.totalRightQuestion}/
              {reviewJawaban.maxTotalRightQuestion}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow className="">
            <StyledTableCell className="">Nilai</StyledTableCell>
            <StyledTableCell>
              {reviewJawaban.score}/{reviewJawaban.maxScore}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow className="">
            <StyledTableCell className="">Pengerjaan</StyledTableCell>
            <StyledTableCell>{reviewJawaban.attempt}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
