import { TMetaResponse, TMetaResponseSingle } from "@/types";
//=====================================================================================================

interface TExerciseAll {
  uuid: string;
  test_type: string;
  module_name: string;
  title: string;
  total_question: number;
  attempt: number;
  time: number;
  description: string;
}

//=====================================================================================================

interface TExerciseHistoryDetailSubModule {
  submission_uuid: string;
  submodule: string;
  score_per_sub_module: number;
  max_score_per_sub_module: number;
  total_right_answer_per_sub_module: number;
  total_question_per_sub_module: number;
}

interface TExerciseHistoryDetailModule {
  uuid: string;
  score_per_module: number;
  max_score_per_module: number;
  right_answer_per_module: number;
  total_question_per_module: number;
  exercise_history_detail: TExerciseHistoryDetailSubModule[];
}

interface TExerciseHistory {
  max_score: TExerciseHistoryDetailModule;
  min_score: TExerciseHistoryDetailModule;
}
//=====================================================================================================
export interface TChoice {
  id: number;
  uuid: string;
  content: string;
}

export interface TQuestion {
  isMark?: boolean;
  user_answer?: string; // berupa id dari optionnya
  status?: string; //belum-dijawab,sudah-dijawab,ditandai
  id: number;
  uuid: string;
  sub_module_id: number;
  content: string;
  question_medias: any | null;
  choices: TChoice[];
  score: number;
}

interface TExerciseDetail {
  uuid: string;
  test_type: string;
  module_name: string;
  title: string;
  attempt: number;
  user_attempt: number;
  time: number;
  description: string;
  questions: TQuestion[];
}
//=====================================================================================================
interface TExerciseReview {
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
  id: number;
  uuid: string;
  question: string;
  options: TOptionReview[];
  no_soal: number;
  status: string;
  mark: number;
  explanation: string;
  user_answer: number;
  right_answer: number;
  right_answer_text: string;
}

interface TQuestionReviewItem {}

interface TOptionReview {
  id: number;
  uuid: string;
  text: string;
  letter: string;
  is_correct: boolean;
}

//=====================================================================================================
interface OptionItem {
  id: number;
  text: string;
}

interface QuestionCreateItem {
  id: number;
  uuid: string;
  sub_module_id: number;
  options: OptionItem[];
  user_answer: string;
  score: number;
}

interface TAddExerciseSubmissionPayload {
  exercise_uuid: string;
  time_required: string;
  questions: QuestionCreateItem[];
}
//=====================================================================================================
// interface dan type untuk exercise review

interface TExerciseReview {
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
  id: number;
  uuid: string;
  question: string;
  no_soal: number;
  status: string;
  mark: number;
  explanation: string;
  user_answer: number;
  right_answer: number;
  right_answer_text: string;
  options: TOptionReview[];
}

interface TOptionReview {
  id: number;
  uuid: string;
  text: string;
  letter: string;
  is_correct: boolean;
}

// ==========================================================================

export type TExerciseAllResponse = TMetaResponse<TExerciseAll>;
export type TExerciseDetailResponse = TMetaResponseSingle<TExerciseDetail>;
export type TExerciseHistoryResponse = TMetaResponseSingle<TExerciseHistory>;
export type TAddExerciseSubmissionResponse = TMetaResponseSingle<>;
export type TExerciseReviewResponse = TMetaResponseSingle<TExerciseReview>;

//=====================================================================================================

//param front end
interface TExerciseDeskrispiParams {
  module_id: number;
  exercise_uuid: string;
}

export interface TAfterTestProps {
  exercise_uuid: string;
  exercise_title: string;
  redirect_url: string;
}
