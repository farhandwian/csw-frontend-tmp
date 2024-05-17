import { api } from "@/lib/api";

import {
  TDataLoginResponse,
  TDataWhoAmIResponse,
  TLoginPayload,
} from "@/types/auth";

export const loginRequest = async (
  payload: TLoginPayload,
): Promise<TDataLoginResponse | undefined> => {
  const { data } = await api.post<TDataLoginResponse>("/auth/login", payload);

  return data;
};

export const getWhoAmI = async (): Promise<TDataWhoAmIResponse | undefined> => {
  const { data } = await api.get("/auth/whoami");

  return data;
};