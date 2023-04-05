import Image from 'next/image'
import type { Metadata, NextPage } from 'next'
import { useRouter } from 'next/router';
import { NextAppPageProps } from '@/types/nextjsHelperType';
import { fetchNinjaItem, getBasicCurrencyExchangeRate } from '@/libs/fetchNinja';
import { fulfillPredefinedRecipes, getRecipeCategories } from '@/libs/fetchRecipe';
import {generateStaticParams as parentGetStaticParams} from '../../page';
import { StonkRecipeList } from '@/components/client/StonkRecipeList';
import { CustomStonkRecipeList } from '@/components/client/CustomStonk/CustomStonkRecipeList';
import { ClientBoundary } from '@/components/client/ClientBoundary';
import { prepareAllNinjaItem } from '@/assets/ninja/prepare/ninjaFetching';

export const metadata: Metadata = {
  title: 'stonk category',
  description: '',
};

export default async function Page({
  params
}:NextAppPageProps<{league:string, customId:string }>) {
  const {league, customId} = params;
  const test = await prepareAllNinjaItem()
  const test2 = JSON.stringify(test);
  return (
    <ClientBoundary>
      
      <div className="w-full">
        <h1 className=''>🧑‍🍳Custom Recipe</h1>
        <CustomStonkRecipeList league={league} customId={+customId}/>
      </div>
    </ClientBoundary>
  )
}
