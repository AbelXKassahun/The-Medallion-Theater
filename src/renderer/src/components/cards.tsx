/*
    className={cn(
      "tw-rounded-xl tw-border tw-border-zinc-200 tw-bg-white tw-text-zinc-950 tw-shadow dark:tw-border-zinc-800 dark:tw-bg-zinc-950 dark:tw-text-zinc-50",
      className
    )}
*/

import { ReactElement, useEffect, useState } from "react";

export function Sales({salesSeats}: {salesSeats: boolean}){
  const [text, setText] = useState('');
  useEffect(() => {
    if(salesSeats){
      setText('Today\'s total sales')
    }
    else{
      setText('Seats sold today')
    }
  }, [salesSeats]);

  return (
    <div className="tw-text-white tw-w-60 tw-h-24 tw-pl-4 tw-pt-5 tw-flex-row tw-justify-center tw-items-center tw-rounded-xl tw-border tw-border-emerald-600 tw-bg-zinc-800">
      <div className="flex">
        <h1 className="font-normal tw-text-sm tw-text-emerald-600">{text}</h1>
        {/* <span className="material-symbols-outlined">attach_money</span> */}
      </div>
      <h1 className="font-bold tw-text-3xl">$23,546</h1>
    </div>
  );
}

export function NewPePr({text}: {text: string}): ReactElement{
  return(
    <div className="tw-text-white tw-w-60 tw-h-24 tw-pl-4 tw-pt-5 tw-flex-row tw-justify-center tw-items-center tw-rounded-xl tw-border tw-border-emerald-600 tw-bg-zinc-800 hover:tw-border-slate-300">
      <div className="tw-flex tw-items-center">
        <h1 className="tw-font-normal tw-text-sm tw-text-emerald-600">Create new</h1>
      </div>
      <h1 className="tw-font-bold tw-text-3xl">{text}</h1>
    </div>
  );
}
