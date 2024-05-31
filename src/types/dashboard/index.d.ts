import { TMetaResponse, TMetaResponseSingle, TTestTypeResponse } from "@/types";

interface Module {
  uuid: string;
  name: string;
}

interface SubModule {
  uuid: string;
  name: string;
}

interface TMaterialAll {
  uuid: string;
  module: Module;
  sub_module: SubModule;
  subject: string;
}

interface TQuiz {
  uuid: string;
  sub_module_name: string;
  sub_module_uuid: string;
  title: string;
  description: string;
  time: number;
  open: string;
  close: string;
  quiz_submission_uuid: string;
  max_score: number;
  attempt: number;
  status_pengerjaan: string;
}

interface TQuizModuleAll {
  uuid: string;
  module_name: string;
  quizzes: Quiz[];
}

interface TQuizTestTypeAll {
  test_type: TTestTypeResponse;
  quiz_all_dahsboard_per_module: QuizModule[];
}

export type TMaterialAllResponse = TMetaResponse<TMaterialAll>;
export type TQuizAllResponse = TMetaResponse<TQuizTestTypeAll>;
