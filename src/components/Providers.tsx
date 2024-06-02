"use client";

import { WagmiProvider, cookieToInitialState } from "wagmi";
import { wagmiConfig } from "~/lib/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: string | null;
}) {
  const wagmiInitialState = cookieToInitialState(wagmiConfig, cookie);
  return (
    <WagmiProvider config={wagmiConfig} initialState={wagmiInitialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
