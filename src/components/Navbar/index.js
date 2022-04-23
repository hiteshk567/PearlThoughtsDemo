import React from "react";
import { Grid } from "@mui/material";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#008080",
        height: "40px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          Author Dashboard
        </Grid>
        <Grid item xs={6}>
          Menu
        </Grid>
        <Grid item xs={3}>
          Hitesh
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
