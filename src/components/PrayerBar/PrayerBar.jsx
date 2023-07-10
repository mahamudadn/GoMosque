import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import PrayerChart from "../PrayerChart/PrayerChart";




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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);



function PrayerBar() {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch({type: 'FETCH_WEEKLY'});
	}, []);
	const weekly = useSelector(store => store.weeklyReducer);
	console.log('weekly reducer', weekly)

	const days = weekly?.map(week => week.mosque_prayer);
console.log(days);

	
	




	const data = {
		labels: weekly&&[`${weekly[0]?.date}`, `${weekly[1]?.date}`, `${weekly[2]?.date}`, `${weekly[3]?.date}`, `${weekly[4]?.date}`, `${weekly[5]?.date}`, `${weekly[6]?.date}`],
		datasets: [
			{
				label: "5.0",
				label: "Five Prayers",
				data: days,
				backgroundColor: ["green", "blue", "red", "yellow", "orange", "purple", "pink"],
				borderColor: "black",
			
			},
		],
	};
	const options = {};
	
	return (
		<div className="chart-container">
			<h2 style={{ textAlign: "center", padding: "40px"}}>Prayer Chart</h2>
			<Bar 
			style={{padding: "10px", width:"70%", textAlign:"center", margin:  'auto',}}
			
			data={data} options={options}></Bar>
		</div>
	);
}

export default PrayerBar;
