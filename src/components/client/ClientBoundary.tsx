"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { DialogProvider } from "./provider/dialog/DialogProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()
export const ClientBoundary:FC<PropsWithChildren<any>>=(props)=>{
  return <QueryClientProvider client={queryClient}>
    <DialogProvider>
      {props.children}
    </DialogProvider>
    <ToastContainer position="bottom-right"/>
  </QueryClientProvider>
}