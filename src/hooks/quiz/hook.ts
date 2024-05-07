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
} from "@/types/quiz";

import { getQuizContentRequest, addQuizSubmission } from "@/hooks/quiz/request";

export const useGetQuizContent = (
  uuid: string,
  type: typeQuiz,
): UseQueryResult<TQuizContentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-content-quiz"],
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
