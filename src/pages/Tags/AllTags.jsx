import React from "react";
import { NavLink } from "react-router-dom";
import Tag from "./Tag";

import SearchIcon from "@mui/icons-material/Search";

const listFilter = [
  {
    value: 1,
    title: "Popular",
  },
  {
    value: 2,
    title: "Name",
  },
  {
    value: 3,
    title: "New",
  },
];

const AllTags = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top d-block ">
          <h2 className="mb-3 fw-bold">Tags</h2>
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
        </div>

        <div className="main_desc">
          <div className="header_search_container w-25">
            <SearchIcon />
            <input type="text" placeholder="Filter by tag name" />
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
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTags;
