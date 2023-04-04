import { ValueOf } from "next/dist/shared/lib/constants";

export interface CurrencyOverview {
  lines:           CurrencyLine[];
  currencyDetails: CurrencyDetail[];
  language:        Language;
}

export interface CurrencyDetail {
  id:       number;
  icon?:    string;
  name:     string;
  tradeId?: string;
}

export interface Language {
  name:         string;
}


export interface CurrencyLine {
  lineType:"currency";
  currencyTypeName:              string;
  pay?:                          Pay;
  receive:                       Pay;
  paySparkLine:                  Sparkline;
  receiveSparkLine:              Sparkline;
  chaosEquivalent:               number;
  lowConfidencePaySparkLine:     Sparkline;
  lowConfidenceReceiveSparkLine: Sparkline;
  detailsId:                     string;
}

export interface Sparkline {
  data:        Array<number | null>;
  totalChange: number;
}

export interface Pay {
  id:                 number;
  league_id:          number;
  pay_currency_id:    number;
  get_currency_id:    number;
  sample_time_utc:    string;
  count:              number;
  value:              number;
  data_point_count:   number;
  includes_secondary: boolean;
  listing_count:      number;
}

export interface ItemOverview {
  lines:    ItemLine[];
  language: Language;
}

export interface ItemLine {
  lineType:"item";
  id:                     number;
  name:                   string;
  icon:                   string;
  baseType:               string;
  itemClass:              number;
  sparkline:              Sparkline;
  lowConfidenceSparkline: Sparkline;
  implicitModifiers:      Modifier[];
  explicitModifiers:      Modifier[];
  flavourText:            string;
  chaosValue:             number;
  exaltedValue:           number;
  divineValue:            number;
  count:                  number;
  detailsId:              string;
  listingCount:           number;
}
export interface Modifier{
  text: string;
  optional: boolean
}

export interface NinjaIndexState {
  economyLeagues:    League[];
  oldEconomyLeagues: League[];
  snapshotVersions:  SnapshotVersion[];
  buildLeagues:      League[];
  oldBuildLeagues:   League[];
}

export interface League {
  name:        string;
  url:         string;
  displayName: string;
  hardcore:    boolean;
  indexed:     boolean;
}

export interface SnapshotVersion {
  url:               string;
  type:              SnapshotType;
  name:              string;
  timeMachineLabels: TimeMachineLabel[];
  version:           string;
  snapshotName:      string;
}

export enum TimeMachineLabel {
  Day1 = "day-1",
  Day2 = "day-2",
  Day3 = "day-3",
  Day4 = "day-4",
  Day5 = "day-5",
  Day6 = "day-6",
  Week1 = "week-1",
  Week10 = "week-10",
  Week11 = "week-11",
  Week12 = "week-12",
  Week13 = "week-13",
  Week14 = "week-14",
  Week15 = "week-15",
  Week16 = "week-16",
  Week2 = "week-2",
  Week3 = "week-3",
  Week4 = "week-4",
  Week5 = "week-5",
  Week6 = "week-6",
  Week7 = "week-7",
  Week8 = "week-8",
  Week9 = "week-9",
}

export enum SnapshotType {
  Depthsolo = "depthsolo",
  Exp = "exp",
  Mix = "mix",
  Newmix = "newmix",
  Streamers = "streamers",
}

export const CurrencyTypeList = ["Fragment", "Currency"] as const;
export const ItemTypeList = ["Artifact" , "DivinationCard" , "Oil" , "Incubator" , "UniqueWeapon" , "UniqueArmour" , "UniqueAccessory" , "UniqueFlask" , "UniqueJewel" , "SkillGem" , "ClusterJewel" , "Map" , "BlightedMap" , "BlightRavagedMap" , "ScourgedMap" , "UniqueMap" , "DeliriumOrb" , "Invitation" , "Scarab" , "BaseType" , "Fossil" , "Resonator" , "HelmetEnchant" , "Beast", "Essence", "Vial" ] as const;
export type AllNinjaType = typeof CurrencyTypeList[number] | typeof ItemTypeList[number];

export const fetchNinjaCurrency= async(league: string, type: typeof CurrencyTypeList[number]): Promise<CurrencyOverview>=>{
  console.debug("invoked fetchNinjaCurrency", league, type);
  const url = new URL("/api/data/currencyoverview", process.env.NEXT_PUBLIC_NINJA_URL??"https://poe.ninja");
  url.searchParams.set("league", league);
  url.searchParams.set("type", type);
  return await fetch(url, {next:{revalidate: 60*5}}).then(async it=>await it.json() as CurrencyOverview).then(it=>{
    return it;
  });
}
export const fetchNinjaItem= async(league: string, type: typeof ItemTypeList[number]): Promise<ItemOverview>=>{
  console.debug("invoked fetchNinjaItem", league, type);
  const url = new URL("/api/data/itemoverview", process.env.NEXT_PUBLIC_NINJA_URL??"https://poe.ninja");
  url.searchParams.set("league", league);
  url.searchParams.set("type", type);
  return await fetch(url, {next:{revalidate: 60*5}}).then(async it=>await it.json() as ItemOverview).then(it=>{
    return it;
  });
}
export const fetchNinjaIndex= async(): Promise<NinjaIndexState>=>{
  console.debug("invoked fetchNinjaIndex");
  const url = new URL("/api/data/getindexstate", process.env.NEXT_PUBLIC_NINJA_URL??"https://poe.ninja");
  return await fetch(url, {next:{revalidate: 60*30}}).then(it=>it.json()) as NinjaIndexState ;
}
export const getBasicCurrencyExchangeRate = async (league: string)=>{
  const currencyData = await fetchNinjaCurrency(league, "Currency");
  const coolCurrency = ["divine-orb", "exalt-orb"]
  return coolCurrency.reduce((cur, it)=>{
    cur[it] = currencyData.lines.find(line=>line.detailsId === it)?.chaosEquivalent??0;
    return cur;
  }, {} as {
    [key:string]: number
  }) 
}