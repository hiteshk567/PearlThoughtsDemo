// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import MainContent from "../MainContent";
// import { Grid } from "@mui/material";

// const singleObject = (category) => {
//   return JSON.parse(JSON.stringify({ enteredText: "", isValid: false }));
// };

// const intitalState = (data) => {
//   let res = {};
//   data &&
//     data.categories &&
//     data.categories.sub.forEach((category, index) => {
//       res.category.title = singleObject(category);
//     });
//   return res;
// };

// const MiddleBar = ({ data }) => {
//   const [apiData, setApiData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("create");
//   const [storyData, setStoryData] = useState({});

//   const location = useLocation();
//   console.log(location);

//   useEffect(() => {
//     //make api call for that data
//     const { pathname } = location || {};
//     //base on pathname make api call
//     const data = [];
//     setApiData(data);
//     setStoryData(intitalState(data.categories));
//   }, []);

//   const handleClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <Grid container direction="row" xs={12}>
//         <Grid item xs={3}>
//           <Grid item>
//             <div onClick={() => handleClick("title")}>
//               Title, Subhead and Image
//             </div>
//             <div onClick={() => handleClick("category")}>Select Category</div>
//             <div onClick={() => handleClick("content")}>Body Content</div>
//             <div onClick={() => handleClick("preview")}>Preview</div>
//           </Grid>
//         </Grid>
//         <Grid item xs={9}>
//           <MainContent apiData={apiData} selectedCategory={selectedCategory} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default MiddleBar;
