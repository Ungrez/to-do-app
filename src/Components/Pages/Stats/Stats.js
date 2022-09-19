import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../../../styles/Interface/Pages/Stats/Stats.css";

const Stats = () => {
  const [data] = useState(() => {
    const localData = localStorage.getItem("dateTask");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    console.log("Zamontowany");
    console.log(data);
  }, [data]);
  const userData = {
    labels: data.map(),
    datasets: [
      {
        label: "Users Tasks",
        data: data.map((d) => d.task),
      },
    ],
  };

  return (
    <div id="stats">
      <Bar data={userData} />
    </div>
  );
};

export default Stats;
