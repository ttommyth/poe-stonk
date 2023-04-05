"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

const queryClient = new QueryClient()
export const ClientBoundary:FC<PropsWithChildren<any>>=(props)=>{
  return <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
}