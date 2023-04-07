import { CustomRecipe } from "@/libs/db";
import { Recipe, RecipeItem } from "@/libs/fetchRecipe";
import { ArrowSmallRightIcon, BanknotesIcon, TrashIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { NinjaMiniSearchSelect } from "./NinjaMiniSearchSelect";
import { remove } from "lodash-es";

type CustomStonkItemProps={
  value: RecipeItem;
  onChange:(item:RecipeItem)=>void;
  onDelete:()=>void;
}
const CostItemCard:FC<CustomStonkItemProps>= (props)=>{
  const {value, onChange, onDelete} = props;
  return <div className="flex flex-col">
    <div className="flex">
      <NinjaMiniSearchSelect onChange={v=>{
        if(v){
          onChange({
            ...value,
            name: v.name,
            ninjaTypeGroup: v.ninjaTypeGroup as any,
            ninjaType: v.ninjaType as any,
            detailsId: v.detailsId,
            imageUrl: v.imageUrl,
          });
        }else{
          onChange({} as any);
        }
      }} detailsId={value.detailsId}
      className="grow"/>
      <button className="daisy-btn" onClick={()=>onDelete()}><TrashIcon className="w-6 h-6 "/></button>
    </div>
    <div className="flex">
      <div className="daisy-form-control grow w-full">
        <label className="daisy-label-text">Count</label>
        <input type="number" placeholder="1" value={value?.count} onChange={e=>onChange({...value, count: +e.target.value})}
          className="daisy-input daisy-input-bordered daisy-input-sm w-full" />
      </div>
    </div>
  </div>
}
const RevenueItemCard:FC<CustomStonkItemProps>= (props)=>{
  const {value, onChange, onDelete} = props;
  return <div className="flex flex-col">
    <div className="flex">
      <NinjaMiniSearchSelect onChange={v=>{
        if(v){
          onChange({
            ...value,
            name: v.name,
            ninjaTypeGroup: v.ninjaTypeGroup as any,
            ninjaType: v.ninjaType as any,
            detailsId: v.detailsId,
            imageUrl: v.imageUrl,
          });
        }else{
          onChange({} as any);
        }
      }} detailsId={value.detailsId}
      className="grow"/>
      <button className="daisy-btn" onClick={()=>onDelete()}><TrashIcon className="w-6 h-6 "/></button>
    </div>
    <div className="flex w-full">
      <div className="daisy-form-control w-full basis-1">
        <label className="daisy-label-text">Count</label>
        <input type="number" placeholder="1" value={value?.count} onChange={e=>onChange({...value, count: +e.target.value})}
          className="daisy-input daisy-input-bordered daisy-input-sm w-full" />
      </div>
      <div className="daisy-form-control w-full basis-1">
        <label className="daisy-label-text">Total</label>
        <input type="number" placeholder="1" value={value?.total} onChange={e=>onChange({...value, total: +e.target.value})}
          className="daisy-input daisy-input-bordered daisy-input-sm w-full" />
      </div>
    </div>
  </div>
}

export type CustomStonkRecipeEditorProps={
  value: CustomRecipe,
  onChange: (recipe: CustomRecipe)=>void,
  onDelete:()=>void,
}
export const CustomStonkRecipeEditor:FC<CustomStonkRecipeEditorProps>=(props)=>{
  const {value, onChange, onDelete} = props;
  const handleAddCostItem= ()=>{
    onChange({...value, costItems:[...(value.costItems??[]), {} as RecipeItem]})
  }
  const handleAddRevenueItem= ()=>{
    onChange({...value, revenueItems:[...(value.revenueItems??[]), {} as RecipeItem]})
  }
  return <div className="rounded-md flex flex-col border-base-100 border">
    <div className="flex">
      <div className="daisy-form-control grow w-full">
        <label className="daisy-label-text">Recipe Name</label>
        <label className="daisy-input-group">        
          <span>
            <BanknotesIcon  className="h-6 w-6 text-gray-500" />
          </span>
          <input type="text" placeholder="Enter Name" value={value?.name} onChange={e=>onChange({...value, name: e.target.value})}
            className="daisy-input daisy-input-bordered daisy-input-md w-full" />
          <span>              
            <button className="daisy-btn" type="button" onClick={e=>onDelete()}>
              <TrashIcon   className="h-6 w-6 text-gray-500" />
            </button>
          </span>
        </label>
      </div>
    </div>
   
    <div className="flex w-full">
      <div className="flex flex-col gap-2 basis-2/5 ">
        <span className="text-center">Cost Item</span>
        {
          value.costItems?.map((item,idx)=><CostItemCard value={item} key={idx} onChange={v=>{
            if(v && value.costItems){
              value.costItems[idx] = v;
            }
            onChange({...value, costItems:[...value.costItems??[]]});
          }}
          onDelete={()=>{
            if(value.costItems){
              value.costItems.splice(idx, 1);
            }
            onChange({...value, costItems:[...value.costItems??[]]});
          }}
          />
          )}
        <button className="daisy-btn w-full" type="button" 
          onClick={()=>handleAddCostItem()}>+</button>
      </div>
      <div className=" daisy-divider daisy-divider-horizontal grow-0 px-2 ">
        <ArrowSmallRightIcon className="h-32 w-32 text-gray-500" />
      </div>
      <div className="flex flex-col gap-2 basis-3/5">
        <span className="text-center">Revenue Item</span>
        {
          value.revenueItems?.map((item,idx)=><RevenueItemCard value={item} key={idx} onChange={v=>{
            if(v && value.revenueItems){
              value.revenueItems[idx] = v;
            }
            onChange({...value, revenueItems:[...value.revenueItems??[]]});
          }}
          onDelete={()=>{
            if(value.revenueItems){
              value.revenueItems.splice(idx, 1);
            }
            onChange({...value, revenueItems:[...value.revenueItems??[]]});
          }}/>
          )}
        <button className="daisy-btn w-full" type="button" 
          onClick={()=>handleAddRevenueItem()}>+</button>
      </div>
    </div>
  </div>
}