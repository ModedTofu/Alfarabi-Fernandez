import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import AboutUs from './AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <AboutUs />
    </>
  )
}

export default App
