import { FC, useEffect } from "react";
import BigGreenDot from '@/assets/images/auth/big_green_dot.svg';
import GreenGooey from '@/assets/images/auth/green_gooey.svg';
import GreenSlash from '@/assets/images/auth/green_slash.svg';
import clsx from "clsx";
import { useDebounce } from "usehooks-ts";
import { XMarkIcon } from "@heroicons/react/20/solid";

export type LoadingDialogResult<T> = {status:"success", data: T } |{ status:"error", error: any };
export type LoadingDialogModel<T> = {
    title: string,
    content: JSX.Element | string,
    ableToCancel?: boolean,
    task: () => Promise<T>,
}

export const LoadingDialog: FC<{ isOpen: boolean, onResult: (result: LoadingDialogResult<any>) => void, onCancel: () => void, model?: LoadingDialogModel<any> }> = (props) => {
  const { isOpen, onResult, onCancel, model } = props;
  const debouncedOpen = useDebounce(isOpen, 100);
  const { title, content, task, ableToCancel } = model ?? {};
  useEffect(() => {
    if (task && onResult) {
      task?.()?.then(it => { onResult({status:"success", data:it}); return it; })?.catch(it => { onResult({status:"error", error: it }); throw it; })
    }
  }, [task, onResult])
  return <>
    <div className={clsx("daisy-modal daisy-modal-bottom sm:daisy-modal-middle", debouncedOpen && "daisy-modal-open")}>
      {ableToCancel === true &&
                <div onClick={() => onCancel()} className="w-full h-full ">
                  <XMarkIcon className="w-6 h-6" />
                </div>
      }
      <div className="daisy-modal-box  overflow-clip absolute ">

        <div className="flex flex-col gap-4 z-10 relative text-center items-center">
          <h2 className="m-0">{title}</h2>
          <div className="">
            {content}
          </div>
          <progress className="daisy-progress w-56"></progress>


        </div>
      </div>
    </div>
  </>
}