import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../../../styles/Interface/Pages/Stats/Stats.css";
import { date } from "../Stats/Data";
import { Doughnut } from "react-chartjs-2";

const Stats = () => {
  const defaultDays = date(new Date(), 7);
  const successedTasks = JSON.parse(localStorage.getItem("succTasks"));
  const deletedTasks = JSON.parse(localStorage.getItem("delTasks"));
  const activeTasks = JSON.parse(localStorage.getItem("tasks"));
  const daysList = defaultDays.map((day) => new Date(day).getDate());

  const dayContains = daysList.map((day) => {
    return successedTasks.filter((obj) => obj.succDay === day);
  });
  const dataDays = dayContains.map((gut) => gut.length);

  const succData = {
    labels: daysList,
    datasets: [
      {
        label: "Successed Tasks",
        data: dataDays,
        backgroundColor: ["rgba(79, 246, 77, 0.7)"],
      },
    ],
  };
  const allData = {
    labels: ["Deleted Tasks", "Successed Tasks", "Active Tasks"],
    datasets: [
      {
        label: "General chart",
        data: [successedTasks.length, deletedTasks.length, activeTasks.length],
        backgroundColor: [
          "rgba(249, 0, 0, 0.7)",
          "rgba(79, 246, 77, 0.7)",
          "rgba(0, 133, 250, 0.7)",
        ],
      },
    ],
  };

  return (
    <div id="stats">
      <div id="succChart">
        <Bar data={succData} />
      </div>
      <div id="generalChart">
        <Doughnut data={allData} />
      </div>
      <div id="about-tasks">
        <div className="task-number">
          <h4>Active tasks</h4>
          <h2>{activeTasks.length}</h2>
        </div>
        <div className="task-number">
          <h4>Successed tasks</h4>
          <h2>{successedTasks.length}</h2>
        </div>
        <div className="task-number">
          <h4>Deleted tasks</h4>
          <h2>{deletedTasks.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;
