import React, { useState } from "react";
import "../App.css";
import MainApp from "./Pages/GeneralView/MainApp";
import PopUpIntro from "./Pages/GeneralView/PopUpIntro";

function App() {
  const [nextSlide, setNextSlide] = useState(false);
  return (
    <>
      {nextSlide ? (
        <MainApp />
      ) : (
        <PopUpIntro props={{ nextSlide, setNextSlide }} />
      )}
    </>
  );
}

export default App;
