import React from "react";
import "../../../styles/Interface/Pages/General/NavBar.css";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="menu">
      <h3>ToDoApp</h3>
      <NavLink to="/to-do-app">
        <PlaylistAddCheckIcon />
        <h4>Tasks</h4>
      </NavLink>
      <NavLink to="/stats">
        <BarChartIcon />
        <h4>Stats</h4>
      </NavLink>
      <NavLink to="/settings">
        <SettingsIcon />
        <h4>Settings</h4>
      </NavLink>
    </nav>
  );
};

export default NavBar;
