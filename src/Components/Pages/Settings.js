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
          variant="contained"
          size="small"
          color="info"
        >
          Clear localStorage
        </Button>
        <h5>Clear all tasks from localStorage</h5>
      </div>
      <div className="placeButtons">
        <Button
          onClick={() => localStorage.removeItem("delTasks")}
          variant="contained"
          size="small"
          color="info"
        >
          Clear deleted tasks
        </Button>
        <h5>Clear all deleted tasks from app</h5>
      </div>
      <div className="placeButtons">
        <Button
          onClick={() => localStorage.removeItem("succTasks")}
          variant="contained"
          size="small"
          color="info"
        >
          Clear successed tasks
        </Button>
        <h5>Clear all successed tasks from app</h5>
      </div>
    </div>
  );
};

export default Settings;
