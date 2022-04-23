import React, { useState } from "react";
import Card from "../../../../components/Card";
import { NativeSelect } from "@mui/material";

const Title = ({ updateStoreData, category: initialValue }) => {
  const [category, setCategory] = useState("");
  console.log(initialValue);
  const handleChange = (e) => {
    if (!e.target.value) return;
    setCategory(e.target.value);
  };

  return (
    <Card height="35px" width="100%">
      <h4>Select Category</h4>
      <NativeSelect
        onChange={(e) => handleChange(e)}
        onBlur={() => updateStoreData(category, "category")}
        defaultValue={initialValue.value}
      >
        <option value="comedy">Comedy</option>
        <option value="tragedy">Tragedy</option>
        <option value="suspense">Suspense</option>
      </NativeSelect>
    </Card>
  );
};

export default Title;
