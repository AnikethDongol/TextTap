import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TechTrends2024 from './pages/TechTrends2024';
import MinimalistLiving from './pages/MinimalistLiving';
import HiddenTravelGems from './pages/HiddenTravelGems';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-trends-2024" element={<TechTrends2024 />} />
          <Route path="/minimalist-living" element={<MinimalistLiving />} />
          <Route path="/hidden-travel-gems" element={<HiddenTravelGems />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
