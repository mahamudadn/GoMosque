import React from "react";
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


const HistoryBar = () => {
  // Define the data for the 7-day history
  const historyData = [10, 8, 6, 9, 7, 5, 11];

  return (
    <div>
      <h2>7-Day History</h2>
      <PrayerChart data={historyData} />
    </div>
  );
};

export default HistoryBar;
