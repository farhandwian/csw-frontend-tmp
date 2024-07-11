import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";
import { TMentorsResponse, TPaketsResponse } from "@/types/home-page";

import {
  getTopMentorsRequest,
  getTopPaketsRequest,
} from "@/hooks/home-page/request";

export const useGetTopMentors = (): UseQueryResult<
  TMentorsResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-top-mentors"],
    queryFn: async () => await getTopMentorsRequest(),
  });

export const useGetTopPakets = (): UseQueryResult<
  TPaketsResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-top-pakets"],
    queryFn: async () => await getTopPaketsRequest(),
  });
