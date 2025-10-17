import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";

const HighlightsBar = () => {
  const { language } = useLanguage();
  const highlightItems = useMemo(() => {
    return [...newsData].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, []);

  return (
    <div className="highlights-bar h-16 flex items-center group fixed bottom-0 left-0 right-0 bg-red-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-14">
        <div className="flex-shrink-0">
          <span className="font-bold bg-white text-red-800 px-3 py-1.5 text-sm rounded">
            {language === "hi" ? "हाइलाइट" : "HIGHLIGHTS"}
          </span>
        </div>
        <div className="flex-grow overflow-x-hidden whitespace-nowrap relative">
          <div className="marquee-container">
            <div className="marquee-content">
              {highlightItems.map((item, index) => (
                <Link
                  to={`/news/${item.id}`}
                  key={`first-${item.id}-${index}`}
                  className="mx-6 text-md font-bold hover:underline flex-shrink-0"
                >
                  {item.title[language]}
                </Link>
              ))}
            </div>
            <div className="marquee-content">
              {highlightItems.map((item, index) => (
                <Link
                  to={`/news/${item.id}`}
                  key={`second-${item.id}-${index}`}
                  className="mx-6 text-sm hover:underline flex-shrink-0"
                >
                  {item.title[language]}
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-red-900 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-red-900 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default HighlightsBar;
