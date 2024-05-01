import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@renderer/components/shadcn/select";

import React,{ ReactElement } from "react";



type Options = string[];



export function DropDown({options, placeholder, get, setter}: {options: Options, placeholder: string | number, get: string, setter: React.Dispatch<React.SetStateAction<string>>}): ReactElement{
    const handleFilterChange = (selected) => {
        setter(selected);
    }
    return(
        <div className="hover:tw-opacity-[0.8]">
            <Select onValueChange={(value) => handleFilterChange(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem value={option} onClick={() => console.log('here')} key={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

