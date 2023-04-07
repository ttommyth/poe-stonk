import { FC } from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/20/solid";

export type InfoDialogResult = "confirm" | "cancel";
export type InfoDialogModel = {
    title: string,
    content: JSX.Element | string,
    confirmText?: string,
}

export const InfoDialog: FC<{ isOpen: boolean, onResult: (result: InfoDialogResult) => void, onCancel: () => void, model?: InfoDialogModel }> = (props) => {
  const { isOpen, onResult, onCancel, model } = props;
  const { title, content, confirmText } = model ?? {};
  return <>
    <div className={clsx("daisy-modal daisy-modal-bottom sm:daisy-modal-middle", isOpen && "daisy-modal-open")}>
      <div onClick={() => onCancel()} className="w-full h-full ">

      </div>
      <div className="daisy-modal-box  overflow-clip absolute ">

        <div className="flex flex-col gap-4 z-10 relative text-center">
          <div className="flex flex-row-reverse">
            <button className="btn  rounded-full p-2 h-auto min-h-min" title="cancel" onClick={()=>onResult?.("cancel")}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <h2 className="m-0">{title}</h2>
          <div className="">
            {content}
          </div>
          <div className="w-full justify-center gap-4 flex flex-row">
            <label className="btn btn-primary" onClick={() => onResult?.("confirm")}>{confirmText ??"confirm?"}</label>
          </div>

        </div>
      </div>
    </div>
  </>
}