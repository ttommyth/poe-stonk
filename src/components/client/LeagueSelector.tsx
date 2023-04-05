'use client';

import { League } from "@/libs/fetchNinja"
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Select, { GroupHeadingProps } from "react-select";

export const LeagueSelector=(props:{
  leagues:League[]
  oldLeagues:League[]
})=>{
  const {leagues, oldLeagues} = props;
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLeagueName] = pathname?.split("/")??[];
  const mappedLeague =useMemo(()=>leagues.map(it=>({
    value: it.name,
    label: it.displayName
  })??[]),[leagues])
  const mappedOldLeague =useMemo(()=>oldLeagues.map(it=>({
    value: it.name,
    label: it.displayName
  }))??[],[oldLeagues])
  // const selectedLeague = useMemo(()=>leagues.find(it=>it.name===selectedLeagueName), [leagues, selectedLeagueName])
  return <Select options={[
    {
      label:"Current Leagues",
      options: mappedLeague
    },
    {
      label:"Previous Leagues",
      options: mappedOldLeague
    },
  ]} value={mappedLeague.find(it=>it.value==selectedLeagueName) ?? mappedLeague.find(it=>it.value==selectedLeagueName) }
  className="[*>input]:daisy-select w-full max-w-xs"
  onChange={v=>router.push(`/${v?.value??""}`)} />
}