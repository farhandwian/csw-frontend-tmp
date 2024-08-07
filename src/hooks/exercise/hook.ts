import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import {
  TAddExerciseSubmissionPayload,
  TAddExerciseSubmissionResponse,
  TExerciseDetailResponse,
  TExerciseHistoryResponse,
  TExerciseReviewResponse,
} from "@/types/exercise";

import {
  addExerciseSubmission,
  getExerciseDetailRequest,
  getExerciseHistoryRequest,
  getExerciseReviewRequest,
} from "@/hooks/exercise/request";

export const useGetExerciseDetail = (
  uuid: string,
): UseQueryResult<TExerciseDetailResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-exercise-detail"],
    queryFn: async () => await getExerciseDetailRequest(uuid),
  });

export const useGetExerciseHistory = (
  uuid: string,
): UseQueryResult<TExerciseHistoryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-exercise-history"],
    queryFn: async () => await getExerciseHistoryRequest(uuid),
  });

export const useGetExerciseReview = (
  exercise_submission_uuid: string,
): UseQueryResult<TExerciseReviewResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-exercise-review"],
    queryFn: async () =>
      await getExerciseReviewRequest(exercise_submission_uuid),
  });

export const useAddExerciseSubmission = (): UseMutationResult<
  TAddExerciseSubmissionResponse,
  TMetaErrorResponse,
  TAddExerciseSubmissionPayload
> => {
  return useMutation<
    TAddExerciseSubmissionResponse,
    TMetaErrorResponse,
    TAddExerciseSubmissionPayload
  >({
    mutationKey: ["add-exercise-submission"],
    mutationFn: async (payload: TAddExerciseSubmissionPayload) => {
      console.log("tes masuk useAddExerciseSubmission");
      console.log(payload);
      const response = await addExerciseSubmission(payload);
      if (!response) {
        throw new Error("Invalid response");
      }
      return response;
    },
  });
};
