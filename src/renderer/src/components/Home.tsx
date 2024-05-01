import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { DropDown } from "@renderer/components/DropDown";
import { NewPr, Sales } from "@renderer/components/cards";
import { Input } from "@renderer/components/shadcn/input";
import Production from "@renderer/components/productionCard";
import supabase from '@renderer/lib/client';

function Home(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [type, setType] = useState('');

    const navigate = useNavigate();

    useEffect(() => {        
        navigate("/recent_patrons");
        
        const fetchResults = async () => {
            let supabase_query = supabase()
                .from('productions')
                .select();
                
            if(query){
                supabase_query = supabase_query.textSearch('production_name', query);
            }
            if (type) {                
                supabase_query = supabase_query.textSearch('type_of_performances', type); 
            }

            const { data, error } = await supabase_query

            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                // console.log(data);
                
                // @ts-ignore
                setResults(data);
            }
        };

        if (query.trim() !== '' || type) {
            fetchResults();
        }
        else {
            setResults([]);
        }
    }, [query, type]);



    return(
        <div className="tw-text-white tw-h-full tw-pt-5 tw-px-6">
            <div className="tw-flex tw-justify-between tw-mb-3 tw-items-center">
                <h1 className="tw-font-bold tw-font-jersey25 tw-text-2xl tw-text-emerald-600">Dashboard</h1>
                <h1 className="tw-font-bold tw-text-xs tw-text-emerald-600">Apr 23, 2024</h1>
            </div>
            <div className="tw-flex tw-gap-7 tw-justify-center tw-border-t-2 tw-border-zinc-500 tw-pt-6">
                <Sales text="Today's total sales" amount="$36,562"/>
                <Sales text="Seats sold today" amount="256 seats"/>
                <NewPr/>
            </div>
            <div className="tw-flex tw-gap-3 tw-h-3/4">
                <div className="tw-px-4 tw-py-3 tw-flex tw-flex-col tw-gap-2 tw-h-6/6 tw-w-1/2 tw-mt-5 tw-rounded-xl tw-border tw-border-emerald-600">
                    {/* filter */}
                    <h1>Filter</h1>
                    <div className="tw-flex tw-gap-2">
                        {/* <DropDown placeholder="Time of performances" options={["15:30:00","20:30:00"]} get={time} setter={setTime}/> */}
                        <DropDown placeholder="Type of performance" options={["Concert", "Play"]} get={type} setter={setType}/>
                        {/* <DropDown placeholder="Alphabetic order" options={["A-Z", "Z-A"]}/> */}
                        {/* <DropDown placeholder="Time of showing" options={["Today", "This week", "This month"]}/> */}
                        <Input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <div className="tw-flex tw-items-center tw-gap-3">
                        {/* <Input placeholder="Search" onChange={(e) => {console.log(e.target.value)}}/> */}
                        {results.length == 0 && (query.trim() !== '' || type !== '') && (<h3>No results found</h3>)}
                        {results.length == 1 &&  (<h3>{results.length} result found</h3>)}
                        {results.length > 1 &&  (<h3>{results.length} results found</h3>)}

                    </div>

                    <div className="tw-overflow-y-scroll scrollbar tw-px-4 tw-py-3 tw-flex tw-flex-col tw-gap-2 tw-h-full tw-w-4/4 tw-mt-2 tw-rounded-xl tw-border tw-border-r-transparent tw-border-emerald-600">
                        {results.map((result) => (
                            <Production result={result} key={result["id"]}/>
                        ))}

                    </div>
                </div>
                <div className="tw-flex-column  tw-w-1/2 tw-pt-5 tw-px-3 tw-mt-5 tw-overflow-y-scroll scrollbar tw-rounded-xl tw-border tw-border-emerald-600 tw-border-r-transparent">
                    {/* <RecentPatrons/> */}
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Home;