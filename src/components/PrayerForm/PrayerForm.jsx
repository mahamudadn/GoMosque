import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./PrayerForm.css";

function prayerForm() {
	const dispatch = useDispatch();
	// const [user_id, setUser_Id] = useState("");
	const [prayer_id, setPrayer_Id] = useState(0);
	const [mosque, setMosque] = useState("false");
	const [fajr, setFajr] = useState("false");
	const [dhuhr, setDhuhr] = useState("false");
	const [asr, setAsr] = useState("false");
	const [magrib, setMagrib] = useState("false");
	const [isha, setIsha] = useState("false");

	const handleChange = (e) => {
		console.log(e);
	};

	const date = new Date().toJSON();
	//Function for adding
	const addPrayer = (event) => {
		event.preventDefault();
		const history = {
			prayer_id,
			fajr,
			dhuhr,
			asr,
			magrib,
			isha,
			date,
		};
		dispatch({
			type: "POST_PRAYER",
			payload: history,
		});
	};
	console.log(fajr);
	return (
		<>
			<form onSubmit={addPrayer}>
				<select
					onChange={(event) => setPrayer_Id(event.target.value)}
					name="prayers"
					id="prayer_id"
				>
					<option value="1">Fajr</option>
					<option value="2">Dhuhr</option>
					<option value="3">Asr</option>
					<option value="4">Magrib</option>
					<option value="5">isha</option>
				</select>
				<label htmlFor="mosque">
					{" "}
					Prayed at Mosque
					<input
						value={mosque}
						type="checkbox"
						onClick={() => setMosque(!mosque)}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</label>
				<select
					onChange={(event) => setPrayer_Id(event.target.value)}
					name="prayers"
					id="prayer_id"
				>
					<option value="1">Fajr</option>
					<option value="2">Dhuhr</option>
					<option value="3">Asr</option>
					<option value="4">Magrib</option>
					<option value="5">isha</option>
				</select>

				<label htmlFor="mosque">
					{" "}
					Prayed at Mosque
					<input
						value={mosque}
						type="checkbox"
						onClick={() => setMosque(!mosque)}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</label>
				<select
					onChange={(event) => setPrayer_Id(event.target.value)}
					name="prayers"
					id="prayer_id"
				>
					<option value="1">Fajr</option>
					<option value="2">Dhuhr</option>
					<option value="3">Asr</option>
					<option value="4">Magrib</option>
					<option value="5">isha</option>
				</select>
				<label htmlFor="mosque">
					{" "}
					Prayed at Mosque
					<input
						value={mosque}
						type="checkbox"
						onClick={() => setMosque(!mosque)}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</label>
				<select
					onChange={(event) => setPrayer_Id(event.target.value)}
					name="prayers"
					id="prayer_id"
				>
					<option value="1">Fajr</option>
					<option value="2">Dhuhr</option>
					<option value="3">Asr</option>
					<option value="4">Magrib</option>
					<option value="5">isha</option>
				</select>
				<label htmlFor="mosque">
					{" "}
					Prayed at Mosque
					<input
						value={mosque}
						type="checkbox"
						onClick={() => setMosque(!mosque)}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</label>
				<select
					onChange={(event) => setPrayer_Id(event.target.value)}
					name="prayers"
					id="prayer_id"
				>
					<option value="1">Fajr</option>
					<option value="2">Dhuhr</option>
					<option value="3">Asr</option>
					<option value="4">Magrib</option>
					<option value="5">isha</option>
				</select>

				<label htmlFor="mosque">
					{" "}
					Prayed at Mosque
					<input
						value={mosque}
						type="checkbox"
						onClick={() => setMosque(!mosque)}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</label>

				<input type="submit" value={"Add Prayer"} />
			</form>
		</>
	);
}

export default prayerForm;
