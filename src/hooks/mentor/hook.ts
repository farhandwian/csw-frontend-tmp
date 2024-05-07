import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";
import { TMentorsResponse } from "@/types/home-page";

import { TDetailMentorResponse } from "@/types/mentor";

import {
  getAllMentorsRequest,
  getDetailMentorRequest,
} from "@/hooks/mentor/request";

export const useGetAllMentors = (): UseQueryResult<
  TMentorsResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-All-mentors"],
    queryFn: async () => await getAllMentorsRequest(),
  });

export const useGetDetailMentor = (
  uuid: string,
): UseQueryResult<TDetailMentorResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-detail-mentors"],
    queryFn: async () => await getDetailMentorRequest(uuid),
  });
