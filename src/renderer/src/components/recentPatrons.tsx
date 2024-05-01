import { useEffect, useState } from "react";
import supabase from '@renderer/lib/client';

export default function RecentPatrons(){
    const [recentPatrons, setRecentPatrons] = useState([]);
    useEffect(() => {
        getRecentPatrons();
    }, []);
    async function getRecentPatrons(){
        const { data, error } = await supabase()
        .from('ticket')
        .select(`
            id,
            created_at,
            bought_seats,
            cost,
            patreons(id, name, email)
        `)
        .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error fetching data:', error.message);
        } else {
            // @ts-ignore
            setRecentPatrons(data);
        }        
    }
    return(
        <div>
            <h1 className="tw-mb-3">Recently bought tickets</h1>
            {recentPatrons.map((pat: any) => (
                <div className="tw-w-full tw-h-20 tw-mb-3 tw-px-3 tw-flex tw-items-center tw-gap-3 tw-border tw-rounded-lg tw-border-emerald-600" key={pat.id}>
                    {/* patron avatar */}
                    <div className="tw-h-4/5 tw-w-16 tw-border flex tw-flex-none tw-border-emerald-600 tw-rounded-full"></div>
                    {/* patron imfo */}
                    <div className="tw-w-64">
                        <h1 className="tw-truncate ...">{pat.patreons.name}</h1>
                        <h1 className="tw-truncate ...">{pat.patreons.email}</h1>
                    </div>
                    {/* how much did they spend */}
                    <h1 className="tw-w-24 tw-mr-8 tw-flex tw-truncate ...">+${pat.cost}</h1>
                    <h1 className="tw-truncate ...">{pat.bought_seats.seats.length} seats 🪑 bought</h1>
                </div>
            ))}
        </div>
    );
}
