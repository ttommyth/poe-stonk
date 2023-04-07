import * as RecipeCategories from "@/assets/recipes"
import { PathOfProfitRecipe, PathOfProfitRecipeItem } from "@/assets/recipes/prepare/old";
import { AllNinjaType, CurrencyDetail, CurrencyLine, CurrencyOverview, CurrencyTypeList, ItemLine, ItemOverview, ItemTypeList, Sparkline, fetchNinjaCurrency, fetchNinjaIndex, fetchNinjaItem } from "./fetchNinja";
import { sum } from "lodash-es";

declare type RecipeCategories= typeof import("@/assets/recipes");

export interface Recipe extends PathOfProfitRecipe{
  costItems: RecipeItem[];
  revenueItems: RecipeItem[];
  costSum: number;
  revenueSum: number;
  profit: number;
}
export type RecipeItem = PathOfProfitRecipeItem & {
  payPrice?:ItemPrice;
  receivePrice?:ItemPrice;
  imageUrl?: string;
  tradeEffort?:number;
} & (
  {
  ninjaTypeGroup: "currency",
  ninjaType?:typeof CurrencyTypeList[number];
  ninjaItem?: CurrencyLine;
  } | {
    ninjaTypeGroup: "item",
    ninjaType?:typeof ItemTypeList[number];
    ninjaItem?:  ItemLine;
  }
)
export interface ItemPrice{
  type: "currency" | "item";
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
export const fulfillPredefinedRecipes= async (league: string, category:string)=>{
  league = decodeURIComponent(league);
  category = decodeURIComponent(category);
  
  const recipes = RecipeCategories[category as keyof RecipeCategories ] as Recipe[]
  return fulfillRecipes(league, recipes);
}
export const fulfillRecipes= async (league: string, recipes:Recipe[])=>{
  const invokedType = recipes.reduce((cur, recipe)=>{
    recipe.costItems?.forEach(it=>{it.ninjaType && cur.add(it.ninjaType);});
    recipe.revenueItems?.forEach(it=>it.ninjaType && cur.add(it.ninjaType));
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
  
  const enrichRecipeItem = (item: RecipeItem)=>{
    if(item.ninjaType && item.detailsId){
      item.ninjaItem = indexedNinjaPrices[item.ninjaType].get(item.detailsId);
      item.payPrice = getItemPrice(item, "pay");
      item.receivePrice = getItemPrice(item, "receive");
      if(item.ninjaTypeGroup=="currency"){
        item.imageUrl = currencyReferences[item.ninjaType]
          ?.find(it=>it.name===item.ninjaItem?.currencyTypeName || it.tradeId===item.ninjaItem?.detailsId)?.icon;
      }else{
        item.imageUrl = item.ninjaItem?.icon;
      }
    }
  }
  recipes.forEach(recipe=>{

    recipe.costItems?.forEach(enrichRecipeItem)
    recipe.revenueItems?.forEach(enrichRecipeItem)
    recipe.costSum = sum(recipe.costItems?.map(it=>(it.payPrice?.chaosValue ?? 0 )* it.count));
    recipe.revenueSum = sum(recipe.revenueItems?.map(it=>(it.receivePrice?.chaosValue ?? 0) * ((it.count / it.total )||0) ));
    recipe.profit = recipe.revenueSum - recipe.costSum;

  });
  
  return {
    recipes: recipes as Recipe[],
    currencyReferences
  };
}
export const getItemPrice = (recipeItem: RecipeItem, pov: "pay"|"receive"): ItemPrice | undefined=>{ 
  if(!recipeItem || !recipeItem.ninjaItem)
    return undefined;  
  if(recipeItem.ninjaTypeGroup=="currency"){
    const item =recipeItem.ninjaItem;
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
    const item =recipeItem.ninjaItem;
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