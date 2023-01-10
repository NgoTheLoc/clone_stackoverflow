import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FilterList } from "@mui/icons-material";

import Question from "./Question";

const listFilter = [
  {
    value: 1,
    title: "Interesting",
  },
  {
    value: 2,
    title: "Bountied",
  },
  {
    value: 3,
    title: "Hot",
  },
  {
    value: 4,
    title: "Week",
  },
  {
    value: 5,
    title: "Month",
  },
];

const TopQuestions = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top">
          <h2 className="fw-bold">Top Questions</h2>
          <Link to="ask">
            <button className="btn btn-medium btn-primary">Ask Question</button>
          </Link>
        </div>

        <div className="main_desc ">
          <div className="main_tabs tabs">
            {listFilter.map((item) => (
              <div className="main_tab" key={item.value}>
                <NavLink>{item.title}</NavLink>
              </div>
            ))}
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

export default TopQuestions;
