'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, RecipeItem, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { StonkRecipeCard } from "./StonkRecipeCard";
import { atom, useAtom } from 'jotai'
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";
import MiniSearch from 'minisearch'
import clsx from "clsx";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";


const displaySettingAtom = atom<{
  valueDisplayMode:"perItem" | "calucated"
}>({
  valueDisplayMode: "calucated"
})

const CostItemCard = (props:{item: RecipeItem})=>{
  const {item} = props;
  return <div className="rounded-md bg-error/10 flex flex-col p-2">
    <div className="flex flex-row items-center">
      {`${item.count} x `}
      {item.imageUrl ?
        <img src={item?.imageUrl} className="object-contain w-10 h-10" alt={item?.name}/>:
        <div className="w-10 h-10 bg-base-200"/>}
      <h3 className="grow line-clamp-1">{item.name}</h3>
      <div className="flex flex-col items-end">
        <span className="daisy-tooltip text-xl font-bold" data-tip={"total"}>
          {item.payPrice?.chaosValue ?item.payPrice.chaosValue * item.count: "N/A"}
        </span>
        <span className="daisy-tooltip text-xs" data-tip={"each"}>
          {item.payPrice?.chaosValue??"N/A"}
        </span>
      </div>
    </div>
  </div>
}
const RevenueItemCard = (props:{item: RecipeItem})=>{
  const {item} = props;
  return <div className="rounded-md bg-success/10 flex flex-col p-2">
    <div className="flex flex-row items-center">
      {`${round(((item.count / item.total)|| 0)*100, 2)}% `}
      {item.imageUrl ?
        <img src={item?.imageUrl} className="object-contain w-10 h-10" alt={item?.name}/>:
        <div className="w-10 h-10 bg-base-200"/>}
      <h3 className="grow line-clamp-1">{item.name}</h3>
      
      <div className="flex flex-col items-end">
        <span className="daisy-tooltip text-xl font-bold" data-tip={"expected"}>
          {item.receivePrice?.chaosValue ? round(item.receivePrice.chaosValue * (item.count / item.total), 2): "N/A"}
        </span>
        <span className="daisy-tooltip text-xs" data-tip={"each"}>
          {item.payPrice?.chaosValue??"N/A"}
        </span>
      </div>
    </div>
  </div>
}

export const recipeModalAtom = atom<Recipe | undefined>(undefined);
export const StonkRecipeModal: FC<any> = (props) => {
  const [recipe, setRecipeModal] = useAtom(recipeModalAtom)
  const [displaySetting, setDisplaySetting] = useAtom(displaySettingAtom)
  const [sorting, setSorting] = useState<{key: string, iterate:any, order:"asc"|"desc" }>({key:"name", iterate: "name", order:"desc"});
 
  const sortedRevenueItems = useMemo(()=>{
    return orderBy(recipe?.revenueItems, [sorting.iterate], [sorting.order]) as RecipeItem[];
  },[ sorting.iterate, sorting.order, recipe]);
  const triggerSorting=(key: string, iterate:any)=>{
    if(sorting.key === key){
      setSorting(s=>({
        ...s,
        order: s.order=="asc"?"desc":"asc"
      }));
    }else{      
      setSorting(s=>({
        key: key,
        iterate: iterate,
        order:"desc"
      }));
    }
  }
  return <> 
    <div className={clsx("daisy-modal", recipe?"daisy-modal-open":"")} onClick={()=>setRecipeModal(undefined)}>
      <div className="daisy-modal-box  max-w-6xl w-full"  onClick={(e)=>{
        e.stopPropagation();
      }}>
        {recipe?<>
          <div className="flex flex-row">
            <h3 className="font-bold text-lg grow">Congratulations random Internet user!</h3>
            <button className="rounded-full h-6 w-6" type="button" onClick={e=>setRecipeModal(undefined)}><XCircleIcon className="h-6 w-6 text-gray-500" /></button>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col gap-2 pr-2 flex-1 ">
              {recipe.costItems.map((item,idx)=><CostItemCard item={item} key={item.name+idx}/>)}
            </div>
            <div className=" daisy-divider daisy-divider-horizontal grow-0 ">
              <ArrowSmallRightIcon className="h-32 w-32 text-gray-500" />
            </div>
            <div className="flex flex-col gap-2 pl-2 flex-3">
              <div>
                <button type="button" className="daisy-btn"
                  onClick={e=>triggerSorting("dropChance", (v:RecipeItem)=>v.count / v.total)}>
        sort by drop chance
                  {
                    sorting.key=="dropChance"&&   <ArrowSmallDownIcon className="h-6 w-6 data-[asc=false]:rotate-180 transition-transform" data-asc={sorting.order=="asc"} />
    
                  }
                </button>
                <button type="button" className="daisy-btn" 
                  onClick={e=>triggerSorting("biggestLoot", (v:RecipeItem)=>v.receivePrice?.chaosValue)}>
        sort by biggest loot
                  {
                    sorting.key=="biggestLoot"&&   <ArrowSmallDownIcon className="h-6 w-6 data-[asc=false]:rotate-180 transition-transform" data-asc={sorting.order=="asc"} />
    
                  }
                </button>
                <button type="button" className="daisy-btn" 
                  onClick={e=>triggerSorting("expectation", (v:RecipeItem)=>(v.receivePrice?.chaosValue ??0)* (v.count / v.total))}>
        sort by expectation
                  {
                    sorting.key=="expectation"&&   <ArrowSmallDownIcon className="h-6 w-6 data-[asc=false]:rotate-180 transition-transform" data-asc={sorting.order=="asc"} />
    
                  }
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {sortedRevenueItems.map((item,idx)=><RevenueItemCard item={item} key={item.name+idx}/>)}              
              </div>
            
            </div>
          </div>   
        </>:<>
        </>}
      </div>
    </div>
  </>
}