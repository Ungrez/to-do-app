export const date = (current, daysNumbers) => {
  let week = [];

  current.setDate(current.getDate() - 6);

  for (var i = 0; i < daysNumbers; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  //   console.log(week);

  return week;
};
