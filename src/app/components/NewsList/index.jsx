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
            <div className="bg-slate-500 p-3 rounded-lg flex flex-col relative overflow-hidden image-container h-full">
              <Link key={index} href={news?.url} className="cursor-pointer">
                <Image
                  src={news?.urlToImage}
                  height={300}
                  width={300}
                  className="w-full max-h-32 object-cover rounded-lg"
                />
                <h1 className="font-bold w-90">{news.title}</h1>
                <p>Penulis: {news?.author}</p>
                <h2>Sumber:{news.source.name}</h2>
                <p>Dipublikasikan pada: {formatDate(news?.publishedAt)}</p>
              </Link>
              <SaveButton news={news} />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default NewsList;
