"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { DialogProvider } from "./provider/dialog/DialogProvider";

const queryClient = new QueryClient()
export const ClientBoundary:FC<PropsWithChildren<any>>=(props)=>{
  return <QueryClientProvider client={queryClient}>
    <DialogProvider>
      {props.children}
    </DialogProvider>
  </QueryClientProvider>
}