import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const PageLink = ({ text, href, children }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center justify-center px-12 py-2 rounded-full transition-all ${
          isActive ? "bg-white text-dark" : "text-white"
        }`
      }
    >
      {text ? <span className="">{text}</span> : children}
    </NavLink>
  );
};

PageLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLink;
