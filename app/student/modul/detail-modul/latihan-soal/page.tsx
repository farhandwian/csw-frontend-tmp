"use client";

import Studentlayout from "@/app/components/StudentLayout";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import GlobalStyles from "@/app/Globals.module.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import { v4 as uuidv4 } from "uuid";

interface Option {
  id: string;
  letter: string;
  text: string;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
  rightAnswer?: string;
  status?: string; //belum-dijawab,sudah-dijawab,ditandai
  noSoal: number;
  userAnswer?: string;
}

interface Quiz {
  id: string;
  topic: string;
  modul: string;
  totalQuestions: number;
  totalTime: number;
  questions: Question[];
}

const quiz: Quiz = {
  id: "1",
  topic: "kewarganegaraan",
  modul: "TWK",
  totalQuestions: 5,
  totalTime: 30,
  questions: [
    {
      id: "3",
      question: "Apa yang menjadi pusat dari tata surya kita?",
      options: [
        { id: "3a", letter: "a", text: "Bulan" },
        { id: "3b", letter: "b", text: "Bumi" },
        { id: "3c", letter: "c", text: "Matahari" },
        { id: "3d", letter: "d", text: "Mars" },
        { id: "3e", letter: "e", text: "Venus" },
      ],
      rightAnswer: "c",
      noSoal: 1,
      status: "belum-dijawab",
    },
    {
      id: "4",
      question: "Apa nama ibukota Prancis?",
      options: [
        { id: "4a", letter: "a", text: "Berlin" },
        { id: "4b", letter: "b", text: "London" },
        { id: "4c", letter: "c", text: "Madrid" },
        { id: "4d", letter: "d", text: "Paris" },
        { id: "4e", letter: "e", text: "Roma" },
      ],
      rightAnswer: "d",
      noSoal: 2,
      status: "belum-dijawab",
    },
    {
      id: "5",
      question: "Siapa penemu bola lampu?",
      options: [
        { id: "5a", letter: "a", text: "Thomas Edison" },
        { id: "5b", letter: "b", text: "Galileo Galilei" },
        { id: "5c", letter: "c", text: "Isaac Newton" },
        { id: "5d", letter: "d", text: "Marie Curie" },
        { id: "5e", letter: "e", text: "Nikola Tesla" },
      ],
      rightAnswer: "c",
      noSoal: 3,
      status: "belum-dijawab",
    },
    {
      id: uuidv4(),
      question:
        "Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain atas persetujuan DPR merupakan tugas dan wewenang dari...",
      options: [
        { id: uuidv4(), letter: "a", text: "MPR" },
        { id: uuidv4(), letter: "b", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "c", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "d", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "e", text: "Mahkamah Agung" },
      ],
      rightAnswer: "a",
      noSoal: 4,
      status: "belum-dijawab",
    },
    {
      id: uuidv4(),
      question:
        "Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain atas persetujuan DPR merupakan tugas dan wewenang dari...",
      options: [
        { id: uuidv4(), letter: "a", text: "MPR" },
        { id: uuidv4(), letter: "b", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "c", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "d", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "e", text: "Mahkamah Agung" },
      ],
      rightAnswer: "b",
      noSoal: 5,
      status: "belum-dijawab",
    },
  ],
};

const page = () => {
  const [alignment, setAlignment] = useState("modul_home");
  const [activeQuestion, setActiveQuestion] = useState(0); // this will be the index that used to move through question array
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [stopQuiz, setStopQuiz] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [formattedTime, setFormattedTime] = useState("");
  const [result, setResult] = useState(quiz);
  // Ambil waktu dari server, misalnya melalui fetch atau prop
  const serverTime = 600000; // Contoh waktu dalam milidetik (10 menit)

  useEffect(() => {
    let countdown = timeLeft;

    const interval = setInterval(() => {
      countdown -= 1000;
      const minutes = Math.floor(countdown / 60000);
      const seconds = Math.floor((countdown % 60000) / 1000);

      setFormattedTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      clearInterval(interval);
    }, serverTime);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimeout);
    };
  }, [serverTime, timeLeft]);

  useEffect(() => {
    setTimeLeft(serverTime);
  }, [serverTime]);

  useEffect(() => {}, []);

  const pathname = usePathname();

  // const router = useRouter();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const checkUrl = () => {
    const arr = pathname.split("/");
    const firstTwoWords = "/" + arr.slice(1, 3).join("/");
    return firstTwoWords;
  };

  const submitQuiz = () => {};

  const onClickNext = () => {
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const onOptionSelected = (option, index) => {
    const updateResult = { ...result };
    // Mengganti userAnswer pada pertanyaan yang sedang aktif
    updateResult.questions[activeQuestion].userAnswer = option.letter;

    updateResult.questions[activeQuestion].status = "sudah-dijawab";
    // Memperbarui state menggunakan setResult
    setResult(updateResult);
  };
  const onClickTandaiPertanyaan = () => {
    const updateResult = { ...result };
    // Mengganti userAnswer pada pertanyaan yang sedang aktif
    updateResult.questions[activeQuestion].status = "ditandai";
    // Memperbarui state menggunakan setResult
    setResult(updateResult);
  };

  const checkColorNavigation = (question: Question, index: number) => {
    let style: string = "";
    if (question.noSoal === activeQuestion + 1) {
      style += `border border-black `;
    } //belum-dijawab,sudah-dijawab,ditandai

    let isStatusNull = typeof question.status;
    if (question.status === "belum-dijawab" || isStatusNull === "undefined") {
      style += `bg-red-200`;
    }
    if (question.status === "sudah-dijawab") {
      style += "bg-green-200";
    }
    if (question.status === "ditandai") {
      style += "bg-blue-200";
    }
    return style;
  };

  const onClickNavigation = (noSoal: number, index: number) => {
    setActiveQuestion(index);
  };

  const addLeadingZero = (number: number) =>
    number > 9 ? number : `0${number}`;

  const { questions } = quiz;
  const { question, options } = questions[activeQuestion];
  return (
    <Studentlayout>
      <section className="relative">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className="mt-0"
        >
          <ToggleButton value="modul_home">
            <Link href="/student/modul/detail-modul">Modul Home</Link>
          </ToggleButton>

          <ToggleButton value="nilai">
            <Link href="/student/modul/detail-modul/nilai">nilai</Link>
          </ToggleButton>
        </ToggleButtonGroup>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-customColorTypography-Gunmetal`}
        >
          Latihan Modul Materi 1
        </h1>
        {/* awal section informasi kuis */}
        <div className="inline-flex bg-white border rounded-2xl mb-5">
          <div className="flex p-3">
            <div>
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                PERTANYAAN
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                NOMOR {addLeadingZero(activeQuestion + 1)}
              </p>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div>
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                STATUS
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                {result.questions[activeQuestion].status}
              </p>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div>
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                MARK
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                1.00
              </p>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div>
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                TANDA
                <HelpIcon className="ml-2 pb-1"></HelpIcon>
              </p>
              <button onClick={() => onClickTandaiPertanyaan()}>
                <p
                  className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                >
                  <EmojiFlagsIcon className="pb-1 mr-1"></EmojiFlagsIcon>TANDAI
                  PERTANYAAN
                </p>
              </button>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="ml-3 h-8"
              sx={{ borderRightWidth: 3 }}
            />
          </div>
          <div className="flex p-3">
            <div>
              <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                WAKTU TERSISA
              </p>
              <p
                className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
              >
                {formattedTime}
              </p>
            </div>
          </div>
        </div>

        {/* akhir section informasi kuis */}
        <hr className="border-y-1 border-y-gray-300" />

        {/* awal section soal dan jawaban */}
        <div className="w-[70%] bg-slate-400 ">
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {options.map((option, index) => (
              <li
                onClick={() => onOptionSelected(option, index)}
                key={option.id}
                className={
                  option.letter === result.questions[activeQuestion].userAnswer
                    ? "bg-white"
                    : ""
                }
              >
                {option.text}
              </li>
            ))}
          </ul>
          <div className="mt-3 bg-gray-700">
            <hr />
            {activeQuestion !== 0 && (
              <button onClick={() => onClickPrev()}>prev</button>
            )}
            <hr />
            {activeQuestion !== questions.length - 1 && (
              <button onClick={() => onClickNext()}>next</button>
            )}
            <hr />
            <button>Submit</button>
          </div>
        </div>
        {/* akhir section soal dan jawaban */}

        {/* section navigasi soal */}
        <ul className="mb-3">
          {result.questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onClickNavigation(question.noSoal, index)}
              className={`inline-block mr-3 ${checkColorNavigation(
                question,
                index
              )}`}
            >
              {index + 1}
              <hr />
            </button>
          ))}
        </ul>
        {/* akhir navigasi soal */}
      </section>
    </Studentlayout>
  );
};

export default page;
