import react, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./WeeklyHistory.css";
// import PrayerChart from "../PrayerChart/PrayerChart";
// import { shallowEqual } from "react-redux";

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
	const [totalMosques, setTotalMosques] = useState(prayer.totalMosques);
	
	const [mosqueCount, setMosqueCount] = useState(
		    Number(prayer.fajr) +
			Number(prayer.dhuhr) +
			Number(prayer.asr) +
			Number(prayer.magrib) +
			Number(prayer.isha)
	);
	useEffect(() => {
		// Update mosqueCount whenever fajr, dhuhr, asr, magrib, or isha change
        dispatch({type: 'FETCH_WEEKLY'});
		const newMosqueCount =
			Number(fajr) +
			Number(dhuhr) +
			Number(asr) +
			Number(magrib) +
			Number(isha);
		setMosqueCount(newMosqueCount);
	}, [fajr, dhuhr, asr, magrib, isha]);

	const handleChange = (e) => {
		if (e && e.target) {
			const value = e.target.value;
			setTotalMosques(value);
		}
	};

	const handleClick = (value) => {
		console.log("before change", value);

		console.log("after change", value);
	};

	const handleEdit = () => {
		setEdit(!edit);
		console.log('CLLLLIIICKKKEDDD EDDDIIITTTTT',fajr, dhuhr, asr, magrib, isha);
	};

	const handleSave = () => {
		console.log('CLLLLIIICKKKEDDD SAAAAAAAVVVVVEEEE',fajr, dhuhr, asr, magrib, isha);

		const historyObj = {
			prayer: prayer.id,
			fajr: fajr,
			dhuhr: dhuhr,
			asr: asr,
			magrib: magrib,
			isha: isha,
			totalMosques: totalMosques,
		};
		setEdit(!edit);

		dispatch({
			type: "EDIT_HISTORY",
			payload: historyObj,
		});

		console.log('SENDING HISTORY OBJECT TO SERVER', historyObj);
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
		
			{edit ? (
				<tr className="weekly-history-row">
					<td>
						<input
							className="prayer-checkbox"
							value={fajr}
							type="checkbox"
							onClick={() => setFajr(!fajr)}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={dhuhr}
							type="checkbox"
							onClick={() => setDhuhr(!dhuhr)}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={asr}
							type="checkbox"
							onClick={() => setAsr(!asr)}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={magrib}
							type="checkbox"
							onClick={() => setMagrib(!magrib)}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={isha}
							type="checkbox"
							onClick={() => setIsha(!isha)}
							onChange={handleChange}
						/>
					</td>
					<td>{mosqueCount}</td>
					<td>{prayer.date.toString()}</td>
					<td>
						<button className="edit-button" onClick={handleSave}>
							SAVE
						</button>
					</td>
					<td>
						<button className="delete-button" onClick={handleDelete}>
							DELETE
						</button>
					</td>
				</tr>
			) : (
				<tr className="weekly-history-row">
					{/* <td>
						{" "}
						<div className="chart-container">
							<PrayerChart data={[fajr, dhuhr, asr, magrib, isha]} />
						</div>
					</td> */}
					<td>{prayer.fajr ? "🕌" : "❌"}</td>
					<td>{prayer.dhuhr ? "🕌" : "❌"} </td>
					<td>{prayer.asr ? "🕌" : "❌"} </td>
					<td>{prayer.magrib ? "🕌" : "❌"} </td>
					<td>{prayer.isha ? "🕌" : "❌"}</td>
					<td>{mosqueCount}</td>

					<td>{prayer.date.slice(0, 10)}</td>
					{/*  */}
					<td>
						<button className="edit-button" onClick={handleEdit}>
							EDIT
						</button>
					</td>

					<td>
						<button className="delete-button" onClick={handleDelete}>
							DELETE
						</button>
					</td>
				</tr>
			)}
			
			{/* <div className="chart-container">
				<PrayerChart data={[fajr, dhuhr, asr, magrib, isha]} />
			</div>
             */}
		</>
	);
}

export default weeklyHistory;
