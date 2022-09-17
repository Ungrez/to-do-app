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
import { v4 as uuidv4 } from "uuid";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [importance, setImportance] = useState("");

  const reducer = (tasks) => {
    return [
      ...tasks,
      {
        title: inputValue,
        priority: importance,
        id: uuidv4(),
      },
    ];
  };

  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setImportance(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue) return dispatch();
  };

  return (
    <>
      <div id="input-field">
        <TextField
          id="outlined-basic"
          label="Add new task"
          variant="outlined"
          sx={{ minWidth: 650 }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Priority"
            value={importance}
            sx={{ width: 100 }}
            onChange={handleSelectChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleAddTask} id="start" variant="contained">
          Add task
        </Button>
      </div>
      <TaskList props={{ tasks }} />
    </>
  );
};

export default Tasks;
