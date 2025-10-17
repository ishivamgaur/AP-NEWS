import { useState, useMemo } from "react";
import FeaturedNews from "../components/FeaturedNews";
import NewsCard from "../components/NewsCard";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import { newsData } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";
import Pagination from "../components/Pagination";
import HighlightsBar from "../components/HighlightsBar";
import SocialSections from "../components/SocialSections";

const Home = () => {
  const { language } = useLanguage();
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const featuredNews = useMemo(() => newsData[0], []);
  const allOtherNews = useMemo(() => newsData.slice(1), []);
  const videoNews = useMemo(
    () => newsData.filter((item) => item.youtubeVideoId).slice(0, 4),
    []
  );

  // Pagination logic
  const totalPages = Math.ceil(allOtherNews.length / articlesPerPage);
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return allOtherNews.slice(startIndex, startIndex + articlesPerPage);
  }, [currentPage, allOtherNews]);

  const handlePlayVideo = (videoId) => {
    setPlayingVideoId(videoId);
  };
  const handleCloseModal = () => {
    setPlayingVideoId(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured News Section */}
        <div className="mb-12">
          <FeaturedNews news={featuredNews} />
        </div>

        {/* Video News Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 mb-6">
            {language === "hi" ? "वीडियो समाचार" : "Video News"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoNews.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        </div>

        {/* Latest News Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 mb-6">
            {language === "hi" ? "ताज़ा खबरें" : "Latest News"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArticles.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        {/* Social Sections */}
        <SocialSections />
      </div>

      <VideoModal videoId={playingVideoId} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
