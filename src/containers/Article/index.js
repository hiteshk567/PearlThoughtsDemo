import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainContent from "../../components/MainContent";
import { Grid } from "@mui/material";
import Card from "../../components/Card";
import { deleteArticle, getAllArticles } from "./restapi";
import ReadArticles from "./components/ReadArticles";
import CategoryItem from "../../components/CategoryItem";

const singleObject = (category) => {
  return JSON.parse(JSON.stringify({ enteredText: "", isValid: false }));
};

const intitalState = (data) => {
  let res = {};
  data &&
    data.categories &&
    data.categories.sub.forEach((category, index) => {
      res.category.title = singleObject(category);
    });
  return res;
};

const Articles = ({ data }) => {
  const [apiData, setApiData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("create");
  const [articleData, setarticleData] = useState({});

  const location = useLocation();
  console.log(location);

  const getData = async () => {
    const data = await getAllArticles();
    setarticleData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const deleteArticles = (id) => {
    try {
      const del = async () => {
        let res = await deleteArticle({ id: id });
        alert(`${res}`);
      };
      del();
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    if (selectedCategory === "read") {
      return (
        <ReadArticles
          deleteItem={deleteArticles}
          data={articleData}
          deleteArticles={deleteArticles}
        />
      );
    }
  };

  return (
    <div>
      <Grid container direction="row" xs={12}>
        <Grid item xs={3}>
          <Grid item>
            <CategoryItem
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              category="read"
              label="Read"
            />
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <MainContent>
            <Card
              height="100vh"
              width="100%"
              selectedCategory={selectedCategory}
              marginLeft="30px"
            >
              {renderContent()}
            </Card>
          </MainContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;
