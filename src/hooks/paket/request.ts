import { api } from "@/lib/api";

import { TPaketsResponse } from "@/types/home-page/index";

export const getSearchPakets = async (
  module?: string,
  name?: string,
): Promise<TPaketsResponse> => {
  try {
    const { data } = await api.get(
      `home/plan/all?module=${module}&name=${name}`,
    );
    return data;
  } catch (error) {
    console.error("Error in getSearchPakets:", error);
    throw error;
  }
};
