import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <Navbar setShowAbout={setShowAbout} />
      <div className="container">
        <Hero />
        {showAbout && <AboutUs />}
      </div>
    </div>
  );
}

export default App;
