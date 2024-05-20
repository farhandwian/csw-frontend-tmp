import { api } from "@/lib/api";

import { TQuizSubModuleAllResponse } from "@/types/uji-kemampuan";

export const getQuizSubModuleAllRequest = async (
  module_id: number,
  test_type_id: number,
): Promise<TQuizSubModuleAllResponse> => {
  console.log(module_id, test_type_id);
  try {
    const { data } = await api.get(
      `/dashboard/student/quiz/quiz_sub_module_all/${module_id}/${test_type_id}`,
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error("Error in getQuizReviewRequest:", error);
    throw error;
  }
};
