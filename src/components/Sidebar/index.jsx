import React from "react";
import { NavLink } from "react-router-dom";

import { Public, Stars } from "@mui/icons-material";

import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";

const listNav = [
  {
    title: "PUBLIC",
    children: [
      {
        href: "/question",
        title: "Questions",
        icon: <Public />,
      },
      {
        href: "/tags",
        title: "Tags",
        icon: <TagIcon />,
      },
      {
        href: "/users",
        title: "Users",
        icon: <PersonIcon />,
      },
      {
        href: "/companies",
        title: "Companies",
        icon: <WorkIcon />,
      },
    ],
  },

  {
    title: "COLLECTIVES",
    children: [
      {
        href: "/explore-collectives",
        title: "Explore Collectives",
        icon: <Stars />,
      },
    ],
  },

  {
    title: "TEAMS",
    children: [],
  },
];

const styleActive = {
  borderRight: "5px solid rgba(245, 162, 9)",
  backgroundColor: "#f1f2f3",
  color: "#000",
  fontWeight: 700,
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_options">
          <div className="sidebar_option">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? styleActive : undefined)}
            >
              Home
            </NavLink>
          </div>

          {listNav.map((item, index) => (
            <div className="sidebar_option" key={index}>
              <p>{item.title}</p>
              <div className="link">
                {item.children.map((itemChild, indexChild) => (
                  <div className="link_tag" key={indexChild}>
                    <NavLink
                      to={itemChild.href}
                      style={({ isActive }) =>
                        isActive ? styleActive : undefined
                      }
                    >
                      <span>{itemChild.icon}</span>
                      {itemChild.title}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
