import React from "react";
import { Outlet, useOutlet, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import AllQuestions from "./AllQuestions";

const Questions = () => {
  const outlet = useOutlet();
  const { id } = useParams();

  return (
    <>
      <Header />

      {outlet?.props.children.props.match.pathname !== "/question/ask" ? (
        <div className="stack_index">
          <div className="stack_index_content">
            <Sidebar />
            {outlet?.props.children.props.match.pathname ===
            `/question/${id}` ? (
              <Outlet />
            ) : (
              <AllQuestions />
            )}
          </div>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
};

export default Questions;
