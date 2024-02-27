import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/utils/formatDate";
import SaveButton from "../saveButton";

const NewsList = ({ api, limit }) => {
  const random = () => Math.random() - 0.5;
  const shuffleNews = api.sort(random).slice(0, limit);
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {shuffleNews.map((news, index) => (
        <>
          {news.urlToImage && (
            <div className="bg-slate-900 rounded-md flex flex-col  overflow-hidden image-container h-full">
              <Link key={index} href={news?.url} className="cursor-pointer">
                <Image
                  src={news?.urlToImage}
                  height={400}
                  width={400}
                  objectFit="contain"
                  className="w-full max-h-32 object-cover rounded-t-md"
                />
                <h1 className="font-bold text-sm hover:text-sky-300">
                  {news.title}
                </h1>
                <div className="flex gap-3 p-2 justify-between">
                  <div className="text-xs text-slate-400">
                    <h2>Source: {news.source.name}</h2>
                    {news?.author && <p>Writer: {news?.author}</p>}
                    <p>Published at: {formatDate(news?.publishedAt)}</p>
                  </div>
                  <SaveButton news={news} />
                </div>
              </Link>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default NewsList;
