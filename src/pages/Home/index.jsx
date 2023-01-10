import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TopQuestions from "./TopQuestions";

const Home = () => {
  return (
    <>
      <Header />

      <div className="stack_index">
        <div className="stack_index_content">
          <Sidebar />

          <TopQuestions />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
