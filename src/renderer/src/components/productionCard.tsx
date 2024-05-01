import { useNavigate } from "react-router-dom";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@renderer/components/shadcn/card"


export default function Production({result}: any){
    const navigate = useNavigate();
    
    return(
        <Card className="tw-flex  tw-pl-2" onClick={() => navigate(`productionDetails/${result.id}`)}>
            <div className="tw-w-16 tw-h-full tw-py-4 bg-[url('icon.png')]">
                
            </div>
            <CardHeader>
                <h3 className="tw-font-light tw-text-sm">A {result.type_of_performances} available for {result.shown_for} days</h3>
                <CardTitle>{result.production_name}</CardTitle>
                <CardDescription>Time of all performances {result.time_of_all_performances}</CardDescription>
            </CardHeader>
        </Card>
    )
}