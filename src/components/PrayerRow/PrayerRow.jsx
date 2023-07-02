import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PrayerRow({ prayer, onEdit, onSave, onDelete }) {
	const [edit, setEdit] = useState(false);
	const [fajr, setFajr] = useState(prayer.fajr);
	const [dhuhr, setDhuhr] = useState(prayer.dhuhr);
	const [asr, setAsr] = useState(prayer.asr);
	const [magrib, setMagrib] = useState(prayer.magrib);
	const [isha, setIsha] = useState(prayer.isha);

	const handleEdit = () => {
		setEdit(true);
	};

	const handleSave = () => {
		const editedPrayer = {
			...prayer,
			fajr,
			dhuhr,
			asr,
			magrib,
			isha,
		};
		onSave(editedPrayer);
		setEdit(false);
	};

	const handleDelete = () => {
		onDelete(prayer.id);
	};

	return (
		<tr>
			{edit ? (
				<>
					<td>
						<input
							className="prayer-checkbox"
							value={fajr}
							type="checkbox"
							onClick={() => setFajr(!fajr)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={dhuhr}
							type="checkbox"
							onClick={() => setDhuhr(!dhuhr)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={asr}
							type="checkbox"
							onClick={() => setAsr(!asr)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={magrib}
							type="checkbox"
							onClick={() => setMagrib(!magrib)}
						/>
					</td>
					<td>
						<input
							className="prayer-checkbox"
							value={isha}
							type="checkbox"
							onClick={() => setIsha(!isha)}
						/>
					</td>
					<td>{prayer.date.toString()}</td>
					<td>
						<button onClick={handleSave}>SAVE</button>
					</td>
					<td>
						<button onClick={handleDelete}>DELETE</button>
					</td>
				</>
			) : (
				<>
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
				</>
			)}
		</tr>
	);
}

export default PrayerRow;
