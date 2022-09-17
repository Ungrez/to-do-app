import React from "react";
import { v4 as uuidv4 } from "uuid";

export const reducer = (tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        { title: action.inputValue, priority: action.importance, id: uuidv4() },
      ];
    case "DELETE_TASK":
      const delTask = tasks.filter((task) => task.id === action.id);
      action.setDelTasks([...action.delTasks, delTask]);
      return tasks.filter((task) => task.id !== action.id);
    case "SUCCESS_TASK":
      const succTask = tasks.filter((task) => task.id === action.id);
      action.setSuccTasks([...action.succTasks, succTask]);
      return tasks.filter((task) => task.id !== action.id);
    default:
      return tasks;
  }
};
