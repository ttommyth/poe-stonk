'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, fulfillPredefinedRecipes, fulfillRecipes, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { atom, useAtom } from 'jotai'
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";
import MiniSearch from 'minisearch'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/libs/db";
import { StonkRecipeList } from "../StonkRecipeList";
import { useQuery } from "@tanstack/react-query";
import { prepareAllNinjaItem } from "@/assets/ninja/prepare/ninjaFetching";


export const CustomStonkRecipeList: FC<{ 
  league:string
  customId:number
 }> = (props) => {
   const {league, customId} = props;
   const [editMode, setEditMode] = useState<boolean>(false);
   const customRecipe = useLiveQuery(
     () => db.customRecipes.get(customId)
   );
   const fulfilledRecipesQuery = useQuery(["custom", league, customId], async ()=>{
     if(customRecipe?.recipes?.length)
       return await fulfillRecipes(league, customRecipe?.recipes);
     else
       return undefined;
   })

   return <div className="flex flex-col">
     <h2>
       {customRecipe?.name}
     </h2>
     {
       editMode?<>
       </>:<>
         {
           fulfilledRecipesQuery.data?.recipes ?
             <StonkRecipeList recipes={fulfilledRecipesQuery.data?.recipes}  />:<>
             </>
         }
       </>
     }
   </div>
 }