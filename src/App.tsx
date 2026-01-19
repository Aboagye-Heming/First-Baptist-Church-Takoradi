import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnimatedBackground from "./components/animatedBackground/AnimatedBackground";
import LoadingSpinner from "./components/common/LoadingSpinner";
import "../src/assets/css/index.css";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/about-us/AboutUs"));
const ActivitiesPage = lazy(() => import("./pages/ActivitiesPage"));
const MediaCenter = lazy(() => import("./pages/MediaCenter"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MinistryDetails = lazy(() => import("./pages/ministry-details/MinistryDetails"));
// New pages
const GivingPage = lazy(() => import("./pages/GivingPage"));
const PlanAVisitPage = lazy(() => import("./pages/PlanAVisitPage"));

function App() {
  return (
    <div className="App font-poppins text-gray-800">
      <AnimatedBackground />

      <Router>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/media-center" element={<MediaCenter />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/giving" element={<GivingPage />} />
              <Route path="/plan-a-visit" element={<PlanAVisitPage />} />
              <Route path="/ministry/:id" element={<MinistryDetails />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
