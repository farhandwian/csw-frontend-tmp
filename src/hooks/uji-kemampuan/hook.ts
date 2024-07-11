import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import {
  TQuizAllResponse,
  TQuizSubModuleAllResponse,
} from "@/types/uji-kemampuan";

import {
  getQuizAllRequest,
  getQuizSubModuleAllRequest,
} from "@/hooks/uji-kemampuan/request";
import { TExerciseAllResponse } from "@/types/exercise";

import { getExerciseAllRequest } from "@/hooks/uji-kemampuan/request";

export const useGetQuizSubModuleAll = (
  module_id: string,
  test_type_id: string,
): UseQueryResult<TQuizSubModuleAllResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-sub-module-all"],
    queryFn: async () =>
      await getQuizSubModuleAllRequest(module_id, test_type_id),
  });

export const useGetQuizAll = (
  page: number = 1,
  limit: number = 1,
  sub_module_uuid: string,
  test_type_id: number,
): UseQueryResult<TQuizAllResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-all", page],
    queryFn: async () =>
      await getQuizAllRequest(page, limit, sub_module_uuid, test_type_id),
    placeholderData: (prev) => prev,
  });

export const useGetExerciseAll = (
  module_id: string,
  test_type_id: string,
): UseQueryResult<TExerciseAllResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-exercise-all", module_id, test_type_id],
    queryFn: async () => await getExerciseAllRequest(module_id, test_type_id),
  });
