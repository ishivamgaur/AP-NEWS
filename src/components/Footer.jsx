import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      brand: "Bihar News",
      description:
        "Your trusted source for breaking news, updates, and stories from around Bihar.",
      categories: "Categories",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      nav: {
        news: "News",
        business: "Business",
        sports: "Sports",
        technology: "Technology",
        home: "Home",
        entertainment: "Entertainment",
        lifestyle: "Lifestyle",
        elections: "Elections",
      },
    },
    hi: {
      brand: "बिहार न्यूज़",
      description:
        "बिहार भर से ब्रेकिंग न्यूज, अपडेट और कहानियों के लिए आपका विश्वसनीय स्रोत।",
      categories: "श्रेणियाँ",
      quickLinks: "क्विक लिंक्स",
      followUs: "हमें फॉलो करें",
      rights: "सर्वाधिकार सुरक्षित।",
      nav: {
        news: "मुख्य समाचार",
        business: "व्यापार",
        sports: "खेल",
        technology: "टेक",
        home: "होम",
        entertainment: "मनोरंजन",
        lifestyle: "जीवनशैली",
        elections: "चुनाव",
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {content[language].brand}
            </h3>
            <p className="text-gray-400 text-sm">
              {content[language].description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              {content[language].categories}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  {content[language].nav.news}
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-400 hover:text-white">
                  {content[language].nav.business}
                </Link>
              </li>
              <li>
                <Link to="/sports" className="text-gray-400 hover:text-white">
                  {content[language].nav.sports}
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="text-gray-400 hover:text-white"
                >
                  {content[language].nav.technology}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              {content[language].quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  {content[language].nav.home}
                </Link>
              </li>
              <li>
                <Link to="/bhojpuri" className="text-gray-400 hover:text-white">
                  {content[language].nav.entertainment}
                </Link>
              </li>
              <li>
                <Link
                  to="/lifestyle"
                  className="text-gray-400 hover:text-white"
                >
                  {content[language].nav.lifestyle}
                </Link>
              </li>
              <li>
                <Link
                  to="/elections"
                  className="text-gray-400 hover:text-white"
                >
                  {content[language].nav.elections}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{content[language].followUs}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {content[language].brand}.{" "}
            {content[language].rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
