"use client";
import Studentlayout from "@/app/student/components/StudentLayout";
import PrevButton from "@/app/components/Button/BlueButton";
import SubmitButton from "@/app/components/Button/GreenButton";
import ModalSubmitModul from "@/app/student/modul/detail-modul/latihan-soal/component/ModalSubmitModul";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GlobalStyles from "@/app/Globals.module.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import { v4 as uuidv4 } from "uuid";
import ModulFAB from "@/app/student/modul/detail-modul/latihan-soal/component/ModulFAB";

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
  isMark?: boolean;
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
  const [isMark, setIsMark] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [unAnsweredQuestions, setisUnAnsweredQuestions] = useState(
    quiz.questions.length
  );
  // Ambil waktu dari server, misalnya melalui fetch atau prop
  const serverTime = 600000; // Contoh waktu dalam milidetik (10 menit)

  const { questions } = quiz;
  const { question, options } = questions[activeQuestion];
  // let unAnsweredQuestions = questions.length;
  useEffect(() => {
    console.log("testestes");
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

  // const router = useRouter();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const checkunAnsweredQuestions = () => {
    let i = 0;
    questions.forEach((question) => {
      if (question.status === "belum-dijawab") {
        i++;
      }
    });

    setisUnAnsweredQuestions(i);
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
    setIsMark(!isMark);
    updateResult.questions[activeQuestion].isMark = !isMark;
    // Memperbarui state menggunakan setResult
    setResult(updateResult);
  };

  const checkColorNavigation = (question: Question, index: number) => {
    let style: string = "";
    if (question.noSoal === activeQuestion + 1) {
      style += `border-green-400 `;
    } //belum-dijawab,sudah-dijawab,ditandai

    let isStatusNull = typeof question.status;
    if (question.status === "belum-dijawab" || isStatusNull === "undefined") {
      style += `bg-white `;
    }
    if (question.status === "sudah-dijawab") {
      style += "bg-green-200 ";
    }
    if (question.status === "ditandai") {
      style += "bg-blue-200";
    }
    return style;
  };

  const checkFlagMark = (question: Question, index: number) => {
    let style: string = "";
    if (question.isMark === true) {
      style += "block ";
    } else {
      style += "hidden ";
    }
    return style;
  };

  const onClickNavigation = (noSoal: number, index: number) => {
    setActiveQuestion(index);
  };

  const onClickSubmit = () => {
    setIsOpenSubmitModal(true);
    checkunAnsweredQuestions();
  };

  const onCloseModalSubmit = () => {
    setIsOpenSubmitModal(false);
  };

  const addLeadingZero = (number: number) =>
    number > 9 ? number : `0${number}`;

  return (
    <Studentlayout isBreadCrumb={true}>
      <section className="relative w-[100%]">
        <ModulFAB
          alignment={alignment}
          handleChange={(e) => handleChange(e, alignment)}
        ></ModulFAB>
        <h1
          className={`${GlobalStyles["bold-3xl-typography"]} text-tp-Gunmetal`}
        >
          Latihan Modul Materi 1 Pancasila
        </h1>

        <div className="flex">
          <div className="w-[80%]">
            {/* awal section informasi kuis */}
            <div className="inline-flex bg-white border-2 rounded-2xl mb-5">
              <div className="flex p-3">
                <div className="mr-3">
                  <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                    PERTANYAAN
                  </p>
                  <p
                    className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                  >
                    NOMOR {addLeadingZero(activeQuestion + 1)}/
                    {addLeadingZero(questions.length)}
                  </p>
                </div>

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  className="h-8"
                  sx={{ borderRightWidth: 3 }}
                />
              </div>
              <div className="flex p-3">
                <div className="mr-3">
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
                <div className="mr-3">
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
                <div className="mr-3">
                  <p className={`${GlobalStyles["normal-xs-gray-typography"]}`}>
                    TANDA
                    <HelpIcon className="ml-2 pb-1"></HelpIcon>
                  </p>
                  <button onClick={() => onClickTandaiPertanyaan()}>
                    <p
                      className={`${GlobalStyles["normal-xs-steelblue-typography"]}`}
                    >
                      <EmojiFlagsIcon className="pb-1 mr-1"></EmojiFlagsIcon>
                      TANDAI PERTANYAAN
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
                <div className="mr-3">
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
            {/* awal section soal dan jawaban */}
            <div className="w-[100%] bg-white-400 border-2 rounded-2xl p-4">
              <h2 className="mb-2">{question}</h2>
              <div>
                {options.map((option, index) => (
                  <div
                    onClick={() => onOptionSelected(option, index)}
                    key={option.id}
                    className={`flex border-2 rounded-lg mb-2 ${
                      option.letter ===
                      result.questions[activeQuestion].userAnswer
                        ? "border-green-400"
                        : ""
                    }`}
                  >
                    <div
                      className={`inline-block px-3 rounded-l-sm ${
                        option.letter ===
                        result.questions[activeQuestion].userAnswer
                          ? "bg-green-400"
                          : ""
                      }`}
                    >
                      {option.letter}
                    </div>
                    <div className="w-[2px] h-[25px] bg-pl-GrayDefault"></div>
                    <div className="inline-block text-left ml-3">
                      {option.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* awal button section */}
              <div className="flex justify-between mt-3">
                <div>
                  {activeQuestion !== 0 && (
                    <PrevButton
                      className="bg-gray-400 text-white"
                      onClick={() => onClickPrev()}
                      variant="contained"
                    >
                      prev
                    </PrevButton>
                  )}

                  {activeQuestion !== questions.length - 1 && (
                    <Button
                      className="bg-pl-RoyalBlue ml-2 text-white"
                      onClick={() => onClickNext()}
                      variant="contained"
                    >
                      next
                    </Button>
                  )}
                </div>
                <div>
                  <SubmitButton
                    className="bg-pl-GreenButton text-white"
                    onClick={() => onClickSubmit()}
                    variant="contained"
                  >
                    SUBMIT
                  </SubmitButton>
                </div>
              </div>
              {/* akhir button section */}
            </div>
            {/* akhir section soal dan jawaban */}
          </div>
          <div className="w-[20%]">
            {/* section navigasi soal */}
            <div className="bg-white border-2 rounded-sm ml-2 w-[92%]">
              <div className="flex p-3 justify-between gap-1">
                <div>
                  <Image
                    width={60}
                    height={60}
                    src="/img/uji-kemampuan/ic_navigation.png"
                    className={`inline-block`}
                    alt="Logo CSW"
                  />
                </div>

                <div className="ml-3">
                  <h1>NAVIGASI LATIHAN</h1>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="w-[90%] grid grid-cols-4 gap-2">
                  {result.questions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => onClickNavigation(question.noSoal, index)}
                      className={`h-[55px] inline-block border-2 rounded-sm ${checkColorNavigation(
                        question,
                        index
                      )}`}
                    >
                      {index + 1}
                      <div className={`${checkFlagMark(question, index)}`}>
                        <EmojiFlagsIcon className="pb-1 mr-1"></EmojiFlagsIcon>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* akhir navigasi soal */}
          </div>
        </div>

        <ModalSubmitModul
          isOpen={isOpenSubmitModal}
          formattedTime={formattedTime}
          unAnsweredQuestions={unAnsweredQuestions}
          onClose={onCloseModalSubmit}
        />
      </section>
    </Studentlayout>
  );
};

export default page;
