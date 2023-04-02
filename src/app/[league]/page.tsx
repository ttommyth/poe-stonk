import { fetchNinjaIndex } from "@/libs/fetchNinja";
import { NextAppPageProps } from "@/types/nextjsHelperType";

export async function getStaticPaths() {
  const ninjaIndexState = await fetchNinjaIndex();
  return ({
    paths: ninjaIndexState.economyLeagues.map(it=>({
      params: {
        league: it.name
      }
    })),
    fallback: true
  })
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
