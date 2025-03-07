import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const PageLink = ({ text, href, children }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex body-font items-center justify-center !px-8 !py-4 rounded-full transition-all ${
          isActive ? "bg-white text-[var(--color-dark)]" : "text-white"
        }`
      }
    >
      {text ? <span>{text}</span> : children}
    </NavLink>
  );
};

PageLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLink;
