import { TMetaResponse, TMetaResponseSingle } from "@/types";

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

export type TExerciseAllResponse = TMetaResponse<TExerciseAll>;
