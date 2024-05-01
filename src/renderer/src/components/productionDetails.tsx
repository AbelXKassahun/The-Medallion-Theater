import { Button } from "@renderer/components/shadcn/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from '@renderer/lib/client';

export default function ProductionDetails(){
    const [results, setResults] = useState<any>([]);

    const navigate = useNavigate();
    const { result } = useParams();

    // const params = new URLSearchParams(result);
    // const obj = Object.fromEntries(params.entries());

    useEffect(() => {
        const fetchResults = async () => {
            const { data, error } = await supabase().from('productions').select(`
                *, 
                performances ( * )
            `);
            
            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                console.log(data);                
                
                // @ts-ignore
                setResults(data[0]);
            }
        }

        if(result){
            fetchResults();
        }else {
            setResults([]);
        }
    }, [result]);
    
    const handleClick = (id, seats) => {
        navigate(`/book_a_seat/${id}/${seats}`);
    }

    return(
        <div className=" tw-h-full tw-px-3 tw-overflow-hidden">
            <div className="tw-mb-7 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
                <Button variant="custom" onClick={() => navigate('/CUproduction')}>Update</Button>
            </div>
            <div className="tw-flex tw-justify-between">
                <h1 className="tw-mb-5 tw-font-semibold tw-text-2xl">{results.production_name}</h1>
                <h1>Performance type: {results.type_of_performances}</h1>
            </div>
            <div className="tw-bg-zinc-800  tw-h-40 tw-overflow-y-scroll scrollbar tw-rounded-xl tw-px-3 tw-py-3 tw-mb-8">
                <p className="">{results.description}</p>
            </div>
            <h1 className="tw-mb-4">Book a seat</h1>
            <div className="tw-h-48 tw-overflow-y-scroll scrollbar tw-rounded-xl tw-border tw-border-emerald-400 tw-px-2 tw-pt-2 tw-border-r-transparent">
                {results && results.performances?.map((perf) => (
                    <Button className="tw-flex tw-justify-between tw-w-full tw-mb-3" 
                            variant="custom"
                            onClick={() => handleClick(perf.id, perf.available_seats)}
                            key={perf.id}
                    >
                        <h1 className="tw-w-50 tw-truncate ...">{perf.showDate} At {perf.showTime}</h1>
                        <h1>{602 - perf.available_seats}/602 seats sold</h1>
                        {/* <div className="tw-h-6 tw-w-20 tw-border-white tw-rounded-lg tw-bg-red-500 tw-flex tw-justify-center hover:tw-opacity-70" >Delete</div> */}
                    </Button>
                ))}
            </div>
        </div>
    );
}