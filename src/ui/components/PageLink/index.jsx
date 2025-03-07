import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const PageLink = ({ text, href, children, customclass }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${
          customclass ? customclass : ""
        } flex body-font items-center justify-center !px-8 !py-4 rounded-full transition-all ${
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
  customclass: PropTypes.string,
};

export default PageLink;
