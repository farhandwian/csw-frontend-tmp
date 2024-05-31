import { api } from "@/lib/api";

import {
  TDataLoginResponse,
  TDataUserResponse,
  TLoginPayload,
} from "@/types/auth";

export const loginRequest = async (
  payload: TLoginPayload,
): Promise<TDataLoginResponse | undefined> => {
  const { data } = await api.post<TDataLoginResponse>("/auth/login", payload);

  return data;
};

export const getUserRequest = async (): Promise<
  TDataUserResponse | undefined
> => {
  const { data } = await api.get("/dashboard/student/user/me");

  return data;
};
