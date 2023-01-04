import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Avatar } from "@mui/material";


const DetailQuestion = () => {
  const [isComment, setIsComment] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="view_question">
      <div className="view_question_container">
        <div className="view_top">
          <h2>This is a question title</h2>
          <button className="btn" onClick={() => navigate("/question/ask")}>
            Ask Question
          </button>
        </div>

        <div className="view_desc">
          <div className="info">
            <p>timestamp</p>
            <p>
              Active <span>today</span>
            </p>
            <p>
              Viewed <span>41 times</span>
            </p>
          </div>
        </div>

        <div className="all_questions">
          <div className="all_questions_container">
            <div className="all_questions_left">
              <div className="all_options">
                <ArrowDropUpIcon className="arrow-up" />
                <p className="view">0</p>
                <ArrowDropDownIcon className="arrow-down" />
                <BookmarkBorderIcon className="icon" />
                <HistoryIcon className="icon" />
              </div>
            </div>

            <div className="question_answer">
              <p>this is the answer</p>
              <div className="answer_manipulation">
                <div className="action">
                  <p>Share</p>
                  <p>Edit</p>
                  <p onClick={() => setIsFollowing(!isFollowing)}>
                    {isFollowing ? "Following" : "Follow"}
                  </p>
                </div>
                <div className="author">
                  <small>asked "timestamp"</small>
                  <div className="author_detail">
                    <Avatar />
                    <p>Author name</p>
                  </div>
                </div>
              </div>

              <div className="comments">
                <div className="comment">
                  <p>
                    this is comment - <span>username</span>
                    <small>timestamp</small>
                  </p>
                </div>
                <p onClick={() => setIsComment(!isComment)} className="btn-add">
                  Add a comment{" "}
                </p>
                {isComment && (
                  <div className="title">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Add your comment"
                    ></textarea>
                    <button className="btn">Add acomment</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="all_questions">
          <p style={{ display: "block" }}>No. of answer</p>
          <div className="all_questions_container">
            <div className="all_questions_left">
              <div className="all_options">
                <ArrowDropUpIcon className="arrow-up" />
                <p className="view">0</p>
                <ArrowDropDownIcon className="arrow-down" />
                <BookmarkBorderIcon className="icon" />
                <HistoryIcon className="icon" />
              </div>
            </div>

            <div className="question_answer">
              <p>this is the answer</p>
              <div className="answer_manipulation">
                <div className="action">
                  <p>Share</p>
                  <p>Edit</p>
                  <p onClick={() => setIsFollowing(!isFollowing)}>
                    {isFollowing ? "Following" : "Follow"}
                  </p>
                </div>
                <div className="author">
                  <small>asked "timestamp"</small>
                  <div className="author_detail">
                    <Avatar />
                    <p>Author name</p>
                  </div>
                </div>
              </div>

              <div className="comments">
                <div className="comment">
                  <p>
                    this is comment - <span>username</span>
                    <small>timestamp</small>
                  </p>
                </div>
                <p onClick={() => setIsComment(!isComment)} className="btn-add">
                  Add a comment{" "}
                </p>
                {isComment && (
                  <div className="title">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Add your comment"
                    ></textarea>
                    <button className="btn">Add acomment</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="answer">
        <h3>Your answer</h3>
        <ReactQuill className="react-quill" theme="snow" />

        <button className="btn">Post Your answer</button>
      </div>
    </div>
  );
};

export default DetailQuestion;
