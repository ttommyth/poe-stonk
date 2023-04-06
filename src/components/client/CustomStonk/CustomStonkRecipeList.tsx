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
import { useSearchParams } from "next/navigation";
import { CustomStonkEditor } from "./CustomStonkEditor";


export const CustomStonkRecipeList: FC<{ 
  league:string
  customId:number
 }> = (props) => {
   const {league, customId} = props;
   const [editMode, setEditMode] = useState<boolean>(false);
   const customRecipes = useLiveQuery(
     () => db.customRecipeBooks.get(customId)
   );
   const fulfilledRecipesQuery = useQuery(["custom", league, customId], async ()=>{
     if(customRecipes?.recipes?.length)
       return await fulfillRecipes(league, customRecipes?.recipes);
     else
       return undefined;
   })

   return <div className="flex flex-col">
     <div className="flex">
       <div className="grow"></div>
       <div className="daisy-form-control">
         <label className="daisy-label cursor-pointer">
           <span className="daisy-label-text">Edit Mode</span> 
           <input type="checkbox" className="daisy-toggle" checked={editMode} onChange={v=>setEditMode(v.target.checked)} />
   
         </label>
       </div>
     </div>
     {
       editMode?<>
         <CustomStonkEditor customId={customId} />
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