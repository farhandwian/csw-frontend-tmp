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
  total_question_per_sub_module: number;
  max_total_question_per_sub_module: number;
}

interface TExerciseHistoryDetailModule {
  score_per_module: number;
  max_score_per_module: number;
  exercise_history_detail: TExerciseHistoryDetailSubModule[];
}

interface TExerciseHistory {
  max_score: TExerciseHistoryDetailModule;
  min_score: TExerciseHistoryDetailModule;
}
//=====================================================================================================
interface TChoice {
  uuid: string;
  content: string;
}

interface TQuestion {
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
  uuid: string;
  startedAt: string;
  finishedAt: string;
  timeRequired: string;
  rightAnswer: number;
  totalQuestion: number;
  score: number;
  perfectScore: number;
  questions: QuestionReview[];
}

interface QuestionReview {
  uuid: string;
  content: string;
  explanation: string;
  questionMedia: QuestionMedia[];
  choices: ChoiceReview[];
  score: number;
}

interface QuestionMedia {
  // Define the properties of QuestionMedia here
  // For example:
  // mediaType: string;
  // mediaUrl: string;
}

interface ChoiceReview {
  uuid: string;
  questionId: number;
  content: string;
  isChoose: boolean;
  isCorrect: boolean;
}

//=====================================================================================================

export type TExerciseAllResponse = TMetaResponse<TExerciseAll>;
export type TExerciseDetailResponse = TMetaResponseSingle<TExerciseDetail>;
export type TExerciseHistoryResponse = TMetaResponseSingle<TExerciseHistory>;
