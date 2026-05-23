import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Projects from './components/ProjectsSection/ProjectsSection';
import ProjectsPage from './pages/ProjectsPage';
import InteractiveWheel from './components/InteractiveWheel/InteractiveWheel';
import ComingSoon from './pages/ComingSoon';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import VirtualTour from './components/360View/VirtualTour';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopButton />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <WhoWeAre />
              <Projects />
              <InteractiveWheel />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <ProjectsPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <ComingSoon pageName="About Us" />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ComingSoon pageName="Contact Us" />
              <Footer />
            </>
          }
        />

        <Route
          path="/project-details"
          element={<ProjectPage />}
        />
  <Route path="/virtual-tour" element={<VirtualTour />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;