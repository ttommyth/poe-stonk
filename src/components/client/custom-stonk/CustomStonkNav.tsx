'use client';

import { db } from "@/libs/db";
import { useLiveQuery } from "dexie-react-hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import randomWords from "random-words";
import { v4 as uuidv4 } from 'uuid';
import { useDialog } from "../provider/dialog/DialogProvider";

export const CustomStonkNav=()=>{
  const customRecipeBook = useLiveQuery(
    () => db.customRecipeBooks.toArray()
  );
  const {askYesNo} = useDialog();
  const pathname = usePathname();
  return <div className="mt-4 w-full flex flex-col">
    <span className="w-full border-b-base-300">Custom Recipe Books</span>
    {
      customRecipeBook?.map(it=><span key={it.id} className="w-full flex">
        <Link href={`/${pathname.split("/")[1]}/custom/${it.id}`} className="grow">
          {it.name}
        </Link>
        <button onClick={async()=>{
          if(await askYesNo({title:"confirm delete?", content:""})==="yes"){
            db.customRecipeBooks.delete(it.id!)
          }}}>delete</button>
      </span>)
    }
    <button onClick={async ()=>{
      const id = await db.customRecipeBooks.add({
        id: uuidv4(),
        name: randomWords(2).join(" "),
        recipes:[]
      });
    }} className="daisy-btn w-full">add</button>
  </div>
}