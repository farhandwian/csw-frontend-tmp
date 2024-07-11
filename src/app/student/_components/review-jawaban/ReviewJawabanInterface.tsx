interface TOption {
  id: string;
  letter: string;
  text: string;
}

interface TQuestion {
  id: string;
  question: string;
  options: TOption[];
  rightAnswer?: string;
  isMark?: boolean;
  status?: string; //belum-dijawab,sudah-dijawab,ditandai
  noSoal: number;
  userAnswer?: string;

  rightAnswerText?: string;
  pembahasan?: string;
}

export interface TQuiz {
  id: string;
  topic: string;
  modul: string;
  totalQuestions: number;
  totalTime: number;
  questions: TQuestion[];
}

export interface ReviewJawaban {
  start: string;
  status: string;
  finish: string;
  formattedTime: string;
  totalRightQuestion: number;
  maxTotalRightQuestion: number;
  score: number;
  maxScore: number;
  attempt: number;
  quiz: TQuiz;
}
