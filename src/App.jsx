import { useState } from "react";
import Hero from "./components/Hero";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const handleToggle = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {showAbout ? <AboutUs /> : <Hero />}
      </div>
      <button onClick={handleToggle}>Toggle About Us</button>
    </>
  );
}

export default App;
