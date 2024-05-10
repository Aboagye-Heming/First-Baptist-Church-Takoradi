import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import ActivitiesPage from "./pages/AcitivitiesPage";
import MediaCenter from "./pages/MediaCenter";
import MinistryDetails from "./pages/MinistryDetails";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/media-center" element={<MediaCenter />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/ministry/:id" element={<MinistryDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
