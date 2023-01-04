import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HelpIcon from "@mui/icons-material/Help";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import { Avatar } from "@mui/material";

const Header = () => {
  const [isLog, setIsLog] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="header_container">
        <div className="header_left">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
          </Link>

          <Link to="/">Products</Link>
        </div>
        <div className="header_middle">
          <div className="header_search_container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header_right">
          <div className="header_right_container">
            {isLog ? (
              <>
                <Avatar className="avatar" />
                <InboxIcon />
                <EmojiEventsIcon />
                <HelpIcon />
                <AcUnitIcon />
                <ViewAgendaIcon />
              </>
            ) : (
              <>
                <button
                  className="btn btn-small btn-secondary"
                  onClick={() => navigate("/log-in")}
                >
                  Log in
                </button>
                <button
                  className="btn btn-small btn-primary"
                  onClick={() => navigate("/sign-up")}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
