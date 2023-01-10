import React from "react";
import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import User from "./User";

const listFilter = [
  {
    value: 1,
    title: "Reputation",
  },
  {
    value: 2,
    title: "New users",
  },
  {
    value: 3,
    title: "Voters",
  },
  {
    value: 4,
    title: "Editors",
  },
  {
    value: 5,
    title: "Moderators",
  },
];

const AllUsers = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top d-block ">
          <h2 className="mb-3 fw-bold">Users</h2>
        </div>

        <div className="main_desc">
          <div className="header_search_container w-25">
            <SearchIcon />
            <input type="text" placeholder="Filter by user" />
          </div>

          <div className="main_filter">
            <div className="main_tabs">
              {listFilter.map((item) => (
                <div className="main_tab" key={item.value}>
                  <NavLink>{item.title}</NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main_tags container">
          <div className="row g-2 mt-2 mb-2">
            <User />
            <User />
            <User />
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
