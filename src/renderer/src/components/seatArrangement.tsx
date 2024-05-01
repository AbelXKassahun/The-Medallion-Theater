import {Orc_Seat, Mez_Seat, Balc_Seat, Box_Seat} from "@renderer/components/seat";
import { ReactElement, useState } from "react";

export default function SeatArrangement({reserved_seats, setnewReserve, setnumOfSeats, setprice, newReserve, numOfSeats, price}){
    const numberOfRows_orch = 6;
    const numberOfRows_balc1 = 3;
    const numberOfRows_balc2 = 1;
    const numberOfRows_balc3 = 1;
    const numberOfRows_balc4 = 1;

    const numberOfRows_mez = 8;
    const componentsPerRow = 38;
    const dash:any = '-';
    const orchestra: ReactElement[] = [];
    const mezanine: ReactElement[] = [];
    const balcony1: ReactElement[] = [];
    const balcony2: ReactElement[] = [];
    const balcony3: ReactElement[] = [];
    const balcony4: ReactElement[] = [];
        
    const rows: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 34; j++){
            if(j == 8 || j == 25){
                orchestra.push(dash);
                orchestra.push(rows[i]);
                orchestra.push(dash);
            }
            else{
                let alr_selected = false;
                if(reserved_seats){
                    // let suffix = j < 10 ? '0' + j : `${j}`;
                    let suffix;
                    if(j < 8){
                        suffix = '0' + j;
                    }
                    else if(j === 9 ){
                        suffix = '08';
                    }
                    else if(j === 10){
                        suffix = '09';
                    }
                    else if(j > 10 && j < 26){
                        suffix = j-1;
                    }
                    else if(j >= 26){
                        suffix = j-2;
                    }
                    
                    for(let x = 0; x < 8; x++){                        
                        if((rows[i] + suffix) === reserved_seats[x]){
                            alr_selected = true;
                        }
                    }
                    
                    orchestra.push(<Orc_Seat seat_id={rows[i] + suffix} alr_selected={alr_selected}
                        setnewReserve={setnewReserve} setnumOfSeats={setnumOfSeats} setprice={setprice} 
                        price={price} numOfSeats={numOfSeats} newReserve={newReserve}
                        key={rows[i] + suffix}/>)
                }
            }
        }
    }

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 34; j++){
            if(j == 8 || j == 25){
                mezanine.push(dash);
                mezanine.push(rows[i + 6]);
                mezanine.push(dash);
            }
            else{
                mezanine.push(<Mez_Seat seat_id={rows[i + 6] + j} key={rows[i + 6] + j}/>)
            }
        }
    }

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 34; j++){
            if(j == 8 || j == 25){
                balcony1.push(dash);
                balcony1.push(rows[i] + rows[i]);
                balcony1.push(dash);
            }
            else{
                balcony1.push(<Balc_Seat seat_id={rows[i] + rows[i] + j} key={rows[i] + rows[i] + j}/>)
            }
        }
    }

    for(let i = 0; i < 1; i++){
        for(let j = 0; j < 32; j++){
            if(j == 7 || j == 24){
                balcony2.push(dash);
                balcony2.push(rows[i + 3] + rows[i + 3]);
                balcony2.push(dash);
            }
            else if(j ==0){
                balcony2.push(<div className="tw-mr-3"></div>);
                balcony2.push(<Balc_Seat seat_id={rows[i + 3] + rows[i + 3] + j} key={rows[i + 3] + rows[i + 3] + j}/>);
            }
            else{
                balcony2.push(<Balc_Seat seat_id={rows[i + 3] + rows[i + 3] + j} key={rows[i + 3] + rows[i + 3] + j}/>);
            }
        }
    }

    for(let i = 0; i < 1; i++){
        for(let j = 0; j < 28; j++){
            if(j == 5 || j == 22){
                balcony3.push(dash);
                balcony3.push(rows[i + 4] + rows[i + 4]);
                balcony3.push(dash);
            }
            else if(j ==0){
                balcony3.push(<div className="tw-mr-11"></div>);
                balcony3.push(<Balc_Seat seat_id={rows[i + 4] + rows[i + 4] + j} key={rows[i + 4] + rows[i + 4] + j}/>);
            }
            else{
                balcony3.push(<Balc_Seat seat_id={rows[i + 4] + rows[i + 4] + j} key={rows[i + 4] + rows[i + 4] + j}/>);
            }
        }
    }

    for(let i = 0; i < 1; i++){
        for(let j = 0; j < 28; j++){
            if(j == 5 || j == 22){
                balcony4.push(dash);
                balcony4.push(rows[i + 5] + rows[i + 5]);
                balcony4.push(dash);
            }
            else if(j ==0){
                balcony4.push(<div className="tw-mr-11"></div>);
                balcony4.push(<Balc_Seat seat_id={rows[i + 5] + rows[i + 5] + j} key={rows[i + 5] + rows[i + 5] + j}/>);
            }
            else{
                balcony4.push(<Balc_Seat seat_id={rows[i + 5] + rows[i + 5] + j} key={rows[i + 5] + rows[i + 5] + j}/>);
            }
        }
    }
    return(
        <div className="">
            <div className="">
                {[...Array(numberOfRows_orch)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center'}}>
                        {orchestra.slice(rowIndex * componentsPerRow, (rowIndex + 1) * componentsPerRow).map((component, index) => (
                        <div key={index} style={{ marginRight: '3px' }}>
                            {component}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="">
                {[...Array(numberOfRows_mez)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center'}}>
                        {mezanine.slice(rowIndex * componentsPerRow, (rowIndex + 1) * componentsPerRow).map((component, index) => (
                        <div key={index} style={{ marginRight: '3px' }}>
                            {component}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="">
                {[...Array(numberOfRows_balc1)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center'}}>
                        {balcony1.slice(rowIndex * componentsPerRow, (rowIndex + 1) * componentsPerRow).map((component, index) => (
                        <div key={index} style={{ marginRight: '3px' }}>
                            {component}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="">
                {[...Array(numberOfRows_balc2)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center'}}>
                        {balcony2.slice(rowIndex * componentsPerRow, (rowIndex + 1) * componentsPerRow).map((component, index) => (
                        <div key={index} style={{ marginRight: '3px' }}>
                            {component}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="">
                {[...Array(numberOfRows_balc3)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center'}}>
                        {balcony3.slice(rowIndex * componentsPerRow, (rowIndex + 1) * componentsPerRow).map((component, index) => (
                        <div key={index} style={{ marginRight: '3px' }}>
                            {component}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="">
                {[...Array(numberOfRows_balc4)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', alignItems: 'center'}}>
                        {balcony4.slice(rowIndex * componentsPerRow, (rowIndex + 1) * componentsPerRow).map((component, index) => (
                        <div key={index} style={{ marginRight: '3px' }}>
                            {component}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}