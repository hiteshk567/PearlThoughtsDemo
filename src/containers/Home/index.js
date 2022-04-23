import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Story from "../Story";
import Articles from "../Article";
import { Grid } from "@mui/material";

const data = {
  createStory: {
    categories: [
      {
        title: "Title, Subhead and Image",
        route: "/title",
        sub: [{ title: "Title" }, { title: "Subhead" }, { title: "Image" }],
      },
      {
        title: "Select Category",
        route: "/selectCategory",
        sub: [{ title: "Category" }],
      },
      {
        title: "Body Content",
        route: "/bodyContent",
        sub: [{ title: "Content" }],
      },
      { title: "Preview", route: "/preview", sub: [{ title: "Preview" }] },
    ],
  },
  articles: {
    categories: [
      { title: "Read", route: "/read" },
      { title: "Edit", route: "/edit" },
      { title: "Delete", route: "/delete" },
    ],
  },
};

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12} container direction="row">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route
              exact
              path={`story`}
              element={<Story data={data.createStory} />}
            />
            <Route
              exact
              path={`articles`}
              element={<Articles data={data.articles} />}
            />
            <Route path="*" element={<Navigate to="articles" replace />} />
          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
