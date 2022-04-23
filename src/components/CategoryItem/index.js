import React from "react";

const CategoryItem = ({ handleClick, category, selectedCategory, label }) => {
  return (
    <div
      style={{
        backgroundColor: selectedCategory === category ? "lightgrey" : "white",
      }}
      onClick={() => handleClick(category)}
    >
      {label}
    </div>
  );
};

export default CategoryItem;
