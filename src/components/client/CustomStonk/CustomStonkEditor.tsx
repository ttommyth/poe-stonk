'use client';
import { CurrencyDetail } from "@/libs/fetchNinja";
import { Recipe, fulfillPredefinedRecipes, fulfillRecipes, getItemPrice } from "@/libs/fetchRecipe";
import { max, maxBy, orderBy, round, sortBy, sum } from "lodash-es";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { atom, useAtom } from 'jotai'
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";
import MiniSearch from 'minisearch'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/libs/db";
import { StonkRecipeList } from "../StonkRecipeList";
import { useQuery } from "@tanstack/react-query";


export const CustomStonkEditor: FC<{
  customId:number
 }> = (props) => {
   const {customId} = props;
   const [editMode, setEditMode] = useState<boolean>(false);
   const customRecipe = useLiveQuery(
     () => db.customRecipes.get(customId)
   );

   return <div className="flex flex-col">
   </div>
 }