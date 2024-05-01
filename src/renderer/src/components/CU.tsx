import { Input } from "@renderer/components/shadcn/input";
import { DropDown } from "@renderer/components/DropDown";
import { Button } from "@renderer/components/shadcn/button";

import { Textarea } from "@renderer/components/shadcn/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import supabase from '@renderer/lib/client';
import getFormattedDate from "@renderer/lib/date";

export function CUproduction(){
    const navigate = useNavigate();

    const [type, settype] = useState('');
    const [time, settime] = useState('');
    const [shownFor, setshownFor] = useState('');
    const [PRname, setPRname] = useState('');
    const [description, setdescription] = useState('');

    const create_production = async() => {
        const { data, error } = await supabase().from('productions')
        .insert({description: description, type_of_performances: type, shown_for: shownFor, time_of_all_performances: time, production_name: PRname})
        .select();

        if (error) {
            console.error('Error fetching data:', error.message);
        }
        else{
            for(let i = 0; i < parseInt(shownFor); i++){
                const { error } = await supabase()
                .from('performances')
                .insert({ production: data[0].id, available_seats: 602, showTime: time, showDate: getFormattedDate(i) })
                
                if (error) {
                    console.error('Error fetching data:', error.message);
                }
                else{
                    navigate(-1);
                }
            }
        }
    }

    return(
        <div className="tw-flex-col tw-gap-2 tw-px-3">
            <div className="tw-mb-7 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
                {/* <Button variant="destructive">Delete</Button> */}
            </div>
            <div className="tw-w-5/5 tw-h-full tw-flex-column">
                {/* <label htmlFor="name">Performace name</label> */}
                <div className="tw-w tw-flex tw-gap-5 tw-mb-10">
                    <Input id="name" placeholder="Production name" value={PRname} onChange={(e) => setPRname(e.target.value)}/>
                </div>

                <div className="tw-mb-12"></div>
                <div className="tw-my-6 tw-flex tw-gap-5 tw-items-center tw-mb-9">
                    <DropDown placeholder="Type of production" options={["Concert", "Play"]} get={type} setter={settype}/>
                    <DropDown placeholder="Shown for" options={["For 4 days", "For a week", "For two weeks"]} get={shownFor} setter={setshownFor}/>
                    <DropDown placeholder="Time of all performances" options={["17:30:00","20:30:00"]} get={time} setter={settime}/>
                    {/* <DropDown placeholder="Type of performance" options={["Concert", "Play"]}/> */}
                </div>

                <Textarea className="tw-h-36 tw-mb-7" placeholder="Production description" value={description} onChange={(e) => setdescription(e.target.value)}/>
                <Button variant="custom" onClick={() => create_production()}>Create</Button>

            </div>
        </div>
    );
}