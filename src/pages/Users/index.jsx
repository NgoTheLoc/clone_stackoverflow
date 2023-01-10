import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AllUsers from "./AllUsers";

const Users = () => {
  return (
    <>
      <Header />

      <div className="stack_index">
        <div className="stack_index_content">
          <Sidebar />

          <AllUsers />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Users;
