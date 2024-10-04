"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const client = new QueryClient();

export const Providers = ({ children }: PropsWithChildren<{}>) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);
