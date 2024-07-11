import { api } from "@/lib/api";
import {
  TAddQuizSubmissionPayload,
  TQuizContentResponse,
  TQuizDetailResponse,
  TQuizReviewResponse,
} from "@/types/quiz";
export const getQuizContentRequest = async (
  uuid: string,
): Promise<TQuizContentResponse> => {
  try {
    console.log("tes");
    const quiz_uuid = uuid;
    const { data } = await api.get(
      `/dashboard/student/quiz/quiz_content/${quiz_uuid}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error in getQuizContentRequest:", error);
    throw error;
  }
};

export const getQuizDetailRequest = async (
  uuid: string,
  test_type_id: number,
): Promise<TQuizDetailResponse> => {
  try {
    const quiz_uuid = uuid;
    const { data } = await api.get(
      `/dashboard/student/quiz/quiz_detail/${quiz_uuid}/${test_type_id}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getQuizContentRequest:", error);
    throw error;
  }
};

export const getQuizReviewRequest = async (
  quiz_submission_uuid: string,
  quiz_uuid: string,
  test_type_id: number,
): Promise<TQuizReviewResponse> => {
  try {
    console.log(quiz_submission_uuid, test_type_id);
    const { data } = await api.get(
      `/dashboard/student/quiz/quiz_review/${quiz_submission_uuid}/${test_type_id}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getQuizReviewRequest:", error);
    throw error;
  }
};

export const getQuizScoreAllRequest = async (
  sub_modul_uuid: string,
): Promise<TQuizReviewResponse> => {
  try {
    const { data } = await api.get(
      `/dashboard/student/quiz/quiz_score_all/${sub_modul_uuid}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getQuizScoreAllRequest:", error);
    throw error;
  }
};

export const addQuizSubmission = async (payload: TAddQuizSubmissionPayload) => {
  try {
    const { data } = await api.post<any>(
      "/dashboard/student/quiz/quiz_submission",
      payload,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
