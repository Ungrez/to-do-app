export const FetchData = (props) => {
  let data = new Date();
  let day = data.getDate();
  let year = data.getFullYear();
  console.log(day, year);
  console.log(props);
  localStorage.setItem("date", JSON.stringify(data));
};
