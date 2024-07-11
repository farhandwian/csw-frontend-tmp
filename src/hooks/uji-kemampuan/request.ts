import { api } from "@/lib/api";
import { convertIDToModuleName } from "@/lib/utils/ConvertModule";
import { TExerciseAllResponse } from "@/types/exercise";

import {
  TQuizSubModuleAllResponse,
  TQuizAllResponse,
} from "@/types/uji-kemampuan";

export const getQuizSubModuleAllRequest = async (
  module_id: number,
  test_type_id: number,
): Promise<TQuizSubModuleAllResponse> => {
  console.log(module_id, test_type_id);
  try {
    const { data } = await api.get(
      `/dashboard-student/quiz/quiz_sub_module_all/${module_id}/${test_type_id}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getQuizReviewRequest:", error);
    throw error;
  }
};

export const getQuizAllRequest = async (
  page: number = 1,
  limit: number = 1,
  sub_module_uuid: string,
  test_type_id: number,
): Promise<TQuizAllResponse> => {
  console.log(sub_module_uuid, test_type_id);
  try {
    const { data } = await api.get(
      `/dashboard-student/quiz/quiz_all/${sub_module_uuid}/${test_type_id}?page=${page}&limit=${limit}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getQuizReviewRequest:", error);
    throw error;
  }
};

export const getExerciseAllRequest = async (
  module_id: string,
  test_type_id: string,
): Promise<TExerciseAllResponse> => {
  try {
    let modulee = convertIDToModuleName(module_id);
    console.log(module_id);

    const { data } = await api.get(`/dashboard-student/exercise/all`, {
      params: {
        module: modulee,
        test_type: test_type_id,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error in getQuizContentRequest:", error);
    throw error;
  }
};
