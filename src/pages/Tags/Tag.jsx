import React from "react";

const Tag = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="border rounded p-2">
        <div className="mb-3">
          <button type="button" class="btn btn-super-small btn-secondary">
            title tag
          </button>
        </div>
        <div className="mb-3 tag_content">
          For questions about programming in ECMAScript (JavaScript/JS) and its
          different dialects/implementations (except for ActionScript). Keep in
          min
        </div>
        <div className="d-flex justify-content-between flex-md-row flex-column ">
          <div>
            <span className="d-block">12312</span> questions
          </div>
          <div>timestamp</div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
