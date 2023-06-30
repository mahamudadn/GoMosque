import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeeklyHistory from "../WeeklyHistory/WeeklyHistory";
import "./WeeklyPrayer.css";

function weeklyPrayer() {
	const history = useSelector((store) => store.history);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "FETCH_HISTORY" });
		console.log(history);
	}, []);

	// const daysOfTheWeek = [
	// 	"Monday",
	// 	"Tuesday",
	// 	"Wednesday",
	// 	"Thursday",
	// 	"Friday",
	// 	"Saturday",
	// 	"Sunday",
	// ];

	return (
		<>
			<h2>DIALY PRAYERS</h2>

			<table>
				<thead>
					<tr>
						<th>Fajr</th>
						<th>Dhuhr</th>
						<th>Asr</th>
						<th>Magrib</th>
						<th>Isha</th>
						<th>Day</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>

				<tbody>
					{/* <PrayerForm />
                    <p>All of the prayers can be seen here.</p> */}
					{history?.map((prayer) => (
						<WeeklyHistory key={prayer.id} prayer={prayer} />
					))}
				</tbody>
			</table>
		</>
	);
}

export default weeklyPrayer;
