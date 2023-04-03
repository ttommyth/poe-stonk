import * as RecipeCategories from "@/assets/recipes"
import { PathOfProfitRecipe, PathOfProfitRecipeItem } from "@/assets/recipes/prepare/old";
import { AllNinjaType, CurrencyDetail, CurrencyLine, CurrencyOverview, CurrencyTypeList, ItemLine, ItemOverview, ItemTypeList, Sparkline, fetchNinjaCurrency, fetchNinjaIndex, fetchNinjaItem } from "./fetchNinja";

declare type RecipeCategories= typeof import("@/assets/recipes");

export interface Recipe extends PathOfProfitRecipe{
  costItems: RecipeItem[];
  revenueItems: RecipeItem[];
}
export interface RecipeItem extends PathOfProfitRecipeItem{
  type?:AllNinjaType;
  ninjaItem?: CurrencyLine | ItemLine;
  payPrice?:ItemPrice;
  receivePrice?:ItemPrice;
}
export interface ItemPrice{
  type:"item" | "currency";
  sparkline: Sparkline;
  lowConfidenceSparkline: Sparkline;
  chaosValue:number;
  exaltedValue?:number;
  divineValue?:number;
}
export type CurrencyDetailReferences = {[key in typeof CurrencyTypeList[number]]?: CurrencyDetail[]};

export const getRecipeCategories=()=>{
  return  Object.keys(RecipeCategories) as (keyof RecipeCategories)[];
}
export const fulfillRecipe= async (league: string, category:string)=>{
  league = decodeURIComponent(league);
  category = decodeURIComponent(category);
  
  const recipes = RecipeCategories[category as keyof RecipeCategories ] as Partial<Recipe>[]
  const invokedType = recipes.reduce((cur, recipe)=>{
    recipe.costItems?.forEach(it=>cur.add(it.type as any));
    recipe.revenueItems?.forEach(it=>cur.add(it.type as any));
    return cur;
  }, new Set<AllNinjaType>())
  const ninjaPrices: {[key in AllNinjaType]?: CurrencyOverview | ItemOverview} = {};
  const currencyReferences:CurrencyDetailReferences  = {};
  await Promise.allSettled(Array.from(invokedType).map(async(ninjaType)=>{

    if(ItemTypeList.includes(ninjaType as any)){
      ninjaPrices[ninjaType] = await fetchNinjaItem(league, ninjaType as any);
    }
    else if(CurrencyTypeList.includes(ninjaType as any)){
      const res = await fetchNinjaCurrency(league, ninjaType as any);
      ninjaPrices[ninjaType] = res;
      currencyReferences[ninjaType as typeof CurrencyTypeList[number]] =res.currencyDetails;
    }
  }));
  const indexedNinjaPrices = Object.fromEntries(
    Object.entries(ninjaPrices).map(ent=>{
      const indexed = (ent[1].lines as (CurrencyLine | ItemLine)[]).reduce((cur, it)=>{
        cur.set(it.detailsId, it);
        return cur;
      }, new Map<string, CurrencyLine | ItemLine>())
      return [ent[0], indexed]
    })
  );
  // console.log(indexedNinjaPrices)
  recipes.forEach(recipe=>{

    recipe.costItems?.forEach(item=>{
      if(item.type && item.detailsId){

        item.ninjaItem = indexedNinjaPrices[item.type].get(item.detailsId);
        item.payPrice = getItemPrice(item.ninjaItem, "pay");
        item.receivePrice = getItemPrice(item.ninjaItem, "receive");

      }
    })

    recipe.revenueItems?.forEach(item=>{
      if(item.type && item.detailsId){        
        item.ninjaItem = indexedNinjaPrices[item.type].get(item.detailsId);
        item.payPrice = getItemPrice(item.ninjaItem, "pay");
        item.receivePrice = getItemPrice(item.ninjaItem, "receive");
      }
    })
  });
  
  return {
    recipes: recipes as Recipe[],
    currencyReferences
  };
}
export const getItemPrice = (item: CurrencyLine | ItemLine | undefined, pov: "pay"|"receive"): ItemPrice | undefined=>{ 
  if(!item)
    return undefined;  
  if((item as any).currencyTypeName){
    item = item as CurrencyLine;
    if(pov==="pay"){
      return ({
        type:"currency",
        sparkline: item.paySparkLine,
        lowConfidenceSparkline: item.lowConfidencePaySparkLine,
        chaosValue:item.chaosEquivalent,
      })
    }else{
      return ({
        type:"currency",
        sparkline: item.receiveSparkLine,
        lowConfidenceSparkline: item.lowConfidenceReceiveSparkLine,
        chaosValue:item.chaosEquivalent,        
      })
    }

  }else{
    item = item as ItemLine;
    return ({
      type:"item",
      sparkline: item.sparkline,
      lowConfidenceSparkline: item.lowConfidenceSparkline,
      chaosValue:item.chaosValue,
      exaltedValue:item.exaltedValue,
      divineValue:item.divineValue,
    })
  }
}