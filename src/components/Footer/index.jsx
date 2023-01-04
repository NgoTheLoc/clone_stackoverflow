import React from "react";
import { Link } from "react-router-dom";

const listNavFooterTitle = [
  {
    id: 1,
    title: "STACK OVERFLOW",
  },
  {
    id: 2,
    title: "PRODUCTS",
  },
  {
    id: 3,
    title: "COMPANY",
  },
  {
    id: 4,
    title: "STACK EXCHANGE NETWORK",
  },
];

const listNavFooterContent = [
  {
    id: 1,
    title: "Questions",
  },
  {
    id: 1,
    title: "Help",
  },

  {
    id: 2,
    title: "Teams",
  },
  {
    id: 2,
    title: "Advertising",
  },
  {
    id: 2,
    title: "Collectives",
  },
  {
    id: 2,
    title: "Talent",
  },

  {
    id: 3,
    title: "About",
  },
  {
    id: 3,
    title: "Press",
  },
  {
    id: 3,
    title: "Work Here",
  },
  {
    id: 3,
    title: "Legal",
  },
  {
    id: 3,
    title: "Privacy Policy",
  },
  {
    id: 3,
    title: "Terms of Service",
  },
  {
    id: 3,
    title: "Contact Us",
  },
  {
    id: 3,
    title: "Cookie Settings",
  },
  {
    id: 3,
    title: "Cookie Policy",
  },

  {
    id: 4,
    title: "Technology",
  },
  {
    id: 4,
    title: "Culture & recreation",
  },
  {
    id: 4,
    title: "Life & arts",
  },
  {
    id: 4,
    title: "Science",
  },
  {
    id: 4,
    title: "Professional",
  },
  {
    id: 4,
    title: "Business",
  },
  {
    id: 4,
    title: "API",
  },
  {
    id: 4,
    title: "Data",
  },
];

const listFooterSocial = [
  {
    id: 1,
    title: "Blog",
  },
  {
    id: 2,
    title: "Facebook",
  },
  {
    id: 3,
    title: "Twitter",
  },
  {
    id: 4,
    title: "Linkedin",
  },
  {
    id: 5,
    title: "Instagram",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_container_left">
          <Link to="/">
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="footer_container_middle">
          {listNavFooterTitle.map((item) => (
            <div className="footer_middle_content" key={item.id}>
              <h5>
                <Link>{item.title}</Link>
              </h5>
              {listNavFooterContent
                .filter((o) => o.id === item.id)
                .map((i) => (
                  <ul className="footer_links">
                    <li className="footer_link">
                      <Link>{i.title}</Link>
                    </li>
                  </ul>
                ))}
            </div>
          ))}
        </div>

        <div className="footer_container_right">
          <ul className="footer_social">
            {listFooterSocial.map((item) => (
              <li key={item.id}>
                <Link>{item.title}</Link>
              </li>
            ))}
          </ul>

          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2022.12.21.43127
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
