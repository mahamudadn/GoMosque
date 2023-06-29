import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeeklyHistory from "../WeeklyHistory/WeeklyHistory";


function weeklyPrayer() {

const history = useSelector((store) => store.history);
const user = useSelector((store) => store.user);
const dispatch = useDispatch();

useEffect(() => {
    dispatch({ type: "FETCH_HISTORY" });
    console.log(history);
}, []);

return (
    <>
    <h2>DIALY PRAYERS</h2>
    <table>
                    
        <thead>
            <tr>
                
                <th>Prayer</th>
                <th>Mosque</th>
                <th>Date</th>
            </tr>

            {/* <tr>
                <th>Fajr</th>
                <th>Dhuhr</th>
                <th>Asr</th>
                <th>Magrib</th>
                <th>Isha</th>
                
            </tr> */}
        </thead>
            <tbody>
    
                    {/* <PrayerForm />
                    <p>All of the prayers can be seen here.</p> */}
                    {history?.map((prayer) => (
                        <tr key={prayer.id}>
                            <WeeklyHistory prayer={prayer} />
                        </tr>
                        
                    ))}
                    
    
                </tbody>
        </table>

    </>
);


    
}




export default weeklyPrayer;