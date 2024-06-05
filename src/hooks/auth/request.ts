import { api } from "@/lib/api";

import {
  TDataLoginResponse,
  TDataUserResponse,
  TLoginPayload,
  TDataRegisterResponse,
  TRegisterPayload,
} from "@/types/auth";

export const loginRequest = async (
  payload: TLoginPayload,
): Promise<TDataLoginResponse | undefined> => {
  const { data } = await api.post<TDataLoginResponse>("/auth/login", payload);

  return data;
};

export const registerRequest = async (
  payload: TRegisterPayload,
): Promise<TDataRegisterResponse | null> => {
  try {
    const { data } = await api.post<TDataRegisterResponse>(
      "/auth/register",
      payload,
    );

    return data;
  } catch (error: any) {
    if (error.response.status === 422) {
      throw new Error(error.response.data.message);
    }

    throw new Error(
      typeof error.response.data === "string"
        ? error.response.data
        : error.response.data?.message,
    );
  }
};

export const getUserRequest = async (): Promise<
  TDataUserResponse | undefined
> => {
  const { data } = await api.get("/dashboard/student/user/me");

  return data;
};
