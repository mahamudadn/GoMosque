import react from "react";

function weeklyHistory({ prayer }) {
	console.log("weekly history", prayer);

	return (
		<>
			{/* <p>{prayer.prayer_type}</p>
        <p>{prayer.mosque}</p>
        <p>{prayer.date}</p> */}
			<td>{prayer.prayer_type}</td>
			<td>{prayer.mosque} false</td>
			<td>{prayer.date}</td>
			<td>
				<button>Edit</button>
			</td>
		</>
	);
}

export default weeklyHistory;
