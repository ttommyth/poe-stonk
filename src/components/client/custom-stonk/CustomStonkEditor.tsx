'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, fulfillPredefinedRecipes, fulfillRecipes, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { atom, useAtom } from 'jotai'
import { ArchiveBoxArrowDownIcon, ArrowDownTrayIcon, ArrowSmallDownIcon, ClipboardDocumentListIcon, DocumentArrowDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import MiniSearch from 'minisearch'
import { useLiveQuery } from "dexie-react-hooks";
import { CustomRecipeBook, db } from "@/libs/db";
import { StonkRecipeList } from "../StonkRecipeList";
import { useQuery } from "@tanstack/react-query";
import { CustomStonkRecipeEditor } from "./CustomStonkRecipeEditor";
import { v4 as uuidv4 } from 'uuid';
import { BookOpenIcon } from "@heroicons/react/20/solid";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDialog } from "../provider/dialog/DialogProvider";
import { ninjaMiniSearchAtom } from "./NinjaMiniSearchSelect";
import { toast } from "react-toastify";

const InputBoxDialog:FC<{onResult:(v:CustomRecipeBook)=>void}>=(props)=>{
  const [ninjaMiniSearch] = useAtom(ninjaMiniSearchAtom);
  const [jsonStr, setJsonStr] = useState("");
  const [processState, setProcessState]= useState<"success"|"failed"|"none">("none");
  const handleProcess=()=>{
    try{
      const result = JSON.parse(jsonStr) as CustomRecipeBook;
      result.recipes.forEach(recipe=>{
        [...(recipe.costItems??[]), ...(recipe.revenueItems??[])].forEach(it=>{
          if(!it.detailsId)
            return;
          const ninjaItem = (ninjaMiniSearch.search(it.detailsId, {fields:["detailsId"]})[0] as any);
          it.name= ninjaItem.name
          it.ninjaTypeGroup= ninjaItem.ninjaTypeGroup as any
          it.ninjaType= ninjaItem.ninjaType as any
          it.detailsId= ninjaItem.detailsId
          it.imageUrl= ninjaItem.imageUrl
        });
      });
      setJsonStr(JSON.stringify(result));
      setProcessState("success");
    }catch(err){
      console.error(err);
      setProcessState("failed");
    }
  }
  const handleSave=()=>{
    props.onResult(JSON.parse(jsonStr));
  }
  return <div className="flex flex-col">
    <textarea className="textarea" placeholder="paste json here" value={jsonStr} onChange={e=>{
      setProcessState("none");
      setJsonStr(e.target.value)
    }}></textarea>
    <div className="items-end">
      <button className="daisy-btn" type="button" onClick={()=>handleProcess()}>process</button>
      <button className="daisy-btn" type="button" onClick={()=>handleSave()} disabled={processState!=="success"}>save</button>
    </div>
  </div>
}

export const CustomStonkEditor: FC<{
  customId:string,
  onSaved?: ()=>void
 }> = (props) => {
   const {customId, onSaved} = props;
   const {showCustomDialog} = useDialog();
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
     toast("saved to indexedDb", {type:"success"})
     onSaved?.();
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
   const handleImport=async ()=>{
     const value = await showCustomDialog({
       title:"import with json",
       Content: InputBoxDialog,
       ableToCancel:true,
     });
     if(value.status==="success"){
       setLocalRecipeBook(v=>({...value.data, id: v!.id}));
       toast("string imported!", {type:"success"})
     }
   }
   return <div className="flex flex-col gap-4">
    
     <div className="flex">
       <button className="daisy-btn" type="button" title="import" onClick={e=>handleImport()}><DocumentArrowDownIcon   className="h-6 w-6 text-gray-500" /></button>
     
       <CopyToClipboard text={JSON.stringify(localRecipeBook)} onCopy={()=>toast("string copied!", {type:"success"})}>
         <button className="daisy-btn" type="button" title="export"><ClipboardDocumentListIcon  className="h-6 w-6 text-gray-500" /></button>
       </CopyToClipboard>
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