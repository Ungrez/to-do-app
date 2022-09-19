import { v4 as uuidv4 } from "uuid";

export const reducer = (tasks, action) => {
  let data = new Date();
  let day = data.getDate();
  let year = data.getFullYear();

  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          title: action.inputValue,
          priority: action.importance,
          id: uuidv4(),
          addedDay: day,
          addedYear: year,
        },
      ];
    case "DELETE_TASK":
      const delTask = tasks.filter((task) => task.id === action.id);

      action.setDelTasks([...action.delTasks, delTask]);

      return tasks.filter((task) => task.id !== action.id);

    case "SUCCESS_TASK":
      const succTask = tasks.filter((task) => task.id === action.id);
      action.setSuccTasks([...action.succTasks, ...succTask]);

      return tasks.filter((task) => task.id !== action.id);
    case "EDIT_TASK":
      const newData = tasks.filter((task) => task.id !== action.id);
      const updatedData = [
        ...newData,
        { title: action.newTitle, priority: action.newPriority, id: action.id },
      ];
      return updatedData;
    default:
      return tasks;
  }
};
