import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        <ParticleBackground />
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
