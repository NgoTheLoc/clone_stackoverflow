import React from "react";
import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import Company from "./Company";

const AllCompanies = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top d-block ">
          <h2 className="mb-3 fw-bold">Companies</h2>
          <p>Learn about what it's like to work at companies</p>
        </div>

        <div className="main_desc">
          <div className="header_search_container w-25">
            <SearchIcon />
            <input type="text" placeholder="Filter by all companies" />
          </div>
        </div>

        <div className="main_tags container">
          <div className="row g-2 mt-2 mb-2">
            <Company />
            <Company />
            <Company />
            <Company />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCompanies;
