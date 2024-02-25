export const getNewsResponse = async (limit) => {
  //   resource
  const response = await fetch(
    `${process.env.NEWS_API_BASE_URL}/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY_PUBLIC}&pageSize=${limit}`
  );

  const news = await response.json();
  return news.articles;
};

export const getSearchResponse = async (query) => {
  //   resource
  const response = await fetch(
    `${process.env.NEWS_API_BASE_URL}/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY_PUBLIC}&${query}`
  );

  const news = await response.json();
  return news.articles;
};
