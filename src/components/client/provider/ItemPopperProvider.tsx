'use client';

import { Modifier } from '@/libs/fetchNinja';
import { RecipeItem } from '@/libs/fetchRecipe';
import React, { FC, PropsWithChildren, createContext, useContext, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

const ItemLineDivider =(props:{rarity:string})=>{
  return <div data-rarity={props.rarity}
    className={`h-[2px] w-full from-white/0  to-white/0  bg-gradient-to-r 
  data-[rarity~=unique]:via-poe-unique/50
  data-[rarity~=rare]:via-poe-rare/50
  data-[rarity~=magic]:via-poe-magic/50 
  data-[rarity~=normal]:via-poe-normal/50
  data-[rarity~=gem]:via-poe-gem/50

  `}/>
}
const ItemModifierLine =(props:{modifier:Modifier})=>{
  const {modifier} = props;
  return <span
    className="data-[optional=true]:before:content-['['] data-[optional=true]:after:content-[']']"
    data-optional={modifier.optional}>
    {modifier.text}
  </span>
}

export const ItemPopperContext = createContext<{
  displayItem: (ref: HTMLElement, item: RecipeItem)=>void;
  hidePopper: ()=>void
    } | undefined>(undefined);

const ItemPopperProvider:FC<PropsWithChildren<any>> = (props) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement|null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement|null>(null);
  const [displayingItem, setDisplayingItem] = useState<RecipeItem | null>(null);
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement:'auto'
  });

  const displayItem=(ref: HTMLElement, item: RecipeItem)=>{
    setReferenceElement(ref);
    setDisplayingItem(item);
  }
  const currentItemRarity = displayingItem?.ninjaItem?.lineType=="currency"?"normal":"unique"//TODO:

  return (
    <ItemPopperContext.Provider value={{ displayItem, hidePopper:()=>setDisplayingItem(null) }}>
      {props.children}
      
      <div ref={setPopperElement} style={styles.popper} className="z-[1000]" {...attributes.popper} data-show={!!displayingItem}>
        {displayingItem?<div className={`backdrop-blur-lg backdrop-opacity-100 rounded-md 
        flex flex-col items-center justify-center border gap-2 max-w-xl w-full transform-gpu
        data-[rarity~=unique]:border-poe-unique data-[rarity~=unique]:bg-poe-unique  data-[rarity~=unique]:text-poe-unique
        data-[rarity~=rare]:border-poe-rare     data-[rarity~=rare]:bg-poe-rare      data-[rarity~=rare]:text-poe-rare
        data-[rarity~=magic]:border-poe-magic   data-[rarity~=magic]:bg-poe-magic    data-[rarity~=magic]:text-poe-magic
        data-[rarity~=normal]:border-poe-normal data-[rarity~=normal]:bg-poe-normal  data-[rarity~=normal]:text-poe-normal
        data-[rarity~=gem]:border-poe-gem       data-[rarity~=gem]:bg-poe-gem        data-[rarity~=gem]:text-poe-gem
        !bg-opacity-10 pb-2
        `} data-rarity={currentItemRarity}>
          <span className='p-2 rounded-t bg-inherit bg-opacity-20 border-b border-inherit w-full text-center'>
            {displayingItem.name}
          </span>
          {
            displayingItem?.ninjaItem?.lineType=="currency"?<>
            </>:
              <>
                <div className="p-2 text-poe-augmented text-center flex flex-col gap-1">
                  {displayingItem?.ninjaItem?.implicitModifiers?.map((it,idx)=><ItemModifierLine key={idx} modifier={it}/>)}
                  {displayingItem?.ninjaItem?.implicitModifiers?.length?<ItemLineDivider rarity={currentItemRarity}/>:<></>}
                  {displayingItem?.ninjaItem?.explicitModifiers?.map((it,idx)=><ItemModifierLine key={idx} modifier={it}/>)}
                  {displayingItem?.ninjaItem?.explicitModifiers?.length?<ItemLineDivider rarity={currentItemRarity}/>:<></>}
                </div>
              </>
          }
          <img src={displayingItem?.imageUrl} className="object-scale-down w-24 h-24" alt={displayingItem?.name}/>
        </div>:<>
        </>}
      </div>
    </ItemPopperContext.Provider>
  );
};
export const useItemPopper=()=>{
  return useContext(ItemPopperContext);
}

export const ItemImageWithPopper=(props:{item:RecipeItem})=>{
  const {item} = props;
  const elementRef = useRef<HTMLImageElement>(null);
  const itemPopper = useItemPopper();
  return <img src={item?.imageUrl} className="object-contain w-10 h-10" alt={item?.name}
    ref={elementRef}
    onMouseEnter={(e)=>elementRef.current&&itemPopper?.displayItem(elementRef.current, item)}
    onMouseLeave={(e)=>itemPopper?.hidePopper()}
  />
}

export default ItemPopperProvider;