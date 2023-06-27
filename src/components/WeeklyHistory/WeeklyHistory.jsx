import react from 'react';

function weeklyHistory(weekly) {
    console.log('weekly history', weekly);

    return(
        <>
        <p>{weekly.user_id}</p>
        <p>{weekly.prayer_id}</p>
        <p>{weekly.mosque}</p>
        <p>{weekly.date}</p>
        </>
    )
    
}


export default weeklyHistory;