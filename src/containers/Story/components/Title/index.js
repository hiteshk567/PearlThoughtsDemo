import React, { useState } from "react";
import Card from "../../../../components/Card";

const Title = ({ updateStoreData, title, meta }) => {
  const [storyData, setStoryData] = useState({
    title: title.value,
    meta: meta.value,
  });

  const handleChange = (e, key) => {
    if (!e.target.value) return;
    let temp = JSON.parse(JSON.stringify(storyData));
    temp[key] = e.target.value;
    setStoryData(temp);
  };

  return (
    <Card height="35px" width="100%">
      <div>Article Title and Meta</div>
      <hr />
      <div style={{ padding: "6px 17px" }}>
        <input
          type="text"
          placeholder="enter title"
          style={{ width: "100%", margin: "0 -17px" }}
          onChange={(e) => handleChange(e, "title")}
          onBlur={() => updateStoreData(storyData.title, "title")}
          value={storyData.title}
        />
      </div>
      <hr />
      <div style={{ padding: "6px 17px" }}>
        <textarea
          style={{ width: "100%" }}
          placeholder="enter meta"
          cols={80}
          rows={10}
          onChange={(e) => handleChange(e, "meta")}
          onBlur={() => updateStoreData(storyData.meta, "meta")}
          value={storyData.meta}
        />
      </div>
    </Card>
  );
};

export default Title;
