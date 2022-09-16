import React, { useState } from "react";
const TaskList = () => {
  const [tasks, setTasks] = useState([
    { title: "Odkurzyć pokój", priority: "Low" },
    { title: "Obrać ziemniaki", priority: "Medium" },
    { title: "Iść na siłke", priority: "Low" },
    { title: "Posprzątać łazienkę", priority: "Low" },
    { title: "Wyrzucić śmieci", priority: "High" },
  ]);
  return <div id="task-list"></div>;
};

export default TaskList;
