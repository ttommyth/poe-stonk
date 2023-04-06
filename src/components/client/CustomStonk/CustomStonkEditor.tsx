'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, fulfillPredefinedRecipes, fulfillRecipes, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { atom, useAtom } from 'jotai'
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";
import MiniSearch from 'minisearch'
import { useLiveQuery } from "dexie-react-hooks";
import { CustomRecipeBook, db } from "@/libs/db";
import { StonkRecipeList } from "../StonkRecipeList";
import { useQuery } from "@tanstack/react-query";


export const CustomStonkEditor: FC<{
  customId:number
 }> = (props) => {
   const {customId} = props;
   const customRecipeBook = useLiveQuery(
     () => db.customRecipeBooks.get(customId)
   );
   const [localRecipeBook,setLocalRecipeBook] = useState<CustomRecipeBook|null>(null);
   useEffect(()=>{
     if(customRecipeBook)
       setLocalRecipeBook(customRecipeBook);
   },[customRecipeBook])
   const handleSave = ()=>{
     if(!localRecipeBook)
       return;
     db.customRecipeBooks.update(customId, localRecipeBook);
   }
   return <div className="flex flex-col">
     <div className="daisy-form-control w-full">
       <label className="daisy-label-text">Recipe Book Name</label>
       <input type="text" placeholder="Enter Name" value={localRecipeBook?.name} onChange={e=>setLocalRecipeBook(v=>({recipes:[],...v, name: e.target.value}))}
         className="daisy-input daisy-input-bordered daisy-input-lg w-full" />
     </div>
   </div>
 }