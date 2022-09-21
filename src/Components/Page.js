import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "./Pages/Tasks";
import Stats from "./Pages/Stats/Stats";
import ShopingList from "./Pages/ShopingList";
import Settings from "./Pages/Settings";
import "../styles/Interface/Page.css";

const Page = () => {
  return (
    <div id="routes">
      <Routes>
        <Route path="/to-do-app" element={<Tasks />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/shoping-list" element={<ShopingList />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
};

export default Page;
