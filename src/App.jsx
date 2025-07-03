import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import HomePage from './pages/HomePage';
import CrisisCommunications from './pages/CrisisCommunications';
import PIOCommunityNetwork from './pages/PIOCommunityNetwork';
import StrategicConsulting from './pages/StrategicConsulting';
import ProfessionalTraining from './pages/ProfessionalTraining';
import MediaRelations from './pages/MediaRelations';
import MessageDevelopment from './pages/MessageDevelopment';
import BookDemo from './pages/BookDemo';
import ContactUs from './pages/ContactUs';
import './App.css';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  useEffect(() => {
    // Initialize AOS only if it's available
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-dark-background text-light-text font-secondary">
        <ScrollToTop />
        <Header />
        <FloatingElements />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crisis-communications" element={<CrisisCommunications />} />
            <Route path="/pio-community" element={<PIOCommunityNetwork />} />
            <Route path="/strategic-consulting" element={<StrategicConsulting />} />
            <Route path="/professional-training" element={<ProfessionalTraining />} />
            <Route path="/media-relations" element={<MediaRelations />} />
            <Route path="/message-development" element={<MessageDevelopment />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;