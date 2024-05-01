import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@renderer/components/shadcn/input";
import { Button } from "@renderer/components/shadcn/button";
import SeatArrangement from "@renderer/components/seatArrangement"

import supabase from '@renderer/lib/client';


export default function Booking(){
    const navigate = useNavigate();
    const { id } = useParams();
    const reserved: string[] = [];
    const [reserved_seats, setreserved_seats] = useState([]);
    const [newReserve, setnewReserve] = useState([]);
    const [price, setprice] = useState(0);
    const [numOfSeats, setnumOfSeats] = useState(0);    

    useEffect(() => {
        const fetchResults = async () => {
            const { data, error } = await supabase().from('ticket').select(`
                bought_seats
            `).eq('performance', id);

            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                for(let i = 0; i < data.length; i++){
                    for(let j = 0; j < data[i].bought_seats.seats.length; j++){
                        reserved.push(data[i].bought_seats.seats[j]);
                    }
                }
                // @ts-ignore
                setreserved_seats(reserved)
            }
        }

        if(id){
            fetchResults();
        }else{
            setreserved_seats([]);
        }
    }, [id]);

    console.log(newReserve);

    return(
        <div>
            <div className="tw-mb-3 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
            </div>
            <div className="tw-flex tw-gap-3 tw-mb-3">
                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
            </div>

            <div className="tw-w-full tw-h-96 tw-border tw-border-emerald-400 tw-mb-5 tw-overflow-y-scroll scrollbar">
                <SeatArrangement reserved_seats={reserved_seats} 
                setnewReserve={setnewReserve} setnumOfSeats={setnumOfSeats} setprice={setprice}
                newReserve={newReserve} price={price} numOfSeats={numOfSeats}/>
            </div>

            <div className="tw-flex tw-items-center tw-justify-between">
                <h1>{numOfSeats} Seats Chosen</h1>
                <h1>Total amount: ${price}</h1>
                <Button variant="custom">Book</Button>
            </div>
        </div>
    );
}