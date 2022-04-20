import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Sidebar = () => {
  return (
    <div
      style={{
        flex: "1 0 auto",
        width: 240,
        backgroundColor: "darkgrey",
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid item>Picture</Grid>
        <Grid item>
          <p style={{ margin: 0 }}>Hitesh Kumar</p>
          <p style={{ margin: 0 }}>Total no of articles: 2</p>
          <p style={{ margin: 0 }}>Total Published articles: 1</p>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid item>
          <Link to={`/home/articles`}>Articles</Link>
        </Grid>
        <Grid item>
          <Link to={`/home/create`}>Write a Story</Link>
        </Grid>
        <Grid item>Write a Story</Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
