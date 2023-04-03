'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, getItemPrice } from "@/libs/fetchRecipe";
import { maxBy, round, sortBy, sum } from "lodash-es";
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
       const costSum = sum(recipe.costItems.map(it=>(it.payPrice?.chaosValue ?? 0 )* it.count));
       const revenueSum = sum(recipe.revenueItems.map(it=>(it.receivePrice?.chaosValue ?? 0) * ((it.count / it.total )||0) ));
       const roi = revenueSum / costSum;
       const profit = revenueSum - costSum;
       const isStonk = revenueSum>costSum;
       const bestReward = maxBy(recipe.revenueItems, v=>v.receivePrice?.chaosValue );
       return <div key={recipe.name} className="rounded-md dark:bg-slate-600 shadow-md daisy-collapse group" data-stonk={isStonk}>
         <input type="checkbox" />
         <div className="daisy-collapse-title m-0 flex gap-2">
           <h3 className='grow'>{recipe.name}</h3>
           <span className="border-red-500 rounded-md border">{round(costSum, 2)}c</span>
           <span className="border-green-500 rounded-md border">{round(revenueSum, 2)}c</span>
           <span className="group-data-[stonk~=true]:text-green-500 group-data-[stonk~=false]:text-red-500">{round(roi*100, 2)}%</span>
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
     })}
   </div>
 }