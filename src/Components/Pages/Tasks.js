import React, { useEffect, useReducer, useState } from "react";
import {
  FormControl,
  InputLabel,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import "../../styles/Interface/Pages/Tasks.css";
import TaskList from "./TasksList";
import { reducer } from "../TasksReducer";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [importance, setImportance] = useState("");

  const [delTasks, setDelTasks] = useState(() => {
    const localData = localStorage.getItem("delTasks");
    return localData ? JSON.parse(localData) : [];
  });
  const [succTasks, setSuccTasks] = useState(() => {
    const localData = localStorage.getItem("succTasks");
    return localData ? JSON.parse(localData) : [];
  });

  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("succTasks", JSON.stringify(succTasks));
    localStorage.setItem("delTasks", JSON.stringify(delTasks));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div id="input-field">
        <TextField
          id="outlined-basic"
          label="Add new task"
          variant="outlined"
          sx={{ minWidth: 650 }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue) {
              dispatch({ type: "ADD_TASK", inputValue, importance });
              setInputValue("");
            }
          }}
        />
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Priority"
            value={importance}
            sx={{ width: 100 }}
            onChange={(e) => {
              setImportance(e.target.value);
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={() => {
            if (inputValue) {
              dispatch({ type: "ADD_TASK", inputValue, importance });
              setInputValue("");
            }
          }}
          id="start"
          variant="contained"
        >
          Add task
        </Button>
      </div>
      <TaskList
        props={{
          tasks,
          dispatch,
          setDelTasks,
          delTasks,
          setSuccTasks,
          succTasks,
        }}
      />
    </>
  );
};

export default Tasks;
