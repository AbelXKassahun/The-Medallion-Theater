import DropDown from "@renderer/components/DropDown";
import { NewPePr, Sales } from "@renderer/components/cards";
import { Input } from "@renderer/components/shadcn/input";
import Performance from "@renderer/components/performance";
import RecentPatron from "@renderer/components/recentPatron";

function Home(){
    return(
        <div className="tw-text-white tw-h-full tw-pt-9 tw-px-6">
            <div className="tw-flex tw-justify-between tw-mb-5">
                <h1 className="tw-font-bold tw-font-jersey25 tw-text-2xl tw-text-emerald-600">Dashboard</h1>
                <h1 className="tw-font-bold tw-text-xs tw-text-emerald-600">Apr 23, 2024</h1>
            </div>
            <div className="tw-flex tw-gap-7 tw-justify-center tw-border-t-2 tw-border-zinc-500 tw-pt-6">
                <Sales salesSeats={true}/>
                <Sales salesSeats={false}/>
                <NewPePr text="Production"/>
                <NewPePr text="Performance"/>
            </div>
            <div className="tw-flex tw-gap-3 tw-h-screen">
                <div className="tw-px-4 tw-py-3 tw-flex tw-flex-col tw-gap-2 tw-h-4/6 tw-w-4/6 tw-mt-9 tw-rounded-xl tw-border tw-border-emerald-600">
                    {/* filter */}
                    <h1>Filter</h1>
                    <div className="tw-flex tw-gap-2">
                        <DropDown options={{op1: "Matinee", op2: "Evening"}}/>
                        <DropDown options={{op1: "Concert", op2: "Play"}}/>
                        <DropDown options={{op1: "A-Z", op2: "Z-A"}}/>
                        <DropDown options={{op1: "Today", op2: "This week"}}/>
                        <Input placeholder="Search"/>
                    </div>
                    {/* <Input placeholder="Search" onChange={(e) => {console.log(e.target.value)}}/> */}
                    <h3>13 results showing</h3>
                    <div className="tw-overflow-y-scroll scrollbar tw-px-4 tw-py-3 tw-flex tw-flex-col tw-gap-2 tw-h-full tw-w-3/4 tw-mt-2 tw-rounded-xl tw-border tw-border-r-transparent tw-border-emerald-600">
                        <Performance/>
                        <Performance/>
                        <Performance/>
                    </div>
                </div>
                <div className="tw-flex-column tw-h-4/6 tw-w-2/6 tw-pt-5 tw-px-3 tw-mt-9 tw-overflow-y-scroll scrollbar tw-rounded-xl tw-border tw-border-emerald-600 tw-border-r-transparent">
                    <h1 className="tw-mb-3">Recent Patrons</h1>
                    <RecentPatron user={{name: "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129"}}/>
                    <RecentPatron user={{name: "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129"}}/>
                    <RecentPatron user={{name: "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129"}}/>
                    <RecentPatron user={{name: "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129"}}/>
                    <RecentPatron user={{name: "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129"}}/>
                    <RecentPatron user={{name: "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129"}}/>
                </div>
            </div>

            
        </div>
    )
}

export default Home;