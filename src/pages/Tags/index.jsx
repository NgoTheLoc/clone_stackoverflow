import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AllTags from "./AllTags";

const Tags = () => {
  return (
    <>
      <Header />

      <div className="stack_index">
        <div className="stack_index_content">
          <Sidebar />

          <AllTags />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tags;
