import React from "react";
import Card from "../Card";
import { Grid } from "@mui/material";

const MiddleBar = ({ selectedCategory }) => {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Grid container direction="column">
        <Card height="35px" width="100%" selectedCategory={selectedCategory} />
        <Card height="50px" width="100%" selectedCategory={selectedCategory} />
        <Card height="400px" width="100%" selectedCategory={selectedCategory} />
      </Grid>
    </div>
  );
};

export default MiddleBar;
