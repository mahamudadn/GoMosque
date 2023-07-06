import React from "react";
import PrayerChart from "../PrayerChart/PrayerChart";

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
