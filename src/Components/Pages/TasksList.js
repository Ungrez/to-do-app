import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/Interface/Pages/TaskList.css";

const TaskList = ({ props }) => {
  const tasks = props.tasks;

  const taskList = tasks.map((task, index) => (
    <li key={index}>
      <div id="task">{task.title}</div>
      <div className={task.priority} id="priority">
        {task.priority === "" ? "None" : task.priority}
      </div>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </li>
  ));

  return (
    <>
      <div id="table">
        <h4>Tasks</h4>
        <h4>Priority</h4>
      </div>
      <div id="task-list">{taskList}</div>
    </>
  );
};

export default TaskList;
