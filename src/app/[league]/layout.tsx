import clsx from 'clsx';
import { NextAppPageProps } from '@/types/nextjsHelperType';
import Link from 'next/link';
import { getRecipeCategories } from '@/libs/fetchRecipe';
import { CustomStonkNav } from '@/components/client/CustomStonk/CustomStonkNav';
import { ClientBoundary } from '@/components/client/ClientBoundary';

export async function generateMetadata({ params, searchParams }: NextAppPageProps<{category:string}>) {
  return { title: params.category };
}


export default function CategoryLayout({
  children,
  params,
  
}: {
  children: React.ReactNode
} & NextAppPageProps<{league: string}>) {
  const allCategory = getRecipeCategories();
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <nav className='flex flex-col'>
        {
          allCategory.map(cat=><Link href={`/${params.league}/${cat}`} key={cat}>{cat}</Link>)
        }
        <ClientBoundary>
          <CustomStonkNav />
        </ClientBoundary>
      </nav>
      <main className='grow'>
        {children}
      </main>
    </div>
  )
}
