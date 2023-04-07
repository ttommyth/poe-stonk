import Image from 'next/image'
import type { Metadata, NextPage } from 'next'
import { useRouter } from 'next/router';
import { NextAppPageProps } from '@/types/nextjsHelperType';
import { fetchNinjaItem, getBasicCurrencyExchangeRate } from '@/libs/fetchNinja';
import { fulfillPredefinedRecipes, getRecipeCategories } from '@/libs/fetchRecipe';
import {generateStaticParams as parentGetStaticParams} from '../../page';
import { StonkRecipeList } from '@/components/client/StonkRecipeList';
import { CustomStonkRecipeList } from '@/components/client/custom-stonk/CustomStonkRecipeList';
import { ClientBoundary } from '@/components/client/ClientBoundary';
import { prepareAllNinjaItem } from '@/assets/ninja/prepare/ninjaFetching';
import { StonkProvider } from '@/components/client/provider/StonkProvider';

export const metadata: Metadata = {
  title: 'stonk category',
  description: '',
};

export default async function Page({
  params
}:NextAppPageProps<{league:string, customId:string }>) {
  const {league, customId} = params;
  // const test = await prepareAllNinjaItem()
  // const test2 = JSON.stringify(test);
  const basicExchangeRate = await getBasicCurrencyExchangeRate(league);
  return (
      
    <div className="w-full">
      <h1 className=''>🧑‍🍳Custom Recipe</h1>
      <ClientBoundary>
        <StonkProvider basicExchangeRate={basicExchangeRate}>
          <CustomStonkRecipeList league={league} customId={customId}/>
        </StonkProvider>
      </ClientBoundary>
    </div>
  )
}
