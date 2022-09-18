import React from "react";
const Settings = () => {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("delTasks");
        }}
      >
        Czyść deleted
      </button>
    </div>
  );
};

export default Settings;
