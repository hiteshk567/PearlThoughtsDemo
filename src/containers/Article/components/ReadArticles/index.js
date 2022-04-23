import React from "react";
import { Grid } from "@mui/material";
import Card from "../../../../components/Card";

const ReadArticles = ({ data, deleteItem }) => {
  return (
    <Grid container>
      {data &&
        data.length &&
        data.map((article) => {
          return (
            <Card key={article.id} width="100%">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <button onClick={() => deleteItem(article.id)}>DEL</button>
            </Card>
          );
        })}
    </Grid>
  );
};

export default ReadArticles;
