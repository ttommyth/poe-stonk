'use client';
 
import { AllNinjaType, CurrencyDetail, CurrencyTypeList, ItemTypeList } from '@/libs/fetchNinja';
import React, { FC, PropsWithChildren, createContext, useContext, useState } from 'react';

export const NinjaContext = createContext<{  
  ninjaBrief:{
    [type in typeof CurrencyTypeList[number]]: {
      name: string;
      detailsId:string;
    }
  } & {
    [type in typeof ItemTypeList[number]]: {
      name: string;
      detailsId:string;
    }
  }
} | undefined>(undefined);

export const NinjaProvider: FC<PropsWithChildren<any>> = (props) => {
  const [stonkRecipes, setStonkRecipes] = useState([]);

  return (
    <NinjaContext.Provider value={undefined}>
      {props.children}
    </NinjaContext.Provider>
  );
};
export const useStonk= ()=>useContext(NinjaContext);