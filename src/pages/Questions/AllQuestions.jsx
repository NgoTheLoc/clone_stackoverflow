import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FilterList } from "@mui/icons-material";

import Question from "./Question";

const listFilter = [
  {
    value: 1,
    title: "Newest",
  },
  {
    value: 2,
    title: "Active",
  },
  {
    value: 3,
    title: "Bountied",
  },
  {
    value: 4,
    title: "Unanswered",
  },
];

const AllQuestions = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top">
          <h2 className="fw-bold">All Questions</h2>
          <Link to="ask">
            <button className="btn btn-medium btn-primary">Ask Question</button>
          </Link>
        </div>

        <div className="main_desc">
          <p>All description</p>

          <div className="main_filter">
            <div className="main_tabs">
              {listFilter.map((item) => (
                <div className="main_tab" key={item.value}>
                  <NavLink>{item.title}</NavLink>
                </div>
              ))}
            </div>

            <div className="main_filter_item">
              <FilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="main_questions">
          <div className="question">
            <Question />
            <Question />
            <Question />
            <Question />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
