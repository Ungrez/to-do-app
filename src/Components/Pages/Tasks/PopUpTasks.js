import React from "react";
import "../../../styles/Interface/Pages/Tasks/PopUpTasks.css";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "react-spring";

const PopUpTasks = ({ props }) => {
  const { delTasks, succTasks, popUp, setPopUp } = props;
  const [showTasksList, setTasksList] = useSpring(() => ({
    from: { opacity: "0", top: "0" },
    to: { opacity: "1", top: "50%" },
  }));

  return (
    <animated.div style={showTasksList} id="popUpTasks">
      <div id="showTasks">
        <h3>{popUp.type} Tasks</h3>
        <ul>
          {popUp.type === "Successed"
            ? succTasks.map((task) => (
                <li className="successedTasks" key={task.id}>
                  {task.title}
                </li>
              ))
            : delTasks.map((task) => (
                <li className="deletedTasks" key={task.id}>
                  {task.title}
                </li>
              ))}
        </ul>
      </div>
      <CloseIcon
        sx={{ fontSize: "50px" }}
        onClick={() => {
          setTasksList.start({
            to: { opacity: "0", top: "0" },
            from: { opacity: "1", top: "50%" },
          });
          setTimeout(() => {
            setPopUp(false);
          }, 700);
        }}
      ></CloseIcon>
    </animated.div>
  );
};

export default PopUpTasks;
