import React from "react";
import Button from "@mui/material/Button";
const Tasks = () => {
  return (
    <div id="input-field">
      <input type="text" />
      <select>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <Button id="start" variant="contained">
        Add task
      </Button>
    </div>
  );
};

export default Tasks;
