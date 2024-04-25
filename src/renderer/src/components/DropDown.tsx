import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@renderer/components/shadcn/select";
import { ReactElement } from "react";

type Options = {
    op1: string,
    op2: string
}

function DropDown({options}: {options:Options}): ReactElement{
    return(
        <div className="tw-w-28">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={options.op1} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={options.op1}>{options.op1}</SelectItem>
                    <SelectItem value={options.op2}>{options.op2}</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default DropDown;