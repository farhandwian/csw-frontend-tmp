import { api } from "@/lib/api";
import {
  TAddExerciseSubmissionPayload,
  TExerciseDetailResponse,
  TExerciseHistoryResponse,
  TExerciseReviewResponse,
} from "@/types/exercise";

export const getExerciseDetailRequest = async (
  uuid: string,
): Promise<TExerciseDetailResponse> => {
  try {
    const { data } = await api.get(`/dashboard-student/exercise/${uuid}`);

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getExerciseDetailRequest:", error);
    throw error;
  }
};

export const getExerciseHistoryRequest = async (
  uuid: string,
): Promise<TExerciseHistoryResponse> => {
  try {
    const { data } = await api.get(
      `/dashboard-student/exercise/history/${uuid}`,
    );
    // const data = {
    //   status: "ok",
    //   code: 200,
    //   data: {
    //     max_score: {
    //       score_per_module: 95,
    //       max_score_per_module: 100,
    //       exercise_history_detail: [
    //         {
    //           submission_uuid: "abc123",
    //           submodule: "Math",
    //           score_per_sub_module: 25,
    //           max_score_per_sub_module: 25,
    //           total_question_per_sub_module: 10,
    //           max_total_question_per_sub_module: 10,
    //         },
    //         {
    //           submission_uuid: "def456",
    //           submodule: "Science",
    //           score_per_sub_module: 30,
    //           max_score_per_sub_module: 30,
    //           total_question_per_sub_module: 10,
    //           max_total_question_per_sub_module: 10,
    //         },
    //         {
    //           submission_uuid: "ghi789",
    //           submodule: "History",
    //           score_per_sub_module: 40,
    //           max_score_per_sub_module: 45,
    //           total_question_per_sub_module: 10,
    //           max_total_question_per_sub_module: 10,
    //         },
    //       ],
    //     },
    //     min_score: {
    //       score_per_module: 60,
    //       max_score_per_module: 100,
    //       exercise_history_detail: [
    //         {
    //           submission_uuid: "jkl012",
    //           submodule: "Math",
    //           score_per_sub_module: 15,
    //           max_score_per_sub_module: 25,
    //           total_question_per_sub_module: 10,
    //           max_total_question_per_sub_module: 10,
    //         },
    //         {
    //           submission_uuid: "mno345",
    //           submodule: "Science",
    //           score_per_sub_module: 20,
    //           max_score_per_sub_module: 30,
    //           total_question_per_sub_module: 10,
    //           max_total_question_per_sub_module: 10,
    //         },
    //         {
    //           submission_uuid: "pqr678",
    //           submodule: "History",
    //           score_per_sub_module: 25,
    //           max_score_per_sub_module: 45,
    //           total_question_per_sub_module: 10,
    //           max_total_question_per_sub_module: 10,
    //         },
    //       ],
    //     },
    //   },
    // };
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getExerciseHistoryRequest:", error);
    throw error;
  }
};

export const getExerciseReviewRequest = async (
  exercise_submission_uuid: string,
): Promise<TExerciseReviewResponse> => {
  try {
    console.log(exercise_submission_uuid);
    const { data } = await api.get(
      `/dashboard-student/exercise/review/${exercise_submission_uuid}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getExerciseReviewRequest:", error);
    throw error;
  }
};

export const addExerciseSubmission = async (
  payload: TAddExerciseSubmissionPayload,
) => {
  try {
    const { data } = await api.post<any>(
      "/dashboard-student/exercise",
      payload,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
