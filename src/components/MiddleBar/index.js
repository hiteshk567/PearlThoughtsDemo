import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MiddleBar2 from "../MiddleBar2";
import { Grid } from "@mui/material";

const MiddleBar = ({ data }) => {
  const [apiData, setApiData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("create");

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    //make api call for that data
    const { pathname } = location || {};
    //base on pathname make api call
    const data = [];
    setApiData(data);
  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Grid container direction="row" xs={12}>
        <Grid item xs={3}>
          {data &&
            data.categories &&
            data.categories.length &&
            data.categories.map((category) => (
              <Grid item>
                <button onClick={() => handleClick(category)}>
                  {category}
                </button>
              </Grid>
            ))}
        </Grid>
        <Grid item xs={9}>
          <MiddleBar2 apiData={apiData} selectedCategory={selectedCategory} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MiddleBar;
