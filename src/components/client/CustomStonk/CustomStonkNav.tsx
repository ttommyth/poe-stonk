'use client';

import { db } from "@/libs/db";
import { useLiveQuery } from "dexie-react-hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import randomWords from "random-words";

export const CustomStonkNav=()=>{
  const customRecipeBook = useLiveQuery(
    () => db.customRecipeBooks.toArray()
  );
  const pathname = usePathname();
  return <div className="mt-4 w-full flex flex-col">
    <span className="w-full border-b-base-300">Custom Recipes</span>
    {
      customRecipeBook?.map(it=><span key={it.id} className="w-full flex">
        <Link href={`/${pathname.split("/")[1]}/custom/${it.id}`} className="grow">
          {it.name}
        </Link>
        <button onClick={()=>{db.customRecipeBooks.delete(it.id!)}}>delete</button>
      </span>)
    }
    <button onClick={async ()=>{
      const id = await db.customRecipeBooks.add({
        name: randomWords(2).join(" "),
        recipes:[]
      });
    }} className="daisy-btn w-full">add</button>
  </div>
}