import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@renderer/components/shadcn/input";
import { Button } from "@renderer/components/shadcn/button";
import SeatArrangement from "@renderer/components/seatArrangement"
import { DropDown } from "@renderer/components/DropDown";

import supabase from '@renderer/lib/client';


export default function Booking(){
    const navigate = useNavigate();
    const { id, seats } = useParams();

    // name selected from drop down
    const [namesDB, setnameDB] = useState('');
    // patreons info from DB
    const [patreonInfo, setpatreonInfo] = useState([]);
    const [selectedPat, setselectedPat] = useState([]);
    const [reset, setreset] = useState(false);

    // patreon info from input
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');

    // created patreon
    const [new_patreon, setnew_patreon] = useState([]);

    const reserved: string[] = [];
    const [reserved_seats, setreserved_seats] = useState([]);

    const [newReserve, setnewReserve] = useState([]);
    const [price, setprice] = useState(0);
    const [numOfSeats, setnumOfSeats] = useState(0);    

    // useEffect(() => {
    //     console.log(name, Email);
    // }, [name, Email]);
    console.log(newReserve);
    

    useEffect(() => {
        const fetchResults = async () => {
            const { data, error } = await supabase().from('ticket').select(`
                bought_seats
            `)
            .eq('performance', id);

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
        
        const fetchPatrons = async () => {
            const { data, error } = await supabase().from('patreons').select(`
                *
            `)

            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                console.log(data);
                
                // @ts-ignore
                setpatreonInfo(data);
            }
        }
        // @ts-ignore
        if(id){
            fetchResults();
            fetchPatrons();
        }else{
            setreserved_seats([]);
        }
    }, [id]);
    
    const isMounted = useRef(0);
    useEffect(() => {
        if (isMounted.current < 2) {
            isMounted.current++;
        }
        else{
            console.log('como', new_patreon);
            // create ticket
            let supabase_query2 = supabase()
            .from('ticket')
            //@ts-ignore
            .insert({patreon: new_patreon[0]['id'], performance: id, bought_seats: {'seats': newReserve}, cost: price});
            
            insert(supabase_query2);

            let supabase_query3 = supabase().from('performances')
            // @ts-ignore
            .update({ available_seats: (seats - numOfSeats) })
            // @ts-ignore
            .eq('id', id);

            insert(supabase_query3);
            navigate(-1);
        }
    }, [new_patreon]);

    // console.log(newReserve);
    let supabase_query1;
    const handleClick = async() => {
        if(namesDB === ''){
            // create user
            supabase_query1 = supabase()
            .from('patreons')
            .insert({name: name, email: Email})
            .select();

            let newPat = '';
            newPat = await insert(supabase_query1)
            if(newPat != ''){
                // @ts-ignore
                setnew_patreon(newPat)
            }
            

        }
        else{
            // create ticket
            let supabase_query = supabase()
            .from('patreons')
            .select(`*`)
            .eq('name', namesDB);

            let pp: any = ''
            pp = await insert(supabase_query);
            if(pp != ''){
                let supabase_query5 = supabase()
                .from('ticket')
                .insert({patreon: pp[0].id, performance: id, bought_seats: {'seats': newReserve}, cost: price});

                let ll: any = ''
                ll = await insert(supabase_query5);
                if(ll != ''){
                    let supabase_query3 = supabase().from('performances')
                    // @ts-ignore
                    .update({ available_seats: (seats - numOfSeats) })
                    // @ts-ignore
                    .eq('id', id);
        
                    insert(supabase_query3);
                    navigate(-1);
                }
            }
        }
    }
    
    const insert = async (supabase_query) => {
        const { data, error } = await supabase_query;

        if (error) {
            console.error('Error fetching data:', error.message);
        }
        return data;
    }

    return(
        <div>
            <div className="tw-mb-3 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
            </div>
            <div className="tw-flex tw-gap-3 tw-mb-3 ">
                {!reset && (<DropDown placeholder='Patrons' options={patreonInfo.map((pat) => (pat["name"]))} get={namesDB} setter={setnameDB}/>)}
                {reset && (<DropDown placeholder='Patrons' options={patreonInfo.map((pat) => (pat["name"]))} get={namesDB} setter={setnameDB}/>)}
                {namesDB != '' && (<Button variant="custom" onClick={() => {
                                    setreset(true);
                                    setnameDB('');
                                }}>Cancel selected patreon / Create new patreon</Button>)}
            </div>
            <div className="tw-flex tw-gap-3 tw-mb-3">
                {namesDB == '' && (<Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>)}
                {namesDB != '' && (<Input placeholder={namesDB} readOnly className="tw-opacity-40" />)}
                {namesDB == '' && (<Input placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)}/>)}
                {namesDB != '' && (<Input placeholder="--" readOnly className="tw-opacity-40" />)}
            </div>

            <div className="tw-w-full tw-h-72 tw-border tw-border-emerald-400 tw-mb-5 tw-overflow-y-scroll scrollbar">
                <SeatArrangement reserved_seats={reserved_seats} 
                setnewReserve={setnewReserve} setnumOfSeats={setnumOfSeats} setprice={setprice}
                newReserve={newReserve} price={price} numOfSeats={numOfSeats}/>
            </div>

            <div className="tw-flex tw-items-center tw-justify-between">
                <h1>{numOfSeats} Seats Chosen</h1>
                <h1>Total amount: ${price}</h1>
                <Button variant="custom" onClick={() => handleClick()}>Book</Button>
            </div>
        </div>
    );
}