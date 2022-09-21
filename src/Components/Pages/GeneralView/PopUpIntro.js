import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useSpring, animated } from "react-spring";
import woman from "../../../imgs/woman.jpg";
import fridge from "../../../imgs/fridge.jpg";
import "../../../styles/Interface/Pages/General/PopUpIntro.css";

const PopUpIntro = ({ props }) => {
  const [nextSlide, setNextSlide] = useState(false);
  const [anim, setAnim] = useSpring(() => ({
    from: { right: "-150%", top: "50%" },
    to: { right: "50%", top: "50%" },
  }));

  const changeContext = () => {
    setAnim.start({ from: { right: "50%" }, to: { right: "250%" } });
    setTimeout(() => {
      setAnim.start({ from: { right: "50%" }, to: { right: "150%" } });
      setNextSlide(true);
      setAnim.stop();
    }, 600);
  };

  const startMain = () => {
    setAnim.start({ from: { top: "50%" }, to: { top: "250%" } });
    setTimeout(() => {
      props.setNextSlide(true);
      setAnim.stop();
    }, 1200);
  };

  return (
    <>
      {nextSlide ? (
        <animated.div id="popUpFirst" style={anim}>
          <div id="img-container">
            <img src={woman} alt="woman" />
            <img src={fridge} alt="empty_fridge" />
          </div>
          <h3>Don't let important things fall out of your head</h3>
          <h4>
            Plan your day and complete the added sentences with a simple app
          </h4>
          <Button onClick={startMain} id="start" variant="contained">
            Let's start !
          </Button>
        </animated.div>
      ) : (
        <animated.div id="popUpFirst" style={anim}>
          <h1>Hello there !</h1>
          <h2>
            This app is created to help you don't forget any important things
          </h2>
          <Button onClick={changeContext} variant="contained">
            Continue
          </Button>
        </animated.div>
      )}
    </>
  );
};

export default PopUpIntro;
