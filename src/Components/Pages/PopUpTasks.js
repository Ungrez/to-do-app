import React from "react";
import "../../styles/Interface/Pages/PopUpTasks.css";
import CloseIcon from "@mui/icons-material/Close";

const PopUpTasks = ({ props }) => {
  const { delTasks, succTasks, popUp, setPopUp } = props;
  return (
    <div id="popUpTasks">
      <div id="showTasks">
        <h3>{popUp.type} Tasks</h3>
        <ul>
          {popUp.type === "Successed"
            ? succTasks.map((task) => (
                <li className="successedTasks" key={task[0].id}>
                  {task[0].title}
                </li>
              ))
            : delTasks.map((task) => (
                <li className="deletedTasks" key={task[0].id}>
                  {task[0].title}
                </li>
              ))}
        </ul>
      </div>
      <CloseIcon
        sx={{ fontSize: "50px" }}
        onClick={() => {
          setPopUp({ show: false, type: "" });
        }}
      ></CloseIcon>
    </div>
  );
};

export default PopUpTasks;
