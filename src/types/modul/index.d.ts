import { TMetaResponse, TMetaResponseSingle } from "@/types";

export interface TModul {
  uuid: string;
  sub_module_name: string;
  module_name: string;
  description: string;
}

interface TDetailModul {
  uuid: string;
  sub_module_name: string;
  module_name: string;
  description: string;
  subjects: TSubject[];
  quizzes: TQuiz[];
}

interface TSubject {
  uuid: string;
  name: string;
}

interface TQuiz {
  uuid: string;
  title: string;
}

export type TModulsResponse = TMetaResponse<TModul>;

export type TDetailModulResponse = TMetaResponse<TDetailModul>;
