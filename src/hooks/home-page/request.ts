import { api } from "@/lib/api";

import { TMentorsResponse, TPaketsResponse } from "@/types/home-page/index";

export const getTopMentorsRequest = async (): Promise<TMentorsResponse> => {
  try {
    const { data } = await api.get(`home/mentor/top`);
    return data;
  } catch (error) {
    console.error("Error in getTopMentorsRequest:", error);
    throw error;
  }
};

export const getTopPaketsRequest = async (): Promise<TPaketsResponse> => {
  try {
    const { data } = await api.get(`home/plan/top`);
    return data;
  } catch (error) {
    console.error("Error in getTopPaketsRequest:", error);
    throw error;
  }
};
