"use client";
import StoreProvider from "@/app/StoreProvider";
import { SessionProvider } from "next-auth/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <StoreProvider>{children}</StoreProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
