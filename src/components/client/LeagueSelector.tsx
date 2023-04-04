'use client';

import { League } from "@/libs/fetchNinja"
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Select from "react-select";

export const LeagueSelector=(props:{
  leagues:League[]
})=>{
  const {leagues} = props;
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLeagueName] = pathname?.split("/")??[];
  const selectedLeague = useMemo(()=>leagues.find(it=>it.name===selectedLeagueName), [leagues, selectedLeagueName])
  return <Select options={leagues} value={selectedLeague}
    className="[*>input]:daisy-select w-full max-w-xs"
    getOptionLabel={it=>it.displayName}
    getOptionValue={it=>it.name}
    onChange={v=>router.push(`/${v?.name??""}`)} />
}