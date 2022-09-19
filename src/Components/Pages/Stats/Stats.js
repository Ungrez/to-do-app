import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "../../../styles/Interface/Pages/Stats/Stats.css";

const Stats = () => {
  const [data] = useState(() => {
    const localData = localStorage.getItem("dateTask");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    console.log("Zamontowany");
    console.log(data);
  }, [data]);

  return (
    <div id="stats">
      <Doughnut data={data} />
    </div>
  );
};

export default Stats;
