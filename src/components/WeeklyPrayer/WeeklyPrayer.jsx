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
		console.log(history);
	}, []);

	return (
		<div className="prayer-table">
			<h2 className="prayer_hisory">PRAYERS HISTORY</h2>

			<table className="weekly-prayer">
				<thead>
					<tr className="table-head">
						<th>Fajr</th>
						<th>Dhuhr</th>
						<th>Asr</th>
						<th>Magrib</th>
						<th>Isha</th>
                        <th>Mosque</th>
						<th>Day</th>
						<th>Edit</th>
						<th>Delete</th>
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
