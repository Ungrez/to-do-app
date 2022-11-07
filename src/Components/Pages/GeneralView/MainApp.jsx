import React from "react";
import "../../../styles/Interface/Pages/General/MainApp.css";
import NavBar from "./NavBar";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const MainApp = () => {
  const [show, setShow] = useSpring(() => ({
    from: { opacity: "0", top: "0" },
    to: { opacity: "1", top: "50%" },
  }));
  return (
    <animated.main id="container" style={show}>
      <Router>
        <NavBar />
        <Page />
      </Router>
    </animated.main>
  );
};

export default MainApp;
