let data = [
  {
    id: 1,
    title: "title1",
    content:
      "Mollit incididunt ut labore aliquip laborum ullamco labore anim dolor aute mollit eu.",
  },
  {
    id: 2,
    title: "title2",
    content: "Eu culpa eiusmod dolor tempor fugiat ipsum tempor.",
  },
  {
    id: 3,
    title: "title3",
    content:
      "Lorem aute aute esse est nostrud ut reprehenderit sit aliqua laboris.",
  },
];

export const getAllArticles = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const deleteArticle = ({ id }) => {
  const articleSelected = data.find((art) => art.id === id);
  return new Promise((resolve, reject) => {
    if (articleSelected) {
      data = data.filter((article) => article.id !== id);
      resolve("success");
    }
    reject("item do not exist");
  });
};
