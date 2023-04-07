
import allNinjaItem from "@/assets/ninja/allNinjaItems.json";
import { atom, useAtom } from "jotai";
import { debounce } from "lodash-es";
import MiniSearch, { SearchResult } from "minisearch";
import { FC, useCallback, useEffect, useState } from "react";
import AsyncSelect from 'react-select/async';
export const ninjaMiniSearchAtom = atom((get)=>{
  const search= new MiniSearch({
    fields:['name', 'detailsId'],
    storeFields:['name', 'detailsId', 'ninjaTypeGroup', 'ninjaType', 'imageUrl'],
    idField:"detailsId"
  })
  search.addAll(allNinjaItem as any)
  return search;
})

export type NinjaItem = {
  name:string;
  detailsId:string;
  imageUrl:string;
  ninjaTypeGroup:string;
  ninjaType:string;
}
export type NinjaMiniSearchSelectProps={
  detailsId?: string,
  className?: string,
  value?: NinjaItem,
  onChange: (item:NinjaItem|null)=>void
}

export const NinjaMiniSearchSelect:FC<NinjaMiniSearchSelectProps> = (props)=>{
  const {detailsId, onChange, className}=props;
  const [selectedItem, setSelectedItem] = useState<NinjaItem|null>(null);
  const [ninjaMiniSearch] = useAtom(ninjaMiniSearchAtom);

  useEffect(()=>{
    setSelectedItem((ninjaMiniSearch.search(detailsId??"", {fields:["detailsId"]})[0] as any)??null);
  }, [ninjaMiniSearch, detailsId]);
  const promiseOptions = async(inputValue: string)=>{    
    return new Promise<(NinjaItem &SearchResult )[]>(
      (resolve)=> {
        console.time("searching "+inputValue)
        const searchResult = ninjaMiniSearch.search(inputValue, {prefix: true, fuzzy: 0.2,maxFuzzy:0.8 }) as (NinjaItem &SearchResult )[];
        console.timeEnd("searching "+inputValue)
        console.log("result: ",searchResult[0])
        resolve(searchResult.slice(0, 30));
      }
    )
  }
  return <AsyncSelect 
    getOptionLabel={opt=>`${opt.name} (${opt.detailsId})`}
    getOptionValue={opt=>opt.detailsId}
    onChange={v=>onChange(v)}
    value={selectedItem}
    cacheOptions={false}
    loadOptions={promiseOptions}
    className={className}
  />
}