'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useState } from "react";
import { StonkRecipeCard } from "./StonkRecipeCard";
import { atom, useAtom } from 'jotai'
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";


export const recipeStatsAtom = atom<{
  maxCost:number,
  maxRevenue:number,
  maxProfit:number,
}>({
  maxCost: 0,
  maxRevenue: 0,
  maxProfit: 0,
})
export const StonkRecipeList: FC<{ 
  recipes: Recipe[],
  currencyReferences: { [key: string]: CurrencyDetail[] }, 
  basicExchangeRate: {[key:string]: number} //chaos equivalent 
 }> = (props) => {
   const { recipes, currencyReferences, basicExchangeRate } = props;
   const [quickFilter, setQuickFilter] = useState("");
   const [sorting, setSorting] = useState<{iterate:keyof Recipe, order:"asc"|"desc" }>({iterate:"profit", order:"desc"});
   const [recipeStats, setRecipeStats] = useAtom(recipeStatsAtom)
   const sortedRecipes = useMemo(()=>{
     return orderBy(recipes, [sorting.iterate], [sorting.order]);
   },[recipes, sorting.iterate, sorting.order]);
   useEffect(()=>{
     setRecipeStats ({
       maxCost: maxBy(recipes, 'costSum')?.costSum??0,
       maxRevenue: maxBy(recipes, 'revenueSum')?.revenueSum??0,
       maxProfit: maxBy(recipes, 'profit')?.profit??0,
     })
   }, [recipes, setRecipeStats])
   const triggerSorting=(iterate: keyof Recipe)=>{
     if(sorting.iterate === iterate){
       setSorting(s=>({
         ...s,
         order: s.order=="asc"?"desc":"asc"
       }));
     }else{      
       setSorting(s=>({
         iterate: iterate,
         order:"asc"
       }));
     }
   }
   return <div className="flex flex-col w-full gap-4">
     <input type="text" placeholder="Quick Search" className="daisy-input daisy-input-bordered daisy-input-lg w-full" />
     <div>
       <button type="button" className="daisy-btn" onClick={e=>triggerSorting("costSum")}>
        sort by cost
         {
           sorting.iterate=="costSum"&&   <ArrowSmallDownIcon className="h-6 w-6 data-[asc=false]:rotate-180 transition-transform" data-asc={sorting.order=="asc"} />
    
         }
       </button>
       <button type="button" className="daisy-btn" onClick={e=>triggerSorting("revenueSum")}>
        sort by revenue
         {
           sorting.iterate=="revenueSum"&&   <ArrowSmallDownIcon className="h-6 w-6 data-[asc=false]:rotate-180 transition-transform" data-asc={sorting.order=="asc"} />
    
         }
       </button>
       <button type="button" className="daisy-btn" onClick={e=>triggerSorting("profit")}>
        sort by profit
         {
           sorting.iterate=="profit"&&   <ArrowSmallDownIcon className="h-6 w-6 data-[asc=false]:rotate-180 transition-transform" data-asc={sorting.order=="asc"} />
    
         }
       </button>
     </div>
     <div className="grid grid-cols-3 gap-2 w-full">
       {sortedRecipes?.map((recipe,idx) => <StonkRecipeCard recipe={recipe} key={`${recipe.name}.${idx}`} />)}
     </div>
   </div>
 }