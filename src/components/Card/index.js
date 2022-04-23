import React from "react";

const Card = ({
  height,
  width,
  children,
  marginLeft,
  marginTop,
  marginBottom,
}) => {
  return (
    <div
      style={{
        height,
        width,
        backgroundColor: "white",
        marginLeft,
        marginTop: "20px",
        padding: 0,
        marginBottom,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
