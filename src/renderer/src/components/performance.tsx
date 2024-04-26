import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@renderer/components/shadcn/card"


export default function Performance(){
    return(
        <Card className="tw-flex  tw-pl-2">
            <div className="tw-w-16 tw-h-full tw-py-4 bg-[url('icon.png')]">
                
            </div>
            <CardHeader>
                <h3 className="tw-font-light tw-text-sm">Evening, Play by flaunt group</h3>
                <CardTitle>Romeo and Juliet</CardTitle>
                <CardDescription>Today at 8:30 pm</CardDescription>
            </CardHeader>
        </Card>
    )
}