import { Recipe } from "@/libs/fetchRecipe";
import { sum, maxBy, round } from "lodash-es";
import { useAtom } from "jotai";
import { compactNumberFormat } from "@/libs/formatting";
import { recipeModalAtom } from "./StonkRecipeModal";
import { useEffect } from "react";
import { ItemImageWithPopper } from "./provider/ItemPopperProvider";
import { useStonkRecipes } from "./provider/StonkRecipesProvider";
import { CurrencySpan } from "./CurrencySpan";
import { CurrencyIcon, useStonk } from "./provider/StonkProvider";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
const CoolPriceBar = (props:{type:"cost"|"revenue"|"profit", sum:number, percentage: number})=>{
  const {type, sum, percentage} = props;
  const {getAdjustedCurrencyString} = useStonk();

  return  <div className={`group daisy-tooltip flex
  data-[type~=cost]:text-error 
  data-[type~=revenue]:text-warning 
  data-[type~=profit]:text-success `} data-tip={type+" "+ getAdjustedCurrencyString(sum)} data-type={type}>
    <span>{
      type==="cost"?"C":type==="revenue"?"R":"P"
    }</span>
    <div className="relative">
      <progress className={`daisy-progress w-10 pl-1     
  group-data-[type~=cost]:daisy-progress-error 
  group-data-[type~=revenue]:daisy-progress-warning 
  group-data-[type~=profit]:daisy-progress-success
    `} value={percentage} max="1"></progress>
      <span className="text-xs mix-blend-overlay i text-white absolute left-1/2 -translate-x-1/2">
        {getAdjustedCurrencyString(sum)}
      </span>
    </div>
  </div>;
}

export const StonkRecipeCard = ( props:{recipe: Recipe, costFee: number, revenueFee:number, profitPerCostTrade: number})=>{  
  const {recipe, costFee, revenueFee, profitPerCostTrade} = props;     
  const [recipeModal, setRecipeModal] = useAtom(recipeModalAtom)
  const {recipesMetadata} = useStonkRecipes();
  const {maxCost, maxRevenue, maxProfit} = recipesMetadata;
  const {costSum, revenueSum, profit} = recipe;
  const isStonk = revenueSum>costSum;
  const firstCostItem = recipe?.costItems?.[0];
  const bestReward = maxBy(recipe.revenueItems, v=>v.receivePrice?.chaosValue );
  // useEffect(()=>{    
  //   setRecipeModal(recipe);
  // },[recipe])
  return <div className="rounded-md bg-base-100 flex flex-col p-2 cursor-pointer" tabIndex={0} onClick={()=>{
    setRecipeModal(recipe);
  }}>
    <div className="flex flex-row items-center">
      {firstCostItem.imageUrl ?
        <ItemImageWithPopper item={firstCostItem}/>:
        <div className="w-10 h-10 bg-base-200"/>}
      <h3 className="grow line-clamp-1">{recipe.name}</h3>
      <div className="flex flex-col gap-1 [&>div]:text-xs">
        <CoolPriceBar type="cost" sum={costSum} percentage={costSum / maxCost}/>
        <CoolPriceBar type="revenue" sum={revenueSum} percentage={revenueSum / maxRevenue}/>
        <CoolPriceBar type="profit" sum={profit} percentage={profit / maxProfit}/>      
        <div className="flex flex-col">
          <CurrencySpan chaos={profitPerCostTrade} />
          <span className="text-xs" title="profit per trade">ppt</span>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      {costFee?
        <div className="flex text-xs">
          (
          {costFee}
          <img src={CurrencyIcon["chaos-orb"]} className="w-3 h-3 object-contain" />
          )
        </div>:<>
        </>}
      <CurrencySpan chaos={costSum+(costFee??0)}/>
      <ArrowSmallRightIcon className="w-6 h-6 text-gray-500"/>
      <CurrencySpan chaos={revenueSum-(revenueFee??0)}/>
      {revenueFee?
        <div className="flex text-xs">
        (
          {revenueFee}
          <img src={CurrencyIcon["chaos-orb"]} className="w-3 h-3 object-contain" />
        )
        </div>:<>
        </>}
    </div>
  </div>
  return <div key={recipe.name} className="rounded-md dark:bg-slate-600 shadow-md daisy-collapse group" data-stonk={isStonk}>
    <input type="checkbox" />
    <div className="daisy-collapse-title m-0 flex gap-2">
      <h3 className='grow'>{recipe.name}</h3>
      <span className="border-red-500 rounded-md border">{round(costSum, 2)}c</span>
      <span className="border-green-500 rounded-md border">{round(revenueSum, 2)}c</span>
      <span className="group-data-[stonk~=true]:text-green-500 group-data-[stonk~=false]:text-red-500">{round(1*100, 2)}%</span>
      <span className="group-data-[stonk~=true]:text-green-500 group-data-[stonk~=false]:text-red-500">{round(profit, 2)}c</span>
    </div>
    <div className="daisy-collapse-content grid grid-cols-2">
      <div className="flex flex-row">            
        <table className="table-auto">
          <thead>
            <tr>
              <th>Cost Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              recipe.costItems.map(item => {
                return <tr key={item.name}>
                  <td title={item.detailsId}>{item.name}</td>
                  <td>{item.count}</td>
                  <td>{item.payPrice?.chaosValue ?? "N/A"}</td>
                  <td>{ item.payPrice?.chaosValue ?item.payPrice.chaosValue * item.count: "N/A"}</td>
                </tr>
              })
            }
          </tbody>
        </table> 
      </div>
      <div className="flex flex-col">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Get Item</th>
              <th>Drop Chance</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              recipe.revenueItems.map(item => {
                return <tr key={item.name} onClick={v=>console.log(item)}>
                  <td title={item.detailsId}>{item.name}</td>
                  <td title={`${item.count} / ${item.total}`}>{round(((item.count / item.total)|| 0)*100, 2)}%</td>
                  <td>{item.receivePrice?.chaosValue ?? "N/A"}</td>
                  <td>{ item.receivePrice?.chaosValue ? round(item.receivePrice.chaosValue * (item.count / item.total), 2): "N/A"}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
}