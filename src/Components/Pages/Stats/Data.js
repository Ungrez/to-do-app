import { ActionTypes } from "@mui/base";

export const FetchData = (action) => {
  const storage = localStorage.getItem("dateTask");
  let data = new Date();
  let day = data.getDate();
  let year = data.getFullYear();
  let pushDate = { task: 1, day: day, year: year };
  const allDatas = JSON.parse(localStorage.getItem("dateTask"));

  if (storage) {
    return localStorage.setItem(
      "dateTask",
      JSON.stringify([...allDatas, pushDate])
    );
  } else return localStorage.setItem("dateTask", JSON.stringify([pushDate]));
};
