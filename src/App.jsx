import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import VisualStoryPage from "./pages/VisualStoryPage";
import BrandingPage from "./pages/BrandingPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import GraphicPage from "./pages/GraphicPage";
import DigitalPage from "./pages/DigitalPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/common/ScrollToTop";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/visual-story" element={<VisualStoryPage />} />
        <Route path="/services/branding" element={<BrandingPage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/graphic-design" element={<GraphicPage />} />
        <Route path="/services/digital-marketing" element={<DigitalPage />} />
        <Route path="/our-work" element={<ProjectsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
