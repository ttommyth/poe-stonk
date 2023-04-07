import { FC } from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/20/solid";



export type CustomDialogResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: any }
  | { status: "cancel" };
export type CustomDialogModel<T, TProps> = {
  title: string;
  Content: FC<{ onResult: (result: T) => void; } & TProps>;
  ableToCancel?: boolean;
  contentProps?: TProps;
  customModalClass?: string;
  customModalBodyClass?: string;
  titleClass?: string;
  closeBtnClass?: string;
};
export const CustomDialog: FC<{
  isOpen: boolean;
  onResult: (result: CustomDialogResult<any>) => void;
  onCancel: () => void;
  model?: CustomDialogModel<any, any>;
}> = (props) => {
  const { isOpen, onResult, onCancel, model } = props;
  const {
    title,
    Content,
    ableToCancel,
    customModalClass,
    customModalBodyClass,
    contentProps,
    titleClass,
    closeBtnClass,
  } = model ?? {};
  return (
    <>
      <div
        className={clsx(
          customModalClass ?? "daisy-modal daisy-modal-bottom sm:daisy-modal-middle",
          isOpen && "daisy-modal-open"
        )}
      >
        {ableToCancel && (
          <div onClick={() => onCancel()} className="w-full h-full "></div>
        )}
        <div
          className={
            customModalBodyClass ??
            "daisy-modal-box  overflow-x-clip overflow-y-auto absolute"
          }
        >

          <div className=" z-10 relative text-center   mx-auto">
            {ableToCancel && (
              <div className="flex flex-row-reverse">
                <button
                  className={clsx(
                    "daisy-btn  rounded-full p-2 h-auto min-h-min ",
                    closeBtnClass
                  )}
                  title="cancel"
                  onClick={() => onCancel()}
                >
                  <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            )}
            <h2 className={clsx("m-0", titleClass)}>{title}</h2>
            {Content && (
              <Content
                onResult={onResult}
                {...contentProps}
                onCancel={onCancel}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};