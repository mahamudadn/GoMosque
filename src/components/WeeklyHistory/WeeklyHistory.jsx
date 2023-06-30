import react from "react";

function weeklyHistory({prayer}) {
	console.log("weekly history", prayer);
    const handleEdit = () =>{
        

    }
    const handleDelete = () =>{

    }
    

	return (
		<>
			{/* <p>{prayer.prayer_type}</p>
        <p>{prayer.mosque}</p>
        <p>{prayer.date}</p> */}
            
			
			<tr>
							<td>{(prayer.fajr).toString()}</td>
							<td>{(prayer.dhuhr).toString()} </td>
							<td>{(prayer.asr).toString()} </td>
							<td>{(prayer.magrib).toString()} </td>
							<td>{(prayer.isha).toString()} </td>
							<td>{(prayer.date).toString()}</td>
							<td><button onClick={handleEdit}>EDIT</button></td>
							<td><button onClick={ handleDelete } >DELETE</button></td>
					</tr>
		</>
	);
}

export default weeklyHistory;
