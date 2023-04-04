import { CurrencyTypeList } from "../../../libs/fetchNinja";
import { getDetailsIdType } from "../../ninja/ninjaMapper";
import * as Old from "./old";
import fs from "fs";
Object.entries(Old).forEach(group=>{
  const recipes = group[1].map(recipe => {
    const costItems = recipe.costItems.map(item => {
      const ninjaType = item.detailsId?getDetailsIdType(item.detailsId): undefined;
      return (
        {
          ...item,
          value:undefined,
          total: recipe.runs,
          ninjaTypeGroup: CurrencyTypeList.includes(ninjaType as any)?"currency":"item",
          ninjaType: ninjaType
        }
      )
    });
    const revenueItems = recipe.revenueItems.map(item => {
      const ninjaType = item.detailsId?getDetailsIdType(item.detailsId): undefined;
      return (
        {
          ...item,
          value:undefined,
          total: recipe.runs,
          ninjaTypeGroup: CurrencyTypeList.includes(ninjaType as any)?"currency":"item",
          ninjaType: ninjaType
        }
      )
    });
    return ({
      ...recipe,
      cost: undefined,
      revenue:undefined,
      profit: undefined,
      roi:undefined,
      runs:undefined,
      costItems,
      revenueItems
    })
  })
  
  const s = `
// this file is generated in importFromOldScript.ts
export const ${group[0]} = ${JSON.stringify(recipes, undefined, 2)}
  `;
  fs.writeFileSync(`./out/${group[0].toLowerCase()}.ts`, s);
})