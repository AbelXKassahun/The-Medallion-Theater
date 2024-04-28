import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@renderer/components/shadcn/select";
import { ReactElement } from "react";



type Options = string[];



export function DropDown({options, placeholder}: {options: Options, placeholder: string | number}): ReactElement{

    return(
        <div className="hover:tw-opacity-[0.8]">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem value={option} key={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

