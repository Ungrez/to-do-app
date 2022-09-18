import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import PopUpTasks from "./PopUpTasks";
import Box from "@mui/material/Box";
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "../../styles/Interface/Pages/TaskList.css";

const TaskList = ({ props }) => {
  const [popUp, setPopUp] = useState({ show: false, type: "" });
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPriority, setNewPriority] = useState("");

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

      <Button onClick={() => setOpen(true)}>Edit</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Make your changes</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 5, width: 1000 }}>
              <TextField
                id="outlined-basic"
                label="Edit task"
                variant="outlined"
                value={newTitle}
                onChange={(e) => {
                  console.log(task.id);
                  setNewTitle(e.target.value);
                }}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Priority
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Priority"
                value={newPriority}
                sx={{ width: 100 }}
                onChange={(e) => {
                  setNewPriority(e.target.value);
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setNewTitle("");
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(tasks) => {
              console.log(task);
              if (newTitle) {
                dispatch({
                  type: "EDIT_TASK",
                  id: task.id,
                  newTitle,
                  newPriority,
                });
                setNewTitle("");
                setNewPriority("");
                setOpen(false);
              }
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
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
          <Button onClick={() => setPopUp({ show: true, type: "Successed" })}>
            Successed tasks {succTasks.length}
          </Button>
          <Button onClick={() => setPopUp({ show: true, type: "Deleted" })}>
            Deleted tasks {delTasks.length}
          </Button>
        </ButtonGroup>
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
