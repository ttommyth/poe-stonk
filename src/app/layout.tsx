import './globals.css'
import { Noto_Sans } from 'next/font/google'
import clsx from 'clsx';
import { PageHeader } from '@/components/server/PageHeader';
import { fetchNinjaIndex } from '@/libs/fetchNinja';
const notoSans = Noto_Sans({weight: ["200", "500", "900"],subsets:["latin", "latin-ext"]});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ninjaIndexState = await fetchNinjaIndex();
  return (
    <html lang="en" className={clsx(notoSans.className, "prose-invert max-w-none")}>
      <body className='flex flex-col min-h-screen bg-base-300 max-w-screen'>
        <PageHeader ninjaIndexState={ninjaIndexState} />
        <main className='container mx-auto grow w-full '>
          {children}
        </main>
      </body>
    </html>
  )
}
