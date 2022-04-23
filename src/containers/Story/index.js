import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { createStory, getAllStories } from "./restapi";
import MainContent from "../../components/MainContent";
import { Grid } from "@mui/material";
import Card from "../../components/Card";
import Title from "./components/Title";
import Category from "./components/Category";
import Content from "./components/Content";
import Preview from "./components/Preview";
import CategoryItem from "../../components/CategoryItem";
import ViewStories from "./components/ViewStories";

const singleObject = (category) => {
  return JSON.parse(JSON.stringify({ value: "", isValid: false }));
};

const intitalState = () => {
  let res = {
    title: singleObject(),
    meta: singleObject(),
    category: singleObject(),
    content: singleObject(),
  };
  return res;
};

const Story = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("create");
  const [storyData, setStoryData] = useState(intitalState());
  const [stories, setStories] = useState([]);

  const location = useLocation();

  useEffect(() => {
    //make api call for that data
    const { pathname } = location || {};
    //base on pathname make api call
    const data = [];
    setApiData(data);
    setStoryData(intitalState());

    const getStories = async () => {
      let data = await getAllStories();
      setStories(data);
    };
    getStories();
  }, []);

  const submitStory = async (e) => {
    try {
      let res = await createStory(storyData);
      alert(res);
      setStoryData(intitalState());
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = (updateStoreData) => {
    if (selectedCategory === "title") {
      return (
        <Title
          updateStoreData={updateStoreData}
          title={storyData.title}
          meta={storyData.meta}
        />
      );
    }
    if (selectedCategory === "category") {
      return (
        <Category
          updateStoreData={updateStoreData}
          category={storyData.category}
        />
      );
    }
    if (selectedCategory === "content") {
      return (
        <Content
          updateStoreData={updateStoreData}
          content={storyData.content}
        />
      );
    }
    if (selectedCategory === "preview") {
      return <Preview data={storyData} submitStory={submitStory} />;
    }
    if (selectedCategory === "view") {
      return <ViewStories stories={stories} />;
    }
    return null;
  };

  const updateStoreData = (val, type) => {
    if (!val || !type) return;
    let temp = JSON.parse(JSON.stringify(storyData));
    temp[type].value = val;
    temp[type].isValid = true;
    setStoryData(temp);
  };
  console.log("storyData", storyData);
  return (
    <div>
      <Grid container direction="row" xs={12}>
        <Grid item xs={3}>
          <Grid item>
            <CategoryItem
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              category="title"
              label="Title, Subhead and Image"
            />
            <CategoryItem
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              category="category"
              label="Select Category"
            />
            <CategoryItem
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              category="content"
              label="Body Content"
            />
            <CategoryItem
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              category="preview"
              label="Preview"
            />
            <CategoryItem
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              category="view"
              label="View all Stories"
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
              {renderContent(updateStoreData)}
            </Card>
          </MainContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Story;
