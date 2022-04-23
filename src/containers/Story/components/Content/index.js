import React, { useState } from "react";
import Card from "../../../../components/Card";

const Content = ({ updateStoreData, content }) => {
  const [contentData, setContentData] = useState(content.value);

  const handleChange = (e) => {
    if (!e.target.value) return;
    setContentData(e.target.value);
  };

  return (
    <Card height="35px" width="100%">
      <textarea
        style={{ width: "90%" }}
        rows={20}
        placeholder="Enter body content"
        onChange={handleChange}
        onBlur={() => updateStoreData(contentData, "content")}
        value={contentData}
      />
    </Card>
  );
};

export default Content;
