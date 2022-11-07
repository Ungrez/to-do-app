import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import Stats from "../Stats/Stats";
import Settings from "../Settings/Settings";
import "../../../styles/Interface/Pages/General/Page.css";

const Page = () => {
  return (
    <div id="routes">
      <Routes>
        <Route path="/to-do-app" element={<Tasks />}></Route>
        <Route path="/to-do-app/stats" element={<Stats />}></Route>
        <Route path="/to-do-app/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
};

export default Page;
