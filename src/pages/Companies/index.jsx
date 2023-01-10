import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import AllCompanies from "./AllCompanies";

const Companies = () => {
  return (
    <>
      <Header />

      <div className="stack_index">
        <div className="stack_index_content">
          <Sidebar />

          <AllCompanies />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Companies;
