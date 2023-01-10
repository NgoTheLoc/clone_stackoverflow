import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div className="all_questions">
      <div className="all_questions_container">
        <div className="all_questions_left">
          <div className="all_options">
            <div className="all_option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all_option">
              <p>0</p>
              <span>answer</span>
            </div>
            <div className="all_option">
              <p>0</p>
              <span>views</span>
            </div>
          </div>

          <div className="question_answer">
            <Link to=":123">this question title</Link>
            <div style={{ marginBottom: "15px" }}>
              I have a personal server connected to my local network, and
              recently wanted to set up an SFTP-Server on it for some media
              transfer. When I try to connect to it however, it asks for my
              password, but
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="tags">
                <span className="question_tags">react</span>
                <span className="question_tags">node</span>
                <span className="question_tags">java</span>
              </div>

              <div className="author">
                <div className="author_detail">
                  <Avatar />
                  <p>Username</p>
                </div>
                <small>time</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
