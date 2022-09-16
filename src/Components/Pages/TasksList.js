import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/Interface/Pages/TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { title: "Odkurzyć pokój", priority: "Low" },
    { title: "Obrać ziemniaki", priority: "Medium" },
    { title: "Iść na siłke", priority: "Low" },
    { title: "Posprzątać łazienkę", priority: "Low" },
    { title: "Wyrzucić śmieci", priority: "High" },
  ]);

  const taskList = tasks.map((task, index) => (
    <li key={index}>
      <div id="task">{task.title}</div>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </li>
  ));

  return <div id="task-list">{taskList}</div>;
};

export default TaskList;
