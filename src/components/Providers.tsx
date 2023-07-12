"use client";
import { queryClient } from "@/lib/clients";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
