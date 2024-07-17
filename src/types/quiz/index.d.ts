import { TMetaResponse, TMetaResponseSingle } from "@/types";

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
  description: string;
  total_questions: number;
  total_time: number;
  questions: TQuestion[];
}

type typeQuiz = "PaketSoal" | "Pretest" | "Posttest";

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
  quiz_id: number;
  topic: string;
  modul: string;
  total_questions: number;
  time_required: string;
  questions: TQuestionSubmission[];
}

export type TAddQuizSubmissionResponse = TMetaResponseSingle<>;

// ================================================================
// interface dan type untuk quiz detail

enum QuizStatus {
  BelumDikerjakan = "belum-dikerjakan",
  SudahDikerjakan = "sudah-dikerjakan",
}

interface TQuizDetail {
  id: number;
  uuid: string;
  subject: string;
  title: string;
  description: string;
  total_questions: number;
  total_time: number;
  status: QuizStatus;
  attempt_allowed: number;
  quiz_submission_uuid: string;
  score?: number;
  max_score: number;
  attempt?: number;
}

export type TQuizDetailResponse = TMetaResponseSingle<TQuizDetail>;

// ==========================================================================
// interface dan type untuk quiz review

interface TQuizReview {
  id: number;
  uuid: string;
  topic: string;
  modul: string;
  total_questions: number;
  started_at: string;
  total_time: string;
  total_right_answers: number;
  score: number;
  max_score: number;
  attempt: number;
  questions: TQuestionReview[];
}

interface TQuestionReview {
  question_review_item: TQuestionReviewItem;
  user_answer: number;
  right_answer: number;
  right_answer_text: string;
}

interface TQuestionReviewItem {
  id: number;
  uuid: string;
  question: string;
  options: TOptionReview[];
  no_soal: number;
  status: string;
  mark: number;
  explanation: string;
}

interface TOptionReview {
  id: number;
  uuid: string;
  text: string;
  letter: string;
  is_correct: boolean;
}

export type TQuizReviewResponse = TMetaResponseSingle<TQuizReview>;

// ==========================================================================
// interface dan type untuk quiz nilai bagian modul

interface TQuizScoreDetail {
  quiz_submission_uuid: string;
  quiz_uuid: string;
  quiz: string;
  score: number;
  max_score: number;
  total_right_answers: number;
  total_questions: number;
}

interface TQuizScoreAllItem {
  subject_id: number;
  subject: string;
  quiz_scores_detail: TQuizScoreDetail[];
}

interface TQuizScoreAll {
  id: number;
  sub_modul: string;
  quiz_score_all_item: TQuizScoreAllItem[];
}

export type TQuizScoreAllResponse = TMetaResponseSingle<TQuizScoreAll>;
