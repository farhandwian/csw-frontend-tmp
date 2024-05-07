import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";

import { TModulsResponse } from "@/types/modul";

import {
  getAllModulsRequest,
  getDetailModulRequest,
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
): UseQueryResult<TModulsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-detail-modul"],
    queryFn: async () => await getDetailModulRequest(uuid),
  });
