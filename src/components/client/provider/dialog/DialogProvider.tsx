import { resolve } from 'path';
import React, { FC, PropsWithChildren, useCallback, useContext } from 'react'
import { CustomDialog, CustomDialogModel, CustomDialogResult } from './CustomDialog';
import { InfoDialog, InfoDialogModel, InfoDialogResult } from './InfoDialog';
import { LoadingDialog, LoadingDialogModel, LoadingDialogResult } from './LoadingDialog';
import { YesNoDialog, YesNoDialogModel, YesNoDialogResult } from './YesNoDialog';


export type ResultType = YesNoDialogResult | InfoDialogResult | LoadingDialogResult<any> | CustomDialogResult<any>;
interface YesNoDialogState {
    type: "YesNoDialog",
    model: YesNoDialogModel,
}
interface InfoDialogState {
    type: "InfoDialog",
    model: InfoDialogModel,
}
interface LoadingDialogState {
    type: "LoadingDialog",
    model: LoadingDialogModel<any>,
}
interface CustomDialogState {
    type: "CustomDialog",
    model: CustomDialogModel<any, any>,
}

const DialogContext = React.createContext<{
  askYesNo: (model: YesNoDialogModel) => Promise<YesNoDialogResult>,
  showInfo: (model: InfoDialogModel) => Promise<InfoDialogResult>,
  showLoading: <T>(model: LoadingDialogModel<T>) => Promise<LoadingDialogResult<T>>,
  showCustomDialog: <T, TProps>(model: CustomDialogModel<T, TProps>) => Promise<CustomDialogResult<T>>,
  // waitingDialog: ()=>Promise<void>
    } | undefined>(undefined);


export const DialogProvider = (props: PropsWithChildren<any>) => {
  const { children } = props;
  const [openDialog, setOpenDialog] = React.useState<YesNoDialogState | InfoDialogState | LoadingDialogState | CustomDialogState | null>(null);
  const awaitingPromiseRef = React.useRef<{
        resolve: (value: ResultType) => void;
        reject: () => void;
    }>();
  const resetDialog = () => {
    setOpenDialog(null);
  }

  const askYesNo = (model: YesNoDialogModel) => {
    setOpenDialog({
      type: "YesNoDialog",
      model: model
    });
    return new Promise<YesNoDialogResult>((resolve: (res: any) => void, reject) => {
      // save the promise result to the ref
      awaitingPromiseRef.current = { resolve, reject };
    }).then(it => {
      awaitingPromiseRef.current = undefined;
      return it;
    });
  }

  const showInfo = (model: InfoDialogModel) => {
    setOpenDialog({
      type: "InfoDialog",
      model: model
    });
    return new Promise<InfoDialogResult>((resolve: (res: any) => void, reject) => {
      // save the promise result to the ref
      awaitingPromiseRef.current = { resolve, reject };
    }).then(it => {
      awaitingPromiseRef.current = undefined;
      return it;
    });
  }
  const showLoading = <T,>(model: LoadingDialogModel<T>) => {
    setOpenDialog({
      type: "LoadingDialog",
      model: model
    });
    return new Promise<LoadingDialogResult<T>>((resolve: (res: any) => void, reject) => {
      // save the promise result to the ref
      awaitingPromiseRef.current = { resolve, reject };
    }).then(it => {
      awaitingPromiseRef.current = undefined;
      return it;
    });
  }
  const showCustomDialog = <T, TProps>(model: CustomDialogModel<T, TProps>) => {
    setOpenDialog({
      type: "CustomDialog",
      model: model
    });
    return new Promise<CustomDialogResult<T>>((resolve: (res: any) => void, reject) => {
      // save the promise result to the ref
      awaitingPromiseRef.current = { resolve, reject };
    }).then(it => {
      awaitingPromiseRef.current = undefined;
      return it;
    });
  }

  return <DialogContext.Provider value={
    {
      askYesNo,
      showInfo,
      showLoading,
      showCustomDialog
    }
  }>
    {children}
    <YesNoDialog model={(openDialog?.type === "YesNoDialog" && openDialog?.model) || undefined} isOpen={openDialog?.type === "YesNoDialog"}
      onResult={(res) => {
        awaitingPromiseRef.current?.resolve(res);
        resetDialog();
      }}
      onCancel={() => {
        awaitingPromiseRef.current?.resolve("cancel");
        resetDialog();
      }} />
    <InfoDialog model={(openDialog?.type === "InfoDialog" && openDialog?.model) || undefined} isOpen={openDialog?.type === "InfoDialog"}
      onResult={(res) => {
        awaitingPromiseRef.current?.resolve(res);
        resetDialog();
      }}
      onCancel={() => {
        awaitingPromiseRef.current?.resolve("cancel");
        resetDialog();
      }} />

    <LoadingDialog model={(openDialog?.type === "LoadingDialog" && openDialog?.model) || undefined} isOpen={openDialog?.type === "LoadingDialog"}
      onResult={(res) => {
        awaitingPromiseRef.current?.resolve(res);
        resetDialog();
      }}
      onCancel={() => {
        // awaitingPromiseRef.current?.resolve({status:"cancel"} as LoadingDialogResult<any>);
        resetDialog();
      }} />

    <CustomDialog model={(openDialog?.type === "CustomDialog" && openDialog?.model) || undefined} isOpen={openDialog?.type === "CustomDialog"}
      onResult={(res) => {
        awaitingPromiseRef.current?.resolve({ status: 'success', data: res });
        resetDialog();
      }}
      onCancel={() => {
        awaitingPromiseRef.current?.resolve({ status: "cancel" } as CustomDialogResult<any>);
        resetDialog();
      }} />

  </DialogContext.Provider>
}

export const useDialog = () => {
  const dialogContext = useContext(DialogContext)
  if(!dialogContext){
    throw new Error("found no DialogContext")
  }
  return dialogContext
}