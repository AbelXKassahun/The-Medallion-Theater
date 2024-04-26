import { ReactElement } from "react";
interface info{
    name: string,
    email: string,
    spendings: string
}
export default function RecentPatron({user}: {user: info}): ReactElement{
    return(
        <div className="tw-w-full tw-h-20 tw-mb-3 tw-px-3 tw-flex tw-items-center tw-gap-3 tw-border tw-rounded-lg hover:tw-border-emerald-300 hover:tw-border-2 tw-border-emerald-600">
            {/* patron avatar */}
            <div className="tw-h-4/5 tw-w-16 tw-border flex tw-flex-none tw-border-emerald-600 tw-rounded-full"></div>
            {/* patron imfo */}
            <div className="tw-w-56">
                <h1>{user.name}</h1>
                <h1 className="tw-truncate ...">{user.email}</h1>
            </div>
            {/* how much did they spend */}
            <h1 className="">+${user.spendings}</h1>
        </div>
    );
}
