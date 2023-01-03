import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component";

const AddQuestions = () => {
  return (
    <div className="add_question">
      <div className="add_question_container">
        <div className="question_head">
          <h1>Ask a public question</h1>
        </div>

        <div className="question_content">
          <div className="question_options">
            <div className="question_option">
              <div className="title">
                <h6>Title</h6>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person.
                </small>
                <input type="text" placeholder="Add question title" />
              </div>
            </div>
            <div className="question_option">
              <h6>What are the details of your problem?</h6>
              <small>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </small>
              <ReactQuill className="react-quill" theme="snow" />
            </div>
            <div className="question_option">
              <h6>Tags</h6>
              <small>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </small>
              {/* <TagsInput name="tags" placeHolder="Press Enter to add new tag" /> */}
            </div>
          </div>
        </div>

        <button className="btn">Add your question</button>
      </div>
    </div>
  );
};

export default AddQuestions;
