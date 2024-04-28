// "Olivia Martin", email: "olivia.martin@email.com", spendings: "2,129", soldSeats: 4
export default function RecentPatrons(){
    return(
        <div>
            <h1 className="tw-mb-3">Recent Patrons</h1>
            <div className="tw-w-full tw-h-20 tw-mb-3 tw-px-3 tw-flex tw-items-center tw-gap-3 tw-border tw-rounded-lg tw-border-emerald-600">
                {/* patron avatar */}
                <div className="tw-h-4/5 tw-w-16 tw-border flex tw-flex-none tw-border-emerald-600 tw-rounded-full"></div>
                {/* patron imfo */}
                <div className="tw-w-64">
                    <h1 className="tw-truncate ...">Olivia Martin</h1>
                    <h1 className="tw-truncate ...">olivia.martin@email.com</h1>
                </div>
                {/* how much did they spend */}
                <h1 className="tw-w-24 tw-mr-8 tw-flex tw-truncate ...">+$2,129</h1>
                <h1 className="tw-truncate ...">4 seats 🪑 bought</h1>
            </div>
        </div>
    );
}
