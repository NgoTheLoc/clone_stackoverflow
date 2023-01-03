import React from "react";
import Sidebar from "../Sidebar";
import ViewQuestion from "./index";

const MainQuestion = () => {
  return (
    <div className="stack_index">
      <div className="stack_index_content">
        <Sidebar />
        <ViewQuestion />
      </div>
    </div>
  );
};

export default MainQuestion;
