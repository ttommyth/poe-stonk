import { fetchNinjaIndex } from "@/libs/fetchNinja";
import { NextAppPageProps } from "@/types/nextjsHelperType";

export async function generateStaticParams() {
  const ninjaIndexState = await fetchNinjaIndex();
  return ninjaIndexState.economyLeagues.map(it=>({
    league: it.name
  }))
  
}

export default async function Page({
  params
}:NextAppPageProps<{league:string}>) {
  const {league} = params;
  return (
    <main>
      hi {league}
    </main>
  )
}
