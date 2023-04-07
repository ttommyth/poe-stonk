import { AllNinjaType, CurrencyTypeList, ItemTypeList, fetchNinjaCurrency, fetchNinjaItem } from "../../../libs/fetchNinja";

export const prepareNinjaMapping = async ()=>{
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
export const prepareAllNinjaItem = async ()=>{
  const results: {name:string, detailsId:string, imageUrl?: string, 
    ninjaTypeGroup: "currency" | "item",
    ninjaType:AllNinjaType}[]  = []
  for(const currencyType of CurrencyTypeList){
    const res = await fetchNinjaCurrency("Sanctum", currencyType); 
    results.push(...res.lines.map(item=>({
      name: item.currencyTypeName,
      detailsId: item.detailsId,
      imageUrl: res.currencyDetails?.find(it=>it.name===item.currencyTypeName || it.tradeId===item.detailsId)?.icon,
      ninjaTypeGroup:"currency" as any,
      ninjaType: currencyType
    })));
  }
  for(const itemType of ItemTypeList){
    const res = await fetchNinjaItem("Sanctum", itemType);
    results.push(...res.lines.map(item=>({
      name: item.name,
      detailsId: item.detailsId,
      imageUrl: item?.icon,
      ninjaTypeGroup:"item" as any,
      ninjaType: itemType
    })));
  }
  return results;
}
prepareAllNinjaItem();