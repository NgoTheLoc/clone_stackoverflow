import React from "react";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="border rounded p-2 d-flex">
        <div className="me-3 d-flex justify-content-center align-items-center">
          <Link to="">
            <Avatar alt="" src="" />
          </Link>
        </div>
        <div className="content_user w-100">
          <Link to="">name user</Link>
          <p>locations</p>
          <p className="fw-bold">number</p>
          <div>
            <span>langues</span>,<span>langes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
