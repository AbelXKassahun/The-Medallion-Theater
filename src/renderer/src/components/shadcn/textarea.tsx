import * as React from "react"

import { cn } from "@renderer/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "tw-flex tw-min-h-[80px] tw-w-full tw-rounded-md tw-border tw-border-emerald-700 tw-bg-zinc-800 tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-white placeholder:tw-text-white focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-slate-950 focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 dark:tw-border-slate-800 dark:tw-bg-slate-950 dark:tw-ring-offset-slate-950 dark:placeholder:tw-text-slate-400 dark:focus-visible:tw-ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
