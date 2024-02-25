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
    <div className="flex h-full">
      {shuffleNews.map((news, index) => (
        <div key={index} className="flex-1 ">
          {news.urlToImage && (
            <div className="bg-slate-500 p-3 rounded-lg flex flex-col relative overflow-hidden image-container h-full">
              <Link href={news?.url} target="blank" className="cursor-pointer ">
                <Image
                  src={news?.urlToImage}
                  layout="responsive"
                  width={1000}
                  height={1200}
                  objectFit="cover"
                  className="  max-w-full max-h-full object-fill"
                />
                <div className="relative">
                  <h1 className="font-bold">{news.title}</h1>
                  <p>{news?.description}</p>
                  <p>Penulis: {news?.author}</p>
                  <h2>Sumber:{news.source.name}</h2>
                  <p>Dipublikasikan pada: {formatDate(news?.publishedAt)}</p>
                </div>
              </Link>
              <SaveButton news={news} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Headline;
