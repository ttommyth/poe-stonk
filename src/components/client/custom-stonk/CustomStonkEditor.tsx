'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, fulfillPredefinedRecipes, fulfillRecipes, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { atom, useAtom } from 'jotai'
import { ArchiveBoxArrowDownIcon, ArrowDownTrayIcon, ArrowSmallDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import MiniSearch from 'minisearch'
import { useLiveQuery } from "dexie-react-hooks";
import { CustomRecipeBook, db } from "@/libs/db";
import { StonkRecipeList } from "../StonkRecipeList";
import { useQuery } from "@tanstack/react-query";
import { CustomStonkRecipeEditor } from "./CustomStonkRecipeEditor";
import { v4 as uuidv4 } from 'uuid';
import { BookOpenIcon } from "@heroicons/react/20/solid";


export const CustomStonkEditor: FC<{
  customId:string
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
   const handleAddRecipe=()=>{
     setLocalRecipeBook(v=>{
       const newRecipeList = [...(v?.recipes??[]), {        
         id: uuidv4()
       }];
       return ({
         ...v,
         recipes: newRecipeList
       } as any)
     });
   }
   return <div className="flex flex-col gap-4">
    
     <div className="flex">
       <div className="grow"></div>
       <button className="daisy-btn" type="button" title="save" onClick={e=>handleSave()}><ArchiveBoxArrowDownIcon  className="h-6 w-6 text-gray-500" /></button>
     </div>

     <div className="daisy-form-control w-full">
       <label className="daisy-label-text">Recipe Book Name</label>
       <label className="daisy-input-group">        
         <span>
           <BookOpenIcon className="h-6 w-6 text-gray-500" />
         </span>
         <input type="text" placeholder="Enter Name" value={localRecipeBook?.name} onChange={e=>setLocalRecipeBook(v=>v?({...v, name: e.target.value}):null)}
           className="daisy-input daisy-input-bordered daisy-input-lg w-full" />
       </label>
     </div>
     <div className="grid grid-cols-1 gap-4">
       {
         localRecipeBook?.recipes?.map((recipe,idx)=><CustomStonkRecipeEditor key={`recipe-${recipe.id}`} value={recipe}
           onDelete={()=>{
             if(localRecipeBook?.recipes?.[idx])
               delete localRecipeBook.recipes[idx]
             setLocalRecipeBook(b=>{
               return b?({
                 ...b,
                 recipes:[...b.recipes].filter(it=>it)
               }):null
             });
           }}
           onChange={v=>{
             if(localRecipeBook?.recipes?.[idx])
               localRecipeBook.recipes[idx] = v
             setLocalRecipeBook(b=>{
               return b?({
                 ...b,
                 recipes:[...b.recipes]
               }):null
             });
           }}/>)
       }
       <button className="daisy-btn w-full" type="button" 
         onClick={()=>handleAddRecipe()}><PlusIcon className="h-6 w-6 text-gray-500"/></button>
     </div>
   </div>
 }