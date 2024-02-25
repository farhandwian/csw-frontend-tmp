import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface TableData {
  id: number;
  modul: Modul[];
}

interface Quiz {
  id: number;
  taskName: string;
  rightQuestion: number;
  totalQuestion: number;
  score: number;
}

interface Modul {
  id: number;
  modulName: string;
  quizs: Quiz[];
}

const tableDatas: TableData = {
  id: 1,
  modul: [
    {
      id: 1,
      modulName: "Modul 1",
      quizs: [
        {
          id: 1,
          taskName: "Task 1",
          rightQuestion: 8,
          totalQuestion: 10,
          score: 80,
        },
        {
          id: 2,
          taskName: "Task 2",
          rightQuestion: 7,
          totalQuestion: 10,
          score: 70,
        },
        {
          id: 3,
          taskName: "Task 3",
          rightQuestion: 6,
          totalQuestion: 10,
          score: 60,
        },
      ],
    },
    {
      id: 2,
      modulName: "Modul 2",
      quizs: [
        {
          id: 4,
          taskName: "Task 1",
          rightQuestion: 9,
          totalQuestion: 10,
          score: 90,
        },
        {
          id: 5,
          taskName: "Task 2",
          rightQuestion: 6,
          totalQuestion: 10,
          score: 60,
        },
        {
          id: 6,
          taskName: "Task 3",
          rightQuestion: 8,
          totalQuestion: 10,
          score: 80,
        },
      ],
    },
    {
      id: 3,
      modulName: "Modul 3",
      quizs: [
        {
          id: 7,
          taskName: "Task 1",
          rightQuestion: 7,
          totalQuestion: 10,
          score: 70,
        },
        {
          id: 8,
          taskName: "Task 2",
          rightQuestion: 8,
          totalQuestion: 10,
          score: 80,
        },
        {
          id: 9,
          taskName: "Task 3",
          rightQuestion: 9,
          totalQuestion: 10,
          score: 90,
        },
      ],
    },
  ],
};

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

export default function TableNilai() {
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
          {tableDatas.modul.map((row) => (
            <React.Fragment key={row.id}>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" colSpan={5}>
                  {row.modulName}
                </StyledTableCell>
              </StyledTableRow>

              {row.quizs.map((quiz, index) => (
                <StyledTableRow key={quiz.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {quiz.taskName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <h1 className="inline-block text-pl-Orange">
                      {quiz.rightQuestion}
                    </h1>
                    /{quiz.totalQuestion}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <h1 className="inline-block text-pl-Orange">
                      {quiz.score}
                    </h1>
                    /25
                  </StyledTableCell>
                  <StyledTableCell align="center">review</StyledTableCell>
                </StyledTableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
