import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/Interface/Pages/TaskList.css";

const TaskList = ({ props }) => {
  const tasks = props.tasks;
  const { dispatch, setDelTasks, delTasks, succTasks, setSuccTasks } = props;

  const taskList = tasks.map((task, index) => (
    <li key={index}>
      <div id="task">{task.title}</div>
      <div className={task.priority} id="priority">
        {task.priority === "" ? "None" : task.priority}
      </div>
      <Button
        onClick={() =>
          dispatch({
            type: "SUCCESS_TASK",
            id: task.id,
            setSuccTasks,
            succTasks,
          })
        }
        variant="contained"
        color="success"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: "DELETE_TASK", id: task.id, setDelTasks, delTasks })
        }
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  ));

  return (
    <>
      <div id="table">
        <h4>Active tasks</h4>
        <h4>Priority</h4>
        <ButtonGroup
          sx={{ marginLeft: "auto" }}
          variant="text"
          aria-label="text button group"
        >
          <Button onClick={() => console.log(tasks)}>Successed tasks</Button>
          <Button>Deleted tasks</Button>
        </ButtonGroup>
      </div>
      <div id="task-list">{taskList}</div>
    </>
  );
};

export default TaskList;
