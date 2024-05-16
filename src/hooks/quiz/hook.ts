import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import {
  TQuizContentResponse,
  typeQuiz,
  TAddQuizSubmissionPayload,
  TAddQuizSubmissionResponse,
  TQuiz,
  TQuizDetailResponse,
  TQuizReviewResponse,
} from "@/types/quiz";

import {
  getQuizContentRequest,
  addQuizSubmission,
  getQuizDetailRequest,
  getQuizReviewRequest,
} from "@/hooks/quiz/request";

export const useGetQuizContent = (
  uuid: string,
  type: typeQuiz,
): UseQueryResult<TQuizContentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-content"],
    queryFn: async () => await getQuizContentRequest(uuid),
  });

export const useAddQuizSubmission = (): UseMutationResult<
  TAddQuizSubmissionResponse,
  TMetaErrorResponse,
  TAddQuizSubmissionPayload
> => {
  return useMutation<
    TAddQuizSubmissionResponse,
    TMetaErrorResponse,
    TAddQuizSubmissionPayload
  >({
    mutationKey: ["add-quiz-submission"],
    mutationFn: async (payload: TAddQuizSubmissionPayload) => {
      console.log("tes masuk useAddQuizSubmission");
      console.log(payload);
      const response = await addQuizSubmission(payload);
      if (!response) {
        throw new Error("Invalid response");
      }
      return response;
    },
  });
};

export const useGetQuizDetail = (
  uuid: string,
  test_type_id: number,
): UseQueryResult<TQuizDetailResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-detail"],
    queryFn: async () => await getQuizDetailRequest(uuid, test_type_id),
  });

export const useGetQuizReview = (
  quiz_submission_uuid: string,
  quiz_uuid: string,
  test_type_id: number,
): UseQueryResult<TQuizReviewResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-review"],
    queryFn: async () =>
      await getQuizReviewRequest(quiz_submission_uuid, quiz_uuid, test_type_id),
  });
