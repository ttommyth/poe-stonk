'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, getItemPrice } from "@/libs/fetchRecipe";
import { round, sum } from "lodash-es";
import { FC, useState } from "react";

export const StonkRecipeList: FC<{ 
  recipes: Recipe[],
  currencyReferences: { [key: string]: CurrencyDetail[] }, 
  basicExchangeRate: {[key:string]: number} //chaos equivalent 
 }> = (props) => {
   const { recipes, currencyReferences, basicExchangeRate } = props;
   const [quickFilter, setQuickFilter] = useState("");

   return <div className="flex flex-col gap-2 w-full">
     <input type="text" />
     {recipes?.map(recipe => {
       const costSum = sum(recipe.costItems.map(it=>getItemPrice(it.ninjaItem,"pay")?.chaosValue ?? 0));
       const revenueSum = sum(recipe.revenueItems.map(it=>(getItemPrice(it.ninjaItem,"pay")?.chaosValue ?? 0) * ((it.count / it.total )||0) ));
       const roi = costSum / revenueSum;
       const profit = revenueSum - costSum;
       return <div key={recipe.name} className="rounded-md dark:bg-slate-600 shadow-md daisy-collapse">
         <input type="checkbox" />
         <div className="daisy-collapse-title m-0 flex gap-2">
           <h3 className='grow'>{recipe.name}</h3>
           <span className="border-red-500 rounded-md border">{round(costSum, 2)}c</span>
           <span  className="border-green-500 rounded-md border">{round(revenueSum, 2)}c</span>
           <span>{round(roi*100, 2)}%</span>
           <span>{round(profit, 2)}c</span>
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

                     const itemPrice = getItemPrice(item.ninjaItem, "pay");
                     return <tr key={item.name}>
                       <td title={item.detailsId}>{item.name}</td>
                       <td>{item.count}</td>
                       <td>{itemPrice?.chaosValue ?? "N/A"}</td>
                       <td>{ itemPrice?.chaosValue ?itemPrice.chaosValue * item.count: "N/A"}</td>
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
                     const itemPrice = getItemPrice(item.ninjaItem, "receive");
                     return <tr key={item.name} onClick={v=>console.log(item)}>
                       <td title={item.detailsId}>{item.name}</td>
                       <td title={`${item.count} / ${item.total}`}>{round(((item.count / item.total)|| 0)*100, 2)}%</td>
                       <td>{itemPrice?.chaosValue ?? "N/A"}</td>
                       <td>{ itemPrice?.chaosValue ? round(itemPrice.chaosValue * (item.count / item.total), 2): "N/A"}</td>
                     </tr>
                   })
                 }
               </tbody>
             </table>
           </div>
         </div>
       </div>
     })}
   </div>
 }