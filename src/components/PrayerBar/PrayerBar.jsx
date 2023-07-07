import React from "react";
import { useHistory } from "react-router-dom";
import PrayerChart from "../PrayerChart/PrayerChart";




import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function PrayerBar() {
	
	const data = {
		labels: ["Mon", "Tues", "Wend", "Thur", "fri", "sat", "sun"],
		datasets: [
			{
				label: "5",
				label: "Five Prayers",
				data: [3, 4, 5, 2, 1, 3, 4],
				backgroundColor: "green",
				borderColor: "black",
			
			},
		],
	};
	const options = {};
	return (
		<div className="chart-container">
			<h2 style={{ textAlign: "center", padding: "40px"}}>Prayer Chart</h2>
			<Bar 
			style={{padding: "20px", width:"70%", textAlign:"center", margin:  'auto',}}
			
			data={data} options={options}></Bar>
		</div>
	);
}

export default PrayerBar;
