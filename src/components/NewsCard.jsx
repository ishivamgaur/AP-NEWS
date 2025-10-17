import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NewsCard = ({ news }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={news.image}
          alt={news.title[language]}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-red-700 text-white px-3 py-1 text-xs font-semibold uppercase">
          {news.category
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(" ")}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-red-700 transition-colors">
          <Link to={`/article/${news.id}`}>{news.title[language]}</Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {news.description[language]}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">{news.date}</span>
          <Link
            to={`/article/${news.id}`}
            className="text-red-700 text-sm font-semibold hover:underline"
          >
            {language === "hi" ? "और पढ़ें" : "Read More"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
