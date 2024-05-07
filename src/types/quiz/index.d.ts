import { TAddQuizSubmissionResponse } from "./index.d";
// interface dan type untuk quiz content
export interface TOption {
  id: number;
  uuid: string;
  letter: string;
  text: string;
}

export interface TQuestion {
  id: number;
  uuid: string;
  question: string;
  options: TOption[];
  isMark?: boolean;
  mark: number;
  user_answer?: number; // berupa id dari optionnya
  status?: string; //belum-dijawab,sudah-dijawab,ditandai
  no_soal: number;
}

export interface TQuiz {
  id: number;
  uuid: string;
  topic: string;
  modul: string;
  total_questions: number;
  total_time: number;
  questions: TQuestion[];
}

type typeQuiz = "Paket Soal" | "Pretest" | "Posttest";

export interface TQuizContentParams {
  uuid: string;
  type: typeQuiz;
}

export type TQuizContentResponse = TMetaResponseSingle<TQuiz>;

//===============================================================================================================================

// interface dan type untuk quiz submission

interface TOptionSubmission {
  id: number;
  uuid: string;
  letter: string;
  text: string;
}

interface TQuestionSubmission {
  id: number;
  uuid: string;
  question: string;
  options: TOptionSubmission[];
  mark: number;
  status?: string;
  user_answer?: number; // berupa id dari optionnya
}

interface TAddQuizSubmissionPayload {
  user_id: number;
  quiz_id: number;
  topic: string;
  modul: string;
  total_questions: number;
  time_required: string;
  questions: TQuestionSubmission[];
}

// interface TAddQuizSubmission {
//   id: number;
// }

export type TAddQuizSubmissionResponse = TMetaResponseSingle<>;
