import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import Home from "./pages/Home";
import { useMemo } from "react";
import HighlightsBar from "./components/HighlightsBar";

function App() {
  const categories = useMemo(
    () => [
      {
        path: "/news",
        title: { en: "All News", hi: "सभी समाचार" },
        subtitle: {
          en: "Browse all stories from all categories",
          hi: "सभी श्रेणियों की सभी कहानियाँ ब्राउज़ करें",
        },
      },
      {
        path: "/business",
        title: { en: "Business", hi: "व्यापार" },
        subtitle: {
          en: "Markets, economy, and corporate news",
          hi: "बाजार, अर्थव्यवस्था और कॉर्पोरेट समाचार",
        },
        category: "BUSINESS",
      },
      {
        path: "/bhojpuri",
        title: { en: "Bhojpuri", hi: "भोजपुरी" },
        subtitle: {
          en: "Entertainment, music, and news from the Bhojpuri world",
          hi: "मनोरंजन, संगीत, और भोजपुरी दुनिया की खबरें",
        },
        category: "BHOJPURI",
      },
      {
        path: "/sports",
        title: { en: "Sports", hi: "खेल" },
        subtitle: {
          en: "Latest scores, highlights, and sports news",
          hi: "नवीनतम स्कोर, हाइलाइट्स और खेल समाचार",
        },
        category: "SPORTS",
      },
      {
        path: "/lifestyle",
        title: { en: "Lifestyle", hi: "जीवनशैली" },
        subtitle: {
          en: "Health, wellness, fashion, and living",
          hi: "स्वास्थ्य, कल्याण, फैशन और जीवन",
        },
        category: "LIFESTYLE",
      },
      {
        path: "/technology",
        title: { en: "Technology", hi: "टेक" },
        subtitle: {
          en: "Tech innovations, gadgets, and digital trends",
          hi: "तकनीकी नवाचार, गैजेट्स और डिजिटल रुझान",
        },
        category: "TECHNOLOGY",
      },
      {
        path: "/elections",
        title: { en: "Elections", hi: "चुनाव" },
        subtitle: {
          en: "Political coverage and election updates",
          hi: "राजनीतिक कवरेज और चुनाव अपडेट",
        },
        category: "ELECTIONS",
      },
    ],
    []
  );

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {categories.map(({ path, ...props }) => (
              <Route
                key={path}
                path={path}
                element={<CategoryPage {...props} />}
              />
            ))}
          </Routes>
        </main>
        <HighlightsBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
