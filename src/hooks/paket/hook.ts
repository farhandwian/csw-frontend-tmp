import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/types";
import { TPaketsResponse } from "@/types/home-page";

import { getSearchPakets } from "@/hooks/paket/request";

export const useGetSearchPakets = (
  module?: string,
  name?: string,
): UseQueryResult<TPaketsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-search-pakets"],
    queryFn: async () => await getSearchPakets(module, name),
  });
