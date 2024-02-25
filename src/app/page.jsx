import { getNewsResponse } from "@/app/libs/api-libs";
import NewsList from "./components/NewsList";
import Headline from "@/app/components/Headline";

const Page = async () => {
  const headlineNews = await getNewsResponse();
  const getNews = await getNewsResponse(4);
  console.log(headlineNews);
  return (
    <main className="container">
      <div className="flex flex-row gap-2 py-2">
        <Headline api={headlineNews} limit={1} className="" />

        <NewsList api={getNews} limit={4} />
      </div>
      <div className="flex flex-row gap-2 py-2">
        <NewsList api={getNews} limit={4} />
        <Headline api={headlineNews} limit={1} className="" />
      </div>
    </main>
  );
};

export default Page;
