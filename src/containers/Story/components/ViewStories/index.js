import React from "react";
import Card from "../../../../components/Card";

const Preview = ({ stories }) => {
  return stories && stories.length
    ? stories.map((story, index) => {
        const { title, meta, content, category } = story;
        return (
          <Card height="100%" width="100%" marginBottom={10}>
            <h3>Story {index + 1}</h3>
            Title : {title.value}
            <hr />
            Category : {category.value}
            <hr />
            Meta : {meta.value}
            <hr />
            Content : {content.value}
            <hr />
          </Card>
        );
      })
    : null;
};

export default Preview;
