import { Input } from "@renderer/components/shadcn/input";
import { DropDown } from "@renderer/components/DropDown";
import { Button } from "@renderer/components/shadcn/button";

import { Textarea } from "@renderer/components/shadcn/textarea";
import { useNavigate } from "react-router-dom";


export function CUproduction(){
    const navigate = useNavigate();

    return(
        <div className="tw-flex-col tw-gap-2 tw-px-3">
            <div className="tw-mb-7 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
                <Button variant="destructive">Delete</Button>
            </div>
            <div className="tw-w-5/5 tw-h-full tw-flex-column">
                {/* <label htmlFor="name">Performace name</label> */}
                <div className="tw-w tw-flex tw-gap-5 tw-mb-10">
                    <Input id="name" placeholder="Production name"/>
                </div>

                <div className="tw-mb-12"></div>
                <div className="tw-my-6 tw-flex tw-gap-5 tw-items-center tw-mb-9">
                    <DropDown placeholder="Type of production" options={["Concert", "Play"]}/>
                    <DropDown placeholder="Shown for" options={["For 4 days", "For a week", "For two weeks"]}/>
                    <DropDown placeholder="Time of all performances" options={["Matinee","Evening"]}/>
                    {/* <DropDown placeholder="Type of performance" options={["Concert", "Play"]}/> */}
                </div>

                <Textarea className="tw-h-36 tw-mb-7" placeholder="Production description"/>
                <Button variant="custom">Create</Button>

            </div>
        </div>
    );
}