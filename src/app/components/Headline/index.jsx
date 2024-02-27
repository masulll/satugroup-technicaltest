import { formatDate } from "@/app/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import SaveButton from "../saveButton";
const Headline = ({ api, limit }) => {
  const random = () => Math.random() - 0.5;
  const shuffleNews = api.sort(random).slice(0, limit);

  const handleSave = (values) => {
    sessionStorage.setItem("data", JSON.stringify(values));
  };

  return (
    <div className="flex ">
      {shuffleNews.map((news, index) => (
        <div key={index} className="flex-col">
          {news.urlToImage && (
            <div className="flex flex-col bg-slate-900 rounded-md h-full">
              <Link href={news?.url} target="blank" className="cursor-pointer ">
                <div>
                  <Image
                    src={news?.urlToImage}
                    width={1200}
                    height={1200}
                    objectFit="contain"
                    className=" rounded-t-md"
                  />
                </div>

                <h1 className="font-bold p-2 text-xl hover:text-sky-300">
                  {news.title}
                </h1>
              </Link>
              <p className="p-2">{news?.description}</p>

              <div className="flex gap-3 p-2 justify-between items-end">
                <div className="text-xs text-slate-400">
                  <h2>Source: {news.source.name}</h2>
                  {news?.author && <p>Writer: {news?.author}</p>}
                  <p>Published at: {formatDate(news?.publishedAt)}</p>
                </div>
                <SaveButton news={news} className="" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Headline;
