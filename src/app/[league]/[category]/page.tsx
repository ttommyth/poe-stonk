import Image from 'next/image'
import type { Metadata, NextPage } from 'next'
import { useRouter } from 'next/router';
import { NextAppPageProps } from '@/types/nextjsHelperType';
import { fetchNinjaItem, getBasicCurrencyExchangeRate } from '@/libs/fetchNinja';
import { fulfillRecipe, getRecipeCategories } from '@/libs/fetchRecipe';
import {getStaticPaths as parentGetStaticPaths} from '../page';
import { StonkRecipeList } from '@/components/client/StonkRecipeList';

export const metadata: Metadata = {
  title: 'stonk category',
  description: '',
};

export async function getStaticPaths() {
  const parentPaths = await parentGetStaticPaths();
  const allCategory = getRecipeCategories();
  return ({
    paths: parentPaths.paths.flatMap(props=>{
      return allCategory.map(cat=>({
        ...props,
        params:{
          ...props.params,
          category: cat
        }
      }))
    }),
    fallback:true
  });
}


export default async function Page({
  params
}:NextAppPageProps<{league:string, category:string }>) {
  const {league, category} = params;
  const data = await fulfillRecipe(league, category);
  const basicExchangeRate = await getBasicCurrencyExchangeRate(league);
  return (
    <div className="w-full">
      <h1 className=''>{params.category}</h1>
      <StonkRecipeList recipes={data.recipes} currencyReferences={data.currencyReferences} basicExchangeRate={basicExchangeRate}/>
    </div>
  )
}
