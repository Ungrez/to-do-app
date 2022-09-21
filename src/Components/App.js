import React, { useState } from "react";
import "../App.css";
import MainApp from "../Components/Pages/GeneralView/MainApp";
import PopUpIntro from "../Components/Pages/GeneralView/PopUpIntro";

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
