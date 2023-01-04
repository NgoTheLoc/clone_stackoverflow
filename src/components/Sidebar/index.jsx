import React from "react";
import { NavLink } from "react-router-dom";

import { Public, Stars } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_options">
          <div className="sidebar_option">
            <NavLink to="" className="">
              Home
            </NavLink>
          </div>
          <div className="sidebar_option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link_tag">
                <Public />
                <NavLink to="/">Question</NavLink>
              </div>
              <div className="link_tag">
                <NavLink to="">Tags</NavLink>
              </div>
              <div className="link_tag">
                <NavLink to="">Users</NavLink>
              </div>
              <div className="link_tag">
                <NavLink to="">Companies</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar_option">
          <p>COLLECTIVES</p>
          <div className="link">
            <div className="link_tag">
              <Stars />
              <NavLink to="">Explore Collectives</NavLink>
            </div>
          </div>
        </div>
        <div className="sidebar_option">
          <p>TEAMS</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
