import { TMetaResponse, TMetaResponseSingle } from "@/types";

interface TQuizGroupedBySubModule {
  sub_module_id: number;
  sub_module_uuid: string;
  sub_module_name: string;
  quiz_count: number;
  submission_count: number;
}

interface TQuizSubModuleAll {
  uuid: string;
  module_name: string;
  quizzes_grouped_by_sub_module: TQuizGroupedBySubModule[];
}

export interface TQuizSubModuleAllParams {
  module_id: number;
  test_type_id: number;
}
export type TQuizSubModuleAllResponse = TMetaResponseSingle<TQuizSubModuleAll>;

export interface TQuizAllParams {
  sub_module_uuid: string;
  test_type_id: number;
}

export type TTypeUjiKemampuanTestURL = "latihan-soal" | "pretest" | "posttest";

interface TQuiz {
  id: number;
  uuid: string;
  sub_subject: string;
  title: string;
  description: string;
  time: number;
  open: string; // Consider using Date if you will parse these strings into Date objects
  close: string; // Consider using Date if you will parse these strings into Date objects
  quiz_submission_uuid: string;
  max_score: number;
  attempt: number;
  status_pengerjaan: "sudah-dikerjakan" | "belum-dikerjakan"; // Consider using an enum for status values
}

interface TQuizAll {
  uuid: string;
  sub_module_name: string;
  module_name: string;
  page: number;
  quizzes: TQuiz[];
}

export type TQuizAllResponse = TMetaResponseSingle<TQuizAll>;

export interface TCBTParams {
  module_id: number;
  sub_module_uuid: string;
  quiz_uuid: string;
}

export interface TDeskripsiParams {
  module_id: number;
  sub_module_uuid: string;
  quiz_uuid: string;
}

export interface TReviewJawabanParams {
  module_id: number;
  sub_module_uuid: string;
  quiz_submission_uuid: string;
  quiz_uuid: string;
}

export interface TAfterTestParams {
  module_id: number;
  sub_module_uuid: string;
  quiz_uuid: string;
  test_type_id: number;
  quiz_title: string;
}
