import { api } from "@/lib/api";

import {
  TMaterialAllResponse,
  TQuizAllResponse,
} from "@/types/dashboard/index";

export const getMaterialAllRequest =
  async (): Promise<TMaterialAllResponse> => {
    try {
      const { data } = await api.get(`dashboard-student`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error in getMaterialAllRequest:", error);
      throw error;
    }
  };

export const getQuizAllRequest = async (): Promise<TQuizAllResponse> => {
  try {
    const { data } = await api.get(`dashboard-student/dashboard-quiz-all`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error in getQuizAllRequest:", error);
    throw error;
  }
};
