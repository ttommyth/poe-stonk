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
  customId:string
 }> = (props) => {
   const {league, customId} = props;
   const [editMode, setEditMode] = useState<boolean>(false);
   const customRecipeBook = useLiveQuery(
     () => db.customRecipeBooks.get(customId),
     [customId]
   );
   const fulfilledRecipesQuery = useQuery(["custom", league, customRecipeBook?.id], async ()=>{
     if(customRecipeBook?.recipes?.length){
       try{
         return await fetch(`/api/fulfillRecipes?league=${league}`, {
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body: JSON.stringify(customRecipeBook?.recipes)
         }).then(it=>it.json());
       }
       catch(err){
         console.error(err)
       }
       //  return await fulfillRecipes(league, customRecipes?.recipes as any);
     }        
     else
       return undefined;
   },{
     enabled:!!customRecipeBook?.id
   })
   useEffect(()=>{
     fulfilledRecipesQuery.refetch();
   }, [editMode, fulfilledRecipesQuery])

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
           fulfilledRecipesQuery.data?.recipes ?<>

             <h2 className=''>{customRecipeBook?.name}</h2>
             <StonkRecipeList recipes={fulfilledRecipesQuery.data?.recipes}  />
           </>:<>
           </>
         }
       </>
     }
   </div>
 }