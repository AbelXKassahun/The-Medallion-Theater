import { useState, useEffect, useRef } from "react";

export function Orc_Seat({seat_id, alr_selected, setnewReserve, setnumOfSeats, setprice, newReserve, numOfSeats, price}){
    let new_reserve: string[] = newReserve;
    // let selected: boolean = false;
    const [selected, setselected] = useState(false);

    // const isMounted = useRef(0);
    // useEffect(() => {
    //     if (isMounted.current < 2) {
    //         isMounted.current++;
    //     }
    // }, [selected, newReserve]);


    const handleClick = (seat_price, seat_id) => {
        if(!alr_selected){
            let exists = false;
    
            for(let i = 0; i < new_reserve.length; i++){
                // console.log('here');
                if(seat_id === new_reserve[i]){
                    new_reserve = new_reserve.filter(item => item !== new_reserve[i]);
                    exists = true;
                }
            }
    
            if(!exists){
                setselected(true);
                new_reserve.push(seat_id);
                setnewReserve(new_reserve);
                let np = price + seat_price;
                setprice(np);
                let ns = numOfSeats + 1;
                setnumOfSeats(ns);
            }
            else{
                setselected(false);
                setnewReserve(new_reserve);
                let np = price - seat_price;
                setprice(np);
                let ns = numOfSeats - 1;
                setnumOfSeats(ns);
            }
        }
    }

    return(
        <div onClick={() => handleClick(65, seat_id)} className={`tw-w-3 tw-h-3 tw-bg-cyan-900 tw-border tw-border-cyan-500 
        ${alr_selected || selected ? 'tw-opacity-40' : 'tw-bg-cyan-900 tw-opacity-100'} hover:tw-opacity-40`}>
        </div>
    );
}

export function Mez_Seat({seat_id}){
    const handleClick = () => {
        console.log(seat_id);
    }
    return(
        <div onClick={() => handleClick()} className="tw-w-3 tw-h-3 tw-bg-orange-300 tw-border tw-border-orange-500">
        </div>
    );
}

export function Balc_Seat({seat_id}){
    const handleClick = () => {
        console.log(seat_id);
    }
    return(
        <div onClick={() => handleClick()} className="tw-w-3 tw-h-3 tw-bg-emerald-500 tw-border tw-border-emerald-700">
        </div>
    );
}

export function Box_Seat({seat_id}){
    const handleClick = () => {
        console.log(seat_id);
    }
    return(
        <div onClick={() => handleClick()} className="tw-w-3 tw-h-3 tw-bg-yellow-300 tw-border tw-border-yellow-600">
        </div>
    );
}