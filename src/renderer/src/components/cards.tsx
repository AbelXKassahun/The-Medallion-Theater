/*
    className={cn(
      "tw-rounded-xl tw-border tw-border-zinc-200 tw-bg-white tw-text-zinc-950 tw-shadow dark:tw-border-zinc-800 dark:tw-bg-zinc-950 dark:tw-text-zinc-50",
      className
    )}
*/
import { useNavigate } from "react-router-dom";


import { ReactElement } from "react";


export function Sales({text, amount}){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recent_patrons')
  }

  return (
    <div onClick={() => handleClick()} className="tw-text-white tw-w-60 tw-h-24 tw-pl-4 tw-pt-5 tw-flex-row tw-justify-center tw-items-center tw-rounded-xl tw-border tw-border-emerald-600 tw-bg-zinc-800 hover:tw-border-2">
      <div className="flex">
        <h1 className="font-normal tw-text-sm tw-text-emerald-600">{text}</h1>
        {/* <span className="material-symbols-outlined">attach_money</span> */}
      </div>
      <h1 className="font-bold tw-text-3xl">{amount}</h1>
    </div>
  );
}

export function NewPr(): ReactElement{
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/CUproduction')
  }
  return(
    <div onClick={() => handleClick()} className="tw-text-white tw-w-60 tw-h-24 tw-pl-4 tw-pt-5 tw-flex-row tw-justify-center tw-items-center tw-rounded-xl tw-border tw-border-emerald-600 tw-bg-zinc-800 hover:tw-border-2">
      <div className="tw-flex tw-items-center">
        <h1 className="tw-font-normal tw-text-sm tw-text-emerald-600">Create new</h1>
      </div>
      <h1 className="tw-font-bold tw-text-3xl">Production</h1>
    </div>
  );
}
