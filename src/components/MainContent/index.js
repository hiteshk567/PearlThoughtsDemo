import React from "react";
import Card from "../Card";
import { Grid } from "@mui/material";

const MainContent = ({ children }) => {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Grid container direction="column">
        {children}
      </Grid>
    </div>
  );
};

export default MainContent;
