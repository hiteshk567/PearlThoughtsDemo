import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { getAllArticles } from "../../containers/Article/restapi";

import "./style.css";

const Sidebar = () => {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const getData = async () => {
      let data = await getAllArticles();
      setLength(data ? data.length : 0);
    };
    getData();
  }, []);

  return (
    <div
      style={{
        flex: "1 0 auto",
        width: "100%",
        backgroundColor: "#004d4d",
        height: "100vh",
        color: "white",
      }}
    >
      <Grid container>
        <Grid item>Picture</Grid>
        <Grid item style={{ marginBottom: "40px" }}>
          <p style={{ margin: 0 }}>Hitesh Kumar</p>
          <p style={{ margin: 0 }}>Total no of articles: {length}</p>
          <p style={{ margin: 0 }}>Total Published articles: 1</p>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid item style={{ margin: "10px" }}>
          <Link to={`/home/articles`} className="link">
            Articles
          </Link>
        </Grid>
        <Grid item style={{ margin: "10px" }}>
          <Link to={`/home/story`} className="link">
            Write a Story
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
