import {Orc_Seat, Mez_Seat, Balc_Seat, Box_Seat} from "@renderer/components/seat";

export default function SeatArrangement(){
    return(
        <div>
            <Orc_Seat/>
            <Mez_Seat/>
            <Balc_Seat/>
            <Box_Seat/>
        </div>
    )
}