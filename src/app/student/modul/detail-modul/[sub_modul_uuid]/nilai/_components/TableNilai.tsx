"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";
import { errMessageDataFetching, loadingMessage } from "@/lib/const";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useGetQuizScoreAll } from "@/hooks/quiz/hook";
import { TNilaiParams } from "@/types/modul";

interface TableNilaiProps {
  params: TNilaiParams;
}

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
  border:;
`;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

export default function TableNilai({ params }: TableNilaiProps) {
  const {
    data,
    isLoading: isLoadingQuizScoreAll,
    isError: isErrorQuizScoreAll,
  } = useGetQuizScoreAll(params.sub_modul_uuid);
  const dataQuizScoreAll = data?.data!;

  if (isLoadingQuizScoreAll) {
    return <Loading>{loadingMessage}</Loading>;
  }
  if (isErrorQuizScoreAll) {
    return <ErrorComponent>{errMessageDataFetching}</ErrorComponent>;
  }
  return (
    <TableContainer className="mb-3 mt-3" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="border">
          <TableRow>
            <StyledTableCell>Pengerjaan</StyledTableCell>
            <StyledTableCell align="center">Penilaian Item</StyledTableCell>
            <StyledTableCell align="center">
              Jawaban Benar&nbsp;/Mark
            </StyledTableCell>
            <StyledTableCell align="center">Nilai</StyledTableCell>
            <StyledTableCell align="center">Review Jawaban</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataQuizScoreAll.quiz_score_all_item.map((quiz_score) => (
            <React.Fragment key={quiz_score.subject_id}>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" colSpan={5}>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/img/modul/nilai/ic-document.svg"
                    className={`mr-2 inline-block h-5 w-5 object-fill md:h-5 md:w-5`}
                    alt="ic document"
                  />{" "}
                  {quiz_score.subject}
                </StyledTableCell>
              </StyledTableRow>

              {quiz_score.quiz_scores_detail?.map(
                (quiz_score_detail, index) => (
                  <StyledTableRow key={quiz_score_detail.quiz_submission_uuid}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/img/modul/nilai/ic-latihan.svg"
                        className={`mr-2 inline-block h-7 w-7 object-fill md:h-7 md:w-7`}
                        alt="ic document"
                      />{" "}
                      {quiz_score_detail.quiz}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <h1 className="inline-block text-pl-Orange">
                        {quiz_score_detail.total_right_answers}
                      </h1>
                      /{quiz_score_detail.total_questions}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <h1 className="inline-block text-pl-Orange">
                        {quiz_score_detail.score}
                      </h1>
                      /{quiz_score_detail.max_score}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        href={`/student/modul/detail-modul/${params.sub_modul_uuid}/nilai/review-jawaban/${quiz_score_detail.quiz_submission_uuid}/${quiz_score_detail.quiz_uuid}/1`}
                        className="text-[#2563EB]"
                      >
                        REVIEW
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ),
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
