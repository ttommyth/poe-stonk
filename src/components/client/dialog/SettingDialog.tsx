"use client";

import { useAtom } from "jotai"
import { exchangeBorderLineAtom, payTradeEffortAtom, receiveTradeEffortAtom } from "../provider/StonkProvider"
import { useDialog } from "../provider/dialog/DialogProvider";
import { useCallback } from "react";

export const SettingDialog= ()=>{
  const [exchangeBorderLine, setExchangeBorderLine] = useAtom(exchangeBorderLineAtom)
  const [payTradeEffort, setPayTradeEffort] = useAtom(payTradeEffortAtom)
  const [receiveTradeEffort, setReceiveTradeEffort] = useAtom(receiveTradeEffortAtom)
  return <div className="flex flex-col gap-2">
    <div className="daisy-form-control w-full max-w-xs">
      <label className="daisy-label">
        <span className="daisy-label-text">Effort per pay trade</span>
      </label>
      <input type="number" placeholder="Type here" className="daisy-input daisy-input-bordered w-full max-w-xs"
        value={payTradeEffort} onChange={e=>setPayTradeEffort(+e.target.value)}
      />
      <label className="daisy-label">
        <span className="daisy-label-text-alt">in chaos</span>
      </label>
    </div>
    
    <div className="daisy-form-control w-full max-w-xs">
      <label className="daisy-label">
        <span className="daisy-label-text">Effort per receive trade</span>
      </label>
      <input type="number" placeholder="Type here" className="daisy-input daisy-input-bordered w-full max-w-xs" 
        value={receiveTradeEffort} onChange={e=>setReceiveTradeEffort(+e.target.value)}
      />
      <label className="daisy-label">
        <span className="daisy-label-text-alt">in chaos</span>
      </label>
    </div>
    
  </div>
}
export const SettingButton=()=>{
  const {showCustomDialog} =useDialog();
  const handleClick =useCallback(()=>{
    showCustomDialog({
      title:"Setting",
      Content: SettingDialog,      
      ableToCancel: true,
    })
  }, [showCustomDialog]);
  return <button type="button" className="daisy-btn" onClick={()=>handleClick()}>setting</button>
}