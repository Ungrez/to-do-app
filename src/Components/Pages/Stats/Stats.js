import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../../../styles/Interface/Pages/Stats/Stats.css";
import { date } from "../Stats/Data";

const Stats = () => {
  const defaultDays = date(new Date(), 7);
  const successedTasks = JSON.parse(localStorage.getItem("succTasks"));
  const deletedTasks = JSON.parse(localStorage.getItem("delTasks"));
  const daysList = defaultDays.map((day) => new Date(day).getDate());

  const dayContains = daysList.map((day) => {
    return successedTasks.filter((obj) => obj.succDay === day);
  });
  const dataDays = dayContains.map((gut) => gut.length);

  const userData = {
    labels: daysList,
    datasets: [
      {
        label: "Successed Tasks",
        data: dataDays,
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
