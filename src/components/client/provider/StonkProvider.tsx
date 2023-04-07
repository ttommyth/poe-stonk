'use client';
 
import { CurrencyDetail } from '@/libs/fetchNinja';
import React, { FC, PropsWithChildren, VoidFunctionComponent, createContext, useContext, useState } from 'react';
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { round, sortBy } from 'lodash-es';
import { usePopper } from 'react-popper';
const CurrencyIcon:{[key:string]:string} ={
  "chaos-orb": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png",
  "exalted-orb":"https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb1JhcmUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/b102771c23/CurrencyAddModToRare.png",
  "divine-orb":"https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png",
}

export const StonkContext = createContext<{  
  basicExchangeRate: {[key:string]: number} //chaos equivalent 
  getAdjustedCurrency:(chaos:number)=>{value:number, currency:string, currencyShortForm: string, currencyImageUrl: string} 
  getAdjustedCurrencyString:(chaos:number)=>string ,
  displayChaos:(ref: HTMLElement, chaos:number)=>void,
  hidePopper: ()=>void
    } | undefined>(undefined);

export const exchangeBorderLineAtom = atomWithStorage<{[currencyType:string]:number}>('exchangeBorderLine', {})
export const StonkProvider: FC<PropsWithChildren<{
  basicExchangeRate: {[key:string]: number}
}>> = (props) => {
  const {basicExchangeRate} = props;
  const [exchangeBorderLine] = useAtom(exchangeBorderLineAtom)
  
  const [referenceElement, setReferenceElement] = useState<HTMLElement|null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement|null>(null);
  const [displayingChaos, setDisplayingChaos] = useState<number | null>(null);
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement:'auto'
  });

  const displayChaos=(ref: HTMLElement, chaos: number)=>{
    setReferenceElement(ref);
    setDisplayingChaos(chaos);
  }
  const hidePopper=()=>{
    setDisplayingChaos(null);
  }

  const getAdjustedCurrency=(chaos: number)=>{
    const sortedExchange = sortBy(Object.entries(basicExchangeRate).filter(it=>it[1]>0), [], ["desc"]);
    for(const currency of sortedExchange){
      if(chaos>currency[1]* (exchangeBorderLine[currency[0]]??1)){
        return ({
          value:round(chaos / currency[1], 1),
          currency: currency[0], 
          currencyShortForm: currency[0]=="divine-orb"?"d":currency[0]=="exalted-orb"?"ex":"c",
          currencyImageUrl: CurrencyIcon[currency[0]]??CurrencyIcon["chaos-orb"]
        })
      }
    }
    return ({
      value:round(chaos, 0),
      currency: "chaos-orb", 
      currencyShortForm: "c",
      currencyImageUrl: CurrencyIcon["chaos-orb"] 
    });  
  }
  
  const getAdjustedCurrencyString=(chaos:number)=>{      
    const c= getAdjustedCurrency(chaos);
    return `${c.value}${c.currencyShortForm}`
  }
  return (
    <StonkContext.Provider value={{basicExchangeRate, getAdjustedCurrency, getAdjustedCurrencyString, displayChaos, hidePopper}}>
      {props.children}
      
      <div ref={setPopperElement} style={styles.popper} className="z-[1000]" {...attributes.popper} 
        data-show={!!displayingChaos}
        onMouseLeave={(e)=>setDisplayingChaos(null)}>
        {displayingChaos?<div className={`backdrop-blur-lg backdrop-opacity-100 rounded-md 
        flex flex-col items-center justify-center border gap-2 max-w-xl w-full transform-gpu
        !bg-opacity-10 pb-2
        `}>
          {round(displayingChaos, 2)} c
        </div>:<>
        </>}
      </div>
    </StonkContext.Provider>
  );
};
export const useStonk= ()=>{
  const ctx= useContext(StonkContext);
  if(!ctx)
    throw new Error("found no StonkContext");
  return ctx;
}