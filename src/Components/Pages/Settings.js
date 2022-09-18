import React from "react";
import Button from "@mui/material/Button";
import "../../styles/Interface/Pages/Settings.css";
const Settings = () => {
  return (
    <div id="settings">
      <h2>Settings</h2>
      <div className="placeButtons">
        <Button
          onClick={() => localStorage.clear()}
          variant="outlined"
          size="small"
        >
          Clear localStorage
        </Button>
        <h5>Clear all tasks from localStorage</h5>
      </div>
      <div className="placeButtons">
        <Button
          onClick={() => localStorage.removeItem("delTasks")}
          variant="outlined"
          size="small"
        >
          Clear deleted tasks
        </Button>
        <h5>Clear all deleted tasks from app</h5>
      </div>
      <div className="placeButtons">
        <Button
          onClick={() => localStorage.removeItem("succTasks")}
          variant="outlined"
          size="small"
        >
          Clear successed tasks
        </Button>
        <h5>Clear all successed tasks from app</h5>
      </div>
    </div>
  );
};

export default Settings;
