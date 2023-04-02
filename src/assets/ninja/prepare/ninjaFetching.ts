import { CurrencyTypeList, ItemTypeList, fetchNinjaCurrency, fetchNinjaItem } from "@/libs/fetchNinja";

const doStuff = async ()=>{
  const results:{[key:string]:any} ={}
  for(const currencyType of CurrencyTypeList){
    const res = await fetchNinjaCurrency("Sanctum", currencyType);
    results[currencyType] = res.lines.map(it=>it.detailsId);
  }
  for(const itemType of ItemTypeList){
    const res = await fetchNinjaItem("Sanctum", itemType);
    results[itemType] = res.lines.map(it=>it.detailsId);
  }
  return results;
}
// doStuff();