import { FC } from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/20/solid";



export type YesNoDialogResult = "yes" | "no" | "cancel";
export type YesNoDialogModel = {
    title: string,
    content: JSX.Element | string,
    yesText?: string,
    noText?: string
}

export const YesNoDialog: FC<{ isOpen: boolean, onResult: (result: YesNoDialogResult) => void, onCancel: () => void, model?: YesNoDialogModel }> = (props) => {
  const { isOpen, onResult, onCancel, model } = props;
  const { title, content, yesText, noText } = model ?? {};
  return <>
    <div className={clsx("daisy-modal daisy-modal-bottom sm:daisy-modal-middle", isOpen && "daisy-modal-open")}>
      <div onClick={() => onCancel()} className="w-full h-full ">

      </div>
      <div className="daisy-modal-box  overflow-clip absolute ">
        <div className="flex flex-col gap-4 z-10 relative text-center">
          <div className="flex flex-row-reverse">
            <button className="daisy-btn  rounded-full p-2 h-auto min-h-min" title="cancel" onClick={()=>onResult?.("cancel")}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <h2 className="m-0">{title}</h2>
          <div className="">
            {content}

          </div>
          <div className="w-full justify-center gap-4 flex flex-row">
            <label className="daisy-btn daisy-btn-primary" onClick={() => onResult?.("yes")}>{yesText ?? "yes"}</label>
            <label className="daisy-btn" onClick={() => onResult?.("no")}>{noText ?? "no"}</label>
          </div>

        </div>
      </div>
    </div>
  </>
}