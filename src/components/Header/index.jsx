import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

const listNav = [
  {
    index: 1,
    title: "About",
  },
  {
    index: 2,
    title: "Products",
  },
  {
    index: 3,
    title: "For Teams",
  },
];

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
            alt="logo"
          />

          {listNav.map((item) => (
            <NavLink to="" key={item.index}>
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="header_middle">
          <div className="header_search_container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header_right">
          <div className="header_right_container">
            <Avatar />
            <InboxIcon />
            <svg
              aria-hidden="true"
              className="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
