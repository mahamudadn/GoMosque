import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeeklyHistory from "../WeeklyHistory/WeeklyHistory";
import "./WeeklyPrayer.css";
import Container from "@mui/material/Container";

function weeklyPrayer() {
	const history = useSelector((store) => store.history);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "FETCH_HISTORY" });
		
	}, []);



	console.log('History reducser', history);


	
	return (
		<div className="prayer-table">
			<h2 className="prayer_hisory">PRAYERS HISTORY</h2>

			<table className="weekly-prayer">
				<thead>
					<tr className="table-head">
						<th className="prayer-column">Fajr</th>
						<th className="prayer-column">Dhuhr</th>
						<th className="prayer-column">Asr</th>
						<th className="prayer-column">Magrib</th>
						<th className="prayer-column">Isha</th>
                        <th className="prayer-column">Mosque</th>
						<th className="prayer-column">Day</th>
						<th className="prayer-column">Edit</th>
						<th className="prayer-column">Delete</th>
					</tr>
				</thead>

				<tbody>
					{history?.map((prayer) => (
						<WeeklyHistory key={prayer.id} prayer={prayer} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default weeklyPrayer;
