import { TMetaResponse, TMetaResponseSingle } from "@/types";

export interface TModul {
  uuid: string;
  sub_module_name: string;
  module_name: string;
  description: string;
}

interface TDetailModul {
  uuid: string;
  test_type_id: number;
  sub_module_name: string;
  module_name: string;
  description: string;
  subjects: TSubject[];
  quizzes: TQuiz[];
}

interface TSubSubject {
  uuid: string;
  name: string;
  content: string;
}

interface TMateriModul {
  uuid: string;
  module: string;
  sub_module: string;
  subject: string;
  sub_subject: SubSubject[];
}

interface TSubject {
  uuid: string;
  name: string;
}

interface TQuiz {
  uuid: string;
  title: string;
}

export interface TDeskripsiLatihanSoalParams {
  modul_uuid: string;
  quiz_uuid: string;
  test_type_id: int;
}

export interface TDetailModulParams {
  modul_uuid: string;
}

export interface TMateriModulParams {
  modul_uuid: string;
  materi_uuid: string;
  test_id: string;
}

export interface TCBTParams {
  modul_uuid: string;
  quiz_uuid: string;
  test_type_id: int;
}

export interface TAfterTestParams {
  modul_uuid: string;
  quiz_uuid: string;
  test_type_id: int;
  quiz_title: string;
}

export interface TReviewJawabanParams {
  modul_uuid: string;
  quiz_submission_id: string;
  quiz_uuid: string;
  test_type_id: int;
}

export interface TNilaiParams {
  modul_uuid: string;
}
export type TModulsResponse = TMetaResponse<TModul>;

export type TDetailModulResponse = TMetaResponseSingle<TDetailModul>;

export type TMateriModulResponse = TMetaResponseSingle<TMateriModul>;
