import Image from 'next/image'
import type { Metadata, NextPage } from 'next'
import { useRouter } from 'next/router';
import { NextAppPageProps } from '@/types/nextjsHelperType';
import { fetchNinjaItem, getBasicCurrencyExchangeRate } from '@/libs/fetchNinja';
import { fulfillPredefinedRecipes, getRecipeCategories } from '@/libs/fetchRecipe';
import {generateStaticParams as parentGetStaticParams} from '../page';
import { StonkRecipeList } from '@/components/client/StonkRecipeList';

export const metadata: Metadata = {
  title: 'stonk category',
  description: '',
};

export async function generateStaticParams() {
  const parentPaths = await parentGetStaticParams();
  const allCategory = getRecipeCategories();
  return parentPaths.flatMap(param=>
    allCategory.map(cat=>({
      ...param,
      category: cat
    }))
  );
}


export default async function Page({
  params
}:NextAppPageProps<{league:string, category:string }>) {
  const {league, category} = params;
  const data = await fulfillPredefinedRecipes(league, category);
  return (
    <div className="w-full">
      <h1 className=''>{params.category}</h1>
      <StonkRecipeList recipes={data.recipes}/>
    </div>
  )
}
