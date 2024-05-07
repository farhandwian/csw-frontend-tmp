import { api } from "@/lib/api";

import { TModulsResponse } from "@/types/modul/index";
import { TDetailModulResponse } from "@/types/modul";

export const getAllModulsRequest = async (): Promise<TModulsResponse> => {
  try {
    console.log("tes di getAllModulsRequest");
    const { data } = await api.get(`student/modul/all`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error in getAllModulsRequest:", error);
    throw error;
  }
};

export const getDetailModulRequest = async (
  uuid: string,
): Promise<TDetailModulResponse> => {
  try {
    console.log("ini getDetailModulRequest");
    const { data } = await api.get(`student/modul/${uuid}`);
    return data;
  } catch (error) {
    console.error("Error in getDetailModulRequest:", error);
    throw error;
  }
};
