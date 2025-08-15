import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components with exact folder/file names
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components//Navbar/Hero/Hero';
import About from './Components/About/About';
import Certificate from './Components/Certificate/Certificate';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About Me />} />
        <Route path="/certificate" element={<Certificate />} />
       
      </Routes>
    </Router>
  );
}

export default App;
