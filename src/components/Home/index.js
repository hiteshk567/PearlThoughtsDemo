import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import MiddleBar from "../MiddleBar";
import { Grid } from "@mui/material";

const data = {
  createStory: {
    categories: [
      "Title, Subhead and Image",
      "Select Category",
      "Body Content",
      "Preview",
    ],
  },
  articles: {
    categories: ["Read", "Edit", "Delete"],
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
              path={`create`}
              element={<MiddleBar data={data.createStory} />}
            />
            <Route
              exact
              path={`articles`}
              element={<MiddleBar data={data.articles} />}
            />
            <Route path="*" element={<Navigate to="create" replace />} />
          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
