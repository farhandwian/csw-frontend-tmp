import { api } from "@/lib/api";

import { TModulsResponse } from "@/types/modul/index";
import { TDetailModulResponse, TMateriModulResponse } from "@/types/modul";

export const getAllModulsRequest = async (): Promise<TModulsResponse> => {
  try {
    const { data } = await api.get(`/dashboard/student/module/all`);
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
    const { data } = await api.get(`/dashboard/student/module/${uuid}`);
    return data;
  } catch (error) {
    console.error("Error in getDetailModulRequest:", error);
    throw error;
  }
};

export const getMateriModulRequest = async (
  uuid: string,
): Promise<TMateriModulResponse> => {
  try {
    console.log("ini getMateriModulRequest");
    const { data } = await api.get(`/dashboard/student/module/${uuid}`);
    return data;
  } catch (error) {
    console.error("Error in getMateriModulRequest:", error);
    throw error;
  }
};
