import React from "react";
import Card from "../../../../components/Card";

const Preview = ({ data, submitStory }) => {
  const { title, meta, content, category } = data || {};
  return (
    <Card height="100%" width="100%">
      <h3>Title</h3>
      <h4>{title.value}</h4>
      <hr />
      <h3>Category</h3>
      <h4>{category.value}</h4>
      <hr />
      <h3>Meta</h3>
      <h4>{meta.value}</h4>
      <hr />
      <h3>Content</h3>
      <h4>{content.value}</h4>
      <hr />
      <button onClick={submitStory}>SUBMIT</button>
    </Card>
  );
};

export default Preview;
