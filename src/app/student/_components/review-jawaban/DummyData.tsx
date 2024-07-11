import { TQuiz, ReviewJawaban } from "./ReviewJawabanInterface";

import { v4 as uuidv4 } from "uuid";
export const quiz: TQuiz = {
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
      userAnswer: "c",
      rightAnswer: "c",
      rightAnswerText: "Matahari",
      noSoal: 1,
      status: "sudah-dijawab",
      pembahasan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.",
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
      userAnswer: "d",
      rightAnswer: "d",
      rightAnswerText: "Paris",
      noSoal: 2,
      status: "sudah-dijawab",
      pembahasan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.",
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
      userAnswer: "e",
      rightAnswer: "c",
      rightAnswerText: "Isaac Newton",
      noSoal: 3,
      status: "sudah-dijawab",
      pembahasan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.",
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
      userAnswer: "",
      rightAnswer: "a",
      rightAnswerText: "MPR",
      noSoal: 4,
      status: "belum-dijawab",
      pembahasan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.",
    },
    {
      id: uuidv4(),
      question:
        "Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain atas persetujuan DPR merupakan tugas dan wewenang dari...",
      options: [
        { id: uuidv4(), letter: "a", text: "MPR" },
        { id: uuidv4(), letter: "b", text: "Mahkamah Agung" },
        { id: uuidv4(), letter: "c", text: "Mahkamah Konsitusi" },
        { id: uuidv4(), letter: "d", text: "Komisi Yudikatfi" },
        { id: uuidv4(), letter: "e", text: "KPK" },
      ],
      userAnswer: "b",
      rightAnswer: "b",
      rightAnswerText: "Mahkamah Agung",
      noSoal: 5,
      status: "sudah-dijawab",
      pembahasan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam necessitatibus sit optio consectetur quasi impedit? Explicabo veniam adipisci et, commodi eius aperiam accusantium autem debitis reiciendis harum voluptatem sint.",
    },
  ],
};

export const quiz2: TQuiz = {
  id: "1",
  topic: "kewarganegaraan",
  modul: "TWK",
  totalQuestions: 30,
  totalTime: 30,
  questions: [],
};

for (let i = 1; i <= 50; i++) {
  const question: any = {
    id: uuidv4(),
    question: `Pertanyaan ke-${i}`,
    options: [
      { id: uuidv4(), letter: "a", text: `TOption A for question ${i}` },
      { id: uuidv4(), letter: "b", text: `TOption B for question ${i}` },
      { id: uuidv4(), letter: "c", text: `TOption C for question ${i}` },
      { id: uuidv4(), letter: "d", text: `TOption D for question ${i}` },
      { id: uuidv4(), letter: "e", text: `TOption E for question ${i}` },
    ],
    userAnswer: "c", // Kosongkan untuk jawaban pengguna
    rightAnswer: "a", // Ganti dengan jawaban yang benar
    noSoal: i,
    status: "belum-dijawab",
  };

  quiz2.questions.push(question);
}

export const reviewJawaban: ReviewJawaban = {
  start: "Jumat, 30 September 2022, 07:00 ",
  status: "selesai",
  finish: "Jumat, 30 September 2022, 07:09",
  formattedTime: "09 Menit 31 Detik",
  totalRightQuestion: 4,
  maxTotalRightQuestion: 5,
  score: 20,
  maxScore: 25,
  attempt: 1,
  quiz: quiz,
};

export const reviewJawaban2: ReviewJawaban = {
  start: "Jumat, 30 September 2022, 07:00 ",
  status: "selesai",
  finish: "Jumat, 30 September 2022, 07:09",
  formattedTime: "120 Menit",
  totalRightQuestion: 0,
  maxTotalRightQuestion: 50,
  score: 20,
  maxScore: 25,
  attempt: 1,
  quiz: quiz2,
};
