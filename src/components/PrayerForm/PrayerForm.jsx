import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./PrayerForm.css";
import { Container } from "@mui/material";
import { useHistory } from "react-router-dom";

function prayerForm() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [fajr, setFajr] = useState(false);
	const [dhuhr, setDhuhr] = useState(false);
	const [asr, setAsr] = useState(false);
	const [magrib, setMagrib] = useState(false);
	const [isha, setIsha] = useState(false);

	const handleChange = (e) => {
		console.log(e);
	};
	const user = useSelector((store) => store.user);

	// const date = new Date().toJSON();
	//Function for adding
	const addPrayer = (event) => {
		event.preventDefault();
		const historyObj = {
			id: user.id,
			fajr: fajr,
			dhuhr: dhuhr,
			asr: asr,
			magrib: magrib,
			isha: isha,
		};
		dispatch({
			
			type: "POST_PRAYER",
			payload: historyObj,
		});

		history.push("/weeklyprayer");
	};
	console.log(fajr);
	return (
		<Container maxWidth="xs">
			<form onSubmit={addPrayer}>
				<table className="prayer-form-table">
					<thead>
						<tr>
							<th>Prayers</th>
							<th>Prayed At Mosque</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Fajr</td>
							<td>
								<input
									className="prayer-checkbox"
									value={fajr}
									type="checkbox"
									onClick={() => setFajr(!fajr)}
									onChange={(e) => handleChange(e.target.value)}
								/>
							</td>
						</tr>
						<tr>
							<td>Dhuhr</td>
							<td>
								<input
									className="prayer-checkbox"
									value={dhuhr}
									type="checkbox"
									onClick={() => setDhuhr(!dhuhr)}
									onChange={(e) => handleChange(e.target.value)}
								/>
							</td>
						</tr>
						<tr>
							<td>Asr</td>
							<td>
								<input
									className="prayer-checkbox"
									value={asr}
									type="checkbox"
									onClick={() => setAsr(!asr)}
									onChange={(e) => handleChange(e.target.value)}
								/>
							</td>
						</tr>
						<tr>
							<td>Magrib</td>
							<td>
								<input
									className="prayer-checkbox"
									value={magrib}
									type="checkbox"
									onClick={() => setMagrib(!magrib)}
									onChange={(e) => handleChange(e.target.value)}
								/>
							</td>
						</tr>

						<tr>
							<td>Isha</td>
							<td>
								<input
									className="prayer-checkbox"
									value={isha}
									type="checkbox"
									onClick={() => setIsha(!isha)}
									onChange={(e) => handleChange(e.target.value)}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				<button className="add-prayer-button" type={"submit"}>
					ADD TO PRAYERS
				</button>
			</form>
		</Container>
	);
}

export default prayerForm;
