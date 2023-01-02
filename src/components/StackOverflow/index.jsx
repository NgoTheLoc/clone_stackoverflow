import React from "react";
import Sidebar from "../Sidebar";
import Main from "../Main";

const StackOverflow = () => {
  return (
    <div className="stack_index">
      <div className="stack_index_content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default StackOverflow;
