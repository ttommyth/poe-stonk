import Link from "next/link"
import { LeagueSelector } from "../client/LeagueSelector"
import { NinjaIndexState } from "@/libs/fetchNinja"

export const PageHeader=(props :{ninjaIndexState: NinjaIndexState})=>{
  const {ninjaIndexState} = props;
  return <header className='rounded-b-md border-b border-gray-500 xl:mx-auto xl:container'>
    <Link href={"/"}>Home</Link>
    <LeagueSelector leagues={ninjaIndexState.economyLeagues}/>
  </header>
}