'use client';

import { Recipe } from '@/libs/fetchRecipe';
import { maxBy } from 'lodash-es';
import React, { FC, PropsWithChildren, createContext, useContext, useState } from 'react';

const StonkRecipesContext = createContext<{
  recipes: Recipe[],
  recipesMetadata:{      
    maxCost:number,
    maxRevenue:number,
    maxProfit:number,
  }
} | undefined>(undefined);

export const StonkRecipesProvider: FC<PropsWithChildren<{recipes: Recipe[]}>> = props => {
  const {recipes} = props;

  return (
    <StonkRecipesContext.Provider value={{
      recipes: recipes,
      recipesMetadata:{
        maxCost: maxBy(recipes, 'costSum')?.costSum??0,
        maxRevenue: maxBy(recipes, 'revenueSum')?.revenueSum??0,
        maxProfit: maxBy(recipes, 'profit')?.profit??0,
      }
    }}>
      {props.children}
    </StonkRecipesContext.Provider>
  );
};

export const useStonkRecipes =()=>{
  const ctx = useContext(StonkRecipesContext);
  if(ctx==undefined){
    throw new Error("useStonkRecipes found no provider");
  }
  return ctx;
}