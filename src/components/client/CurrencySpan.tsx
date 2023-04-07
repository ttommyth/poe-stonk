import { useAtom } from "jotai";
import { FC, HTMLProps, useMemo } from "react";
import { exchangeBorderLineAtom, useStonk } from "./provider/StonkProvider";
import { round, sortBy } from "lodash-es";
import clsx from "clsx";

export const CurrencySpan:FC<HTMLProps<HTMLSpanElement>&{chaos?: number}>=(props)=>{
  const {chaos, ...rest} = props;
  const [exchangeBorderLine] = useAtom(exchangeBorderLineAtom)
  const {basicExchangeRate, getAdjustedCurrency, displayChaos, hidePopper}  = useStonk();
  const spanBody = useMemo(()=>{
    if(!chaos)
      return;
    const c= getAdjustedCurrency(chaos);
    return<>
      {c.value}<img src={c.currencyImageUrl} className="w-6 h-6"/>
    </>
  }, [chaos, exchangeBorderLine, basicExchangeRate]);
  if(chaos==undefined)
    return <></>
  return <span {...rest} className={clsx(rest.className, "flex flex-row")} onMouseEnter={(e)=>displayChaos(e.currentTarget, chaos)} onMouseLeave={e=>hidePopper()}>
    {spanBody}
  </span>
}