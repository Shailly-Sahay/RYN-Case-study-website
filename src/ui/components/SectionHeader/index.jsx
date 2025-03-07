import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ text }) => {
  return (
    <div className="!mb-12">
      <h3 className="flex items-center gap-4">
        <span>
          <img src="/assets/svg/star.svg" className="w-[3.2rem]" />
        </span>
        <span className="text-white">{text}</span>
      </h3>
    </div>
  );
};

SectionHeader.PropTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
