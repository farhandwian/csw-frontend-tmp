import { api } from "@/lib/api";
import {
  TQuizContentResponse,
  typeQuiz,
  TAddQuizSubmissionPayload,
  TAddQuizSubmissionResponse,
  TQuiz,
} from "@/types/quiz";
export const getQuizContentRequest = async (
  uuid: string,
): Promise<TQuizContentResponse> => {
  try {
    const quiz_uuid = uuid;
    const { data } = await api.get(`quiz/${quiz_uuid}`);
    return data;
  } catch (error) {
    console.error("Error in getQuizContentRequest:", error);
    throw error;
  }
};

export const addQuizSubmission = async (payload: TAddQuizSubmissionPayload) => {
  try {
    const { data } = await api.post<any>("/quiz/quiz_submission", payload);
    return data;
  } catch (error) {
    throw error;
  }
};
