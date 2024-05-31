import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";
import { TMaterialAllResponse, TQuizAllResponse } from "@/types/dashboard";

import {
  getMaterialAllRequest,
  getQuizAllRequest,
} from "@/hooks/dashboard/request";

export const useGetMaterialAll = (): UseQueryResult<
  TMaterialAllResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-Material-all"],
    queryFn: async () => await getMaterialAllRequest(),
  });

export const useGetQuizAll = (): UseQueryResult<
  TQuizAllResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-quiz-all"],
    queryFn: async () => await getQuizAllRequest(),
  });
