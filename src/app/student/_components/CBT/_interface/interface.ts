export interface Option {
  id: string;
  letter: string;
  text: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
  rightAnswer?: string;
  isMark?: boolean;
  status?: string; //belum-dijawab,sudah-dijawab,ditandai
  noSoal: number;
  userAnswer?: string;
}

export interface Quiz {
  id: string;
  topic: string;
  modul: string;
  totalQuestions: number;
  totalTime: number;
  questions: Question[];
}
