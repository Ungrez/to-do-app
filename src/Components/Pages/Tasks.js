import React, { useState } from "react";
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

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [importance, setImportance] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setImportance(e.target.value);
  };

  return (
    <>
      <div id="input-field">
        <TextField
          id="outlined-basic"
          label="Add new task"
          variant="outlined"
          sx={{ minWidth: 550 }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Priority"
            value={importance}
            sx={{ width: 140 }}
            onChange={handleSelectChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <Button id="start" variant="contained">
          Add task
        </Button>
      </div>
      <TaskList />
    </>
  );
};

export default Tasks;
