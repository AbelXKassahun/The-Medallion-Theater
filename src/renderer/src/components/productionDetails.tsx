import { Button } from "@renderer/components/shadcn/button";
import { useNavigate } from "react-router-dom";

export default function ProductionDetails(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/book_a_seat');
    }
    return(
        <div className=" tw-h-full tw-px-3 tw-overflow-hidden">
            <div className="tw-mb-7 tw-flex tw-items-center tw-justify-between">
                <h1 onClick={() => navigate(-1)} className="hover:tw-opacity-70">{"<- Back"}</h1>
                <Button variant="destructive" onClick={() => navigate('/CUproduction')}>Update / Delete</Button>
            </div>
            <div className="tw-flex tw-justify-between">
                <h1 className="tw-mb-5 tw-font-semibold tw-text-2xl">Romeo and Juliet</h1>
                <h1>Performance type: Play</h1>
            </div>
            <div className="tw-bg-zinc-800  tw-h-40 tw-overflow-y-scroll scrollbar tw-rounded-xl tw-px-2 tw-mb-8">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptatem recusandae dolor quibusdam porro accusantium assumenda voluptatibus, aliquam eveniet nam delectus ut vero, voluptatum unde laboriosam magnam, sed iusto necessitatibus labore incidunt. Ipsam inventore sequi impedit fugit doloremque nihil delectus aliquid iusto! Natus fugiat modi placeat repellendus molestias qui sed suscipit vel iste, provident a id, ad quis voluptatum assumenda architecto obcaecati quasi eaque dolore maxime ut! Molestias non ducimus explicabo debitis magnam reiciendis alias ex nihil quis ipsum, vel quisquam hic fugit similique consequuntur eaque cupiditate est! Ipsa maiores mollitia voluptatum debitis eius natus eaque rerum ullam, quod aliquam.</p>
            </div>
            <h1 className="tw-mb-4">Book a seat</h1>
            <div className="tw-h-48 tw-overflow-y-scroll scrollbar tw-rounded-xl tw-border tw-border-emerald-400 tw-px-2 tw-pt-2 tw-border-r-transparent">
                <Button className="tw-flex tw-justify-between tw-w-full tw-mb-3" 
                        variant="custom"
                        onClick={() => handleClick()}
                >
                    <h1 className="tw-w-50 tw-truncate ...">Today At 8:30pm</h1>
                    <h1>131/636 seats sold</h1>
                    <div className="tw-h-6 tw-w-20 tw-border-white tw-rounded-lg tw-bg-red-500 tw-flex tw-justify-center hover:tw-opacity-70" >Delete</div>
                </Button>
                <Button className="tw-flex tw-justify-between tw-w-full tw-mb-3" variant="custom">
                    <h1 className="tw-w-50 tw-truncate ...">Monday, Apr 29 At 8:30pm</h1>
                    <h1>400/636 seats sold</h1>
                    <div className="tw-h-6 tw-w-20 tw-border-white tw-rounded-lg tw-bg-red-500 tw-flex tw-justify-center hover:tw-opacity-70" >Delete</div>
                </Button>
                <Button className="tw-flex tw-justify-between tw-w-full tw-mb-3" variant="custom">
                    <h1 className="tw-w-50 tw-truncate ...">Tuesday, Apr 30 At 8:30pm</h1>
                    <h1>150/636 seats sold</h1>
                    <div className="tw-h-6 tw-w-20 tw-border-white tw-rounded-lg tw-bg-red-500 tw-flex tw-justify-center hover:tw-opacity-70" >Delete</div>
                </Button>
                <Button className="tw-flex tw-justify-between tw-w-full tw-mb-3" variant="custom">
                    <h1 className="tw-w-50 tw-truncate ...">Wednesday, Apr 30 at 8:30pm</h1>
                    <h1>150/636 seats sold</h1>
                    <div className="tw-h-6 tw-w-20 tw-border-white tw-rounded-lg tw-bg-red-500 tw-flex tw-justify-center hover:tw-opacity-70" >Delete</div>
                </Button>
            </div>
        </div>
    );
}