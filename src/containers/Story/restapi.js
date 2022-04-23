const data = [];

export const createStory = (story) => {
  return new Promise((resolve, reject) => {
    data.push(story);
    resolve("success");
  });
};

export const getAllStories = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
