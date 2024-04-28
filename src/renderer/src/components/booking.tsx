import { Input } from "@renderer/components/shadcn/input";
import { Button } from "@renderer/components/shadcn/button";
import { useNavigate } from "react-router-dom";
import SeatArrangement from "@renderer/components/seatArrangement"

export default function Booking(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="tw-mb-7 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
            </div>
            <div className="tw-flex tw-gap-3 tw-mb-6">
                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
            </div>

            <div className="tw-w-full tw-h-full tw-border tw-border-emerald-400 tw-mb-5">
                <SeatArrangement/>
            </div>
            <div className="tw-flex tw-items-center tw-justify-between">
                <h1>8 Seats Chosen</h1>
                <h1>Total amount: $560</h1>
                <Button variant="custom">Book</Button>
            </div>

        </div>
    );
}