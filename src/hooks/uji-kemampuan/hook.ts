import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import {
  TQuizSubModuleAllResponse,
  TQuizAllResponse,
} from "@/types/uji-kemampuan";

import {
  getQuizSubModuleAllRequest,
  getQuizAllRequest,
} from "@/hooks/uji-kemampuan/request";

export const useGetQuizSubModuleAll = (
  module_id: number,
  test_type_id: number,
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
