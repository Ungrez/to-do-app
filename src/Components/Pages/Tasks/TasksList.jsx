import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import PopUpTasks from "./PopUpTasks";
import "../../../styles/Interface/Pages/Tasks/TaskList.css";

const TaskList = ({ props }) => {
  const [popUp, setPopUp] = useState({ show: false, type: "" });

  const tasks = props.tasks;
  const { dispatch, setDelTasks, delTasks, succTasks, setSuccTasks } = props;

  const taskList = tasks.map((task, index) => (
    <li key={index}>
      <div id="descriptions-task">
        <div id="task">{task.title}</div>
        <div className={task.priority} id="priority">
          {task.priority === "" ? "None" : task.priority}
        </div>
      </div>
      <div id="buttons-container">
        <Button
          onClick={() => {
            dispatch({
              type: "SUCCESS_TASK",
              id: task.id,
              setSuccTasks,
              succTasks,
            });
          }}
          variant="contained"
          color="success"
        >
          Success
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              id: task.id,
              setDelTasks,
              delTasks,
            })
          }
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </li>
  ));

  return (
    <>
      <div id="table">
        <div id="about-task">
          <h4>Active tasks</h4>
          <h4>Priority</h4>
        </div>
        <div id="buttons-group">
          <ButtonGroup
            sx={{ marginLeft: "auto" }}
            variant="text"
            aria-label="text button group"
          >
            <Button onClick={() => setPopUp({ show: true, type: "Successed" })}>
              Successed tasks {succTasks.length}
            </Button>
            <Button onClick={() => setPopUp({ show: true, type: "Deleted" })}>
              Deleted tasks {delTasks.length}
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div id="task-list">
        {taskList}
        {popUp.show ? (
          <PopUpTasks props={{ setPopUp, popUp, delTasks, succTasks }} />
        ) : null}
      </div>
    </>
  );
};

export default TaskList;
