import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navLinks = useMemo(
    () => [
      { name: { en: "HOME", hi: "होम" }, path: "/" },
      { name: { en: "NEWS", hi: "मुख्य समाचार" }, path: "/news" },
      { name: { en: "BHOJPURI", hi: "भोजपुरी" }, path: "/bhojpuri" },
      { name: { en: "BUSINESS", hi: "व्यापार" }, path: "/business" },
      { name: { en: "SPORTS", hi: "खेल" }, path: "/sports" },
      { name: { en: "LIFESTYLE", hi: "जीवनशैली" }, path: "/lifestyle" },
      { name: { en: "TECHNOLOGY", hi: "टेक" }, path: "/technology" },
      { name: { en: "ELECTIONS", hi: "चुनाव" }, path: "/elections" },
    ],
    []
  );

  return (
    <nav className="bg-white/80 backdrop-blur-2xl shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            {language === "hi" ? (
              <div className="bg-transparent py-1 rounded flex items-center gap-2">
                <span className="text-red-700 font-bold text-2xl">AP</span>
                <span className="bg-red-700 text-white px-3 py-1 text-lg rounded">
                  न्यूज़
                </span>
              </div>
            ) : (
              <div className="bg-transparent py-1 rounded flex items-center gap-2">
                <span className="text-red-700 font-bold text-2xl">AP</span>
                <span className="bg-red-700 text-white px-3 py-1 text-lg rounded">
                  NEWS
                </span>
              </div>
            )}
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-gray-950 font-semibold text-sm transition-colors duration-200"
              >
                {link.name[language]}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleLanguage}
            >
              <span
                className={`px-2 py-1 text-sm font-semibold rounded-l-md ${
                  language === "en"
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                EN
              </span>
              <span
                className={`px-2 py-1 text-sm font-semibold rounded-r-md ${
                  language === "hi"
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                HI
              </span>
            </div>
            <button className="text-gray-700 hover:text-gray-950">
              <FaSearch size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleLanguage}
            >
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-l-md ${
                  language === "en"
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                EN
              </span>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-r-md ${
                  language === "hi"
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                HI
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-red-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 text-white hover:bg-red-900 rounded-md font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name[language]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
