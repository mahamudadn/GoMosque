import react from 'react';


function weeklyHistory({prayer}) {
    console.log('weekly history', prayer);

    return(
        <>
        <p>{prayer.prayer_type}</p>
        <p>{prayer.mosque}</p>
        <p>{prayer.date}</p>
        
        </>
    )
    
}


export default weeklyHistory;