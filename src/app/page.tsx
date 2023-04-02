import Image from 'next/image'
import type { Metadata } from 'next'
import { fetchNinjaIndex } from '@/libs/fetchNinja';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function Page() {
  return (
    <main>
      <h1 className=''>hi</h1>
      {/* <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4> */}
    </main>
  )
}
