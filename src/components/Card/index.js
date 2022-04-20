import React from "react";

const Card = ({ height, width, selectedCategory }) => {
  return (
    <div style={{ height, width, backgroundColor: "white", margin: "5px" }}>
      {selectedCategory}
    </div>
  );
};

export default Card;
