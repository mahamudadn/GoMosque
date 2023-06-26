import react from 'react';

function weeklyHistory(weekly) {
    console.log('weekly history', weekly);

    return(
        <>
        <p>{weekly.user_id}</p>
        <p>{weekly.prayer_id}</p>
        <p>{mosque}</p>
        <p>{date}</p>
        </>
    )
    
}


export default weeklyHistory;