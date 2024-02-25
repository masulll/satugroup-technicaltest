// "use client";
import NewsList from "@/app/components/NewsList";
import { getNewsResponse, getSearchResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  // destruct params {keyword}
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  console.log(keyword);

  const searchNews = await getSearchResponse(`q=${decodeKeyword}`);

  return (
    <>
      <section>
        <NewsList api={searchNews} />
      </section>
    </>
  );
};

export default Page;
