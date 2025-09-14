import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components with exact folder/file names
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components//Navbar/Hero/Hero';
import About from './Components/About/About';
import Certificate from './Components/Certificate/Certificate';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About Me />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
  );
}

export default App;
