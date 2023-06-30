import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function weeklyHistory({ prayer }) {
	console.log("weekly history", prayer);

	const dispatch = useDispatch();
	const history = useHistory();
	const [edit, setEdit] = useState(false);
	const [fajr, setFajr] = useState(prayer.fajr);
	const [dhuhr, setDhuhr] = useState(prayer.dhuhr);
	const [asr, setAsr] = useState(prayer.asr);
	const [magrib, setMagrib] = useState(prayer.magrib);
	const [isha, setIsha] = useState(prayer.isha);

	const handleChange = (e) => {
		console.log(e);
	};
	const handleClick = (value) => {
       console.log('before change',value);
       
       console.log('after change',value);
		
	};

	const handleEdit = () => {
		setEdit(!edit);
		console.log(fajr, dhuhr, asr, magrib, isha);
	};

	const handleSave = () => {
        const historyObj = {
			prayer: prayer.id,
			fajr: fajr,
			dhuhr: dhuhr,
			asr: asr,
			magrib: magrib,
			isha: isha,
		};
		setEdit(!edit);

		dispatch({
			type: "EDIT_HISTORY",
			payload: historyObj,
		});
	};
	const handleDelete = () => {
		console.log(prayer.id);
		dispatch({
			type: "DELETE_HISTORY",
			payload: prayer.id,
		});
	};

	return (
		<>
			{/* <p>{prayer.prayer_type}</p>
        <p>{prayer.mosque}</p>
        <p>{prayer.date}</p> */}

			{edit ? (
				<tr>
					<td>
						<input
							className="prayer-checkbox"
							value={fajr}
							type="checkbox"
							onClick={() => setFajr(!fajr)}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={dhuhr}
							type="checkbox"
							onClick={() => setDhuhr(!dhuhr)}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={asr}
							type="checkbox"
							onClick={() => setAsr(!asr)}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={magrib}
							type="checkbox"
							onClick={() => setMagrib(!magrib)}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={isha}
							type="checkbox"
							onClick={() => setIsha(!isha)}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</td>
                    <td>{prayer.date.toString()}</td>
					<td>
						<button onClick={handleSave}>SAVE</button>
					</td>
					<td>
						<button onClick={handleDelete}>DELETE</button>
					</td>
				</tr>
			) : (
				<tr>
					<td>{prayer.fajr.toString()}</td>
					<td>{prayer.dhuhr.toString()} </td>
					<td>{prayer.asr.toString()} </td>
					<td>{prayer.magrib.toString()} </td>
					<td>{prayer.isha.toString()} </td>
					<td>{prayer.date.toString()}</td>
					<td>
						<button onClick={handleEdit}>EDIT</button>
					</td>
					<td>
						<button onClick={handleDelete}>DELETE</button>
					</td>
				</tr>
			)}
		</>
	);
}

export default weeklyHistory;
