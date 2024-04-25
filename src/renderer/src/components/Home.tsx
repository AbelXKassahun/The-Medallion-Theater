import DropDown from "@renderer/components/DropDown";
import { NewPePr, Sales } from "@renderer/components/cards";
import { Input } from "@renderer/components/shadcn/input";

function Home(){
    return(
        <div className="tw-text-white tw-h-full tw-pt-9 tw-px-6">
            <div className="tw-flex tw-justify-between tw-mb-5">
                <h1 className="tw-font-bold tw-text-2xl tw-text-emerald-600">Dashboard</h1>
                <h1 className="tw-font-bold tw-text-xs tw-text-emerald-600">Apr 23, 2024</h1>
            </div>
            <div className="tw-flex tw-gap-7 tw-justify-center tw-border-t-2 tw-border-zinc-500 tw-pt-6">
                <Sales salesSeats={true}/>
                <Sales salesSeats={false}/>
                <NewPePr text="Production"/>
                <NewPePr text="Performance"/>
            </div>
            <div className="tw-flex tw-gap-3 tw-h-screen">
                <div className="tw-px-4 tw-py-3 tw-flex tw-flex-col tw-gap-2 tw-h-4/6 tw-w-4/6 tw-mt-12 tw-rounded-xl tw-border tw-border-emerald-600">
                    {/* filter */}
                    <h1>Filter</h1>
                    <div className="tw-flex tw-gap-2">
                        <DropDown options={{op1: "Matinee", op2: "Evening"}}/>
                        <DropDown options={{op1: "Concert", op2: "Play"}}/>
                        <DropDown options={{op1: "A-Z", op2: "Z-A"}}/>
                    </div>
                    {/* <Input placeholder="Search" onChange={(e) => {console.log(e.target.value)}}/> */}
                    <Input placeholder="Search"/>

                </div>
                <div className="tw-h-4/6 tw-w-2/6 tw-mt-12 tw-rounded-xl tw-border tw-border-emerald-600">

                </div>
            </div>

            
        </div>
    )
}

export default Home;