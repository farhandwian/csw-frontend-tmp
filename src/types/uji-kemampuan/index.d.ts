import { TMetaResponse, TMetaResponseSingle } from "@/types";

interface TQuizGroupedBySubModule {
  sub_module_id: number;
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
  modul_id: int;
  test_type_id: int;
}

export type typeUjiKemampuanTestURL = "latihan-soal" | "pretest" | "posttest";

export type TQuizSubModuleAllResponse = TMetaResponseSingle<TQuizSubModuleAll>;
