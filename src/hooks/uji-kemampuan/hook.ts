import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import { TQuizSubModuleAllResponse } from "@/types/uji-kemampuan";

import { getQuizSubModuleAllRequest } from "@/hooks/uji-kemampuan/request";

export const useGetQuizSubModuleAll = (
  module_id: number,
  test_type_id: number,
): UseQueryResult<TQuizSubModuleAllResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-sub-module-all"],
    queryFn: async () =>
      await getQuizSubModuleAllRequest(module_id, test_type_id),
  });
