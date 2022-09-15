import React from "react";
import "../styles/MainApp.css";
import NavBar from "./NavBar";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";

const MainApp = () => {
  return (
    <main id="container">
      <Router>
        <NavBar />
        <Page />
      </Router>
    </main>
  );
};

export default MainApp;
