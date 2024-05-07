import { api } from "@/lib/api";

import { TMentorsResponse } from "@/types/home-page/index";
import { TDetailMentorResponse } from "@/types/mentor";

export const getAllMentorsRequest = async (): Promise<TMentorsResponse> => {
  try {
    const { data } = await api.get(`home/mentor/all`);
    return data;
  } catch (error) {
    console.error("Error in getAllMentorsRequest:", error);
    throw error;
  }
};

export const getDetailMentorRequest = async (
  uuid: string,
): Promise<TDetailMentorResponse> => {
  try {
    console.log("ini getDetailMentorRequest");
    const { data } = await api.get(`home/mentor/${uuid}`);
    return data;
  } catch (error) {
    console.error("Error in getDetailMentorRequest:", error);
    throw error;
  }
};
