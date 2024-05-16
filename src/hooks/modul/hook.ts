import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import {
  TModulsResponse,
  TDetailModulResponse,
  TMateriModulResponse,
} from "@/types/modul";

import {
  getAllModulsRequest,
  getDetailModulRequest,
  getMateriModulRequest,
} from "@/hooks/modul/request";

export const useGetAllModuls = (): UseQueryResult<
  TModulsResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-All-moduls"],
    queryFn: async () => await getAllModulsRequest(),
  });

export const useGetDetailModul = (
  uuid: string,
): UseQueryResult<TDetailModulResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-detail-modul"],
    queryFn: async () => await getDetailModulRequest(uuid),
  });

export const useGetMateriModul = (
  uuid: string,
): UseQueryResult<TMateriModulResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-materi-modul"],
    queryFn: async () => await getMateriModulRequest(uuid),
  });
