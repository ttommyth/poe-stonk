'use client';
 
import { CurrencyDetail } from '@/libs/fetchNinja';
import React, { FC, PropsWithChildren, createContext, useContext, useState } from 'react';

export const StonkContext = createContext<{  
  currencyReferences: { [key: string]: CurrencyDetail[] }, 
  basicExchangeRate: {[key:string]: number} //chaos equivalent 
} | undefined>(undefined);

export const StonkProvider: FC<PropsWithChildren<any>> = (props) => {
  

  return (
    <StonkContext.Provider value={undefined}>
      {props.children}
    </StonkContext.Provider>
  );
};
export const useStonk= ()=>useContext(StonkContext);