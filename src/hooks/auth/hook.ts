import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import {
  getUserRequest,
  loginRequest,
  registerRequest,
} from "@/hooks/auth/request";

import { TMetaErrorResponse } from "@/types";
import {
  TDataLoginResponse,
  TDataUserResponse,
  TLoginPayload,
  TDataRegisterResponse,
  TRegisterPayload,
} from "@/types/auth";

export const useLogin = (): UseMutationResult<
  TDataLoginResponse,
  TMetaErrorResponse,
  TLoginPayload
> => {
  return useMutation<TDataLoginResponse, TMetaErrorResponse, TLoginPayload>({
    mutationKey: ["login"],
    mutationFn: async (payload: TLoginPayload) => {
      const response = await loginRequest(payload);
      if (!response) {
        throw new Error("Invalid response");
      }
      return response;
    },
  });
};

export const useRegister = (): UseMutationResult<
  TDataRegisterResponse,
  TMetaErrorResponse,
  TRegisterPayload
> => {
  return useMutation<
    TDataRegisterResponse,
    TMetaErrorResponse,
    TRegisterPayload
  >({
    mutationKey: ["register"],
    mutationFn: async (payload: TRegisterPayload) => {
      const response = await registerRequest(payload);
      if (!response) {
        throw new Error("Invalid response");
      }
      return response;
    },
  });
};

export const useGetUser = (): UseQueryResult<
  TDataUserResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: async () => await getUserRequest(),
  });
};
