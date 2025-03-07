import React from "react";
import PropTypes from "prop-types";

const Tag = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags?.map((tag, index) => (
        <div
          key={index}
          className="border border-white !px-8 !py-3 rounded-full"
        >
          <span className="small-font uppercase"> {tag}</span>
        </div>
      ))}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
